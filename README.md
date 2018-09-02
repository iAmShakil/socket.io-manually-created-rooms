Takes the reference of a  namespace as an argument and returns an array of objects containing information about the rooms created manually.
```
const getManuallyCreatedRooms = require('socket.io-manually-created-rooms')

// io provides the reference to the namespace
var manuallyCreatedRooms = getManuallyCreatedRooms(io)
```
