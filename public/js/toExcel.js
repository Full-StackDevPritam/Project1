const url = 'https://script.google.com/macros/s/AKfycbw6OVxN_o0faDYwQwe9i2DzJPiiwlOpp8XMjUbHCwEhyYEi7n8F1tCzmaHJI5dJfQ/exec';
const form = document.forms['re-quote'];
const signal = document.querySelector('.signal');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);

    fetch(url, {
        method: 'POST',
        body: data
    })
        .then(response => {
            signal.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Success!</strong> Thanks for your subbmission..🤝
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