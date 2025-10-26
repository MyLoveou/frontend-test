
// // 迭代器实现
// let infor = {
//   bears: ['ice', 'panda', 'grizzly'],
//   [Symbol.iterator]: function () {
//     let index = 0
//     let _iterator = {
//       next: () => {
//         if (index < this.bears.length) {
//           return { done: false, value: this.bears[index++] }
//         }
//         return { done: true, value: undefined }
//       }
//     }
//     return _iterator
//   }
// }

// // bind函数实现需要三步
// // 1. 修改this指向
// // 2. 动态传入参数
// // 3，兼容new关键字
// Function.prototype.myBind = function (context) {
//   // 判断调用对象是否是函数
//   if (typeof this !== 'function') {
//     throw new TypeError('Error')
//   }
//   // 获取参数
//   const args = [...arguments].slice(1), fn = this

//   return function Fn() {
//     // 根据调用方式，传入不同绑定值
//     return fn.apply(this instanceof Fn ? this : context, args.concat(...arguments))
//   }
// }

// // 简单响应式实现
// let product = { price: 10, quantity: 2 }, total = 0;
// const targetMap = new WeakMap();     // ① 初始化 targetMap，保存观察对象
// const effect = () => { total = product.price * product.quantity };
// const track = (target, key) => {     // ② 收集依赖
//   let depsMap = targetMap.get(target);
//   if (!depsMap) {
//     targetMap.set(target, (depsMap = new Map()));
//   }
//   let dep = depsMap.get(key);
//   if (!dep) {
//     depsMap.set(key, (dep = new Set()));
//   }
//   dep.add(effect);
// }

// const trigger = (target, key) => {  // ③ 执行指定对象的指定属性的所有副作用
//   const depsMap = targetMap.get(target);
//   if (!depsMap) return;
//   let dep = depsMap.get(key);
//   if (dep) {
//     dep.forEach(effect => effect());
//   }
// };

// track(product, 'price');
// console.log(`total: ${total}`); // total: 0
// effect();
// console.log(`total: ${total}`); // total: 20
// product.price = 20;
// trigger(product, 'price');
// console.log(`total: ${total}`); // total: 40

// // 使用Proxy实现响应式
// function reactive(target) {
//   const handler = {
//     get(target, key, receiver) {
//       console.log('正在读取数据：', key)
//       return Reflect.get(target, key, receiver)
//     },
//     set(target, key, value, receiver) {
//       console.log('正在修改的数据：', key, '，值为：', value)
//       return Reflect.set(target, key, value, receiver)
//     }
//   }
//   return new Proxy(target, handler)
// }
// let product = reactive({ price: 10, quantity: 2 })
// product.price = 20
// console.log(product.price)


// // 红绿灯交替
// function red() {
//   console.log('red')
// }


// function green() {
//   console.log('green')
// }

// function yellow() {
//   console.log('yellow')
// }

// const light = function (timer, cb) {
//   return new Promise(resolve => {
//     cb()
//     setTimeout(() => {
//       resolve()
//     }, timer) // 通过计时器延迟进入resolve状态
//   })
// }

// const step = function () {
//   Promise.resolve().then(() => {
//     return light(3000, red)
//   }).then(() => {
//     return light(2000, green)
//   }).then(() => {
//     return light(1000, yellow)
//   }).then(() => {
//     return step()
//   })
// }

// step()
// // 只能使用new来声明函数
// function Person(firstName, lastName) {
//   if (!(this instanceof Person)) { // 通过使用instanceof判断是否是使用new调用
//     // 最好的方法是使用new.target判断调用方式
//     throw new TypeError('Function constructor A cannot be invoked without "new"')
//   }
//   this.firstName = firstName
//   this.lastName = lastName
//   this.fullName = this.firstName + this.lastName
// }

// // 判断字符串长度
// function unicodeLength(str){
//   return Array.from(str).length
// }


var name = 'test'
console.log(this.name)

// 使用setTimeout实现SetInterval
// function mySetInterval(fn, timeout){
//   var timer = {
//     flag: true
//   }
//   function interval(){
//     if(timer.flag){
//       fn()
//       setTimeout(interval, timeout)
//     }
//   }
//   setTimeout(interval, timeout)
//   return timer
// }

// let s = 0
// function test(){
//   console.log(s++)
// }
// mySetInterval(test,1000)