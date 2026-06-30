let element=  document.getElementById('Username')
let btn=document.getElementById('btn')
let h1=document.getElementById('text')
btn.addEventListener('click',()=>{
    let txt = element.value;

   h1.innerText = txt;
})

let input = document.getElementById("Username1");

let btn1 = document.getElementById("btn1");


// FUNCTION

function changeColor(){

   let color = input.value;

   document.body.style.backgroundColor = color;

}


// BUTTON CLICK

btn1.addEventListener("click", ()=>{

   changeColor();

});


// ENTER KEY

input.addEventListener("keydown", (e)=>{

   if(e.key === "Enter"){

      changeColor();

   }

});