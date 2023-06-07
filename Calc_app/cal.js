const outputEl = document.querySelector(".text");
const valueEl = document.querySelectorAll(".val");
const clearEl = document.querySelector(".AC");
const deleteEl = document.querySelector(".DEL");
const equalEl = document.querySelector(".equal");

valueEl.forEach((val)=>{
    val.addEventListener("click",()=>{
        outputEl.value += val.value;
    })
})

clearEl.addEventListener("click",()=>{
    outputEl.value = "";
})

deleteEl.addEventListener("click",()=>{
    outputEl.value = outputEl.value.slice(0, -1);
})

equalEl.addEventListener("click",()=>{
    try{
        outputEl.value = eval(outputEl.value);
    }catch(e){
        alert(e);
    }
})
