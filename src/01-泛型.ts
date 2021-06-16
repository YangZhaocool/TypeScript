//! 泛型：在定义函数、接口、类的时候不能预先确定数据的类型，
//!       而是在使用函数、接口、类的时候才能确定数据的类型
(() => {
  /**
   * *需求：定义一个函数，传入两个参数，第一参数是数据，第二个参数是数量
   * *函数的作用：根据数量产生对应个数的数据，放在一个数组中
   */
  //定义函数
  function getArr<T>(num: T, count: number): T[] {
    //根据数据和数量产生一个数组
    //const array: T[] = [];
    const array: Array<T> = [];
    for (let i = 0; i < count; i++) {
      array.push(num);
    }
    return array;
  }
  const arr1 = getArr<number>(100.123, 3);
  console.log("arr1: ", arr1);
  console.log(arr1[0].toFixed(1));

  const arr2 = getArr<string>("abc", 4);
  console.log("arr2: ", arr2);
  console.log("11", arr2[0].split(""));
})();
