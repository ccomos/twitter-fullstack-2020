const moment = require('moment')

function ensureAuthenticated(req) {
  return req.isAuthenticated();
}

function getUser(req) {
  return req.user;
}

module.exports = {
  ensureAuthenticated,
  getUser,

  ifCond: function (a, b, options) {
    if (a === b) {
      return options.fn(this)
    }
    return options.inverse(this)
  },

  ifNotCond: function (a, b, options) {
    if (a !== b) {
      return options.fn(this)
    }
    return options.inverse(this)
  },

  moment: function (a) {
    return moment(a).fromNow()
  },

  changeTime: function (a) {
    moment.locale('zh-tw')
    return moment(a).format('ll')
  }
};