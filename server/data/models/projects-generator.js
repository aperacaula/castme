const { mongoose, models: { Project, Casting, PhysicalData } } = require('../')

//Project 1

const pr1_1 = new PhysicalData({
    height: null,
    weight: null,
    physicalCondition: 'chubby',
    eyes: null,
    hair: null,
    ethnicity: 'latino/hispanic',
    beard: false,

    tattoos: false,

    piercings: null
});
const casting1_1 =

    new Casting({
        title: "Gordo(Lead)",
        minAge: 20,
        maxAge: 28,
        sex: 'male',
        description: 'Gordo is a chubby, pudgy, overweight kid who works in the sweatshop. Very funny and high energy.',
        physicalReq: pr1_1,
        status: true

    })
    ;
const pr1_2 = new PhysicalData({
    height: 1.80,
    weight: null,
    physicalCondition: 'thin/slim',
    eyes: null,
    hair: null,
    ethnicity: 'latino/hispanic',
    beard: false,

    tattoos: false,

    piercings: null
});
const casting1_2 = new Casting({
    title: "Carlito(Supporting)",
    minAge: 20,
    maxAge: 28,
    sex: 'male',
    description: 'Carlito is tall and skinny, very mean. He is the leader of the kids in the sweatshop',
    physicalReq: pr1_2,
    status: true

})
const project1 = new Project({
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

    castings: [casting1_1, casting1_2]
})


//Project 2

const pr2_1 = new PhysicalData({
    height: 1.70,
    weight: null,
    physicalCondition: 'fit',
    eyes: null,
    hair: "blond",
    ethnicity: null,
    beard: false,
    tattoos: false,
    piercings: null
});
const casting2_1 = new Casting({
    title: "Desiree",
    minAge: 20,
    maxAge: 30,
    sex: 'female',
    description: 'Desiree is the main character. She is a young mum who deals with anxiety and modern society problems, mainly induced by her responsibility as a mum.',
    physicalReq: pr2_1,
    status: true

})
    ;
const pr2_2 = new PhysicalData({
    height: null,
    weight: null,
    physicalCondition: 'chubby',
    eyes: "brown",
    hair: "brown",
    ethnicity: null,
    beard: false,
    tattoos: true,
    piercings: null
});
const casting2_2 = new Casting({
    title: "Tracy(Supporting)",
    minAge: 40,
    maxAge: 50,
    sex: 'female',
    description: 'Drug addict, widow of Ray’s former partner, Tracy despises Ray and feels he has no right to continue butting into her life. Her addiction has gotten to the point where she has lost all track of her young daughter, who has gone missing ',
    physicalReq: pr2_2,
    status: true

})
const project2 = new Project({
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

    castings: [casting2_1, casting2_2]
})


//Project 3

const pr3_1 = new PhysicalData({
    height: 1.70,
    weight: null,
    physicalCondition: 'fit',
    eyes: "green",
    hair: "brown",
    ethnicity: 'caucasian',
    beard: false,
    tattoos: false,
    piercings: false
});
const casting3_1 = new Casting({
    title: "Female",
    minAge: 20,
    maxAge: 50,
    sex: 'female',
    description: 'must have similar measurements/hair & skin tone',
    physicalReq: pr3_1,
    status: true

})
    ;

const project3 = new Project({
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

    castings: [casting3_1]
})



module.exports = [project1, project2, project3]