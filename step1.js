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

