// Instructions can be found in ternaries.md

export function sayHello(name) {
  return 'Hello' + ((name === undefined)? ' you!': `, ${name}!`);
}
