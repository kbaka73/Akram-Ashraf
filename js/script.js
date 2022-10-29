let nums = document.querySelectorAll(" .numm");
let section = document.querySelector(".doy");
// scil

let skil = document.querySelector(".treee");
let spans = document.querySelectorAll(".skils span");
let up = document.querySelector(".topp");


let started = false;
window.onscroll = function(){

    if(window.scrollY >= section.offsetTop ){
            if(!started){
        nums.forEach((numm) =>startCont(numm));
    }
    started=true;
    };
    // skils
    if(window.scrollY >= skil.offsetTop -150){
        spans.forEach((span)=>{
            span.style.width = span.dataset.width;
            
        })
    }
    // scroll up
    if(this.scrollY>=600){
        up.classList.add("show");
    }else{
        up.classList.remove("show");
    }
};

up.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}


















function startCont(el){
    let goal = el.dataset.goal;
    let count= setInterval(()=>{
        el.textContent++;
        if(el.textContent==goal){
            clearInterval(count)
        }
    },2000 / goal)
}


// end






























