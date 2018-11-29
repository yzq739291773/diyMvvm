// 观察者模式

function Subject(){
    this.observers = []
}

Subject.prototype.addObserver = function(observer){
    this.observers.push(observer)
}

Subject.prototype.removeObserver = function(observer){
    let index = this.observers.indexOf(observer)
    if(index > -1){
        this.observers.splice(index,1)
    }
}

Subject.prototype.notify = function(){
    this.observers.forEach(function(observer){
        observer.update()
    })
}

function Observer(name){
    this.name = name
    this.update = function(){
        console.log(name + '---update...')
    }
}

// 创建主题
var subject = new Subject()

// 创建观察者1
var observer1 = new Observer('hunger')
subject.addObserver(observer1)
// 创建观察者2
var observer2 = new Observer('valley')
subject.addObserver(observer2)

// 主题通知所有观察者更新
subject.notify()