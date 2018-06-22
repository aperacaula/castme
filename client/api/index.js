"use strict";

const axios = require("axios");

const castmeApi = {
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
  registerUser(
    email,
    password,
    personalData,
    physicalData,
    professionalData,
    videobookLink,
    profilePicture
  ) {
    return Promise.resolve().then(() => {
      if (typeof email !== "string") throw Error("user email is not a string");

      if (!(email = email.trim()).length)
        throw Error("user email is empty or blank");

      if (typeof password !== "string")
        throw Error("user password is not a string");

      if ((password = password.trim()).length === 0)
        throw Error("user password is empty or blank");

      if (typeof personalData !== "object")
        throw Error("personal data is not what it should be");

      if (typeof professionalData !== "object")
        throw Error("professional data is not what it should be");

      if (typeof physicalData !== "object")
        throw Error("physical data is not what it should be");

      if (typeof videobookLink !== "string")
        throw Error("user videobookLink is not a string");

      // if ((videobookLink = videobookLink.trim()).length === 0)
      //   throw Error("user videobookLink is empty or blank");

      

      return axios
        .post(`${this.url}/users`, {
          email,
          password,
          personalData,
          physicalData,
          professionalData,
          videobookLink,
          profilePicture 
        })
        .then(({ status, data }) => {
          if (status !== 201 || data.status !== "OK")
            throw Error(
              `unexpected response status ${status} (${data.status})`
            );

          return true;
        })
        .catch(err => {
          if (err.code === "ECONNREFUSED")
            throw Error("could not reach server");

          if (err.response) {
            const {
              response: {
                data: { error: message }
              }
            } = err;

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
  authenticateUser(email, password) {
    return Promise.resolve().then(() => {
      if (typeof email !== "string") throw Error("user email is not a string");

      if (!(email = email.trim()).length)
        throw Error("user email is empty or blank");

      if (typeof password !== "string")
        throw Error("user password is not a string");

      if ((password = password.trim()).length === 0)
        throw Error("user password is empty or blank");

      return axios
        .post(`${this.url}/auth`, { email, password })
        .then(({ status, data }) => {
          if (status !== 200 || data.status !== "OK")
            throw Error(
              `unexpected response status ${status} (${data.status})`
            );

        
          return data.data;
        })
        .catch(err => {
          if (err.code === "ECONNREFUSED")
            throw Error("could not reach server");

          if (err.response) {
            const {
              response: {
                data: { error: message }
              }
            } = err;

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
  retrieveUserLite(userId) {
    return Promise.resolve().then(() => {
      if (typeof userId !== "string") throw Error("user userId is not a string");

      if (!(userId = userId.trim()).length) throw Error("user userId is empty or blank");

      return axios
        .get(`${this.url}/users/${userId}/lite`)
        .then(({ status, data }) => {
          if (status !== 200 || data.status !== "OK")
            throw Error(
              `unexpected response status ${status} (${data.status})`
            );
            
          return data.data;
        })
        .catch(err => {
          if (err.code === "ECONNREFUSED")
            throw Error("could not reach server");

          if (err.response) {
            const {
              response: {
                data: { error: message }
              }
            } = err;

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
  retrieveUser(id) {
    return Promise.resolve().then(() => {
      if (typeof id !== "string") throw Error("user id is not a string");

      if (!(id = id.trim()).length) throw Error("user id is empty or blank");

      return axios
        .get(`${this.url}/users/${id}`)
        .then(({ status, data }) => {
          if (status !== 200 || data.status !== "OK")
            throw Error(
              `unexpected response status ${status} (${data.status})`
            );

          return data.data;
        })
        .catch(err => {
          if (err.code === "ECONNREFUSED")
            throw Error("could not reach server");

          if (err.response) {
            const {
              response: {
                data: { error: message }
              }
            } = err;

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
  retrieveProject(id) {
    return Promise.resolve().then(() => {
      if (typeof id !== "string") throw Error("project id is not a string");

      if (!(id = id.trim()).length) throw Error("project id is empty or blank");

      return axios
        .get(`${this.url}/projects/${id}`)
        .then(({ status, data }) => {
          if (status !== 200 || data.status !== "OK")
            throw Error(
              `unexpected response status ${status} (${data.status})`
            );

          return data.data;
        })
        .catch(err => {
          if (err.code === "ECONNREFUSED")
            throw Error("could not reach server");

          if (err.response) {
            const {
              response: {
                data: { error: message }
              }
            } = err;

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
  updateUser(
    email,
    newEmail,
    password,
    newPassword,
    personalData,
    physicalData,
    professionalData,
    videobookLink,
    pics,
    profilePicture
  ) {
    return Promise.resolve().then(() => {
      if (typeof email !== "string") throw Error("user email is not a string");

      if (!(email = email.trim()).length)
        throw Error("user email is empty or blank");

      if (typeof password !== "string")
        throw Error("user password is not a string");

      if ((password = password.trim()).length === 0)
        throw Error("user password is empty or blank");

      if (typeof newEmail !== "string")
        throw Error("user newEmail is not a string");

      if (!(newEmail = newEmail.trim()).length)
        throw Error("user newEmail is empty or blank");

      if (typeof newPassword !== "string")
        throw Error("user newPassword is not a string");

      if ((newPassword = newPassword.trim()).length === 0)
        throw Error("user newPassword is empty or blank");

      if (typeof videobookLink !== "string")
        throw Error("user videobookLink is not a string");

      if ((videobookLink = videobookLink.trim()).length === 0)
        throw Error("user videobookLink is empty or blank");

      if (typeof personalData !== "object")
        throw Error("personal data is not what it should be");

      if (typeof professionalData !== "object")
        throw Error("professional data is not what it should be");

      if (typeof physicalData !== "object")
        throw Error("physical data is not what it should be");

      

      return axios
        .patch(`${this.url}/users/${id}`, {
          email,
          password,
          personalData,
          physicalData,
          professionalData,
          videobookLink,
          pics,
          profilePicture

        })
        .then(({ status, data }) => {
          if (status !== 200 || data.status !== "OK")
            throw Error(
              `unexpected response status ${status} (${data.status})`
            );

          return true;
        })
        .catch(err => {
          if (err.code === "ECONNREFUSED")
            throw Error("could not reach server");

          if (err.response) {
            const {
              response: {
                data: { error: message }
              }
            } = err;

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
  unregisterUser(id, email) {
    return Promise.resolve().then(() => {
      if (typeof id !== "string") throw Error("user id is not a string");

      if (!(id = id.trim()).length) throw Error("user id is empty or blank");

      if (typeof email !== "string") throw Error("user email is not a string");

      if (!(email = email.trim()).length)
        throw Error("user email is empty or blank");

    

      return axios
        .delete(`${this.url}/users/${id}`, { data: { email } })
        .then(({ status, data }) => {
          if (status !== 200 || data.status !== "OK")
            throw Error(
              `unexpected response status ${status} (${data.status})`
            );

          return true;
        })
        .catch(err => {
          if (err.code === "ECONNREFUSED")
            throw Error("could not reach server");

          if (err.response) {
            const {
              response: {
                data: { error: message }
              }
            } = err;

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
  listProjects() {
    return Promise.resolve().then(() => {
      return axios
        .get(`${this.url}/projects`)
        .then(({ status, data }) => {
          if (status !== 200 || data.status !== "OK")
            throw Error(
              `unexpected response status ${status} (${data.status})`
            );

          return data.data;
        })
        .catch(err => {
          if (err.code === "ECONNREFUSED")
            throw Error("could not reach server");

          if (err.response) {
            const {
              response: {
                data: { error: message }
              }
            } = err;

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
  joinCasting(
    userId,
    projectId,
    castingId
  ) {
    return Promise.resolve().then(() => {
      if (typeof userId !== "string") throw Error("user id is not a string");

      if (!(userId = userId.trim()).length) throw Error("user id is empty or blank");

      if (typeof castingId !== "string") throw Error("casting id is not a string");

      if (!(castingId = castingId.trim()).length) throw Error("casting id is empty or blank");

      return axios
        .post(`${this.url}/projects/${projectId}`, {
          userId,
          castingId 
        })
        .then(({ status, data }) => {
          if (status !== 200 || data.status !== "OK")
            throw Error(
              `unexpected response status ${status} (${data.status})`
            );

          return true;
        })
        .catch(err => {
          if (err.code === "ECONNREFUSED")
            throw Error("could not reach server");

          if (err.response) {
            const {
              response: {
                data: { error: message }
              }
            } = err;

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
  quitCasting(userId, projectId, castingId){
    return Promise.resolve()
        .then(()=>{

            if (typeof userId !== 'string') throw Error('user id is not a string')

            if (!(userId = userId.trim()).length) throw Error('user id is empty or blank')

            if (typeof projectId !== 'string') throw Error('user id is not a string')

            if (!(projectId = projectId.trim()).length) throw Error('user id is empty or blank')

            if (typeof castingId !== 'string') throw Error('user id is not a string')

            if (!(castingId = castingId.trim()).length) throw Error('user id is empty or blank')

            return axios.delete(`${this.url}/users/${userId}/projects/${projectId}/castings`, { data: { castingId} })
            .then(({ status, data }) => {
              if (status !== 200 || data.status !== "OK")
                throw Error(
                  `unexpected response status ${status} (${data.status})`
                );
    
              return true;
            })
            .catch(err => {
              if (err.code === "ECONNREFUSED")
                throw Error("could not reach server");
    
              if (err.response) {
                const {
                  response: {
                    data: { error: message }
                  }
                } = err;
    
                throw Error(message);
              } else throw err;
            });
        })
  },

};

module.exports = castmeApi;
