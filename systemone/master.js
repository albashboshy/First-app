let dat =document.querySelector("#date")

let x=new Date()
let stop =211
dat.innerHTML=x.toDateString()
/* we start create a counter*/
let counter =201
let check =document.querySelector("h3")
let room =document.querySelector(".rooms")
let names=["ahmed","hani","maher","akram","sadi","hadi","walid","samir"]
let ocu=document.querySelector(".occupied")
let card=document.querySelector(".main_2") 
let title= document.querySelector("h3")

let carde=1
let reserved =document.querySelector(".reserved")
let dirty =document.querySelector(".dirty")
/*here as you see we can make create automatic for our code by setinterval   */
let clas= document.querySelector(".u")
let d=setInterval(function(){
    ocu.innerHTML=carde
   reserved.innerHTML=77-ocu.innerHTML
   dirty.innerHTML=ocu.innerHTML
    let num=Math.random()*10
        let go=num.toFixed()
        if(go>=names.length){
            return go >=go
        }
    if(counter==stop-11 || counter ==stop-10  || counter == stop-7){
        
            
            clas.innerHTML="flat"
            
            

           
      
        
       
    }
    else{
        clas.innerHTML="Room"
    }
    if(counter == stop ){
        return `${counter =(stop +100)-11} ${stop=stop+100} `       
        
    }
  
    counter +=1
    room.innerHTML+= `<div class="card">
    <div class="card_header">
    <i class="fa-solid fa-file-invoice-dollar"></i>
    <i class="fa-solid fa-ban-smoking"></i>
    </div>
    <h3>${counter}</h3>
    <h4 class="u">${clas.innerHTML}</h4>
    <h5>${counter==610?"block":names[go]}</h5>
    <div class="card_footer">
    <i class="fa-solid fa-broom"></i>
    <i class="fa-regular fa-building hotel"></i>
    </div>
    
    </div>`
    carde++
    if(counter ==811){
        clearInterval(d)
      
            
       
     
       
    }
 
    
   
},1000)
if(check.innerHTML==201){
    clas.innerHTML="flat"
}

// setTimeout(()=>{
//     location.reload()
// },20000)






















































































































































































































































