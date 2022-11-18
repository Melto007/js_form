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
    let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    const result = passwordRegex.test('12345678')
    console.log(result)
    if(firstname.value === '') {
        paragraph.innerText = 'FirstName is required'
        firstname.classList.add('inputBorder')
    }else if(lastname.value === '') {
        firstname.classList.remove('inputBorder')
        paragraph.innerText = 'LastName is required'
        lastname.classList.add('inputBorder')
    }else if(email.value === '') {
        lastname.classList.remove('inputBorder')
        paragraph.innerText = 'Email is required'
        email.classList.add('inputBorder')
    }else if(regex.test(email.value) === false) {
        email.classList.remove('inputBorder')
        paragraph.innerText = 'Invalid email address'
        email.classList.add('inputBorder')
    }else if(password.value === '') {
        email.classList.remove('inputBorder')
        paragraph.innerText = 'Password is required'
        password.classList.add('inputBorder')
    }else if(password.value.length < 8) {
        password.classList.remove('inputBorder')
        paragraph.innerText = 'Password must have 8 characters'
        password.classList.add('inputBorder')
    }else if(passwordRegex.test(password.value) === false) {
        password.classList.remove('inputBorder')
        paragraph.innerText = 'Password must have one lowercase and uppercase character, number and symbol'
        password.classList.add('inputBorder')
    }else if(confirmpassword.value === '') {
        password.classList.remove('inputBorder')
        paragraph.innerText = 'Confirm Password is required'
        confirmpassword.classList.add('inputBorder')
    }else if(password.value !== confirmpassword.value) {
        confirmpassword.classList.remove('inputBorder')
        paragraph.innerText = 'Password and Confirm Password must be same'
        password.classList.add('inputBorder')
        confirmpassword.classList.add('inputBorder')
    }else {
        password.classList.remove('inputBorder')
        confirmpassword.classList.remove('inputBorder')
        paragraph.innerText = ''
    }
})