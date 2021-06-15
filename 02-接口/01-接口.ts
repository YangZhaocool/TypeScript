// ! 接口
// ! 是对象的状态(属性)和行为(方法)的抽象(描述)
// ! 是一种类型，是一种规范或者一种规则或者一种约束或者一种能力
/**
 * ! 接口类型的对象
 *   ! 可选属性: ?
 *   ! 只读属性: readonly
 */
(() => {
  // *需求: 创建人的对象, 需要对人的属性进行一定的约束;
  // *id是number类型, 必须有, 只读的;
  // *name是string类型, 必须有;
  // *age是number类型, 必须有;
  // *sex是string类型, 可以没有;
  // todo 定义一个接口，该接口作为person对象类型的使用，限定或约束该对象属性数据
  interface IPerson {
    //* readonly id 是只读的
    readonly id: number;
    name: string;
    age: number;
    //* ? 可选属性
    sex?: string;
  }
  // todo 定义一个对象，该对象的类型就是我定义的接口
  const person: IPerson = {
    id: 11,
    name: "45",
    age: 15,
    // sex: "不知道",
  };
  console.log("person: ", person);
})();
