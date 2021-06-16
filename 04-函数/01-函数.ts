//! 函数
/**
 * * 封装了一些复杂是用的代码
 * * 在使用的时候直接调用
 */
(() => {
  //todo js中的书写方式------->ts中也可以这么写
  //? 函数声明，命名函数
  // function add(x, y) {
  //   return x + y;
  // }
  //? 函数表达式，匿名函数
  // const add2 = (x, y) => {
  //   return x + y;
  // };
  //todo ts中的书写方式
  //? 函数中的x和y的参数类型都是number，小括号后面的: number代表的是返回值，也是number类型
  function add(x: number, y: number): number {
    return x + y;
  }
  const result: number = add(11, 22);
  console.log("result: ", result);
  //? 函数中的x和y的参数类型都是string，小括号后面的: string代表的是返回值，也是string类型
  const add2 = (x: string, y: string): string => {
    return x + y;
  };
  console.log(add2("11", "22"));

  //todo 函数的完整的写法
  //? add3--->变量名--->函数add3
  //? (x: number, y: number) => number 当前这个函数的类型
  //? function (x: number,y: number): number {return x + y;} 相当于符合上面的这个函数类型的值
  const add3: (x: number, y: number) => number = function (
    x: number,
    y: number
  ): number {
    return x + y;
  };
  console.log(add3(1, 2));
})();
