const service_items = document.getElementsByClassName("service-item");
let countToSocialMedia = 0;

const linkTo = document.querySelectorAll(".linkTo");
linkTo[4].addEventListener("click", () => {
    Array.from(service_items).forEach(service_item => {
        if (service_item.classList.contains("social_media")) {
            service_item.style.display = 'flex';
            countToSocialMedia++;
        } else {
            service_item.style.display = 'none';
        }
    });
});

linkTo[3].addEventListener("click", () => {
    Array.from(service_items).forEach(service_item => {
        if (service_item.classList.contains("seo") && service_item.classList.contains("digital-marketing")) {
            service_item.style.display = 'flex';
            countToSocialMedia++;
        } else {
            service_item.style.display = 'none';
        }
    });
});

linkTo[2].addEventListener("click", () => {
    Array.from(service_items).forEach(service_item => {
        if (service_item.classList.contains("seo") && service_item.classList.contains("digital-marketing")) {
            service_item.style.display = 'flex';
            countToSocialMedia++;
        } else {
            service_item.style.display = 'none';
        }
    });
});

linkTo[1].addEventListener("click", () => {
    Array.from(service_items).forEach(service_item => {
        if (service_item.classList.contains("website-develop")) {
            service_item.style.display = 'flex';
            countToSocialMedia++;
        } else {
            service_item.style.display = 'none';
        }
    });
});



linkTo[0].addEventListener("click", () => {
    Array.from(service_items).forEach(service_item => {
        service_item.style.display = 'flex';
    });
});
// document.querySelector(".service-item").children[2].innerText