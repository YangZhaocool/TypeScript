//! 可选参数 函数在声明的时候，内部的参数使用了?进行修饰， 那么这个参数可以传入也可以不传入，可以叫做可选参数
//! 默认参数 函数在声明的时候，内部的参数有自己的默认值，此时这个参数就可以叫做默认参数
(() => {
  //?定义一个函数
  /**
   * * 传入姓氏和名字，可以得到姓名（姓氏+名字=姓名）
   * * 需求：如果不传入任何内容，那么返回默认的姓氏
   * * 需求：如果只传入姓氏，那么返回姓氏
   * * 需求：如果传入姓氏和名字，那么返回的就是姓名
   */
  const getName = function (firstName: string = "令", lastName?: string) {
    //? 判断名字是否传入
    if (lastName) {
      return firstName + "_" + lastName;
    } else {
      return firstName;
    }
  };
  //?函数调用
  //什么也不传
  console.log(getName());
  //只传入姓氏
  console.log(getName("诸葛"));
  //传入姓氏和名字
  console.log(getName("诸葛", "曹操"));
})();
