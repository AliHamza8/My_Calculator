const textbox = document.querySelector('.textbox')
const btnDiv = document.querySelector('.btn-divide')
const btnMul = document.querySelector('.btn-multiplication')
const btnMinus = document.querySelector('.btn-minus')
const btnAdd = document.querySelector('.btn-add')
const btnResult = document.querySelector('.btn-result')
const sectionInput = document.querySelector('.textbox-section')
const numberBtn = document.querySelectorAll('.btn')

const newInput = document.createElement('input')
newInput.type = 'text'
newInput.dir = 'rtl'

const newOp = document.createElement('input')
newOp.type = 'text'
newOp.dir = 'rtl'

// Result
// btnResult.addEventListener('click', function() {
//     if(textbox.value >= 'a' && textbox.value <= 'z') {
//         alert('Please enter a number')
//         textbox.value = ''
//     }
// })

// Operators
btnDiv.addEventListener('click', function() {
    sectionInput.appendChild(newOp)
    newOp.value = btnDiv.textContent
    sectionInput.appendChild(newInput)
})
btnMul.addEventListener('click', function() {
    sectionInput.appendChild(newOp)
    newOp.value = btnMul.textContent
    sectionInput.appendChild(newInput)
})
btnMinus.addEventListener('click', function() {
    sectionInput.appendChild(newOp)
    newOp.value = btnMinus.textContent
    sectionInput.appendChild(newInput)
})
btnAdd.addEventListener('click', function() {
    sectionInput.appendChild(newOp)
    newOp.value = btnAdd.textContent
    sectionInput.appendChild(newInput)
})




// Numbers
// numberBtn.forEach(button => {
//     button.addEventListener('click', function() {
//         textbox.value = button.textContent
//         newInput.value = btnAdd.textContent
//         newInput.value = button.textContent
//     })
// })


