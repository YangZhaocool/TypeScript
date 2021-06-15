//! 函数的类型
//! 通过接口的方式作为函数的类型来使用
//! 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。
(() => {
  // 定义一个函数的类型，作为某个函数的类型来使用
  interface ISearchFun {
    // *定义一个调用签名
    (source: string, sub: string): boolean;
  }
  // *定义一个函数，类型就是上面的接口
  const searchString:ISearchFun = function (source: string, sub: string): boolean {
    // 在source中寻找sub的
    return source.search(sub) > -1;
  };
  //* 调用函数
  console.log(searchString("哈哈唉", "唉"));
})();
