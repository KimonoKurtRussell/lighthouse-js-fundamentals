
// Write a while loop that prints out the contents of ingredients:

var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var repeat = 0;
while (repeat < 1) {
  console.log(ingredients);
  repeat++;
}
console.log("Ingredients to purchase");

// Write a for loop that prints out the contents of ingredients:

console.log("Ingredients to purchase:");
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

console.log("Ingredients to purchase:");
for (var i = 7; i < ingredients.length; i--) {
  console.log(ingredients[i]);
}



