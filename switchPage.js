$(function(){
    //Links
    var t_home = $("#to-home")
    var t_contact = $("#to-contact")
    var t_bread = $("#to-bread")
    var links = [t_home,t_bread,t_contact]
   
    //containers 
    var home = $("#home")
    var bread = $("#custom-cards")
    var contact = $("#contact")

    var containers = [home,bread,contact]

    // $(".nav-links").on("click",(e)=>{
    //     $(".nav-links").removeClass("active")
    //     $(this).addClass("active")
    // })
    function hideAll(){
        containers.forEach(container =>{
            container.hide()
        })
    }
    function showContainer(container){
        container.show()
    }
    $(".nav-link").on("click",(e)=>{
        hideAll(2000)
    })
    t_home.on("click",()=>{
        showContainer(home)
    })
    $("#home-btn").on("click",()=>{
        hideAll()
        showContainer(bread)
    })
    t_bread.on("click",()=>{
        showContainer(bread)
    })
    t_contact.on("click",()=>{
        showContainer(contact)
    })

    


    
})
// document.querySelector(".nav-link").addEventListener("click",(e)=>{
//         console.log(e.this)

//     })