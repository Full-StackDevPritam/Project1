const url = 'https://script.google.com/macros/s/AKfycby3j60KiEL9w89Cnh-EIyHvbDyzdl97uO-ofj2Q5DRUiL-vs8MoVTR0t9UNcezKacY/exec';

const form = document.forms['contact-sheet'];
const signal = document.querySelector('.success-mes');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);

    fetch(url, {
        method: 'POST',
        body: new FormData(form)
    })
        .then(response => {
            signal.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success!</strong> Thanks for Contacting Us..🤝
        <button type="button" class="btn-close" data-bs-dismiss="alert"
            aria-label="Close"></button>
    </div>`;
        })
        .catch(error => {
            signal.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error!</strong> Something went wrong..😉 type="button" class="btn-close" data-bs-dismiss="alert"
            aria-label="Close"></button>
    </div>`
        });
});

