// console.log('todo')
let count = 0
document.getElementById('input-btn').addEventListener('click', function () {
    // console.log('click')
    count += 1
    const myInputValue = document.getElementById('input-value').value
    // console.log(myInputValue)

    const parent = document.getElementById('content-container')
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td>${count}</td>
    <td>${myInputValue}</td>
    <td>
    <button class="btn btn-danger deleteBtn">Delete</button>
    <button class="btn btn-primary">Done</button>
    </td>     
    `
    parent.appendChild(tr)
    document.getElementById('input-value').value = ''

    const element = document.querySelectorAll('.deleteBtn')
    // console.log(element)
    for (const value of element) {
        // console.log(value)
        value.addEventListener('click',function(event){
            // console.log(event.target.parentNode.parentNode)
            event.target.parentNode.parentNode.style.display ='none'
        })
    }
    document.getElementById('clear-btn').addEventListener('click',function(event){
        // console.log(event.target.parentNode)
        event.target.parentNode.style.display ='none'
    })
})


//----------------------------------------------------

document.getElementById("input-value")
    .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            count += 1
            const myInputValue = document.getElementById('input-value').value
            // console.log(myInputValue)

            const parent = document.getElementById('content-container')
            const tr = document.createElement('tr')
            tr.innerHTML = `
            <td>${count}</td>
            <td>${myInputValue}</td>
            <td>
            <button class="btn btn-danger">Delete</button>
            <button class="btn btn-primary">Done</button>
            </td>     
            `
            parent.appendChild(tr)
        }
    });