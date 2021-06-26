import observe from "./observe";
/**
 *
 * @param {object】} data
 * @param {string} key
 * @param {*} val
 */
function defineReactive(data, key, val) {
  console.log("defineReactive", key);
  if (arguments.length === 2) {
    val = data[key];
  }

  /**
   * 子元素要进行observe，至此形成递归
   * 这个递归不是函数自己调用自己
   * 而是多个函数，类循环调用
   */
  let childOb = observe(val);

  /**构造闭包环境 */
  Object.defineProperty(data, key, {
    /**可枚举 */
    enumerable: true,
    /**可以被配置，比如可以被delete */
    configurable: true,
    /**数据劫持 getter */
    get() {
      console.log("试图访问" + key + "属性");
      return val;
    },
    /**setter */
    set(newValue) {
      console.log("你试图改变" + key + "属性", newValue);
      if (val === newValue) return;
      val = newValue;
      /**当设置了新值，这个新值也要被observe */
      childOb = observe(newValue);
    },
  });
}

export default defineReactive;