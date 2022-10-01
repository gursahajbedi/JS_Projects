const time=document.getElementById("time")
const time2=document.getElementById("time2")
const bfitem=document.getElementById("bf-item")
const bfsubmit=document.getElementById("bf-submit")
const bfresult=document.getElementById("bf-result")
const bfcancel=document.getElementById("bf-cancel")
const litem=document.getElementById("l-item")
const lsubmit=document.getElementById("l-submit")
const lresult=document.getElementById("l-result")
const lcancel=document.getElementById("l-cancel")
const ditem=document.getElementById("d-item")
const dsubmit=document.getElementById("d-submit")
const dresult=document.getElementById("d-result")
const dcancel=document.getElementById("d-cancel")

setInterval(function(){
    day=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
    month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    let date=new Date()
    let str=day[date.getDay()-1] + " , " + date.getDate() + " / " +month[date.getMonth()] + " / " + (date.getFullYear().toString()).slice(2)
    time.innerHTML=str
},1000)

bfsubmit.addEventListener("click",function(){
    let new1=document.createElement("div")
    new1.classList.add("my-2","pt-2","border","border-dark","rounded-pill")
    let new2=document.createElement("p")
    new2.innerHTML=bfitem.value
    new1.appendChild(new2)
    bfresult.appendChild(new1)
    bfcancel.style.visibility="visible"
    bfcancel.addEventListener("click",function(){
        bfresult.removeChild(new1)
        bfcancel.style.visibility="hidden"
    })
})

lsubmit.addEventListener("click",function(){
    let new1=document.createElement("div")
    new1.classList.add("my-2","pt-2","border","border-dark","rounded-pill")
    let new2=document.createElement("p")
    new2.innerHTML=litem.value
    new1.appendChild(new2)
    lresult.appendChild(new1)
    lcancel.style.visibility="visible"
    lcancel.addEventListener("click",function(){
        lresult.removeChild(new1)
        lcancel.style.visibility="hidden"
    })
})

dsubmit.addEventListener("click",function(){
    let new1=document.createElement("div")
    new1.classList.add("my-2","pt-2","border","border-dark","rounded-pill")
    let new2=document.createElement("p")
    new2.innerHTML=ditem.value
    new1.appendChild(new2)
    dresult.appendChild(new1)
    dcancel.style.visibility="visible"
    dcancel.addEventListener("click",function(){
        dresult.removeChild(new1)
        dcancel.style.visibility="hidden"
    })
})









