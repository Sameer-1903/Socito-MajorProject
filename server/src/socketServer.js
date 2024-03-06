const { Socket } = require("socket.io");
let users = [];
const EditData = (data, id, caller) => {
  const newData = data.map((item) =>
    item.id === id && !item.caller ? { ...item, caller: caller } : item
  );
  return newData;
};
const EditData1 = (data, id) => {
  const newData = data.map((item) =>
    item.id === id && item.caller ? { ...item, caller: "" } : item
  );
  return newData;
};

const SocketServer = (socket) => {
  // Connect
  socket.on("joinUser", (data) => {
    if (data[0]) {
      const userIndex = users.findIndex((item) => item.id === data[0].auth);
      if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], socketId: socket.id };
      } else {
        users.push({
          id: data[0].auth,
          socketId: socket.id,
          online: data.map((obj) => obj._id),
        });
      }
    }
  });
  // Disconnect
  socket.on("disconnect", () => {
    const data = users.find((user) => user.socketId === socket.id);
    if (data !== undefined) {
      const checkUserOnline = users.filter((user) =>
        data.online.filter((item) => item === user.id)
      );

      checkUserOnline.forEach((client) => {
        socket
          .to(`${client.socketId}`)
          .emit("CheckUserOfflineToClient", data.id);
      });

      if (data.caller) {
        const callUser = users.find((user) => user.id === data.caller);
        users = EditData1(users, data.id);

        if (callUser) {
          users = EditData1(users, callUser.id);
          socket.to(`${callUser.socketId}`).emit("callerDisconnect");
        }
      }
    }

    users = users.filter((user) => user.socketId !== socket.id);
  });