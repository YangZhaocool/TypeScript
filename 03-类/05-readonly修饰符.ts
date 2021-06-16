// ! readonly 修饰符
/**
 * * 是一个关键字
 * * 对类中的成员进行修饰
 * * 被修饰的属性成员，不能在外部进行修改了
 * ! 构造函数中可以对只读的属性进行修改
 * ! 如果构造函数中没有任何参数，类型的属性成员已经经过 readonly 修饰了，那么外部也不可以对属性进行修改
 * ! 构造函数中可以用readonly进行修饰，一旦修饰了该类中就有这个只读的成员属性了，外部可以访问但是不能修改
 * ! 构造函数可以用 public，private，protected进行修饰， 无论是哪个进行修饰，该类中都会自动的添加这么一个属性成员
 */
(() => {
  //! readonly 修饰类中属性
  class Person {
    // 初始值
    readonly name: string;
    constructor(name: string) {
      this.name = name;
    }
    say() {
      console.log("你好", this.name);
      //? 类中的普通方法中也不能修改 readonly 修饰的成员属性
      //this.name='??'
    }
  }
  const person = new Person("不好也行");
  console.log(person);
  console.log(person.name);
  // person.name = "??????/";
  // console.log(person.name);
  person.say();

  console.log("-----------------------------------------");

  //! readonly 修饰类中的构造函数中的参数
  class S {
    //? 构造函数中的name参数，一旦使用readonly进行修饰后，该name可以叫做参数属性
    //? 构造函数中的name参数，一旦使用readonly进行修饰后，那么S中就有一个name的属性成员
    //! 构造函数中的name参数，一旦使用readonly进行修饰后，外部也是无法修改内部name的属性值的
    constructor(readonly name: string) {
      this.name = name;
    }
    //? 构造函数中的name参数，一旦使用public进行修饰后，那么S中就有一个公共的name的属性成员
    // constructor(public name: string) {
    //   this.name = name;
    // }
    //? 构造函数中的name参数，一旦使用private进行修饰后，那么S中就有一个私有的name的属性成员
    // constructor(private name: string) {
    //   this.name = name;
    // }
    //? 构造函数中的name参数，一旦使用protected进行修饰后，那么S中就有一个受保护的name的属性成员
    //? 只能在本类或派生类中使用
    // constructor(protected name: string) {
    //   this.name = name;
    // }
  }
  const s = new S("不好也行A");
  console.log(s);
  console.log(s.name);
})();
