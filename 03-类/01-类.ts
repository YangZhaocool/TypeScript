//! 类 可以理解为模板，通过模板来实例化对象
//! 面向对象的编程思想
(() => {
  //* ts中的类的定义和使用
  class Person {
    //* 定义属性
    name: string;
    age: number;
    //* 定义构造函数：为了将来实例化对象的时候，可以直接对对象的值进行初始化
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    //* 定义实例方法
    say(str: string) {
      console.log(`我是${this.name},今年${this.age}`, str);
    }
  }
  //* ts中使用类
  const person = new Person("不好也行", 15);
  person.say("你好");
})();
