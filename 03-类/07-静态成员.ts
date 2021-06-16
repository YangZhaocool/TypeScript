//! 静态成员
/**
 *  * 在类中通过static修饰的属性或方法
 *  * 要么就是静态的属性及静态的方法，也称之为：静态成员
 *  ! 静态成员在是用的时候是通过类名.的这种方法来调用的
 */
(() => {
  class Person {
    //? 静态属性
    //? 类中默认有一个内置的name属性，所以此时会报错
    static name1: string = "????";
    //name1: string;
    //? 构造函数不能通过static来修饰
    constructor(name: string) {
      /**
       * ? 此时this是实例对象，name1是静态属性
       * ? 不能通过实例对象直接调用静态属性来使用
       */
      //this.name1 = name1;
    }
    //? 静态方法
    static say() {
      console.log("111111111");
    }
  }
  //const person: Person = new Person();
  //? 通过实例对象来调用的属性（实例属性）
  //console.log(person.name1);
  //? 通过实例对象调用的方法（实例方法）
  //person.say();
  //? 通过类名.静态属性的方式来访问该成员数据
  console.log(Person.name1);
  //? 通过类名.静态属性的方式来设置该成员数据
  Person.name1 = "456465";
  console.log(Person.name1);
  //? 通过类名.静态属性的方式来调用内部的静态的方法
  Person.say();
})();
