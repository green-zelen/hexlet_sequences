// sameParityFilter.js
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список и
// возвращает новый, состоящий из элементов, у которых такая же чётность, как и у первого
// элемента входного списка.

// Примеры
// sameParity(l(-1, 0, 1, -3, 10, -2)); // (-1, 1, -3)

// sameParity(l(2, 0, 1, -3, 10, -2)); // (2, 0, 10, -2)

// sameParity(l()); // ()

// eslint-disable-next-line
import { l, isEmpty, head, tail, filter, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const sameParityFilter = (list) => {
  if (isEmpty(list)) {
    return l();
  }
  if (head(list) % 2 === 0) {
    return filter(element => element % 2 === 0, list);
  }
  return filter(element => element % 2 !== 0, list);
};

export default sameParityFilter;
// END