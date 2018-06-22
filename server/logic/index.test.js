'use strict'

require('dotenv').config()

const { mongoose, models: { User, Casting, Project, ProfessionalData, PersonalData, PhysicalData } } = require('data')
const { expect } = require('chai')
const logic = require('.')
const _ = require('lodash')
const generateData = require('./generate-data')

const { env: { DB_URL } } = process

describe('logic', () => {
    const userData = {
        email: 'aperacaula@gmail.com',
        password: '12345',
        personalData: new PersonalData({

            name: 'Alex',
            surname: 'Peracaula',
            birthDate: new Date('10/07/1993'),
            sex: 'male',
            twins: true,
            province: 'Barcelona',
            phone: 630075725

        }),

        physicalData: new PhysicalData({

            height: 1.77,
            weight: 67,
            physicalCondition: 'fit',
            eyes: 'green',
            hair: 'buzzed',
            ethnicity: 'caucasian',
            beard: true,
            tattoos: true,
            piercings: false

        }),

        professionalData: new ProfessionalData({

            profession: 'actor/actress',
            singing: true,
            dancing: true,
            otherHabilities: 'surfing',
            previousJobExperiences: 20,
            

        }),

        videobookLink: 'https://youtube.com',

        profilePicture: 'http://res.cloudinary.com/dt6qv2j4j/image/upload/v1528803579/uvcv0wzsqe9sjrabd9ca.jpg',

        applications: []
    }

    const otherUserData = {
        email: 'apr1993@hotmail.com',
        password: '12345',
        personalData: new PersonalData({

            name: 'Alexia',
            surname: 'Peracaula',
            birthDate: new Date('10/07/2000'),
            sex: 'female',
            twins: true,
            province: 'Madrid',
            phone: 630075726

        }),

        physicalData: new PhysicalData({

            height: 1.60,
            weight: 61,
            physicalCondition: 'fit',
            eyes: 'green',
            hair: 'brown',
            ethnicity: 'caucasian',
            beard: false,
            tattoos: false,
            piercings: false

        }),

        professionalData: new ProfessionalData({

            profession: 'actor/actress',
            singing: false,
            dancing: true,
            otherHabilities: 'yoga',
            previousJobExperiences: 10,
            

        }),

        videobookLink: 'https://youtube.com',

        profilePicture: 'http://res.cloudinary.com/dt6qv2j4j/image/upload/v1528803579/uvcv0wzsqe9sjrabd9ca.jpg',
        applications: []
    }
    const dummyUserId = '123456781234567812345678'
    const dummyNoteId = '123456781234567812345678'
    let projects


    before(() => mongoose.connect(DB_URL))

    beforeEach(() => {
        projects = generateData()

        return Promise.all([User.remove(), Project.deleteMany()])
    })

    describe('register user', () => {
        it('should succeed on correct dada', () =>
            logic.registerUser(userData.email, userData.password, userData.personalData, userData.physicalData, userData.professionalData, userData.videobookLink, userData.profilePicture)
                .then(res => {
                    expect(res).to.be.true
                })


        )

        it('should fail on already registered user', () =>
            User.create(userData)
                .then(() => {

                    return logic.registerUser(userData.email, userData.password, userData.personalData, userData.physicalData, userData.professionalData, userData.videobookLink, userData.profilePicture)
                })
                .catch(({ message }) => {
                    expect(message).to.equal(`user with email ${userData.email} already exists`)
                })
        )

        it('should fail on no user name', () =>
            logic.registerUser()
                .catch(({ message }) => expect(message).to.equal('user email is not a string'))
        )

        it('should fail on empty user name', () =>
            logic.registerUser('')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on blank user name', () =>
            logic.registerUser('     ')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on no user surname', () =>
            logic.registerUser(userData.email)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            logic.registerUser(userData.email, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            logic.registerUser(userData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on no personal data', () =>
            logic.registerUser(userData.email, userData.password)
                .catch(({ message }) => expect(message).to.equal('personal data is not what it should be'))
        )

        it('should fail on empty personal data', () =>
            logic.registerUser(userData.email, userData.password, '')
                .catch(({ message }) => expect(message).to.equal('personal data is not what it should be'))
        )

    })

    describe('authenticate user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(() =>
                    logic.authenticateUser('aperacaula@gmail.com', '12345')
                        .then(id => expect(id).to.exist)
                )
        )

        it('should fail on no user email', () =>
            logic.authenticateUser()
                .catch(({ message }) => expect(message).to.equal('user email is not a string'))
        )

        it('should fail on empty user email', () =>
            logic.authenticateUser('')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on blank user email', () =>
            logic.authenticateUser('     ')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on no user password', () =>
            logic.authenticateUser(userData.email)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            logic.authenticateUser(userData.email, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            logic.authenticateUser(userData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )
    })

    describe('retrieve user', () => {

        it('should succeed on correct data', () => {
            const user = new User(userData)
            const proj1 = projects[0]

            return Promise.all([proj1.save(), user.save()])
                .then(([proj1, user]) => {
                    const { castings: [cast1_1, cast1_2] } = proj1

                    user.applications.push({ project: proj1._id, castings: [cast1_1._id, cast1_2._id] })

                    return user.save()
                })
                .then(user => {

                    return logic.retrieveUser(user.id)
                })
                .then(user => {
                    expect(user).to.exist

                    const { email, _id, password, personalData, physicalData, professionalData, videobookLink, applications } = user


                    expect(email).to.equal('aperacaula@gmail.com')

                    expect(_id).to.be.undefined
                    expect(password).to.be.undefined
                    expect(applications).to.exist
                    expect(applications.length).to.equal(1)
                    
                })
        })

        it('should fail on no user id', () =>
            logic.retrieveUser()
                .catch(({ message }) => expect(message).to.equal('user userId is not a string'))
        )

        it('should fail on empty user id', () =>
            logic.retrieveUser('')
                .catch(({ message }) => expect(message).to.equal('user userId is empty or blank'))
        )

        it('should fail on blank user id', () =>
            logic.retrieveUser('     ')
                .catch(({ message }) => expect(message).to.equal('user userId is empty or blank'))
        )
    })

    describe('retrieve user lite', () => {

        it('should succeed on correct data', () => {
            const user = new User(userData)
            const proj1 = projects[0]

            return Promise.all([proj1.save(), user.save()])
                .then(([proj1, user]) => {
                    const { castings: [cast1_1, cast1_2] } = proj1

                    user.applications.push({ project: proj1._id, castings: [cast1_1._id, cast1_2._id] })

                    return user.save()
                })
                .then(user => {

                    return logic.retrieveUserLite(user.id)
                })
                .then(userInfoLite => {
                    expect(user).to.exist

                    const { _id, password, personalData, profilePicture, applications } = userInfoLite

                    expect(_id).to.be.undefined
                    expect(password).to.be.undefined
                    expect (personalData.name).to.equal('Alex')
                    expect(personalData.surname).to.equal('Peracaula')
                    expect(applications).to.exist
                    expect(applications.length).to.equal(2)
                    expect(applications[0].title).to.equal('Bonded')
                    
                })
        })
    })

    describe('udpate user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(({ email, password }) => {

                    return logic.updateUser(userData.email, userData.password, 'jd@mail.com', '123', userData.personalData, userData.physicalData, userData.professionalData, userData.videobookLink)
                        .then(res => {
                            expect(res).to.be.true

                            return User.findOne({ email: 'jd@mail.com' })
                        })
                        .then(user => {
                            expect(user).to.exist

                            const { email, password, personalData, physicalData, professionalData, videobookLink} = user

                            expect(email).to.equal('jd@mail.com')
                            expect(password).to.equal('123')
                            expect(Object.values(personalData.toObject()).toString()).to.equal(Object.values(userData.personalData.toObject()).toString())
                        })
                })
        )

        it('should fail on changing email to an already existing user\'s email', () =>
            Promise.all([
                User.create(userData),
                User.create(otherUserData)
            ])
                .then(([{ email: email1 }, { email: email2 }]) => {
                    const { email, password } = userData

                    return logic.updateUser(email, password, email2, '123', userData.personalData, userData.physicalData, userData.professionalData, userData.videobookLink)
                })
                .catch(({ message }) => expect(message).to.equal(`user with email ${otherUserData.email} already exists`))
        )


        it('should fail on empty user email', () =>
            logic.updateUser('')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on blank user email', () =>
            logic.updateUser('     ')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on no user password', () =>
            logic.updateUser(userData.email)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            logic.updateUser(userData.email, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            logic.updateUser(userData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )
    })

    describe('unregister user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then(({ id }) => {
                    return logic.unregisterUser(id, 'aperacaula@gmail.com', '12345')
                        .then(res => {
                            expect(res).to.be.true

                            return User.findById(id)
                        })
                        .then(user => {
                            expect(user).to.be.null
                        })
                })
        )

        it('should fail on no user id', () =>
            logic.unregisterUser()
                .catch(({ message }) => expect(message).to.equal('user id is not a string'))
        )

        it('should fail on empty user id', () =>
            logic.unregisterUser('')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on blank user id', () =>
            logic.unregisterUser('     ')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on no user email', () =>
            logic.unregisterUser(dummyUserId)
                .catch(({ message }) => expect(message).to.equal('user email is not a string'))
        )

        it('should fail on empty user email', () =>
            logic.unregisterUser(dummyUserId, '')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on blank user email', () =>
            logic.unregisterUser(dummyUserId, '     ')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on no user password', () =>
            logic.unregisterUser(dummyUserId, userData.email)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            logic.unregisterUser(dummyUserId, userData.email, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            logic.unregisterUser(dummyUserId, userData.email, '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )
    })


    describe('get user applied project castings', () => {
        it('should succeed on correct data', () => {
            const user = new User(userData)
            const proj1 = projects[0]

            return Promise.all([proj1.save(), user.save()])
                .then(([proj1, user]) => {
                    const { castings: [cast1_1, cast1_2] } = proj1

                    user.applications.push({ project: proj1._id, castings: [cast1_1._id, cast1_2._id] })

                    return user.save()
                        .then(user => {
                            return logic.getUserAppliedProjectCastings(user.id)
                                .then(projects => {
                                    expect(projects).to.exist
                                    expect(projects.length).to.equal(1)

                                    const [project] = projects

                                    expect(project._id).to.deep.equal(proj1._id)
                                    expect(project.title).to.equal(proj1.title)
                                    expect(project.castings.length).to.equal(2)

                                    const { castings: [casting1, casting2] } = project

                                    expect(casting1._id.toString()).to.equal(cast1_1._id.toString())
                                })
                        })
                })
        })

        it('should fail on non user id', () =>
            logic.getUserAppliedProjectCastings()
                .catch(({ message }) => expect(message).to.equal('user id is not a string'))
        )

        it('should fail on empty user id', () =>
            logic.getUserAppliedProjectCastings('')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on blank user id', () =>
            logic.getUserAppliedProjectCastings('      ')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )
    })


    describe('get age', () => {
        it('should succeed', () => {
            const age = logic.getAge(new Date('10/07/1993'))
            expect(age).to.equal(24)
        })
    })

    describe('list projects', () => {
        it('should succeed', () => {
            const proj1= projects[0]
            const proj2= projects[1]
            const proj3= projects[2]
            return Promise.all([proj1.save(),proj2.save(),proj3.save()])
            .then(()=>{
                return logic.listProjects()
                    .then(list=>{
                        expect(list).to.exist
                        expect(list.length).to.equal(3)
                        expect(list[0].title).to.equal('Bonded')
                    })
            })
        })
    })

    describe('join casting', () => {
        it('should succeed', () => {
            const proj1= projects[0]
            const proj2= projects[1]
            const user= new User(userData)
            return Promise.all([proj1.save(),proj2.save(),user.save()])
            .then(([project1,project2,user])=>{
                const userId= user._id.toString()
                const project1Id= project1._id.toString()
                const project2Id= project2._id.toString()
                const casting1Id= project1.castings[0]._id.toString()
                const casting2Id= project2.castings[0]._id.toString()
                return logic.joinCasting(userId, project1Id, casting1Id)
                    .then(res=>{
                        expect(res).to.be.true

                        return User.findById(userId)
                            .then(user=>{
                                
                                expect(user.applications.length).to.equal(1)
                                expect(user.applications[0].project.toString()).to.equal(project1Id)

                                return logic.joinCasting(userId, project2Id, casting2Id)
                                    .then(res=>{
                                        expect(res).to.be.true

                                        return User.findById(userId)
                                            .then(user=>{
                                                
                                                expect(user.applications.length).to.equal(2)
                                                expect(user.applications[1].project.toString()).to.equal(project2Id)
                                                
                                            })
                                    
                                })
                            })

                        
                    })
            })
        })
    })

    false && describe('user is eligible', () => {
        it('should succeed on correct data', () => {
            const user = new User(userData)
            const proj1 = projects[0]

            return Promise.all([proj1.save(), user.save()])
                .then(([proj1, user]) => {
                    debugger

                    const { castings: [cast1_1, cast1_2] } = proj1

                    return logic.userIsEligible(user.id, proj1.id, cast1_1.id)
                        .then(res => {
                            expect(res).to.be.true

                        })
                })
        })
    
    })

    false && describe('join casting', () => {
        it('should succeed on correct data', () => {
            const user = new User(userData)
            const proj1 = projects[0]

            return Promise.all([proj1.save(), user.save()])
                .then(([proj1, user]) => {

                    const { castings: [cast1_1, cast1_2] } = proj1

                    user.applications.push({ project: proj1._id, castings: [cast1_1._id, cast1_2._id] })

                    return user.save()
                        .then(user => {
                            return logic.getUserAppliedProjectCastings(user.id)
                                .then(projects => {
                                    expect(projects).to.exist
                                    expect(projects.length).to.equal(1)

                                    const [project] = projects

                                    expect(project._id).to.deep.equal(proj1._id)
                                    expect(project.title).to.equal(proj1.title)
                                    expect(project.castings.length).to.equal(2)

                                    const { castings: [casting1, casting2] } = project

                                    expect(casting1._id.toString()).to.equal(cast1_1._id.toString())
                                })
                        })
                })
        })

        it('should fail on non user id', () =>
            logic.getUserAppliedProjectCastings()
                .catch(({ message }) => expect(message).to.equal('user id is not a string'))
        )

        it('should fail on empty user id', () =>
            logic.getUserAppliedProjectCastings('')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on blank user id', () =>
            logic.getUserAppliedProjectCastings('      ')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )
    })



    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})
