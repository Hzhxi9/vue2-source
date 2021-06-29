import Compile from "./Compile";

class Vue {
  constructor(options) {
    /**把参数options对象存为$options */
    this.$options = options || [];

    /**数据 */
    this._data = options.data || undefined;

    /**数据要变为响应式 */

    /**模板编译 */
    new Compile(options.el, this);
  }
}

window.Vue = Vue;
