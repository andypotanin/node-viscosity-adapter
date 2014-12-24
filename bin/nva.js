#!/usr/bin/env node
require( 'colors' );
var SerialPort = require("serialport" );
var commandMap = require( "../static/command-map" )

var serialPort = new SerialPort.SerialPort("/dev/cu.usbmodemV1.01", {
  baudrate: 9600,
  databits:8,
  stopbits: 2,
  parity: 'none',
  buffersize: 2048
}, true );

serialPort.on( 'open', onOpen );
serialPort.on( 'close', onClose );
serialPort.on( 'error', onError );
serialPort.on( 'data', onData );

function onOpen(error) {

  if ( error ) {
    return console.log( 'Failed to open', error );
  }

  //serialPort.write( "I01B0\033[0G", console.log );
  //serialPort.write( "I01B0\r", console.log );

  sendCommand( commandMap.identify );
  //sendCommand( commandMap.identify );
  //sendCommand( commandMap.identify );
  //sendCommand( commandMap.identify );

  setInterval( function() {

    sendCommand( commandMap.zero );

  }, 15000 );

   //sendCommand( commandMap.tech );
  // sendCommand( commandMap.spin3 );
  // sendCommand( commandMap.spinStart );
  // sendCommand( commandMap.spinFast );


}

function onData(data) {
  //console.log('data received: ', data );
  console.log('dataCallback'.cyan, ( data.toString( )).replace( '\n', '' ) );
}

function onClose( ) {
  console.log( 'closed' );
}

function onError( error ) {
  console.log( 'error', error );
}

function sendCommand( command ) {

  var _parsedCommand = [ command.command, command.crc, "\r" ].join( '' );

  //console.log( 'asdf', command );
  serialPort.write( _parsedCommand, function( error, something ) {
    console.log( 'sendCommand'.red, command.name, _parsedCommand.replace( '\r', '' ), error ? error : '' );

    serialPort.drain(function() {
      //console.log( 'drained'.green, command.name, _parsedCommand.replace( '\r', '' ), error ? 'error!' : '');
    });

  });

}
