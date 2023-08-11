function logOne(){
    return new Promise((resolve,reject) => {
        setTimeOut(() =>{
            resolve(' one');
        })
    },Math.random() * 1000)
}
function logTwo(){
    return new Promise((resolve,reject) => {
        setTimeOut(() => {
            resolve('two');
        })
    },Math.random() * 1000)
}
function inOrder(logOne,logTwo){
    logOne().then((resp) => {
        console.log('one');
        logTwo().then((resp) => {
            console.log('two');
        })
    })
    
}
inOrder(logOne,logTwo);