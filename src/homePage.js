// Home Page

function homePage() {
    var sentenceHome = document.createElement('h1');
    sentenceHome.classList = 'sentence';
    sentenceHome.textContent = 'an experience out of this world.';

    var date = document.createElement('h3');
    date.classList = 'date';
    date.textContent = 'since 2004';

    return [sentenceHome, date];
}

export {homePage};

