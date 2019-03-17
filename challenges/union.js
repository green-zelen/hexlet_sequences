// Напишите и экспортируйте по умолчанию функцию union, которая принимает на вход два списка и возвращает третий, являющийся объединением уникальных значений двух исходных списков.

// const list1 = l(2, 3, 2, 1, 7);
// const list2 = l(1, 5, 3, 5, 8, 9);

// const result = union(list1, list2);
// // (2, 3, 1, 7, 5, 8, 9)
// Подсказки
// Порядок уникальных значений в итоговом списке должен соответствовать порядку появления этих значений в исходных списках (сначала в первом переданном списке, потом - во втором).
// acc, suggestion (occurred 2 times)

// eslint-disable-next-line
import { l, isEmpty, cons, reduce, has, reverse, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const union = (list1, list2) => {

  if (isEmpty(list1) && isEmpty(list2)) {
    return l();
  }

  const f = (e, acc) => {
    return has(acc, e) ? acc : cons(e, acc);
  }

  return reverse(reduce(f, reduce(f, l(), list1), list2));
}

export default union;
// END
