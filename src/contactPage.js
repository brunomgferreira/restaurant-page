// Contact

function contactPage() {
    var tel = document.createElement('h2');
    tel.classList = 'tel';
    tel.textContent = '123 456 789';

    var location = document.createElement('h1');
    location.classList = 'location';
    location.textContent = 'Av. da Boavista, Porto';

    return [tel,location];
}

export {contactPage};

