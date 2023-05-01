//Event handler---------------------------------------
function makeRed(){
    document.body.style.backgroundColor = 'red'
    document.getElementById('heading').innerText ='Set Primary Color'
}

//Event listener-------------------------------------
document.getElementById('blue-btn').addEventListener('click',function(){
    document.body.style.backgroundColor = 'blue'
    document.getElementById('heading').innerText ='Set Secondary Color'
})


document.getElementById('btn-success').addEventListener('click',function(){
    document.body.style.backgroundColor = 'purple'
    document.getElementById('heading').innerText ='Set Success Color'
})