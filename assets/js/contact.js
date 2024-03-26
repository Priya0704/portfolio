/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact__message');

const sendMail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_mjg5k1l','template_xxmsaxc','#contact-form','QpbguhVWBy2fprwn4')
        .then(() =>{
            // Show sent message
            contactMessage.textContent = 'Message sent successfully ✅'

            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            // Clear input fields
            contactForm.reset()
        }, () =>{
             // Show error message
             contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}

contactForm.addEventListener('submit', sendMail)