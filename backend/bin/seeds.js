const mongoose = require('mongoose')
const Food = require('../models/Food')

const foods = [{
        name: 'Pizza',
        dishType: 'Fast food',
        flavor: 'Cheezy',
        price: 100
    },
    {
        name: 'Tlayuda',
        dishType: 'Mexican food',
        flavor: '😋',
        price: 85
    },  
    {
        name: 'Anvorgueza',
        dishType: 'Fast food',
        flavor: 'Greasyy!!',
        price: 40
    },
    {
        name: 'Gyro',
        dishType: 'Greek food',
        flavor: 'Fresh',
        price: 60
    },
    {
        name: 'Chilakillers',
        dishType: 'Mexican food',
        flavor: 'Spicy',
        price: 89
    },
    {
        name: 'Lentejas',
        dishType: 'Soup',
        flavor: 'Comfort food',
        price: 0
    },
    {
        name: 'Tacos de canasta',
        dishType: 'Mexican food',
        flavor: 'Greasy!!',
        price: 3
    },
    {
        name: 'Pancita',
        dishType: 'Mexican food',
        flavor: 'Chewy',
        price: 99
    },
    {
        name: 'Barbacoa',
        dishType: 'Mexican food',
        flavor: 'Greasy!!',
        price: 200
    },
    {
        name: 'Fettuccini',
        dishType: 'Italian food',
        flavor: 'Creamy',
        price: 150
    },
    {
        name: 'Panuchos',
        dishType: 'Mexican Food',
        flavor: 'Greasy!!',
        price: 45
    },
    {
        name: 'Shepards pie',
        dishType: 'American food',
        flavor: 'Buttery',
        price: 300
    },
    {
        name: 'Jamon Iberico',
        dishType: 'Spanish food',
        flavor: 'Godly',
        price: 200
    },
    {
        name: 'Carnitas',
        dishType: 'Mexican food',
        flavor: 'Porky',
        price: 18
    },
    {
        name: 'Pozole',
        dishType: 'Mexican food',
        flavor: 'Spicy',
        price: 100
    },
    {
        name: 'Brownie',
        dishType: 'Dessert',
        flavor: 'Sweet',
        price: 70
    },
    {
        name: 'Tacos de tripa gorda',
        dishType: 'Mexican food',
        flavor: 'Heavenly',
        price: 15
    }
]

mongoose.connect('mongodb://localhost/backend')
    .then(async() => {
        const results = await Food.create(foods)
        console.log(`${results.length} foods created`)
        mongoose.connection.close()
    })
    .catch(err => console.log(err))