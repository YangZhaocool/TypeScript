//! 剩余参数 rest
/**
 * ! 剩余参数是放在函数声明的时候所有的参数的最后
 */
(() => {
  //? ...args: string[] ----> 剩余的参数，放在了一个字符串的数组中
  function name(str: string, ...args: string[]) {
    console.log("str: ", str); // 拿到了a
    console.log("args: ", args); // 拿到了 b c
  }
  name("a", "b", "c");
})();
