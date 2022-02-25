const d = document;
d.addEventListener('DOMContentLoaded', (e)=>{
    showAnswer('#btn1','#btn2','#btn3','#btn4','#btn5')
})


const active = document.querySelectorAll('.answer')

function showAnswer(btn1,btn2,btn3,btn4,btn5){
    const d = document;
    d.addEventListener('click', (e) =>{
        if(e.target.matches(btn1)){
            active[0].classList.toggle('is-active')
        }if(e.target.matches(btn2)){
            active[1].classList.toggle('is-active')
        }if(e.target.matches(btn3)){
            active[2].classList.toggle('is-active')
        }if(e.target.matches(btn4)){
            active[3].classList.toggle('is-active')
        }if(e.target.matches(btn5)){
            active[4].classList.toggle('is-active')
        }
    })
}