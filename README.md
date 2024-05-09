# es6-map-json

[![npm version](https://badge.fury.io/js/es6-map-json.svg)](https://badge.fury.io/js/es6-map-json)

A package that combines the ES6 Map data structure with JSON file read/write functionality.

## Installation

You can install the `es6-map-json` package via npm:

```bash
npm install es6-map-json
```

## Usage

To use the `JsonMap` class provided by `es6-map-json`, import it into your project and create a new instance:

```javascript
const JsonMap = require('es6-map-json');

// Create a new instance of JsonMap with a file path
const myMap = new JsonMap('data.json', null, 2, process.cwd());

// Use it like a regular Map
myMap.set('key', 'value');
console.log(myMap.get('key')); // Output: 'value'

// Changes are automatically saved to the JSON file
```

## Features

- Extends the ES6 `Map` data structure.
- Automatically reads data from a JSON file upon instantiation.
- Automatically saves data to a JSON file after every modification.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## Author

This package is created and maintained by [Liane Cagara](https://github.com/lianecagara).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
