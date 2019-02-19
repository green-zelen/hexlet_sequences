// Все создаваемые функции, в рамках этого задания, должны быть реализованы независимо друг от
// друга, то есть их нельзя использовать для реализации друг друга.

// list.js
// Реализуйте и экспортируйте функцию has, которая проверяет, является ли переданное значение
// элементом списка.

// const numbers = l(3, 4, 5, 8);
// has(numbers, 8); // true
//has(numbers, 0); // false
//Реализуйте и экспортируйте функцию reverse, которая переворачивает список, используя
// итеративный процесс.

//const numbers = l(3, 4, 5);
//reverse(numbers); // (5, 4, 3)
//Реализуйте и экспортируйте функцию concat, которая соединяет два списка, используя
// рекурсивный процесс (попробуйте сначала представить, как работала бы функция copy,
// которая принимает на вход список и возвращает его копию).

//const numbers = l(3, 4, 5, 8);
//const numbers2 = l(3, 2, 9);
//concat(numbers, numbers2); // (3, 4, 5, 8, 3, 2, 9)

//import { l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data'; 
// eslint-disable-line

// BEGIN (write your solution here)
export const has = (list, n) => {
  if (isEmpty(list) === true) {
    return false;
  } else if (n === head(list)) {
    return true;
  }
  return has(tail(list), n);
};


export const reverse = (list) => {
  let res = l();
  while(isEmpty(list) !== true) {
    res = cons(head(list), res);
    list = tail(list);
  }
  return res;
}

export const concat = (list1, list2) => {
  if (isEmpty(list1) === true) {
    return list2;
  }
  return cons(head(list1), concat(tail(list1), list2));
}



// let tempList = l(head(tail(tail(list))), head(tail(list)), head(list));
