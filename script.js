var email = document.getElementById('email')
var form = document.getElementById('form')

form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    var emailValue = email.value
    if (validateEmail (emailValue)) {
        form.classList.remove('error')
    } else {
        form.classList.add('error')
    }
})


function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}