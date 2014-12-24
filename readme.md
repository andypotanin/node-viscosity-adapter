Interface with DVT device.

### Used Codes
All codes are encoded in HEX. 

* Torque Model.
* Version - Firmware version of device being identified. e.g. "010107"
* Series - e.g. "DV3T"
* Record Number - 
* Torque - 
* Temperature
* RPM - 
* Status Packet - returned in response to every command, essentially error codes.

### List Serial Ports on Mac
```
ls /dev/cu.*
```

```
{ 
  comName: '/dev/cu.usbmodemV1.01',
  manufacturer: 'Brookfield',
  serialNumber: 'V1.00',
  pnpId: '',
  locationId: '0x14100000',
  vendorId: '0x2813',
  productId: '0x0001' 
}
```


### Resources

* https://github.com/voodootikigod/node-serialport
* https://www.npmjs.com/package/crc-itu
* https://github.com/alexgorbatchev/node-crc
* devicestack
