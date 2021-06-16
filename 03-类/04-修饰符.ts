//! 修饰符
/**
 * *类中成员的修饰符
 * *主要是描述类中的成员（属性，构造函数，方法）的可访问性
 * *类中的成员都有自己默认的访问修饰符，public
 * ! public---公共，是类中成员默认的修饰符，代表的是公共的，任何位置都可以访问类中的成员
 * ! private---私有 是私有的，类中的成员如果用private来修饰，外部是无法访问的,当然子类中也无法访问该成员数据
 * ! protected---受保护的，只能子类访问，类中的成员如果用protected来修饰，外部是无法访问的
 */

(() => {
  class Person {
    //? 属性 public 修饰了属性成员
    //public name: string;
    //? 属性 private 修饰了属性成员
    //private name: string;
    //? 属性 protected 修饰了属性成员
    protected name: string;
    public constructor(name: string) {
      this.name = name;
    }
    public set() {
      console.log("嗯", this.name);
    }
  }

  class son extends Person {
    constructor(name: string) {
      super(name);
    }
    play() {
      console.log("玩", this.name);
    }
  }
  const person = new Person("大石窝");
  //? 类的外部可以访问类中的属性成员
  // console.log(person.name);
  // person.set();
  //? 
  const son1 = new son("kk");
  son1.play();
  
})();
