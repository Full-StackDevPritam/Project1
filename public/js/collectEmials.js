let url = 'https://script.google.com/macros/s/AKfycbzQT28m7_ZPSQ2YxuZWcjiPZHp3fpqzLgLS4oI4rNk1HPWZ2uhcfrtE7JOginMkSzE/exec';
let form = document.forms['collect-email'];
let signal = document.querySelector('.signalForSubscribe');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);

    fetch(url, {
        method: 'POST',
        body: data
    })
        .then(response => {
            signal.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
            Thanks for Subscribing to us 🤝
            <button type="button" class="btn-close" data-bs-dismiss="alert"
                aria-label="Close"></button>
        </div>`;
        })
        .catch(error => {
            signal.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error!</strong> Something went wrong..😉 
            <button type="button" class="btn-close" data-bs-dismiss="alert"
                aria-label="Close"></button>
        </div>`
        });
});