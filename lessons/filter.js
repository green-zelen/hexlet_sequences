// Реализуйте и экспортируйте функцию filter для библиотеки html-tags, используя итеративный
// процесс:

// import { node, append, make, filter, toString as htmlToString } from 'hexlet-html-tags';

// const html1 = append(make(), node('h1', 'header1'));
// const html2 = append(html1, node('h1', 'header2'));
// const html3 = append(html2, node('p', 'content'));

// const processedHtml = filter((element) =>
//   !is('h1', element), html3);

// //<p>content</p>
// htmlToString(processedHtml);
// Реализуйте и экспортируйте функцию quotes, которая извлекает из html тексты цитат и
// возвращает список цитат.

// import { toString as pairToString } from 'hexlet-pairs-data';
// import { make, append, node } from 'hexlet-html-tags';

// const dom1 = make();
// const dom2 = append(dom1, node('h1', 'scheme'));
// const dom3 = append(dom2, node('p', 'is a lisp'));
// const dom4 = append(dom3, node('blockquote', 'live is life'));
// const dom5 = append(dom4, node('blockquote', 'i am sexy, and i know it'));

// listToString(quotes(dom5)); // ('i am sexy, and i know it', 'live is life');
// Примечание
// Функцию removeHeaders можно использовать для наглядного сопоставления частного варианта
// операции фильтрации с обобщённой реализацией операции отображения (собственно, filter).

import {
    l, isEmpty, head, tail, cons, reverse, toString,
  } from 'hexlet-pairs-data';
  
  import { getValue, is, map } from 'hexlet-html-tags';
  
  // BEGIN (write your solution here)
  export const filter = (foo, elements) => {
    if (isEmpty(elements)) {
      return l();
    }
    if (foo(head(elements))) {
      return cons(head(elements), filter(foo, tail(elements)));
    }
    return filter(foo, tail(elements));
  }
  
  export const quotes = (elements) => {
    let functionForFilter = (element) => {
      return is('blockquote', element);
    }
    let f = filter(functionForFilter, elements);
    return map(getValue, f);
  }
  // END
  
  export const removeHeaders = (elements) => {
    if (isEmpty(elements)) {
      return l();
    }
  
    const element = head(elements);
    const tailElements = tail(elements);
    if (is('h1', element)) {
      return removeHeaders(tailElements);
    }
    return cons(element, removeHeaders(tailElements));
  };
  