"use strict";

function findIndivisual(name) {
  var constStr = "";

  for (let j = 0; j < name.length; j++) {}
  let lengName = name.length;
  for (var i = 0; i < lengName; i++) {
    if (
      name.charAt(i) == "a" ||
      name.charAt(i) == "e" ||
      name.charAt(i) == "i" ||
      name.charAt(i) == "o" ||
      name.charAt(i) == "u" ||
      name.charAt(i) == "A" ||
      name.charAt(i) == "E" ||
      name.charAt(i) == "I" ||
      name.charAt(i) == "O" ||
      name.charAt(i) == "U"
    ) {
      console.log(name.charAt(i));
    } else {
      constStr += name.charAt(i);
    }
  }

  for (var j = 0; j < constStr.length; j++) {
    console.log(constStr.charAt(j));
  }
}

function findInArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    var len = arr[i].length;
    var str = "";
    console.log(arr[i]);

    for (var j = 0; j < len; j++) {
      str += "=";
    }
    console.log(str);
    findIndivisual(arr[i]);
    console.log("\n\n");
  }
}

var arraName = ["nameArray", "JavaScript", "Jems Patel"];
findInArray(arraName);
