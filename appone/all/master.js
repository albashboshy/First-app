/*Definitions all vriables here */
let one = document.querySelector("#one")
let count = document.querySelector(".counter ")
let stop = document.querySelector("#three")
let auto = document.querySelector("#two")
let h5 = document.querySelector(".autoOn")
let date= new Date()
let h6= document.querySelector(".dateToday").innerHTML=date.toDateString()


/* start collectin data from json file */
let txt = new XMLHttpRequest()
txt.open("get", "quote.json")
txt.send()
let h = []
txt.onreadystatechange = function () {
    if (txt.readyState == 4 && txt.status == 200) {
        h = JSON.parse(txt.responseText)
        return h
    }
}

let dom = 0;
/* generating random number for quote by using Random function*/
function ren() {
    return (Math.random() * (h.length - 1)).toFixed()
}

/* genertor quote  */
one.addEventListener("click", function () {
    document.querySelector(".screen p").innerHTML = h[ren()]["text"]
    count.innerHTML = h[ren()]["id"]
})


/* auto generator quote */
auto.addEventListener("click", function () {
    h5.style.cssText = "display:block"
    setTimeout(function () {
        dom = setInterval(function () {
            document.querySelector(".screen p").innerHTML = h[ren()]["text"]
            count.innerHTML = h[ren()]["id"]
            console.log(dom)
        }, 3000)
    }, 1000)
})

/* stoping generator quote */
stop.addEventListener("click", function () {

    clearInterval(dom)
    document.querySelector(".screen p").innerHTML = "Qutoe Will Appear here"
    count.innerHTML = 0
    h5.style.cssText = "display:none"
})