
import api from 'api'

api.url='https://obscure-oasis-72862.herokuapp.com/api'

const logic = {
    userId: undefined,

    registerUser(email, password, personalData, physicalData, professionalData, videobookLink, profilePicture) {
        return api.registerUser(email, password, personalData, physicalData, professionalData, videobookLink, profilePicture)
    },

    login(email, password) {
        return api.authenticateUser(email, password)
            .then(id => {
                this.userId = id

                return true
            })
    },

    retrieveUserLite(userId){
        return api.retrieveUserLite(userId)
    },

    retrieveUser(userId){
        return api.retrieveUser(userId)
    },

    retrieveProject(projectId){
        return api.retrieveProject(projectId)
    },

    deleteUser(id,email,password){
        return api.unregisterUser(id,email,password)
            .then(res=>{
                sessionStorage.clear()
                logic.userId=undefined
                return res
            })
    },

    getProjects(){
        return api.listProjects()
    },

    joinCasting(userId,projectId,castingId){
        return api.joinCasting(userId,projectId,castingId)
    },

    quitCasting(userId, projectId,castingId){
        return api.quitCasting(userId, projectId,castingId)
    },

    updateUser(email,
        newEmail,
        password,
        newPassword,
        PersonalData,
        PhysicalData,
        ProfessionalData,
        videobook,
        pics,
        profilePicture){
        return api.updateUser(email,
            newEmail,
            password,
            newPassword,
            PersonalData,
            PhysicalData,
            ProfessionalData,
            videobook,
            pics,
            profilePicture)
    },

    unregisterUser(userId, email){
        sessionStorage.clear()
        this.userId= undefined
        return api.unregisterUser(userId, email)
    }

    //profile(userId){

    //}
}

export default logic

