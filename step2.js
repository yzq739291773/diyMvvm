// 实现数据劫持

var data = {
    name:'jack',
    friends:[1,2,3]
}

observe(data)

function observe(data){
    if(!data || typeof data !== 'object')  return

    for(var key in data){
        let val = data[key]   //注意1：这里是使用let,而没有使用var.结合闭包理解下

        Object.defineProperty(data, key, {
            enumerable:true,
            configurable:true,
            get:function(){
                console.log(`get ${val}`)
                return val     //注意2：这里不能使用data[key]，不然就会死循环
            },
            set:function(newVal){
                console.log(`change happen: ${val} => ${newVal}`)
                val = newVal
            }
        })

        if(typeof val === 'object'){
            observe(val)
        }
    }
}

data.friends[0] = 5
data.friends