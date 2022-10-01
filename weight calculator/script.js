kg=document.getElementById("kg")
g=document.getElementById("g")
lbs=document.getElementById("lbs")
weight=document.getElementById("weight")

weight.addEventListener("input",function(e){
    let tex=e.target.value
    console.log(tex)
    resultpound=0.0022*tex
    lbs.innerHTML=resultpound
    resultg=tex
    g.innerHTML=resultg
    resultkg=tex/1000
    kg.innerHTML=resultkg
})