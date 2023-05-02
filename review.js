document.getElementById('review-btn').addEventListener('click', function () {
    const myElement = document.getElementById('floatingTextarea2').value
    // console.log(myElement)

    const p = document.createElement('p')
    p.innerText = myElement
    // console.log(h1)

    const parent = document.getElementById('commnet-container')
    parent.appendChild(p)
    document.getElementById('floatingTextarea2').value = ''
})

document.getElementById("floatingTextarea2")
    .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            const myElement = document.getElementById('floatingTextarea2').value
            // console.log(myElement)

            const p = document.createElement('p')
            p.innerText = myElement
            // console.log(h1)

            const parent = document.getElementById('commnet-container')
            parent.appendChild(p)
            document.getElementById('floatingTextarea2').value = ''
        }
    });
