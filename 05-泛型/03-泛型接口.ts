// ! 泛型接口
/**
 * * 在定义接口时, 为接口中的属性或方法定义泛型类型
 * * 在使用接口时, 再指定具体的泛型类型
 */
(() => {
  /**
   * * 定义一个类，用来存储用户的相关信息（id，名字，年龄）
   * * 通过一个类的实例对象，调用add方法，可以添加多个用户信息对象
   * * 调用 getUserId可以根据id获取某个指定的用户信息对象
   */
  //? 定义一个泛型接口
  interface IBaseCRUD<T> {
    data: Array<T>;
    add: (t: T) => T;
    getUserId: (id?: number) => T | undefined;
  }
  //? 定义一个用户信息的类
  class User {
    id?: number;
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
  //? 定义一个可以针对用户的信息对象进行增加及查询的操作
  //! CRUD---->create,read,update,delete
  class UserCRUD implements IBaseCRUD<User> {
    data: Array<User> = [];
    //存储用户信息对象
    add(user: User): User {
      // 生成id
      user.id = Date.now() + Math.random();
      // 把用户信息对象添加到data
      this.data.push(user);
      return user;
    }
    //根据id查询指定的用户信息对象
    getUserId(id?: number): User | undefined {
      return this.data.find((user) => user.id === id);
    }
  }
  //实例化添加用户信息对象的类UserCRUD
  const userRUD: UserCRUD = new UserCRUD();
  console.log(userRUD.data);
  userRUD.add(new User("名字", 20));
  const { id } = userRUD.add(new User("名字1", 21));
  userRUD.add(new User("名字2", 22));
  //? 根据id查询指定的用户信息对象
  const user = userRUD.getUserId(id);
  console.log("user: ", user);
})();
