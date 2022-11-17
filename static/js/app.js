const inputText = document.querySelectorAll('.text-input')
const btn = document.querySelector('.btn-container button')
const paragraph = document.querySelector('.form-data p')

btn.addEventListener('click', () => {
    const firstname = inputText[0]
    const lastname = inputText[1]
    const email = inputText[2]
    const password = inputText[3]
    const confirmpassword = inputText[4]

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(!(firstname.value && lastname.value)) {
        paragraph.innerText = 'All fields are required'
    }

    if(!email.value.match(regex)) {
        paragraph.innerText = 'Invalid email address'
    }
})