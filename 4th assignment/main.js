var codeGenerator = document.getElementById("code-generator");
codeGenerator.addEventListener("click", function(){
    var randNumber = Math.floor(1000 + Math.random()*9000);
    
    document.getElementById("generatedCode").value = randNumber;
})

var submittedPin = document.getElementById("screen").value;
document.getElementById("pin-submit").addEventListener("click",function(){
    

})
       