#!/usr/bin/env node

import ripemd160 from '../index.js'

const shaResult = process.argv[2] || 'aa'

const hex = ripemd160(shaResult)

console.log(hex)
