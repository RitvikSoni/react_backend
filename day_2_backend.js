






// const placeorder =(()=>{
//     return  new Promise ((resolve ,reject)=>{
//         setTimeout(() => {
//             console.log("production willl start");
//             resolve();
            
//         }, 1000);

//     })
// })
// const startproduction=(()=>{
//     return new Promise ((resolve ,reject)=>{
//         setTimeout(() => {
//             console.log("production willl start");
//             resolve();
            
//         }, 1000);

//     })
// })
// const printId=(()=>{
//     return new Promise ((resolve ,reject)=>{
//         setTimeout(() => {
//             console.log("production willl start");
//             resolve();
            
//         }, 1000);

//     })
// })
// const productname=(()=>{
//     return new Promise ((resolve ,reject)=>{
//         setTimeout(() => {
//             console.log("production willl start");
//             resolve();
            
//         }, 1000);

//     })
// })
// const productdirsc=(()=>{
//     return new Promise ((resolve ,reject)=>{
//         setTimeout(() => {
//             console.log("production willl start")
//             resolve()
            
//         }, 1000);

//     })
// })







// console.log("order is now going to take")
// placeorder()
// .then(()=>{
//     console.log("product is on production")
//     return startproduction();
// })
// .then(()=>{
//     console.log("id printing started")
//     return printId();
// })
// .then(()=>{
//     console.log("id printing started")
//     return productname();
// })
// .then(()=>{
//     console.log("id printing started")
//     return productdirsc();
// })



// function Delay(time){
//     return new Promise((resolve,reject))
//     {
//         setTimeout(() => {
//             resolve();
            
//         }, time);
//     }
// }



// async function placeorder (){
//     await Delay (2000);
//     console.log("ordder is taken ")

// }
// async function startproduction (){
//      await Delay (2000);
//     console.log("production started")

// }
// async function productid (){
//     await Delay (2000);
//     console.log("id printed")

// }
 
// async function productname (){
//      await Delay (2000);
//     console.log("prodect name")

// }
// async function productdesc (){
//      await Delay (2000);
//     console.log("desc")

// }
// async function main(){
//     await placeorder();
//     console.log("production is start")
//      await startproduction();
//     console.log("product id is")
//      await productid();
//     console.log("product id is")

//  await productname();
//     console.log("product name is")

//  await productdesc();
//     console.log("product is finished")

 

// }


// main();



// function delay(time){
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>{
//             resolve();
//         },time)
        
//     })
// }



// async function placeorder()
// {
//     await delay(2000);
//     console.log("order placed")
// }

// async function startproduction()
// {
//     await delay(2000);
//     console.log("production startedS")
// }

// async function PrintID()
// {
//     await delay(2000);
//     console.log("print id")
// }

// async function productname()
// {
//     await delay(2000);
//     console.log("product name")
// }

// async function productdescription()
// {
//     await delay(2000);
//     console.log("product desc")
// }

// async function main()
// {
//     await placeorder()
//     console.log("prder is now going to take place")
//     await startproduction()
//     console.log("production is started")
//     await PrintID()
//     console.log("id is printing")

//     await productname()
//     console.log("printing product name")
//     await productdescription()
//     console.log("printing product desc")

// }
// main()







