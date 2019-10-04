export function square(x) {
    return x * x;
  }
  
  export function cube(x) {
    return x * x * x;
  }

  const { d } = require('./d');

  import a from './a';
  import b from './b';
  import c from './c';

  exports.d = d; 

  export { a, b, c}; 

