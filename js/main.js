
let back=document.querySelector('.top')

back.addEventListener('click',()=>{
    window.scrollTo({top: 0, behavior: "smooth"})
})

window.addEventListener('scroll',()=>{
    let scrolling=document.scrollingElement.scrollTop
    if(scrolling >100){
        back.style.display='block'
    }else{
        back.style.display='none'
    }
})










































// let back=document.querySelector('.top')

// back.addEventListener('click',()=>{
//     window.scrollTo({top: 0, behavior: "smooth"})
// })


// window.addEventListener('scroll',()=>{
//     let scrolling=document.scrollingElement.scrollTop
//     if(scrolling > 100){
//         back.style.display='block'
//     }else{
//         back.style.display='none'
//     }
// })