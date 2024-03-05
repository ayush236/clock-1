let a= new Date()
let b =a.getMonth()
let c= a.getDate()
let d =a.getFullYear()
// for time
let e =a.getHours()
let f= a.getMinutes()
let s=a.getSeconds()
console.log(c,b,d)
console.log(e,f,s)

day.innerHTML = c
month.innerHTML =b
year.innerHTML = d
hours.innerHTML =e

// this is for year
setInterval(function(){
  let a= new Date()
  let d = a.getFullYear()
  year.innerHTML = d

},1)

// this is for month
setInterval(function(){
  let a= new Date()
  let b =a.getMonth()
  month.innerHTML=b;
  
},1)


// this is for day
setInterval(function(){
  let a= new Date()
  let c= a.getDate()
  day.innerHTML = c
},1)



//this is for hours
setInterval(function(){
  let a= new Date()
  let e= a.getHours()
  min.innerHTML =e
},1)

// this is for min
setInterval(function(){
  let a= new Date()
  let f= a.getMinutes()
  min.innerHTML =f
},1)

// this is for second only
setInterval(function(){
  let a= new Date()
  let s=a.getSeconds()
  sec.innerHTML =s
},1)

