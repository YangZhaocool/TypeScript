//! 抽象类
/**
 * * 包含抽象的方法（抽象方法一般没有任何的具体内容实现）
 * * 也可以包含实例方法
 * ! 抽象类不能被实例化
 * * 作用：为了让子类进行实例化及实现内部的抽象方法
 * ! 目的或者作用最终都是为子类服务的
 */
(() => {
  //定义抽象类
  abstract class Animal {
    //? 抽象属性
    //abstract name: string;
    //? 抽象方法
    //? 抽象的方法不能有具体的实现
    // abstract eat() {
    //   console.log("就是吃");
    // }
    abstract eat(): any;
    //? 实例方法
    say() {
      console.log("说话啊");
    }
  }
  // 定义一个子类（派生类）
  class Dog extends Animal {
    //name: string = "54";
    //? 重新实现抽象类中的方法
    //? 此时这个方法就是Dog类的实例方法
    eat() {
      console.log("跪着吃");
    }
  }
  // 实例化dog的对象
  const dog: Dog = new Dog();
  dog.eat();
  //? 调用的是抽象类中的实例方法
  dog.say();
  // console.log(dog.name);

  //?不能实例化抽象类的对象
  //const animal:Animal = new Animal();
})();
