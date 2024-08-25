# CRCON JavaScript API Module

This repository contains a JavaScript module for interacting with the Hell Let Loose Community RCON tool (CRCON) API. The module provides a comprehensive and fully functional interface for all CRCON API endpoints, enabling developers to build their own web interfaces, bots, and other applications using technologies such as NodeJS.

## Features

- **Comprehensive API Coverage:** All endpoints of the CRCON API are included, allowing for full interaction with the Hell Let Loose server.
- **Easy Integration:** Designed to be easily integrated into your JavaScript projects, making it simple to build web interfaces, bots, and other applications.
- **Promise-Based:** Utilizes JavaScript promises for asynchronous operations, ensuring a smooth and efficient user experience.
- **Token Authentication:** Supports bearer token authentication for secure API calls.
- **CRCON v10 Compatibility:** Fully compatible with the latest CRCON v10 API, including all new and updated endpoints.

## Important Notice

This library is mostly untested and is written based on the information provided by the CRCON API `get_api_documentation` endpoint. Users are encouraged to test the library thoroughly in their own environments and report any issues they encounter.

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

### Usage

First, import the API class and initialize it with your CRCON API base URL:

```js
const API = require('crcon.js');

const config = {
  token: 'your-api-token-here'
};

const api = new API('https://your-crcon-url.com/api/', config);
```

#### Example

```js
// Assuming the API class has been properly imported and initialized

const api = new API('https://your-crcon-url.com/api/');

// Example: Get the list of all players
api.get_players()
  .then(data => {
    console.log('List of players:', data);
  })
  .catch(error => {
    console.error('Error fetching players:', error);
  });
```

## CRCON v10 API Endpoints

The module now includes full support for all CRCON v10 API endpoints. This includes, but is not limited to:

- **Admin Management**: Endpoints for managing admins, roles, and pings.
- **Audit Logs**: Comprehensive access to audit logs and historical data.
- **Auto Moderation**: Configurations and settings related to auto moderation and broadcasts.
- **Bans & Blacklists**: Full support for managing bans and blacklists.
- **Player Management**: Extensive endpoints for player information, management, and actions.
- **VIP Management**: Tools for managing VIPs, including adding, removing, and configuration handling.
- **Server Settings**: Access and modify various server settings.
- **Miscellaneous**: Includes various utility endpoints like cache clearing, game server reconnecting, and more.

For a complete list of supported endpoints and their usage, please refer to the [API Documentation](https://github.com/Sbosvk/crcon.js/wiki/API-Documentation).

## Contributing

We welcome contributions to improve this module. If you find any issues or have suggestions for new features, please open an issue or submit a pull request.

## Donations

**If you find this library useful and would like to support its development, please consider donating to the addresses listed on my profile**:

- **DigiByte**: [D7hrf5D21PV24ksEGRdYCZ6JqgsboSVKKC](dgb://D7hrf5D21PV24ksEGRdYCZ6JqgsboSVKKC)
- **Bitcoin**: [1NxXfPuDAAQrWxgrv7fJYSBoSVKbs77tBT](btc://1NxXfPuDAAQrWxgrv7fJYSBoSVKbs77tBT)
- **Litecoin**: [LWDMRGzCTr1EsXapgFSBosvkJ27op9P2DW](ltc://LWDMRGzCTr1EsXapgFSBosvkJ27op9P2DW)


## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

This module is a JavaScript port of the Hell Let Loose Community RCON tool (CRCON) API. Special thanks to the Hell Let Loose community for their continued support and development of CRCON.

## Documentation

Read the [API Documentation](https://github.com/Sbosvk/crcon.js/wiki/API-Documentation)