// Instructions can be found in let_vs_var.md

// Problems with var

function count() {
  let i;
  for (i = 0; i < 5; i++) {
    console.log(i + " inside the forLoop");
  }
  console.log(i + " outside the forLoop");
}

count(); // <---- uncomment me!

// Another problem with var is that we can overwrite it, like this:

const greeting = "Hello 😘";
//with const it won't let us overwrite. So if this line of code has to stay we need to either rename the variable and use const or use let so that the variable can be rewritten
const greeting1 = "Not today, pal! 😤"; 

console.log(greeting); // <----- uncomment me!
