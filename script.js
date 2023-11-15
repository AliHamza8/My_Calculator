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
btnResult.addEventListener('click', function() {
    if(textbox.value >= 'a' && textbox.value <= 'z') {
        alert('Please enter a number')
        textbox.value = ''
    }
})

// Operators
btnDiv.addEventListener('click', function() {
    newInput.value = btnDiv.textContent
    sectionInput.appendChild(newInput)

    sectionInput.appendChild(newOp)
    newOp.value = btnDiv.textContent
})

// btnMul.addEventListener('click', function() {
//     newInput.value = btnMul.textContent
//     sectionInput.appendChild(newInput)

//     sectionInput.appendChild(newOp)
//     newOp.value = btnMul.textContent
// })

// btnMinus.addEventListener('click', function() {
//     newInput.value = btnMinus.textContent
//     sectionInput.appendChild(newInput)

//     sectionInput.appendChild(newOp)
//     newOp.value = btnMinus.textContent
// })
// btnAdd.addEventListener('click', function() {
//     sectionInput.appendChild(newOp)
//     newOp.value = btnAdd.textContent
// })


// Numbers
numberBtn.forEach(button => {
    button.addEventListener('click', function() {
        textbox.value = button.textContent
        newInput.value = btnAdd.textContent
        sectionInput.appendChild(newInput)
        newInput.value = button.textContent
    })
})


