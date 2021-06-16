//! 泛型类
/**
 * * 定义一个类，类中的属性值的类型不确定
 * * 方法中的参数的类型也不确定
 */
(() => {
  class GenericNumber<T> {
    defaultValue?: T;
    add?: (x: T, y: T) => T;
    constructor(defaultValue?: T, add?: (x: T, y: T) => T) {
      if (defaultValue && add) {
        this.defaultValue = defaultValue;
        this.add = add;
      }
    }
  }
  //? 在实例化对象的时候，再确定泛型的类型
  const g1: GenericNumber<number> = new GenericNumber<number>();
  //? 设置属性值
  g1.defaultValue = 100;
  //? 添加的方法
  g1.add = function (x, y) {
    return x + y;
  };

  console.log(g1.add(10, 20));

  //? 在实例化对象的时候，再确定泛型的类型
  const g2: GenericNumber<string> = new GenericNumber<string>();
  //? 设置属性值
  g2.defaultValue = "100";
  //? 添加的方法
  g2.add = function (x, y) {
    return x + y;
  };
  console.log(g2.add("10", "10"));
})();
