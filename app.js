const nums = document.querySelectorAll(".num")
var delay = 0.1
// window.addEventListener("scroll",()=>{
//     console.log(window.scrollY)
//     console.log(visualViewport.width)
// })
if(visualViewport.width>500){
nums.forEach(el => {
    el.style.animationName = "fadeIn";
    el.style.animationDelay = String(delay) +"s"
    delay += 0.7
});
}else{
    window.addEventListener("scroll",(e)=>{
        if(window.scrollY>1250){
        nums.forEach(el => {
            delay = 0.7
            el.style.animationName = "fadeIn";
            el.style.animationDelay = String(delay) +"s"
            //delay += 0.7
        });
    }
    })
    
}