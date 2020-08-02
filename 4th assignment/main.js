var codeGenerator = document.getElementById("code-generator");
codeGenerator.addEventListener("click", function(){
    var randNumber = Math.floor(1000 + Math.random()*9000);
    //console.log(randNumber);
    document.getElementById("generatedCode").value = randNumber;
    
    
})