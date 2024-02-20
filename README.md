<div align="center">  
  <h1>ripemd</h1>
</div>

<div align="center">  
<i>ripemd</i>
</div>

---

<div align="center">
<h4>Documentation</h4>
</div>

---

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/brain-wallet/ripemd/blob/gh-pages/LICENSE)
[![npm](https://img.shields.io/npm/v/ripemd)](https://npmjs.com/package/ripemd)
[![npm](https://img.shields.io/npm/dw/ripemd.svg)](https://npmjs.com/package/ripemd)
[![Github Stars](https://img.shields.io/github/stars/brain-wallet/ripemd.svg)](https://github.com/brain-wallet/ripemd/)

# RIPEMD Hex Converter

This simple yet powerful Node.js module takes a hex string as input and returns a RIPEMD-160 hash string. This utility is perfect for those who need quick and reliable hashing for cryptographic applications or for integrating RIPEMD-160 into their workflows.

## Features

- Easy to use CLI for hashing strings directly from the terminal.
- Fast conversion to RIPEMD-160 hash.
- Safe and reliable with modern JavaScript practices.

## Installation

To use the ripemd Hex Converter, make sure you have [Node.js](https://nodejs.org/) installed. Then, you can install the package using npm:

```bash
npm install ripemd --global
```

## Usage

After installation, the script can be run directly from the command line:

```bash
ripemd <your_hex_string>
```

Replace `<your_hex_string>` with the actual hex string you want to hash.

### Example

```bash
ripemd aaff00
```

This command will output the RIPEMD-160 hash of the hex string `aaff00`.

### As a Module

You can also use this package as a module in your Node.js applications:

```javascript
import ripemd from 'ripemd'

const inputHex = 'aabbcc'
const outputHash = ripemd(inputHex)

console.log(outputHash) // Logs the RIPEMD-160 hash of 'aabbcc'
```

## API Reference

### `ripemd(hexString)`

Converts a hex string to its RIPEMD-160 hash equivalent.

**Parameters:**

- `hexString` - A string representing hexadecimal values to be hashed.

**Returns:**

- A string representing the RIPEMD-160 hash of the input.

## Contributing

We welcome contributions to the RIPEMD-160 Hex Converter. Please feel free to submit issues, fork the repository and send pull requests!

## License

- MIT
