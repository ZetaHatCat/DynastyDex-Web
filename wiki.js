function applyFilters() {
    let nameInput = document.getElementById('search-name').value.toLowerCase();
    let groupSelect = document.getElementById('search-group').value;
    let cards = document.getElementsByClassName('ball-card');

    for (let i = 0; i < cards.length; i++) {
        let cardName = cards[i].getAttribute('data-name').toLowerCase();
        let cardGroup = cards[i].getAttribute('data-group');

        let matchesName = cardName.includes(nameInput);
        let matchesGroup = (groupSelect === "Any") || (cardGroup === groupSelect);

        if (matchesName && matchesGroup) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

function clearFilters() {
    document.getElementById('search-name').value = "";
    document.getElementById('search-group').value = "Any";
    
    let cards = document.getElementsByClassName('ball-card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "block";
    }
}

function openDetail(element) {
    document.getElementById('wiki-main').style.display = 'none';
    document.getElementById('detail-view').style.display = 'block';

    let name = element.getAttribute('data-name');
    let group = element.getAttribute('data-group');
    let cardImg = element.getAttribute('data-card-img');
    let spawnImg = element.getAttribute('data-spawn-img');
    let spawnArtist = element.querySelector('.artist-info .artist-row:nth-child(1) .artist').innerText;
    let cardArtist = element.querySelector('.artist-info .artist-row:nth-child(2) .artist').innerText;
    
    let regime = element.getAttribute('data-regime');
    let hp = element.getAttribute('data-hp');
    let atk = element.getAttribute('data-atk');
    
    let fullAbility = element.getAttribute('data-ability');
    let splitIndex = fullAbility ? fullAbility.indexOf('!') : -1;
    let abilityTitle = splitIndex !== -1 ? fullAbility.substring(0, splitIndex + 1) : (fullAbility || "Ability");
    let abilityDesc = splitIndex !== -1 ? fullAbility.substring(splitIndex + 1).trim() : "";

    let detailTitle = document.getElementById('detail-title');
    let detailGroup = document.getElementById('detail-group');

    detailTitle.innerText = name.toUpperCase();
    detailGroup.innerText = group;

    // Aplica el color base
    detailTitle.className = "detail-header color-" + group.toLowerCase();
    detailGroup.className = "info-value color-" + group.toLowerCase();

    document.getElementById('detail-card-img').src = cardImg;
    document.getElementById('detail-spawn-img').src = spawnImg;
    document.getElementById('detail-spawn-artist').innerText = spawnArtist;
    document.getElementById('detail-card-artist').innerText = cardArtist;
    document.getElementById('detail-regime').innerText = regime;
    document.getElementById('detail-hp').innerText = hp;
    document.getElementById('detail-atk').innerText = atk;
    document.getElementById('detail-ability-title').innerText = abilityTitle;
    document.getElementById('detail-ability-desc').innerText = abilityDesc;

    window.scrollTo(0, 0);
}

function closeDetail() {
    document.getElementById('detail-view').style.display = 'none';
    document.getElementById('wiki-main').style.display = 'block';
}