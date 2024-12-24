/* definition all variable here*/
let head =document.querySelector("h1")
setInterval(function(){
  head.style.cssText="background-color:blue;color:white;transform:scale(0.6)"
},1000)
setInterval(function(){
  head.style.cssText="color:blue;transform:scale(.8)"
},2000)
setInterval(function(){
  head.style.cssText="color:blue;transform:scale(1.1)"
},3000)
let bre = document.querySelector(".br span")
let nxt =document.querySelector(".nxt span")
let photo= document.querySelector(".photo img")
let total =document.querySelector(".total")
let images =document.querySelectorAll(".lastdiv img ")
let i=0

total.innerHTML=`Photo ${i} from ${images.length}`
if(i==0){
  document.querySelector(".br ").classList.add("active")
}
bre.addEventListener("click",function(){
  if(i==0){
    document.querySelector(".br ").classList.add("active")
  }
  document.querySelector(".nxt").classList.remove("active")
  if(i>0){
  photo.setAttribute("src",`${images[--i].getAttribute("src")}`)
    
  total.innerHTML=`Photo ${i==0?1:i} from ${images.length}`
  
  style(i)
  }   
  else{
  
  }
   
   
})

nxt.addEventListener("click",function(){
        
      

      /**/
      if(i==images.length){
          document.querySelector(".nxt").classList.add("active")
    }
    else{
        photo.setAttribute("src",`${images[i++].getAttribute("src")}`)
        total.innerHTML=`Photo ${i} from ${images.length}`
        style(i)
        document.querySelector(".br ").classList.remove("active")
       
    }
   
        

    
})

function style(a){
  if(a%2==0){
    document.querySelector(".photo img").style.cssText="border-top-left-radius:60px;border-bottom-right-radius:60px"
  }
  else{
    document.querySelector(".photo img").style.cssText="border-top-right-radius:80px;border-bottom-left-radius:80px"
  
  }
}


let x=Object.values(images)
images.forEach(element => {
  element.addEventListener("click",function(){
 
   photo.src=element.getAttribute("src")
    if(x.indexOf(element)==0){
      total.innerHTML=`${1} from ${images.length}`
    }
   else{
    total.innerHTML=`${x.indexOf(element)+1} from ${images.length}`
   }
   
  })
});
