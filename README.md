# CRCON JavaScript API Module

This repository contains a JavaScript module for interacting with the Hell Let Loose Community RCON tool (CRCON) API. The module provides a comprehensive and fully functional interface for all CRCON API endpoints, enabling developers to build their own web interfaces, bots, and other applications using NodeJS.

## What's New in Version 2.0

- **Debug Option**: Added a `debug` flag to the `request` method, allowing users to retrieve the full API response (including metadata) instead of just the `result` field.
- **HTTP Method Selection**: Explicitly specify HTTP methods (e.g., `GET`, `POST`) when necessary for endpoints that support multiple methods.
- **Improved Error Handling**: Handles inconsistent API responses gracefully, including fallback parsing for plain text responses.
- **Compatibility**: Fully compatible with CRCON API v11.
- **Extensive Testing**: Most endpoints have been thoroughly tested to ensure reliability and accuracy.

---

## Features

- **Comprehensive API Coverage**: All endpoints of the CRCON API are included, allowing for full interaction with the Hell Let Loose server.
- **Promise-Based**: Utilizes JavaScript promises for asynchronous operations, ensuring a smooth and efficient user experience.
- **Token Authentication**: Supports bearer token authentication for secure API calls.
- **Fallback Handling**: Gracefully handles inconsistent API responses, including plain text and malformed responses.

---

## Getting Started

### Installation

To install the module, clone this repository and install the necessary dependencies:

```bash
git clone https://github.com/your-username/crcon-js-module.git
cd crcon-js-module
npm install
```

Alternatively, you can add it to your NodeJS project using npm:

```bash
npm install --save crcon.js
```

---

## Usage

First, import the API class and initialize it with your CRCON API base URL:

```js
const API = require('crcon.js');

const config = {
  token: 'your-api-token-here'
};

const api = new API('https://your-crcon-url.com/api/', config);
```

### Example: Basic Usage

#### Fetching Players
```js
api.get_players()
  .then(data => {
    console.log('List of players:', data);
  })
  .catch(error => {
    console.error('Error fetching players:', error);
  });
```

#### Fetching Historical Logs with Debug Mode
```js
api.get_historical_logs({
  player_id: '12345',
  limit: 50
}, "GET", true) // Enable debug mode
  .then(response => {
    console.log('Full response:', response);
  })
  .catch(error => {
    console.error('Error fetching historical logs:', error);
  });
```

#### Using POST for Endpoints with Multiple HTTP Methods
```js
api.add_blacklist_record({
  player_id: '67890',
  blacklist_id: 123,
  reason: 'Breaking rules'
}, "POST")
  .then(result => {
    console.log('Blacklist record added:', result);
  })
  .catch(error => {
    console.error('Error adding blacklist record:', error);
  });
```

---

## Error Handling

### HTTP Errors
If the API returns an HTTP error (e.g., `400 Bad Request`), the module throws an error with details including the status code and response message:

```bash
Error: HTTP error! status: 400 (Bad Request)
```

### API Errors
If the API response includes `failed: true`, the error message from the API is included in the thrown error:

```bash
Error: No blacklist found with ID 123
```

### Debug Mode
When `debug` is enabled, the full API response is returned:

```js
{
  "result": null,
  "command": "add_blacklist_record",
  "arguments": {
    "player_id": "12345",
    "blacklist_id": 123,
    "reason": "Testing"
  },
  "failed": true,
  "error": "No blacklist found with ID 123",
  "version": "v11.0.0"
}
```

---

## CRCON v11 API Endpoints

The module now includes full support for all CRCON API v11 endpoints. This includes, but is not limited to:

- **Admin Management**: Endpoints for managing admins, roles, and pings.
- **Logs**: Comprehensive access to logs and historical data.
- **Auto Moderation**: Configurations and settings related to auto moderation and broadcasts.
- **Kicks, Bans & Blacklists**: Full support for managing kicks, bans and blacklists.
- **Player Management**: Extensive endpoints for player information, management, and actions.
- **Messaging**: Endpoints for managing messages to players.
- **VIP Management**: Tools for managing VIPs, including adding, removing, and configuration handling.
- **Map Management**: Tools for managing maps, including adding, removing, and configuration handling.
- **Server Settings & Status**: Tools for managing server settings and status.
- **Game Settings & Status**: Tools for managing game settings and status.

For a complete list of supported endpoints and their usage, please refer to the [API Documentation](https://github.com/Sbosvk/crcon.js/wiki/API-Documentation).

---

## Contributing

We welcome contributions to improve this module. If you find any issues or have suggestions for new features, please open an issue or submit a pull request.

---

## Donations

If you find this library useful and would like to support its development, please consider donating to the addresses listed on my profile:

- **DigiByte**: [D7hrf5D21PV24ksEGRdYCZ6JqgsboSVKKC](dgb://D7hrf5D21PV24ksEGRdYCZ6JqgsboSVKKC)
- **Bitcoin**: [1NxXfPuDAAQrWxgrv7fJYSBoSVKbs77tBT](btc://1NxXfPuDAAQrWxgrv7fJYSBoSVKbs77tBT)
- **Litecoin**: [LWDMRGzCTr1EsXapgFSBosvkJ27op9P2DW](ltc://LWDMRGzCTr1EsXapgFSBosvkJ27op9P2DW)

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgements

This module is a JavaScript port of the Hell Let Loose Community RCON tool (CRCON) API. Special thanks to the Hell Let Loose community for their continued support and development of CRCON.

---

