/*
  1. Объявите и вызовите функцию, которая выводит в консоль сумму двух чисел.
   Вызов функции должен быть раньше её объявления.
*/
{
  const a = 5;
  const b = 7;
  // you code here...
}

/*
  2. Объявите и вызовите функцию, которая возвращает сумму трёх чисел.
  Функция должна быть присвоена в переменную, результат вызова вывести в консоль.
*/
{
  const a = 5;
  const b = 7;
  const c = 15;
  // you code here...
}

/*
  3. Напишите функцию, которая возвращает сумму любого количества переданых ей чисел.
*/
{
  const a = 5;
  const b = 7;
  const c = 15;
  const d = 4;
  const e = 72;
  function sumNumbers(/* you code here... */) {
    // you code here...
  }
  console.log(sumNumbers(a, c), " = 20");
  console.log(sumNumbers(a, b, c), " = 27");
  console.log(sumNumbers(a, b, c, d, e), " = 103");
}

/*
  4. Напишите функцию, которая возвращает большее из любого количества переданых ей чисел (Аналог Math.max)
*/
{
  const a = 5;
  const b = 7;
  const c = 15;
  const d = 4;
  const e = 72;
  function max(/* you code here... */) {
    // you code here...
  }
  console.log(max(a, c), "= 15");
  console.log(max(a, b, c), "= 15");
  console.log(max(a, b, c, d, e), "= 72");
}

/*
  5. Напишите функцию, которая возвращает число в заданной степени (первый аргумент - основание, второй - степень).
  Но, если второй аргумент не передан, то возвращает квадрат числа.
*/
{
  const a = 5;
  const b = 3;
  const c = 7;
  function pow(/* you code here... */) {
    // you code here...
  }
  console.log(pow(a, b), "= 125");
  console.log(pow(c), "= 49");
}

/*
  6. Напишите функцию, которая принимает 2 аргумента: возраст (натуральное число) и флаг доступа (булевое значение).
  Если доступ запрещён, то функция возвращает строку "denied" независимо от возраста. Если доступ разрещён, то
  для возраста от 0 до 17 возвращает строку "so young", для возраста 18 - 40 "success", для возраста 41+ "so old".
  Не использовать внутри функции блоки else!
*/
{
  function checkAccess(age, isPermitted) {
    // you code here...
  }
  console.log(checkAccess(17, true), "= so young");
  console.log(checkAccess(18, true), "= success");
  console.log(checkAccess(40, true), "= success");
  console.log(checkAccess(41, true), "= so old");
  console.log(checkAccess(17, false), "= denied");
  console.log(checkAccess(18, false), "= denied");
  console.log(checkAccess(40, false), "= denied");
  console.log(checkAccess(41, false), "= denied");
}

/*
  7. Напишите функцию, которая принимает 2 аргумента: строку и одиночный символ. Возвращает количество вхождений
  данного символа в строку.
*/
{
  function includeCount(str, symbol) {
    // you code here...
  }
  console.log(includeCount("Hello world!", "o"), "= 2");
  console.log(includeCount("Hello world!", "l"), "= 3");
  console.log(includeCount("Hello world!", "w"), "= 1");
  console.log(includeCount("Hello world!", "h"), "= 0");
}

/*
  8. Напишите функцию, которая принимает два аргумента: число и функцию-коллбек. Если число будет больше 10,
  то функция-коллбек будет вызвана с этим числом в качестве аргумента, иначе - нет.
*/
{
  function conditionalExecute(num, cb) {
    // you code here...
  }

  const logger = (arg) => {
    console.log(`Execute with ${arg}`);
  };
  conditionalExecute(5, logger); // ничего не выводит в консоль
  conditionalExecute(12, logger); // в консоли Execute with 12
}

/*
  9. Напишите функцию генератор счётчиков. Она должна принимать на вход инициирующее значение (натуральное число)
  и возвращать другую функцию. Каждый вызов этой возвращённой функции должен возвращать число, на 1 больше предидущего,
  начиная с инициирующего значения. Все счётчики должны работать независимо. Если инициирующее значение не передано, то
  счёт начинать с 0.
*/
{
  function createCount(init) {
    // you code here...
  }

  const count_1 = createCount();
  const count_2 = createCount(5);
  const count_3 = createCount(10);
  // console.log(count_1(), "= 1");
  // console.log(count_1(), "= 2");
  // console.log(count_1(), "= 3");
  // console.log(count_2(), "= 6");
  // console.log(count_1(), "= 4");
  // console.log(count_3(), "= 11");
  // console.log(count_2(), "= 7");
  // console.log(count_3(), "= 12");
  // console.log(count_1(), "= 5");
}

/*
  10. Напишите рекурсивную функцию, которая принимает на вход натуральное число, и последовательно выводит
  в консоль чётные числа меньше входного числа в порядке убывания. Например, если на вход передано 11, то в консоль
  должны быть выведено:
  10
  8
  6
  4
  2
  Если число чётное, то его тоже нужно вывести первым. Ноль в конце не выводится.
*/
{
  function logEvenNumbers(num) {
    // you code here...
  }

  logEvenNumbers(15);
  logEvenNumbers(8);
}
