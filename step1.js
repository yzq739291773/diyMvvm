// Object.defineProperty的用法
let obj = {}
obj.name = 'jack'
obj['age'] = 18

Object.defineProperty(obj, 'sex', {
    // 控制该属性能否被删除  delete obj.sex
    // configurable:true,
    // 控制该属性能否被遍历
    enumerable:true,

    // 数据描述符
    // value:'man',
    // 控制该属性能否被赋值运算符修改
    // writable:true,

    // 存取描述符
    get:function(){
        console.log('get sex')
        return 'man'
    },
    set:function(val){
        console.log('set sex')
        sex = val
    }
})

// let temp = delete obj.sex

// console.log(temp)

obj.sex = 'woman'

console.log(obj.sex) 

// for(let data of obj){
//     console.log(data)
// }

// for(let i in obj){
//     console.log(obj[i])
// }

// array.forEach(element => {
//     console.log(element)
// });
// forEach： 数组  不能被break，continue中断
// for in： 对象的键（数组）  性能差，原型链也会遍历，顺序随机（不适合数组，适合稀疏数组的遍历）
// for of： 数组的值 解决上面所有问题，不能遍历普通对象

let arr1 = [1,2,0]
let arr2 = [3,4]
// let tmp = arr1.concat(arr2)  不改变原数组
// let tmp = arr1.join('?')   不改变原数组

// let tmp = arr1.pop()  改变原数组
// let tmp = arr1.push(3)  改变原数组
// let tmp = arr1.unshift(0)  改变原数组
// let tmp = arr1.shift() 改变原数组
// let tmp = arr1.reverse()   改变原数组
// let tmp = arr1.sort()  改变原数组
let tmp = arr1.splice(1,1,5)  //改变原数组

console.log(tmp)
console.log(arr1)
console.log(arr2)


