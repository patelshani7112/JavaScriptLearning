// destructoring the array
const arr = [1, 2, 3];

const [x, y, z] = arr;
console.log(x, y, z);

const restaurant = {
  name: "Clasico Italian",
  location: "Angelo, Tavanti 23,Frienze,Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focacciq", "Bruchetta", "Garlic bread"],
  mainnMenu: ["pizza", "Pasta", "Pisotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (catIndex, startIndex) {
    return [this.categories[catIndex], this.starterMenu[startIndex]];
  },
};

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  location: location,
  starterMenu: menu,
  openingHours: hours,
} = restaurant;

//console.log(location, menu, hours);

const {
  fri: { open },
} = openingHours;
console.log(fri);
// const [first, second] = restaurant.categories;
// console.log(first, second);

// console.log(restaurant.categories[0]);

// const [cat, start] = restaurant.order(2, 1);
// console.log(cat, start);

// const num = [1, 2, 3];

// const [a, b, c, d = 0] = num;
// console.log(a, b, c, d);
