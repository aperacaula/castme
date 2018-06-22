'use strict'

require('dotenv').config()

const { User, Project, Casting, PhysicalData, PersonalData, } = require('../models')
const { mongoose } = require('../../data')

const { env: { DB_URL } } = process

mongoose.connect(DB_URL)
    .then(() => mongoose.connection.db.dropDatabase())
    .then(() => {
        //Project 1
        const pr1_1 = {
            height: null,
            weight: null,
            physicalCondition: 'fat/chubby',
            eyes: null,
            hair: null,
            ethnicity: 'latino/hispanic',
            beard: null,

            tattoos: false,

            piercings: null
        };
        const casting1_1 =

        {
            title: "Gordo(Lead)",
            minAge: 20,
            maxAge: 28,
            sex: 'male',
            description: 'Gordo is a chubby, pudgy, overweight kid who works in the sweatshop. Very funny and high energy.',
            physicalReq: pr1_1,
            

        }
            ;
        const pr1_2 = {
            height: 1.80,
            weight: null,
            physicalCondition: 'thin/slim',
            eyes: null,
            hair: null,
            ethnicity: 'latino/hispanic',
            beard: null,

            tattoos: true,

            piercings: null
        };
        const casting1_2 = {
            title: "Carlito(Supporting)",
            minAge: 20,
            maxAge: 28,
            sex: 'male',
            description: 'Carlito is tall and skinny, very mean. He is the leader of the kids in the sweatshop',
            physicalReq: pr1_2,
            

        }

        const casting1_3 = {
            title: "Pedrito(Supporting)",
            minAge: 30,
            maxAge: 38,
            sex: 'male',
            description: 'Pedrito is tall and skinny, very mean. He is the leader of the kids in the sweatshop',
            physicalReq: pr1_2,
            
        }
        const project1 = {
            title: 'Bonded',
            publishedDate: (() => new Date())(),
            endDate: (() => {
                let date = new Date()
                date.setDate(date.getDate() + 20)
                return date
            })(),
            paid: true,
            professional: true,
            province: 'Albacete',
            description: 'Project "Bonded," a feature film based on true events about illegal sweat shops in Los Angeles.',

            castings: [],

            situation: 'Open'
        }

        //Project 2
        const pr2_1 = {
            height: 1.70,
            weight: null,
            physicalCondition: 'fit',
            eyes: null,
            hair: "blond",
            ethnicity: null,
            beard: null,
            tattoos: false,
            piercings: null
        };
        const casting2_1 = {
            title: "Desiree",
            minAge: 20,
            maxAge: 30,
            sex: 'female',
            description: 'Desiree is the main character. She is a young mum who deals with anxiety and modern society problems, mainly induced by her responsibility as a mum.',
            physicalReq: pr2_1,
            

        };

        const pr2_2 = {
            height: null,
            weight: null,
            physicalCondition: 'fat/chubby',
            eyes: "brown",
            hair: "brown",
            ethnicity: null,
            beard: null,
            tattoos: true,
            piercings: null
        };
        const casting2_2 = {
            title: "Tracy(Supporting)",
            minAge: 40,
            maxAge: 50,
            sex: 'female',
            description: 'Drug addict, widow of Ray’s former partner, Tracy despises Ray and feels he has no right to continue butting into her life. Her addiction has gotten to the point where she has lost all track of her young daughter, who has gone missing ',
            physicalReq: pr2_2,
            

        }
        const project2 = {
            title: 'Crown Vic',
            publishedDate: (() => new Date())(),
            endDate: (() => {
                let date = new Date()
                date.setDate(date.getDate() + 20)
                return date
            })(),
            paid: true,
            professional: true,
            province: 'Barcelona',
            description: 'Project "Crown Vic," a SAG Low Budget feature produced by Alec Baldwin. Project personnel will hold a Buffalo, NY open call. No appointments necessary.',

            castings: [],

            situation: 'Open'
        }


        //Project 3

        const pr3_1 = {
            height: 1.70,
            weight: null,
            physicalCondition: 'fit',
            eyes: "green",
            hair: "brown",
            ethnicity: 'caucasian',
            beard: null,
            tattoos: false,
            piercings: null
        };
        const casting3_1 = {
            title: "Female",
            minAge: 20,
            maxAge: 50,
            sex: 'female',
            description: 'must have similar measurements/hair & skin tone',
            physicalReq: pr3_1,
            

        };

        const project3 = {
            title: 'Luxury Fragrance (Publicity)',
            publishedDate: (() => new Date())(),
            endDate: (() => {
                let date = new Date()
                date.setDate(date.getDate() + 20)
                return date
            })(),
            paid: true,
            professional: true,
            province: 'Madrid',
            description: 'Project stand-ins for male and female talent in a luxury fragrance TVC shoot. Applicants must have similar height/measurements and skin tone as described.',

            castings: [],

            situation: 'Open'
        }


        //Project 4
        
        const pr4_1 = {
            height: null,
            weight: null,
            physicalCondition: 'average',
            eyes: null,
            hair: null,
            ethnicity: 'arabic',
            beard: true,

            tattoos: false,

            piercings: null
        };
        const casting4_1 =

        {
            title: "Burt Bakman",
            minAge: 30,
            maxAge: 45,
            sex: 'male',
            description: 'A struggling dreamer; an Israeli chef living in America, but he works as a real estate agent in the hopes of one day opening his own restaurant; strong improvisational skills a must; cooking experience a plus.',
            physicalReq: pr4_1,
            

        }
            ;
        const pr4_2 = {
            height: 1.80,
            weight: null,
            physicalCondition: 'thin/slim',
            eyes: null,
            hair: null,
            ethnicity: 'caucasian',
            beard: null,

            tattoos: false,

            piercings: null
        };
        const casting4_2 = {
            title: "Solomonov",
            minAge: 30,
            maxAge: 65,
            sex: 'male',
            description: 'confidence and charisma are the name of the game; a celebrity chef with all the verve that comes with it; strong improvisational skills a must.',
            physicalReq: pr4_2,
            

        }

        const pr4_3 = {
            height: 1.65,
            weight: null,
            physicalCondition: 'fit',
            eyes: null,
            hair: null,
            ethnicity: 'caucasian',
            beard: null,

            tattoos: false,

            piercings: null
        };

        const casting4_3 = {
            title: "Valerie",
            minAge: 35,
            maxAge: 55,
            sex: 'female',
            description: 'Pedrito is tall and skinny, very mean. He is the leader of the kids in the sweatshop',
            physicalReq: pr4_3,
            
        }
        const project4 = {
            title: 'Digital Pilot, Rising Chef',
            publishedDate: (() => new Date())(),
            endDate: (() => {
                let date = new Date()
                date.setDate(date.getDate() + 30)
                return date
            })(),
            paid: true,
            professional: true,
            province: 'Cádiz',
            description: 'Casting an Middle-Eastern/Middle-Eastern American actor and some more actors/actress to portray an Israeli chef for digital pilot and other staff members',

            castings: [],

            situation: 'Open'
        }

        //Project 5
        const pr5_1 = {
            height: 1.80,
            weight: null,
            physicalCondition: 'thin/slim',
            eyes: null,
            hair: "dark/black",
            ethnicity: null,
            beard: null,
            tattoos: false,
            piercings: null
        };
        const casting5_1 = {
            title: "Sandwich Man",
            minAge: 40,
            maxAge: 60,
            sex: 'male',
            description: 'with 1940s-50s look. Seeking men 40-60 years old (tall and slim, pants waist size 30-31) and classic face women age 30s.',
            physicalReq: pr5_1,
            

        };

        const pr5_2 = {
            height: null,
            weight: null,
            physicalCondition: 'fat/chubby',
            eyes: "brown",
            hair: "brown",
            ethnicity: null,
            beard: null,
            tattoos: true,
            piercings: null
        };
        const casting5_2 = {
            title: "Lead Actress",
            minAge: 20,
            maxAge: 30,
            sex: 'female',
            description: 'with 1940s-1950s look, seeking for an attraactive, charismatic woman to be the lead of the shoot',
            physicalReq: pr5_2,
            

        }
        const project5 = {
            title: '1950s- Style Fashion Shoot',
            publishedDate: (() => new Date())(),
            endDate: (() => {
                let date = new Date()
                date.setDate(date.getDate() + 20)
                return date
            })(),
            paid: true,
            professional: true,
            province: 'Barcelona',
            description: 'Seeking models for a Walker Evans-inspired fashion shoot. This is an editorial fashion story for a U.S. magazine shot documentary-style',

            castings: [],

            situation: 'Open'
        }


        //Project 6

        const pr6_1 = {
            height: 1.80,
            weight: null,
            physicalCondition: 'muscular',
            eyes: null,
            hair: "buzzed",
            ethnicity: 'caucasian',
            beard: null,
            tattoos: false,
            piercings: null
        };
        const casting6_1 = {
            title: "Military types",
            minAge: 20,
            maxAge: 50,
            sex: 'male',
            description: 'clean-cut and in-shape military types to portray Privates, Lance Corporals, and Sergeants in the Marine Corp. Men must be comfortable with a military haircut and being clean-shaven. (The haircuts are not buzz cuts or crew cuts, just a typical short haircut.)',
            physicalReq: pr6_1,
            

        };

        const project6 = {
            title: 'The Code',
            publishedDate: (() => new Date())(),
            endDate: (() => {
                let date = new Date()
                date.setDate(date.getDate() + 20)
                return date
            })(),
            paid: true,
            professional: true,
            province: 'Madrid',
            description: 'Seeking background actors for season 1 of the CBS series "The Code."',

            castings: [],

            situation: 'Open'
        }

        //Project7
        const pr7_2= {
            height: null,
            weight: null,
            physicalCondition: null,
            eyes: null,
            hair: null,
            ethnicity: 'any',
            beard: null,
            tattoos: false,
            piercings: null
        };
        const casting7_2= {
            title: "Any type",
            minAge: 0,
            maxAge: 100,
            sex: 'female',
            description: 'Any kind of enthusiastic, motivated and smiling person is welcome!',
            physicalReq: pr7_2,
            

        };


        const pr7_1 = {
            height: null,
            weight: null,
            physicalCondition: null,
            eyes: null,
            hair: null,
            ethnicity: 'any',
            beard: null,
            tattoos: null,
            piercings: null
        };
        const casting7_1 = {
            title: "Any type",
            minAge: 0,
            maxAge: 100,
            sex: 'male',
            description: 'Any kind of enthusiastic, motivated and smiling person is welcome!',
            physicalReq: pr7_1,
            

        };

        const project7 = {
            title: 'New Talents',
            publishedDate: (() => new Date())(),
            endDate: (() => {
                let date = new Date()
                date.setDate(date.getDate() + 10)
                return date
            })(),
            paid: true,
            professional: true,
            province: 'Cuenca',
            description: 'For film. We are looking for new talents in an open casting, whatever your age, whatever your background, come and try. Our team will assess you and you will enjoy the process',

            castings: [],

            situation: 'Open'
        }

        //Project 8

        const pr8_1 = {
            height: 1.65,
            weight: null,
            physicalCondition: 'fit',
            eyes: null,
            hair: "blond",
            ethnicity: 'caucasian',
            beard: null,
            tattoos: false,
            piercings: null
        };
        const casting8_1 = {
            title: "Beactrice",
            minAge: 20,
            maxAge: 40,
            sex: 'female',
            description: 'The iconic shakespearean character needs someone to impersonate it. We are looking for attractive, smart women willing to open their arms to the witty tongue of Beactrice',
            physicalReq: pr8_1,
            

        };

        const project8 = {
            title: 'Much Ado About Nothing',
            publishedDate: (() => new Date())(),
            endDate: (() => {
                let date = new Date()
                date.setDate(date.getDate() + 30)
                return date
            })(),
            paid: true,
            professional: true,
            province: 'Barcelona',
            description: 'For theatre. We need an actress between 20-30 years old to perform in "Much Ado About Nothing", of W. Shakespeare, next season at TNC. This new initiative of theatre in English comes from la Generalitat and it shows a promising will to improve linguistic knowledge in the city',

            castings: [],

            situation: 'Open'
        }

        //Project 9

        const pr9_1 = {
            height: 1.85,
            weight: null,
            physicalCondition: 'muscular',
            eyes: null,
            hair: "blond",
            ethnicity: 'caucasian',
            beard: true,
            tattoos: true,
            piercings: null
        };
        const casting9_1 = {
            title: "John",
            minAge: 20,
            maxAge: 40,
            sex: 'male',
            description: "John is the lead (tall, blond, muscular guy) of this new film produced by Spielberg's grandson himself. If the project gathers enough funding, it will receive an incredible amount of promotion and will open the Toronto Film Festival next year. ",
            physicalReq: pr9_1,
            

        };

        const project9 = {
            title: 'Film in needs of Lead',
            publishedDate: (() => new Date())(),
            endDate: (() => {
                let date = new Date()
                date.setDate(date.getDate() + 30)
                return date
            })(),
            paid: true,
            professional: true,
            province: 'Barcelona',
            description: 'For film. New project with tag Spielberg on it. This movie will receive a lot of importance once it reaches a minimum amount of donnors, as it is now a result of a bet between Steven and his grandson. If the boy gets 1.000.000 $ on his own, his grandad promised to boost the movie!',

            castings: [],

            situation: 'Open'
        }



        return Promise.all([
            Project.create(project1),
            Project.create(project2),
            Project.create(project3),
            Project.create(project4),
            Project.create(project5),
            Project.create(project6),
            Project.create(project7),
            Project.create(project8),
            Project.create(project9)
        ])
            .then(([proj1, proj2, proj3, proj4, proj5, proj6, proj7, proj8, proj9]) => {
                let cast13, cast22

                proj1.castings.push(new Casting(casting1_1))
                proj1.castings.push(new Casting(casting1_2))
                proj1.castings.push(cast13 = new Casting(casting1_3))
                proj2.castings.push(new Casting(casting2_1))
                proj2.castings.push(cast22 = new Casting(casting2_2))
                proj3.castings.push(new Casting(casting3_1))
                proj4.castings.push(new Casting(casting4_1))
                proj4.castings.push(new Casting(casting4_2))
                proj4.castings.push(new Casting(casting4_3))
                proj5.castings.push(new Casting(casting5_1))
                proj5.castings.push(new Casting(casting5_2))
                proj6.castings.push(new Casting(casting6_1))
                proj7.castings.push(new Casting(casting7_1))
                proj7.castings.push(new Casting(casting7_2))
                proj8.castings.push(new Casting(casting8_1))
                proj9.castings.push(new Casting(casting9_1))
                

                

                const userData = {
                    email: 'aperacaula@gmail.com',
                    password: '12345',
                    personalData: {

                        name: 'Alex',
                        surname: 'Peracaula',
                        birthDate: new Date('10/07/1993'),
                        sex: 'male',
                        twins: true,
                        province: 'Barcelona',
                        phone: 630075725

                    },

                    physicalData: {

                        height: 1.77,
                        weight: 67,
                        physicalCondition: 'fit',
                        eyes: 'green',
                        hair: 'buzzed',
                        ethnicity: 'caucasian',
                        beard: true,
                        tattoos: true,
                        piercings: null

                    },

                    professionalData: {

                        profession: 'actor/actress',
                        singing: true,
                        dancing: true,
                        otherHabilities: 'surfing',
                        previousJobExperiences: 20,


                    },

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

                    physicalData: {

                        height: 1.60,
                        weight: 61,
                        physicalCondition: 'fit',
                        eyes: 'green',
                        hair: 'brown',
                        ethnicity: 'caucasian',
                        beard: null,
                        tattoos: false,
                        piercings: null

                    },

                    professionalData: {

                        profession: 'actor/actress',
                        singing: false,
                        dancing: true,
                        otherHabilities: 'yoga',
                        previousJobExperiences: 10,


                    },

                    videobookLink: 'https://youtube.com',

                    profilePicture: 'http://res.cloudinary.com/dt6qv2j4j/image/upload/v1528803579/uvcv0wzsqe9sjrabd9ca.jpg',
                    applications: []
                }
                return Promise.all([proj1.save(), proj2.save(), proj3.save(),proj4.save(), proj5.save(), proj6.save(), proj7.save(),proj8.save(),proj9.save()])
                    .then(() => Promise.all([User.create(userData), User.create(otherUserData)]))
                    //     .then(([user1, user2]) => {
                    //         user1.applications.push({ project: proj1._id, castings: [cast13._id] })
                    //         user1.applications.push({ project: proj2._id, castings: [cast22._id] })
                    //         proj1.castings[2].applicants.push(user1._id)
                    //         proj2.castings[1].applicants.push(user1._id)
                    //         return Promise.all([user1.save(), proj1.save(), proj2.save()])
                    //     }))
                    

            })

    })
    .then(() => mongoose.disconnect())
    .then(() => console.log('done'))
    .catch(console.error)