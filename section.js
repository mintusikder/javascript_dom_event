//tagName---------------------------------------------------
// const tagList = document.getElementsByTagName('h1')
// // console.log(tagList)
// for(const tag of tagList){
//     // console.log(tag.innerText)
//     tag.style.color ='red'
// }

// for(let i=0; i< tagList.length; i++){
//     console.log(tagList[i].innerText)
// }


//className--------------------------
// const classList = document.getElementsByClassName('text')
// // console.log(classList)
// for(const value of classList){
//     // console.log(value.innerText)
//     value.style.color = 'blue'
// }


//tagName-------------------------------------
// const myHeading = document.getElementById('heading')
// myHeading.style.textAlign ='center'
// myHeading.style.color='red'
// console.log(myHeading.innerText)


//tagNameShort varsion--------------------------------
// document.getElementById('heading').style.color='green'


//quertSelector--------------------------------
// const myElemenet = document.querySelector('.text')
// console.log(myElemenet)


//quertSelectorAll--------------------------------
// const myElemenet = document.querySelectorAll('.text')
// // console.log(myElemenet)

// for(const element of myElemenet){
//     element.style.color='goldenrod'
//     // console.log(element.innerText)
// }


// const lastChild =document.querySelectorAll('.li-container:nth-child(3)')
// console.log(lastChild)


//class add or remove--------------------------------------------
// const myElemenet =document.getElementById('first-heading')
// //first way-------------
// myElemenet.className ='myClass'
// //second way-----------
// myElemenet.classList.add('hello')
// //remove---------------
// myElemenet.classList.remove('myClass')


//create element------------------------------------------------
//call parent container-------------
// const parentContainer = document.getElementById('container-details')
// //create li tag------------------
// const myLi= document.createElement('li')
// myLi.innerText ='Four'
// // console.log(myLi.innerText)
// parentContainer.appendChild(myLi)


// //call parent container----------
// const sectionContainer = document.getElementById('section-container')
// //create div tag----------------
// const myDiv = document.createElement('div')
// // console.log(myDiv)
// //create h1 tag
// const h1 = document.createElement('h1')
// h1.innerText='Exploring dynamic ja'
// // console.log(h1)
// //put h1 inside div-------------
// myDiv.appendChild(h1)
// // console.log(myDiv)
// sectionContainer.appendChild(myDiv)


//getAttribute & setAttribute---------------------------------------------
//setAttribute--------------
document.getElementById('att-container').setAttribute('class', 'myClass')
document.getElementById('att-container').setAttribute('value', 'myValue')


//getAttribute-------------
const myGetAttribute = document.getElementById('att-container').getAttribute('class')
console.log(myGetAttribute)