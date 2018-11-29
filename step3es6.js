// 观察者模式  es6写法改进

class Subject{
    constructor(){
        this.observers = []
    }
    addObserver(observer){
        this.observers.push(observer)
    }
    
    removeObserver(observer){
        let index = this.observers.indexOf(observer)
        if(index > -1){
            this.observers.splice(index,1)
        }
    }
    
    notify(){
        this.observers.forEach(function(observer){
            observer.update()
        })
    }
}

class Observer{
    constructor(name){
        this.name = name
    }
    update(){
        console.log(this.name + '---update...')
    }
    subscribeTo(subject){
        subject.addObserver(this)
    }
}

let subject = new Subject()

// 这种方法是主题添加观察者，而实际上这些东西都是有观察者主动的，应次在Observer添加订阅subscribeTo方法，从而有了下面的优化
// let observer1 = new Observer('jack')
// subject.addObserver(observer1)

// let observer2 = new Observer('lili')
// subject.addObserver(observer2)



let observer1 = new Observer('jack')
observer1.subscribeTo(subject)

let observer2 = new Observer('jack')
observer2.subscribeTo(subject)

subject.notify()
