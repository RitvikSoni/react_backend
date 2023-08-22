


// const starttraining =(callback)=>{
//     setTimeout(() => {
//         console.log('training searching')
// callback()
//     }, 1000);
// }
// const passtraining =(callback)=>{
//     setTimeout(() => {
//         console.log('training started')
// callback()
//     },2000);
// }
// const startlinux =(callback)=>{
//     setTimeout(() => {
//         console.log('linux started')
// callback()
//     }, 3000);
// }
// const startgit =(callback)=>{
//     setTimeout(() => {
//         console.log('git done')
// callback()
//     }, 3000);
// }
// const starthtml =(callback)=>{
//     setTimeout(() => {
//         console.log('html done')
// callback()
//     }, 3000);
// }
// const startcss =(callback)=>{
//     setTimeout(() => {
//         console.log('css done')
// callback()
//     }, 3000);
// }
// const startjs =(callback)=>{
//     setTimeout(() => {
//         console.log('js done')
// callback()
//     }, 3000);
// }
// console.log("order training in regex");
// starttraining(()=>{
//     console.log('pass to training');
//     passtraining(()=>{
//         console.log('linux start');
//         startlinux(()=>{
//             console.log('start github');
//             startgit(()=>{
//                 console.log('start html');
//                 starthtml(()=>{
//                     console.log('start css');
//                     startcss(()=>{
//                         console.log('start karo js');
//                         startjs(()=>{
//                             console.log('training done')
//                         })
//                     })
//                 })
//             })
//         })
//     })

// })







const makingBurgir =(callback)=>{
    setTimeout(() => {
        console.log('burger making')
 callback()
     }, 1000);
 }
const getBread =(callback)=>{
    setTimeout(() => {
        console.log('bread add')
 callback()
     }, 1000);
 }
 const getTikki =(bread,callback)=>{
    setTimeout(() => {
        console.log(`${bread} & tikki added`)
 callback()
     }, 1000);
 }
  const addSauce =(bread,tikki,callback)=>{
    setTimeout(() => {
        console.log(`${bread}, ${tikki} added`)
 callback()
     }, 1000);
 }




 makingBurgir(()=>{
    console.log("making burgur")
    getBread(()=>{
        console.log("got bread")
        getTikki("bread",()=>{
            console.log("got tikki")
            console.log("got bread")
            addSauce("bread","tikki",()=>{
                console.log("bread add")
                console.log("burger complt")
            })
        })
           
    })
})