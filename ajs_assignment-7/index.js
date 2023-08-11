function logOne(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve ('one');
        },Math.random() *1000)
    })
}
function logTwo(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve ('two');
        },Math.random() *1000)
    })
}
function inOrder(logOne,logTwo){
    logOne().then((resp) => {
        console.log(resp);
        logTwo().then((resp) => {
            console.log(resp);
        })
    })
}
inOrder(logOne,logTwo);