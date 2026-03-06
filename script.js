const petalsContainer = document.querySelector("#petals")
const flower = document.querySelector(".flower")

const PETALS = 32

for(let i=0;i<PETALS;i++){

let angle = i*(360/PETALS)

let petal = document.createElementNS("http://www.w3.org/2000/svg","ellipse")

petal.setAttribute("cx",250)
petal.setAttribute("cy",250)
petal.setAttribute("rx",16)
petal.setAttribute("ry",120)

petal.setAttribute("fill","url(#petal)")

petal.style.transformOrigin="250px 250px"
petal.style.transform=`rotate(${angle}deg) scale(0)`

petalsContainer.appendChild(petal)

setTimeout(()=>{

petal.style.transition="transform 3s cubic-bezier(.22,.61,.36,1)"
petal.style.transform=`rotate(${angle}deg) scale(1)`

},1500+i*60)

}

document.addEventListener("mousemove",e=>{

let x=(e.clientX/window.innerWidth-.5)*20
let y=(e.clientY/window.innerHeight-.5)*20

flower.style.transform=`rotateY(${x}deg) rotateX(${-y}deg)`

})

const light=document.querySelector(".light")

document.addEventListener("mousemove",e=>{

light.style.left=e.clientX-200+"px"
light.style.top=e.clientY-200+"px"

})

const canvas=document.getElementById("particles")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let particles=[]

for(let i=0;i<120;i++){

particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*3,
vy:Math.random()*0.2+.05
})

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{

p.y-=p.vy

if(p.y<0){
p.y=canvas.height
p.x=Math.random()*canvas.width
}

ctx.beginPath()
ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
ctx.fillStyle="rgba(197,160,89,0.35)"
ctx.fill()

})

requestAnimationFrame(animate)

}

animate()

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth
canvas.height=window.innerHeight

})