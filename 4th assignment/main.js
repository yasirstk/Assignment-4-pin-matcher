var codeGenerator = document.getElementById("code-generator");
codeGenerator.addEventListener("click", function(){
    var randNumber = Math.floor(1000 + Math.random()*9000);
    
    document.getElementById("generatedCode").value = randNumber;
})

var pinSubmit = document.getElementById("pin-submit");
    pinSubmit.addEventListener("click",function(){
        const inputPin = document.getElementById("screen").value;
       if(randNumber == inputPin){
           document.getElementById("tick").style.display = "block";
       }else{
           document.getElementById('cross').style.display = "block";
       }
})
       