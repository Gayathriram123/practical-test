let submit=document.getElementById("submit")


submit.addEventListener("click",function(){
    let score=0;
    if (document.getElementById("correct1").checked)
    {
        score++;
    }
    if (document.getElementById("correct2").checked)
    {
        score++;
    }
    if (document.getElementById("correct3").checked)
    {
        score++;
    }
    
    document.getElementById("result").innerText = "score:"+score

})
