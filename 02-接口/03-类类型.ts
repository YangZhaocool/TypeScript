//! 类 类型：类的类型可以通过接口来实现
(() => {
  //? 定义一个接口
  interface IFly {
    //* 该方法没有任何的实现（什么都没有）
    fly(): any;
  }
  //? 定义一个类。这个类的类型上上面定义的接口(实际上，IFly约束了当前的这个Person的类)
  class Person implements IFly {
    //? 实现接口中的方法
    fly() {
      console.log("看看我");
    }
  }
  //? 实例化对象
  const person = new Person();
  person.fly();

  interface ISwim {
    swim(): any;
  }
  //todo 定义一个类，这个类的类型就是IFly和ISwim（当前这个类可以实现多个接口，一个类可以被多个接口进行约束）

  class Person2 implements IFly, ISwim {
    fly() {
      console.log("看看我,我是第二个");
    }
    swim() {
      console.log("看看我 我是第二个");
    }
  }
  const person2 = new Person2();
  person2.fly();
  person2.swim();

  //! 类可以通过接口的方式，来定义当前这个类的类型
  //! 类可以实现一个接口，类也可以实现多个接口，要注意，接口中的内容都要真正的实现
  //! 接口可以继承其他人的多个接口

  //定义了一个接口，并且继承了上面的接口
  interface IWan extends Person2, Person {}

  //定义一个类，直接实现IFly和ISwim
  class Person3 implements IWan {
    fly() {
      console.log("看看我,我是3个");
    }
    swim() {
      console.log("看看我 我是第3个");
    }
  }
  const person3 = new Person3();
  person3.fly();
  person3.swim();

  //! 接口和接口之间叫继承（使用的是extends）
  //! 类和接口之间叫实现（使用的是implements）
})();
