const address = document.getElementById('address')
const email = document.getElementById('email')
const errorElement = document.getElementById('error')
const form = document.getElementById('form')
const name = document.getElementById('name')
const zip = document.getElementById('zip')

form.addEventListener('submit', (e) => {
    let messages = []
    if (address.value.length < 10) {
        messages.push('Address must be longer than 10 characters')
    }

    if (address.value.length > 25) {
        messages.push('Address must be less than 25 characters')
    }

    if (email.value === '' || email.value == null) {
        messages.push('Invalid email format')
    }

    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }

    if (zip.value.length <= 4) {
        messages.push('Please enter correct Zip Code')
    }

    if (zip.value.length >= 6) {
        messages.push('Please enter correct Zip Code')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})