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
    
    if(firstname.value === '') {
        paragraph.innerText = 'FirstName is required'
        firstname.classList.add('inputBorder')
        return
    }else {
        paragraph.innerText = ''
        firstname.classList.remove('inputBorder')
    }
    
    if(lastname.value === '') {
        paragraph.innerText = 'LastName is required'
        lastname.classList.add('inputBorder')
        return
    }else{
        paragraph.innerText = ''
        lastname.classList.remove('inputBorder')
    } 
    
    if(email.value === '') {
        paragraph.innerText = 'Email is required'
        email.classList.add('inputBorder')
        return
    }else {
        paragraph.innerText = ''
        email.classList.remove('inputBorder')
    } 
    
    if(regex.test(email.value) === false) {
        paragraph.innerText = 'Invalid email address'
        email.classList.add('inputBorder')
        return
    }else {
        paragraph.innerText = ''
        email.classList.remove('inputBorder')
    } 
    
    if(password.value === '') {
        paragraph.innerText = 'Password is required'
        password.classList.add('inputBorder')
        return
    }else {
        paragraph.innerText = ''
        password.classList.remove('inputBorder')
    }
    
    if(password.value.length < 8) {
        paragraph.innerText = 'Password must have 8 characters'
        password.classList.add('inputBorder')
        return
    }else {
        paragraph.innerText = ''
        password.classList.remove('inputBorder')
    } 
    
    if(passwordRegex.test(password.value) === false) {
        paragraph.innerText = 'Password must have one lowercase and uppercase character, number and symbol'
        password.classList.add('inputBorder')
        return
    }else {
        paragraph.innerText = ''
        password.classList.remove('inputBorder')
    }
    
    if(confirmpassword.value === '') {
        paragraph.innerText = 'Confirm Password is required'
        confirmpassword.classList.add('inputBorder')
        return
    }else {
        paragraph.innerText = ''
        confirmpassword.classList.add('inputBorder')
    } 
    
    if(password.value !== confirmpassword.value) {
        paragraph.innerText = 'Password and Confirm Password must be same'
        password.classList.add('inputBorder')
        confirmpassword.classList.add('inputBorder')
        return
    }else {
        paragraph.innerText = ''
        password.classList.remove('inputBorder')
        confirmpassword.classList.remove('inputBorder')
    }
})