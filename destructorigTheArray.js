// destructoring the array
const arr = [1, 2, 3];

const [x, y, z] = arr;
console.log(x, y, z);

const restaurant = {
  name: "Clasico Italian",
  location: "Angelo, Tavanti 23,Frienze,Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focacciq", "Bruchetta", "Garlic bread"],

  order: function (catIndex, startIndex) {
    return [this.categories[catIndex], this.starterMenu[startIndex]];
  },
};

const [first, second] = restaurant.categories;
console.log(first, second);

console.log(restaurant.categories[0]);

const [cat, start] = restaurant.order(2, 1);
console.log(cat, start);

const num = [1, 2, 3];

const [a, b, c, d = 0] = num;
console.log(a, b, c, d);
