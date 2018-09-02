function getManuallyCreatedRooms (namespace) {
  if (!namespace) throw new Error('The namespace argument is not set or not valid.')
  var userCreatedRooms = []
  var allRooms = namespace.sockets.adapter.rooms
  var sids = namespace.sockets.adapter.sids
  Object.keys(allRooms).forEach((elem) => {
    if (!sids.hasOwnProperty(elem)) {
      userCreatedRooms.push({ roomName: elem, data: allRooms[elem] })
    }
  })
  return userCreatedRooms
}
module.exports = getManuallyCreatedRooms