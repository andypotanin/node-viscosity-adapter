#!/usr/bin/env node

var crc = require('crc');
var crc16 = require('crc-itu').crc16;


console.log( crc16('AA', 'hex' ).toString(8) );

console.log( crc.crc1('a').toString() );
console.log( crc.crc1('a').toString(8) );
console.log( crc.crc8('a').toString() );
console.log( crc.crc16('a').toString() );
console.log( crc.crc81wire('a').toString() );
console.log( crc.crc16ccitt('a').toString() );
console.log( crc.crc16modbus('a').toString() );
console.log( crc.crc24('a').toString() );
console.log( crc.crc32('a').toString() );

