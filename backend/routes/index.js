const express = require('express');
const router = express.Router();
const { getAllFoods, getOneFood, createFood, updateFood, deleteFood } = require('../controllers/foods.controller')

//REST

//CREATE FOOD
router.post('/foods', createFood)

//READ FOODS
router.get('/foods', getAllFoods)

//READ FOOD(DETAIL)
router.get('/foods/:id', getOneFood)

//UPDATE FOOD
router.patch('/foods/:id', updateFood)

//DELETE FOOD
router.delete('/foods/:id', deleteFood)



module.exports = router;