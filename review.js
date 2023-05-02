document.getElementById('review-btn').addEventListener('click',function(){
const myElement = document.getElementById('floatingTextarea2').value 
// console.log(myElement)

const p = document.createElement('p')
p.innerText = myElement 
// console.log(h1)

const parent = document.getElementById('commnet-container')
parent.appendChild(p)
document.getElementById('floatingTextarea2').value =''
})
