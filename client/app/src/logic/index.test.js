'use strict'

const { expect } = require('chai')
const logic = require('.')
const CastMeApi = require('api')

describe('logic (cast me app)', () => {
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



    }

    beforeEach(done => {
        const { email, password } = userData

        CastMeApi.authenticateUser(email, password)
            .then(id => 
                CastMeApi.unregisterUser(id, email, password)
            )
            .then(() => done())
            .catch(() => done())
    })

    describe('register', () => {
        it('should succeed on correct data', () => {
            const { email, password, personalData, physicalData, professionalData, videobookLink} = userData

            return logic.registerUser(email, password, personalData, physicalData, professionalData, videobookLink, pics)
                .then(res => expect(res).to.be.true)
        })
    })

    describe('login', () => {
        it('should succeed on correct data', () => {
            const { email, password, personalData, physicalData, professionalData, videobookLink} = userData

            return CastMeApi.registerUser(email, password, personalData, physicalData, professionalData, videobookLink, pics)
                .then(() => logic.login(email, password))
                .then(res => {
                    expect(res).to.be.true

                    expect(logic.userId).not.to.equal('NO-ID')
                })
        })
    })
})