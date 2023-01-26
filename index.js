
function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
    .sendForm(
        'service_ymsd24z',
        'template_cuc1fdf',
        event.target,
        '8nIg2t_rNO5VjyR2v'
    ).then(() => {
     loading.classList.remove("modal__overlay--visible");
     success.classList += " modal__overlay--visible";
    }).catch (() => {
        loading.classList.remove('modal__overlay--visible');
        alert(
            "The email service is temporarily unavailable. Please contact me directly at xvtran@hotmail.com"
        );
    })
}

