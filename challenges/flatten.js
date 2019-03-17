// Реализуйте и экспортируйте по умолчанию функцию flatten, которая делает плоским вложенный
// список.

// const list = l(1, 2, l(3, 5), l(l(4, 3), 2));

// // (1, 2, 3, 5, 4, 3, 2)
// flatten(list);

import { l, reverse, toString as listToString, isList, cons, reduce } from 'hexlet-pairs-data'; // eslint-disable-line

// BEGIN (write your solution here)
// const flatten = (list) => {
//   const func = (element, acc) => {
//     if (isList(element)) {
//       return reduce(func, acc, element);
//     }
//     return cons(element, acc);
//   }
//   return reverse(reduce(func, l(), list));
// }
const flatten = (list) => {
  const func = (e, acc) => isList(e) ? reduce(func, acc, e) : cons(e, acc);
  return reverse(reduce(func, l(), list));
}
export default flatten;
// END
