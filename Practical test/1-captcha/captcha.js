let btn=document.querySelector(".btn")
let input=document.querySelector(".input")
let cap=document.querySelector(".cap")


btn.addEventListener("click",function(){
    if(input.value == "")
  {
    alert("please enter captcha")
    return
  }
   
    else if(input.value==cap.textContent)
    {
        alert("sucessfull verified")   
    }
    
    else{
        alert("verfication failed")
    }
  
})