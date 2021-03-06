const db = require('../models')
const Message = db.Message
const User = db.User

const SocketHander = {
  getMessages: () => {
    return new Promise((resolve, reject) => {
      Message.findAll({
        include: [User],
        order: [
          ['createdAt', 'ASC']
        ]
      })
        .then((messages) => {
          //console.log('messages===>',messages)
          messages = messages.map(message => ({
            ...message.dataValues,
            User: message.User.dataValues
          }))
          //console.log('getMessages =>', messages)
          return resolve(messages)
        })
    })
  },

  storeMessages: (data) => {
    //console.log('storeMessages====>',data);
    return Message.create({
      UserId: data.userId,
      message: data.msg,
    })
  },

}

module.exports = SocketHander