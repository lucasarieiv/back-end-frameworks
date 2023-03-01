const buttonSubmit = document.querySelector('.btn-register');
const form = document.querySelector('form')

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    
    const allInputs = form.elements;

    const nome = allInputs.name.value;
    const email = allInputs.email.value;
    const phone = allInputs.phone.value;
    const birth = allInputs.birth.value;
    const career = allInputs.career.value;

    console.log(nome, email, phone, birth, career)
})