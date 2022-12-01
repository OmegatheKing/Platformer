document.addEventListener("DOMContentLoaded", ()=>{
const person = document.querySelector('.character')
const chex = document.querySelector('.game')
let bottom=0
let gravity=0.9
let isJumping=false
let left=0
let isGoingLeft=false
let isGoingRight=false
let idLeTimer
let idLeftTimer
//p1
function jump() {
    if (isJumping) return
    person.classList.add('character')
    person.classList.remove('character-slide')
    let timerUpId=setInterval(function(){
        if (bottom>250)
        clearInterval(timerUpId)
        let timerIdDown=setInterval(function(){
            if (bottom<0){
            clearInterval(timerIdDown)
            isJumping=false
            }
            bottom-=1 
        person.style.bottom=bottom+'px'
        },20)
        isJumping=true
        bottom +=50   
        bottom = bottom * gravity;
        person.style.bottom=bottom+'px'
    },20) 
}
function slideLeft() {
    person.classList.add('character-slide')
    person.classList.remove('character')
    if (isGoingRight){
clearInterval(idLeTimer)
isGoingRight=false
}
    isGoingLeft=true
 idLeftTimer=setInterval(function(){
    left-=5
    person.style.left=left+'px'  
},20)
}
function slideRight() {
    person.classList.add('character-slide')
    person.classList.remove('character')
    if (isGoingLeft){
        clearInterval(idLeftTimer)
        isGoingLeft=false
        }
    isGoingRight=true
    idLeTimer=setInterval(function(){
        left+=5
        person.style.left=left+'px'  
    },20)
}

//keyCodes here p1*
function control(e) {
    if (e.keyCode===32){
      jump();
    }else if(e.keyCode===8){
    slideLeft()//if we press left, function slideLeft will run 
    }
    else if(e.keyCode===13){
    slideRight()}
}

document.addEventListener('keydown', control)
})