# CRCON JavaScript API Module

This repository contains a JavaScript module for interacting with the Hell Let Loose Community RCON tool (CRCON) API. The module provides a comprehensive and fully functional interface for all CRCON API endpoints, enabling developers to build their own web interfaces, bots, and other applications using technologies such as NodeJS.

## Features

- **Comprehensive API Coverage:** All endpoints of the CRCON API are included, allowing for full interaction with the Hell Let Loose server.
- **Easy Integration:** Designed to be easily integrated into your JavaScript projects, making it simple to build web interfaces, bots, and other applications.
- **Promise-Based:** Utilizes JavaScript promises for asynchronous operations, ensuring a smooth and efficient user experience.
- **Token Authentication:** Supports bearer token authentication for secure API calls.

## Getting Started

### Installation

To install the module, clone this repository and install the necessary dependencies:

```bash
git clone https://github.com/your-username/crcon-js-module.git
cd crcon-js-module
npm install
```

# Usage

First, import the API class and initialize it with your CRCON API base URL:

```js
const API = require('./path-to-api-class'); // Adjust the path as necessary

const config = {
  token: 'your-api-token-here'
};

const api = new API('https://your-api-url.com', config);
```

## Example

```js
// Assuming the API class has been properly imported and initialized

const api = new API('https://your-api-url.com');

// Example: Get the list of all players
api.getPlayers()
  .then(data => {
    console.log('List of players:', data);
  })
  .catch(error => {
    console.error('Error fetching players:', error);
  });
```

# Contributing

We welcome contributions to improve this module. If you find any issues or have suggestions for new features, please open an issue or submit a pull request.

# License

This project is licensed under the MIT License. See the LICENSE file for details.

# Acknowledgements

This module is a JavaScript port of the Hell Let Loose Community RCON tool (CRCON) API. Special thanks to the Hell Let Loose community for their continued support and development of CRCON.

# Documentation

Read the [API Documentation](https://github.com/Sbosvk/crcon.js/wiki/API-Documentation)