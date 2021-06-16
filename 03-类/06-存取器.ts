//! 存取器
/**
 * * 让我们可以有效的控制对 对象中成员的访问，
 * * 通过 getters 和 setters 来进行操作
 */
(() => {
  // 外部可以传入姓氏和名字数据，同时使用set和get控制姓名的数据，外部也可以进行修改的操作
  class Parson {
    firstName: string; //姓氏
    lastName: string; //名字
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    //姓名的成员属性，外部可以进行修改和访问
    //! 读取器---负责读取数据
    get fullName() {
      console.log("get中......");
      //* 姓名====> 姓氏和名字的拼接
      return this.firstName + "_" + this.lastName;
    }
    //! 设置器---负责设置数据（修改）
    set fullName(val) {
      console.log("set中......");
      console.log(val);

      //* 姓名====> 姓氏和名字取到，重新赋值和firstName和lastName
      let name = val.split("_");
      this.firstName = name[0];
      this.lastName = name[1];
    }
  }
  const person: Parson = new Parson("1", "2");
  //获取
  console.log("get person: ", person.fullName);
  //设置
  person.fullName = "11111_2";
  //console.log("set person: ", person.fullName);
})();
