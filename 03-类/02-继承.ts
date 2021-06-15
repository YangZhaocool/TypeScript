//! 继承 类与类之间的关系
//! 继承后类与类之间的叫法
/**
 * ? A继承了B这个类，那么A叫子类，B叫基类
 * ? 子类---->派生类
 * ? 基类---->超类（父类）
 * ? 一旦发生了继承关系，就出现了父子类的关系
 */
(() => {
  //定义一个父类
  class Person {
    //定义属性
    name: string; //名字
    age: number;
    //定义构造函数
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    //定义实例方法
    say(str: string) {
      console.log(`我是${this.name},我${this.age}岁了${str}`);
    }
  }

  // 定义一个子类
  class Son extends Person {
    constructor(name: string, age: number) {
      //! 调用父级的构造函数，用super
      super(name, age);
    }
    //可以调用父类中的方法
    say() {
      //console.log("我是子级调用了父级");
      super.say("哈哈");
    }
  }
  const person = new Person("不好也行", 15);
  person.say("father");
  const son = new Son("子级", 15);
  son.say();

  //! 类和类之间如果有继承关系 使用extends
  //! 子类如果调用父级的构造函数用super的方法，如果调用父级的方法也用super
  //! 子类中可以重写父类的方法
})();
