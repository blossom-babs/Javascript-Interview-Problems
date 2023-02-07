// DIFFERENCES BETWEEN THE FOR AND FOREACH STATEMENT

const colors = ["red", "green", "blue"]

/*
1. forEach only works on an array
2. break...continue works in a for loop, not a forEach statement
*/

// test your code - for statement
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i])
}

// test your code - forEach statement
colors.forEach((item) => {
  console.log(item)
})