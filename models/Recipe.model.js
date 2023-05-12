const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  // TODO: write the schema
  title: {type: String, required: true},
  level: {type: String, enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"]}
  ingredients: {type: [String]},
  cuisine: {type: String, required: true},
  dishType: {type: String, enum: ["breakfast", "main_course", "soup", "snack", "drink", "dessert", "other"]},
  image: {type: String, deafult: "https://images.media-allrecipes.com/images/75131.jpg"},


});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
