"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var axios = require("axios");

var castmeApi = {
  url: "NO-URL",

  /**
   *
   *
   * @param {string} email
   * @param {string} password
   * @param {object} personalData
   * @param {object} physicalData
   * @param {object} professionalData
   * @param {string} videobookLink
   * @param {string} profilePicture
   *
   * @returns {Promise<boolean>}
   */
  registerUser: function registerUser(email, password, personalData, physicalData, professionalData, videobookLink, profilePicture) {
    var _this = this;

    return Promise.resolve().then(function () {
      if (typeof email !== "string") throw Error("user email is not a string");

      if (!(email = email.trim()).length) throw Error("user email is empty or blank");

      if (typeof password !== "string") throw Error("user password is not a string");

      if ((password = password.trim()).length === 0) throw Error("user password is empty or blank");

      if ((typeof personalData === "undefined" ? "undefined" : _typeof(personalData)) !== "object") throw Error("personal data is not what it should be");

      if ((typeof professionalData === "undefined" ? "undefined" : _typeof(professionalData)) !== "object") throw Error("professional data is not what it should be");

      if ((typeof physicalData === "undefined" ? "undefined" : _typeof(physicalData)) !== "object") throw Error("physical data is not what it should be");

      if (typeof videobookLink !== "string") throw Error("user videobookLink is not a string");

      // if ((videobookLink = videobookLink.trim()).length === 0)
      //   throw Error("user videobookLink is empty or blank");


      return axios.post(_this.url + "/users", {
        email: email,
        password: password,
        personalData: personalData,
        physicalData: physicalData,
        professionalData: professionalData,
        videobookLink: videobookLink,
        profilePicture: profilePicture
      }).then(function (_ref) {
        var status = _ref.status,
            data = _ref.data;

        if (status !== 201 || data.status !== "OK") throw Error("unexpected response status " + status + " (" + data.status + ")");

        return true;
      }).catch(function (err) {
        if (err.code === "ECONNREFUSED") throw Error("could not reach server");

        if (err.response) {
          var message = err.response.data.error;


          throw Error(message);
        } else throw err;
      });
    });
  },


  /**
   *
   * @param {string} email
   * @param {string} password
   *
   * @returns {Promise<string>}
   */
  authenticateUser: function authenticateUser(email, password) {
    var _this2 = this;

    return Promise.resolve().then(function () {
      if (typeof email !== "string") throw Error("user email is not a string");

      if (!(email = email.trim()).length) throw Error("user email is empty or blank");

      if (typeof password !== "string") throw Error("user password is not a string");

      if ((password = password.trim()).length === 0) throw Error("user password is empty or blank");

      return axios.post(_this2.url + "/auth", { email: email, password: password }).then(function (_ref2) {
        var status = _ref2.status,
            data = _ref2.data;

        if (status !== 200 || data.status !== "OK") throw Error("unexpected response status " + status + " (" + data.status + ")");

        return data.data;
      }).catch(function (err) {
        if (err.code === "ECONNREFUSED") throw Error("could not reach server");

        if (err.response) {
          var message = err.response.data.error;


          throw Error(message);
        } else throw err;
      });
    });
  },


  /**
   *
   * @param {string} userId
   *
   * @returns {Promise<User>}
   */
  retrieveUserLite: function retrieveUserLite(userId) {
    var _this3 = this;

    return Promise.resolve().then(function () {
      if (typeof userId !== "string") throw Error("user userId is not a string");

      if (!(userId = userId.trim()).length) throw Error("user userId is empty or blank");

      return axios.get(_this3.url + "/users/" + userId + "/lite").then(function (_ref3) {
        var status = _ref3.status,
            data = _ref3.data;

        if (status !== 200 || data.status !== "OK") throw Error("unexpected response status " + status + " (" + data.status + ")");

        return data.data;
      }).catch(function (err) {
        if (err.code === "ECONNREFUSED") throw Error("could not reach server");

        if (err.response) {
          var message = err.response.data.error;


          throw Error(message);
        } else throw err;
      });
    });
  },


  /**
   *
   * @param {string} id
   *
   * @returns {Promise<User>}
   */
  retrieveUser: function retrieveUser(id) {
    var _this4 = this;

    return Promise.resolve().then(function () {
      if (typeof id !== "string") throw Error("user id is not a string");

      if (!(id = id.trim()).length) throw Error("user id is empty or blank");

      return axios.get(_this4.url + "/users/" + id).then(function (_ref4) {
        var status = _ref4.status,
            data = _ref4.data;

        if (status !== 200 || data.status !== "OK") throw Error("unexpected response status " + status + " (" + data.status + ")");

        return data.data;
      }).catch(function (err) {
        if (err.code === "ECONNREFUSED") throw Error("could not reach server");

        if (err.response) {
          var message = err.response.data.error;


          throw Error(message);
        } else throw err;
      });
    });
  },


  /**
   *
   * @param {string} id
   *
   * @returns {Promise<Project>}
   */
  retrieveProject: function retrieveProject(id) {
    var _this5 = this;

    return Promise.resolve().then(function () {
      if (typeof id !== "string") throw Error("project id is not a string");

      if (!(id = id.trim()).length) throw Error("project id is empty or blank");

      return axios.get(_this5.url + "/projects/" + id).then(function (_ref5) {
        var status = _ref5.status,
            data = _ref5.data;

        if (status !== 200 || data.status !== "OK") throw Error("unexpected response status " + status + " (" + data.status + ")");

        return data.data;
      }).catch(function (err) {
        if (err.code === "ECONNREFUSED") throw Error("could not reach server");

        if (err.response) {
          var message = err.response.data.error;


          throw Error(message);
        } else throw err;
      });
    });
  },


  /**
   *
   * @param {string} email
   * @param {string} password
   * @param {string} newEmail
   * @param {string} newPassword
   * @param {object} personalData
   * @param {object} physicalData
   * @param {object} professionalData
   * @param {string} videobookLink
   *@param {string} profilePicture
   * 
   * @returns {Promise<boolean>}
   */
  updateUser: function updateUser(email, newEmail, password, newPassword, personalData, physicalData, professionalData, videobookLink, pics, profilePicture) {
    var _this6 = this;

    return Promise.resolve().then(function () {
      if (typeof email !== "string") throw Error("user email is not a string");

      if (!(email = email.trim()).length) throw Error("user email is empty or blank");

      if (typeof password !== "string") throw Error("user password is not a string");

      if ((password = password.trim()).length === 0) throw Error("user password is empty or blank");

      if (typeof newEmail !== "string") throw Error("user newEmail is not a string");

      if (!(newEmail = newEmail.trim()).length) throw Error("user newEmail is empty or blank");

      if (typeof newPassword !== "string") throw Error("user newPassword is not a string");

      if ((newPassword = newPassword.trim()).length === 0) throw Error("user newPassword is empty or blank");

      if (typeof videobookLink !== "string") throw Error("user videobookLink is not a string");

      if ((videobookLink = videobookLink.trim()).length === 0) throw Error("user videobookLink is empty or blank");

      if ((typeof personalData === "undefined" ? "undefined" : _typeof(personalData)) !== "object") throw Error("personal data is not what it should be");

      if ((typeof professionalData === "undefined" ? "undefined" : _typeof(professionalData)) !== "object") throw Error("professional data is not what it should be");

      if ((typeof physicalData === "undefined" ? "undefined" : _typeof(physicalData)) !== "object") throw Error("physical data is not what it should be");

      return axios.patch(_this6.url + "/users/" + id, {
        email: email,
        password: password,
        personalData: personalData,
        physicalData: physicalData,
        professionalData: professionalData,
        videobookLink: videobookLink,
        pics: pics,
        profilePicture: profilePicture

      }).then(function (_ref6) {
        var status = _ref6.status,
            data = _ref6.data;

        if (status !== 200 || data.status !== "OK") throw Error("unexpected response status " + status + " (" + data.status + ")");

        return true;
      }).catch(function (err) {
        if (err.code === "ECONNREFUSED") throw Error("could not reach server");

        if (err.response) {
          var message = err.response.data.error;


          throw Error(message);
        } else throw err;
      });
    });
  },


  /**
   *
   * @param {string} id
   * @param {string} email
   *
   *
   * @returns {Promise<boolean>}
   */
  unregisterUser: function unregisterUser(id, email) {
    var _this7 = this;

    return Promise.resolve().then(function () {
      if (typeof id !== "string") throw Error("user id is not a string");

      if (!(id = id.trim()).length) throw Error("user id is empty or blank");

      if (typeof email !== "string") throw Error("user email is not a string");

      if (!(email = email.trim()).length) throw Error("user email is empty or blank");

      return axios.delete(_this7.url + "/users/" + id, { data: { email: email } }).then(function (_ref7) {
        var status = _ref7.status,
            data = _ref7.data;

        if (status !== 200 || data.status !== "OK") throw Error("unexpected response status " + status + " (" + data.status + ")");

        return true;
      }).catch(function (err) {
        if (err.code === "ECONNREFUSED") throw Error("could not reach server");

        if (err.response) {
          var message = err.response.data.error;


          throw Error(message);
        } else throw err;
      });
    });
  },


  /**
   *
   *
   *
   * @returns {Promise<array>}
   */
  listProjects: function listProjects() {
    var _this8 = this;

    return Promise.resolve().then(function () {
      return axios.get(_this8.url + "/projects").then(function (_ref8) {
        var status = _ref8.status,
            data = _ref8.data;

        if (status !== 200 || data.status !== "OK") throw Error("unexpected response status " + status + " (" + data.status + ")");

        return data.data;
      }).catch(function (err) {
        if (err.code === "ECONNREFUSED") throw Error("could not reach server");

        if (err.response) {
          var message = err.response.data.error;


          throw Error(message);
        } else throw err;
      });
    });
  },


  /**
   *
   *
   * @param {string} userId
   * @param {string} projectId
   * @param {string} castingId
   *
   * @returns {Promise<boolean>}
   */
  joinCasting: function joinCasting(userId, projectId, castingId) {
    var _this9 = this;

    return Promise.resolve().then(function () {
      if (typeof userId !== "string") throw Error("user id is not a string");

      if (!(userId = userId.trim()).length) throw Error("user id is empty or blank");

      if (typeof castingId !== "string") throw Error("casting id is not a string");

      if (!(castingId = castingId.trim()).length) throw Error("casting id is empty or blank");

      return axios.post(_this9.url + "/projects/" + projectId, {
        userId: userId,
        castingId: castingId
      }).then(function (_ref9) {
        var status = _ref9.status,
            data = _ref9.data;

        if (status !== 200 || data.status !== "OK") throw Error("unexpected response status " + status + " (" + data.status + ")");

        return true;
      }).catch(function (err) {
        if (err.code === "ECONNREFUSED") throw Error("could not reach server");

        if (err.response) {
          var message = err.response.data.error;


          throw Error(message);
        } else throw err;
      });
    });
  },


  /**
   *
   * @param {string} userId
   * @param {string} projectId
   * @param {string} castingId
   *
   * @returns {Promise<boolean>} that confirms the user has joined the casting
   */
  quitCasting: function quitCasting(userId, projectId, castingId) {
    var _this10 = this;

    return Promise.resolve().then(function () {

      if (typeof userId !== 'string') throw Error('user id is not a string');

      if (!(userId = userId.trim()).length) throw Error('user id is empty or blank');

      if (typeof projectId !== 'string') throw Error('user id is not a string');

      if (!(projectId = projectId.trim()).length) throw Error('user id is empty or blank');

      if (typeof castingId !== 'string') throw Error('user id is not a string');

      if (!(castingId = castingId.trim()).length) throw Error('user id is empty or blank');

      return axios.delete(_this10.url + "/users/" + userId + "/projects/" + projectId + "/castings", { data: { castingId: castingId } }).then(function (_ref10) {
        var status = _ref10.status,
            data = _ref10.data;

        if (status !== 200 || data.status !== "OK") throw Error("unexpected response status " + status + " (" + data.status + ")");

        return true;
      }).catch(function (err) {
        if (err.code === "ECONNREFUSED") throw Error("could not reach server");

        if (err.response) {
          var message = err.response.data.error;


          throw Error(message);
        } else throw err;
      });
    });
  }
};

module.exports = castmeApi;
