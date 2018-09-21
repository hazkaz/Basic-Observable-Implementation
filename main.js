var value = true;

function notifySubscribers(value) {
    this.subscribers.forEach((callback) => callback(value))
}

function ariyikkuka(callback) {
    this.subscribers.push(callback);
}

function FromEvent(element,event) {
    const see = new Seeable();
    see.event = event
    element.addEventListener(event,see.listener)
    return see;
}

function listener(event) {
    setTimeout(()=>{
        this.notifySubscribers(event)
    }, 1000);
}

function Seeable() {
    this.subscribers = [];
    this.event = null;
    this.listener = listener.bind(this);
    this.notifySubscribers = notifySubscribers.bind(this);
    this.ariyikkuka = ariyikkuka;
}

Seeable.FromEvent = FromEvent;

window.onload = ()=>{
const button = document.querySelector('#input');
const label1 = document.querySelector('#output1');
const label2 = document.querySelector('#output2');
const label3 = document.querySelector('#output3');

const ariyippu = new Seeable.FromEvent(button,'click')
console.log(ariyippu);

ariyippu.ariyikkuka((value) => {
    label1.innerHTML = "1st Subscriber!";
})

ariyippu.ariyikkuka((value) => {
    label2.innerHTML = "2nd subscriber!";
})

ariyippu.ariyikkuka((value) => {
    label3.innerHTML = "3rd subscriber!";
})
}
