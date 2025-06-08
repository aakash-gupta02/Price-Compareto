var main = document.querySelector("#mainbody")
var cursor = document.querySelector("#cursor")

main.addEventListener("mousemove", (dets)=>{
    console.log("clicked");
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        ease: "back",
    })
})

gsap.to("#scroll h1", {
    transform:"translateX(-80%)",
    scrollTrigger:{
        trigger:"#scroll",
        scroller:"body",
        markers:false,
        start:"top 0",
        end:"top -100%", 
    scrub:5,
      pin:true,
    }
})

