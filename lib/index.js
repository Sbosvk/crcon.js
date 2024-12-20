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
            const data = await response.json();
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            if (data.failed) {
                throw new Error(data.error);
            }
            if (debug) {
                return data;
            }
            return data.result;
        } catch (error) {
            throw error;
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
