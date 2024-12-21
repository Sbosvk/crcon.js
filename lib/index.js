class API {
    constructor(baseURL, config = {}) {
        this.baseURL = baseURL;
        this.token = config.token || null;
    }

    async request(endpoint, method, args = {}, debug = false) {
        let url = `${this.baseURL}/${endpoint}`;
        const options = {
            method,
            headers: {
                Authorization: `Bearer ${this.token}`,
                "Content-Type": "application/json",
            },
        };

        if (args && method === "GET") {
            const queryParams = new URLSearchParams(args).toString();
            url += queryParams ? `?${queryParams}` : "";
        }

        if (args && method === "POST") {
            options.body = JSON.stringify(args);
        }

        try {
            const response = await fetch(url, options);

            // Attempt parsing
            let data;
            try {
                data = await response.json(); // Attempt JSON parsing
            } catch (jsonError){
                try {
                    data = await response.text(); // Fallback to plain text
                } catch (textError) {
                    throw new Error(
                        `Failed to parse response body: HTTP status ${response.status} (${response.statusText || "Unknown error"})`
                    );
                }
            }

            //Handle HTTP errors
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            /// Handle API errors
            if (data && data.failed) {
                throw new Error(data.error || "API request failed.");
            }

            // Return the appropriate result
            return debug ? data : data.result;
        } catch (error) {
            throw error; // Re-throw the error for handling by the caller
        }
    }
}

// Import the endpoints array
const endpoints = require('./endpoints');

// Dynamically add functions to the API class
endpoints.forEach(({ endpoint, methods, allowed_args }) => {
    API.prototype[endpoint] = async function (args = {}, method = null) {
        // Check if kwargs is allowed
        const allowsKwargs = allowed_args.includes("kwargs");

        // Validate arguments
        if (!allowsKwargs) {
            const invalidArgs = Object.keys(args).filter(arg => !allowed_args.includes(arg));
            if (invalidArgs.length > 0) {
                throw new Error(`Invalid arguments for ${endpoint}: ${invalidArgs.join(", ")}`);
            }
        }

        // Determine the HTTP method
        const selectedMethod = method || (methods.includes("GET") ? "GET" : methods[0]);
        if (!methods.includes(selectedMethod)) {
            throw new Error(`Method ${selectedMethod} not allowed for ${endpoint}`);
        }

        return this.request(endpoint, selectedMethod, args);
    };
});

module.exports = API;
