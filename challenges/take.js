// Реализуйте и экспортируйте по умолчанию функцию take, которая возвращает список,
// состоящий из первых n (значение передается первым параметром) элементов исходного
// (переданного вторым параметром) списка. Остальные детали работы функции демонстрирует
// нижеприведённый код:

// take(3, l()); // ()
// take(3, l(1, 2)); // (1, 2)
// take(1, l(7, 2)); // (7)
// Подсказки
// Используйте рекурсивный процесс

// eslint-disable-next-line
import { l, isEmpty, head, tail, cons, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const take = (n, list) => {
  if (isEmpty(list) || n === 0) {
    return l();
  }
  return cons(head(list), take(n - 1, tail(list)));
}

// const take = (n, list) => {
//   let i = 0
//   let res = l()
//   if (isEmpty(list)) {
//     return l();
//   }
//   while (i < n) {
//     res = cons(head(list), take(i, tail(list)));
//     i = i + 1;
//     console.log("fuck")
//   }
//   return res;
// }


export default take;
// END
