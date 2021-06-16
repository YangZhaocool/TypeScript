//! 函数重载
//! 函数的名字相同，函数的参数及个数不同
(() => {
  //定义一个函数
  /**
   * *我们有一个add函数，它可以接收2个string类型的参数进行拼接，也可以接收2个number类型的参数进行相加
   */
  // 函数重载声明
  function name(x: string, y: string): string;
  function name(x: number, y: number): number;
  // 函数声明
  function name(x: number | string, y: number | string): number | string {
    if (typeof x === "string" && typeof y === "string") {
      return x + y;
    } else if (typeof x === "number" && typeof y === "number") {
      return x + y;
    }
    return "";
  }
  //函数调用
  console.log(name("诸葛", "孔明"));
  console.log(name(10, 10));
  //? 如果传入的是非法的数据
  //console.log(name("嗷嗷", 10));
})();
