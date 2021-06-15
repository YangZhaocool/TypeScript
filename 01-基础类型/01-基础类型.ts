// !基础类型
(() => {
  //! 布尔类型
  /**
   * * let 变量名：数据类型= 值
   */
  let flag: boolean = true;
  console.log("flag: ", flag);

  //! 字符串类型----->string
  let str: string = "我是一个字符串";
  console.log("str: ", str);

  //! 字符串和数字的拼接
  let str1: string = "我有怎么多的";
  let num: number = 1000;
  console.log(str1 + num);
  console.log("============================");

  /**
   * *  null表示"没有对象"，即该处不应该有值。典型用法是：
   * *    （1） 作为函数的参数，表示该函数的参数不是对象。
   * *    （2） 作为对象原型链的终点。
   * *  undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义。典型用法是：
   * *    （1）变量被声明了，但没有赋值时，就等于undefined。
   * *    （2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。
   * *    （3）对象没有赋值的属性，该属性的值为undefined。
   * *    （4）函数没有返回值时，默认返回undefined。
   */
  let und: undefined = undefined;
  let nul: null = null;
  console.log("nul: ", nul);
  console.log("und: ", und);
  //! undefined 和 null 都可以作为其他类型的子类型
  console.log("============================");

  //!数组类型
  //? 数组定义1
  // todo let 变量名：数据类型[]=[值1，值2]
  let arr1: number[] = [1, 2];
  console.log("arr1: ", arr1);

  //? 数组定义2：数组的泛型
  // todo  let 变量名：Array<数据类型>=[值1，值2]
  let arr2: Array<number> = [1, 2];
  console.log("arr2: ", arr2);

  //!元组类型
  //? 在定义数组的时候，类型和数据的个数一开始就已经限定了
  let arr3: [string, number, boolean] = ["11", 111.123, true];
  console.log("arr3: ", arr3);
  //* 元组类型在使用的时候，数据的类型的位置和数据的个数，
  //* 应该在定义元组的时候的数据类型及位置应该是一致的
  console.log(arr3[1].toFixed(2)); //保留两位的小树

  console.log("========================");
  //! 枚举的类型
  /**
   * ? 枚举里面的每个数据值都可以叫元素
   * ? 每个元素都有自己的编号
   * ? 编号是从0开始，依次递增
   */
  enum Color {
    red,
    blue,
    green,
  }
  let color: Color = Color.red;
  console.log("color: ", color);
  console.log(Color[2]);

  console.log("++++++++++");

  //! any 类型
  // * 当一个数组中存储多个数据的时候，个数不确定，类型不确定的时候，用any来定义
  // let str3: any = 100;
  // str3 = "111";
  let str3: any = [100, "4154", true];
  console.log("str3: ", str3);

  //! void
  // * 代表该函数没有任何的返回值
  function name(): void {
    console.log("llllllll");
  }
  name();
  console.log("========================");

  //! object
  //*
  function getObj(obj: object): object {
    console.log(obj);
    return {
      name: "??",
      age: 12,
    };
  }
  console.log(getObj({ name: "11", age: 15 }));
  console.log("========================");

  //! 联合类型
  //* 表示取值可以为多种类型中的一种
  //定义一个一个函数得到一个数字或字符串值的字符串形式值
  function getString(str: number | string): string {
    return str.toString();
  }
  console.log("getString: ", getString(1221));

  //! 类型断言
  //定义一个一个函数得到一个数字或字符串值的长度
  //* 告诉编译器，我知道我自己个在干啥
  /**
   * todo 断言的方式1 ：<类型名>变量名
   * todo 断言的方式2：值 as 类型
   */
  // function getS(str: number | string) {
  //   if ((<string>str).length) {
  //     return (<string>str).length;
  //   } else {
  //     return str.toString().length;
  //   }
  // }
  function getS(str: number | string) {
    if ((str as string).length) {
      return (str as string).length;
    } else {
      return str.toString().length;
    }
  }
  console.log("getS: ", getS(12));
  console.log("getS: ", getS("451"));

  console.log("========================");

  //! 类型推断
  //* 在没有明确指定类型的时候推断出一个类型
  // let text = 100; //数字类型
  // console.log(text);
  let text; //断言为any
  text = 100;
  text = "454";
  console.log("text: ", text);
})();
