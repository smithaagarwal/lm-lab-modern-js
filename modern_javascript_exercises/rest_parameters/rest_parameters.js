// Instructions can be found in rest_parameters.md

// Add rest parameters here!
export function add(...numbers) {
  return numbers.reduce((total, number)=> total + number,0);
}

