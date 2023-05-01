let value = 0
document.getElementById('blue-btn').addEventListener('click',function(){
    // console.log('click')
    value = value + 1
    document.getElementById('counter').innerText = value
})

document.getElementById('btn-success').addEventListener('click',function(){
    // console.log('click')
    value = value - 1
    document.getElementById('counter').innerText = value
})