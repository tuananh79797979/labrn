const promise1 = new Promise((resolve, reject) => {
setTimeout( () =>{
    resolve("Hoan thanh promise 1");
}, 2000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout( () => {
        resolve("Hoan thanh promise 2");
    }, 3000);
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout( () => {
        resolve("Hoan thanh promise 3");
    }, 4000);
});
Promise.allSettled([promise1, promise2,promise3]).then(( results) =>{
    console.log(" Tat ca cac promise da hoan thanh");
    results.forEach((results) => {
        if(results.status === "fulfilled"){
            console.log("Promise hoan thanh: ", results.value);
        }else{
            console.log("Promise that bai: ", results.reason);
        }
    });

});