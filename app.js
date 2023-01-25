let cards = [
    {
        name: 'red',
        img: '/img/red.png'
    },
    {
        name: 'red',
        img: '/img/red.png'
    },
    {
        name: 'blue',
        img: '/img/blue.png'
    },
    {
        name: 'blue',
        img: '/img/blue.png'
    },
    {
        name: 'green',
        img: '/img/green.png'
    },
    {
        name: 'green',
        img: '/img/green.png'
    },
    {
        name: 'yellow',
        img: '/img/yellow.png'
    },
    {
        name: 'yellow',
        img: '/img/yellow.png'
    },
    {
        name: 'purple',
        img: '/img/purple.png'
    },
    {
        name: 'purple',
        img: '/img/purple.png'
    },
    {
        name: 'grey',
        img: '/img/grey.jfif'
    },
    {
        name: 'grey',
        img: '/img/grey.jfif'
    },
    {
        name: 'orange',
        img: '/img/orange.png'
    },
    {
        name: 'orange',
        img: '/img/orange.png'
    },
    {
        name: 'black',
        img: '/img/black.png'
    },
    {
        name: 'black',
        img: '/img/black.png'
    },
];

cards.sort(() => 0.5 - Math.random());

let clickedCard = [];
let idClickedCard = [];
let goodCard = [];
let cont = document.getElementById('container');
let count = document.getElementById('count');
let score = 0;
count.innerHTML = "Votre score total est de : " + score + " sur 8 !";

function createGame() {
    for (let i = 0; i < cards.length; i++){
        let itemCard = document.createElement('img');
        itemCard.setAttribute("src", "/img/logo.png");
        itemCard.setAttribute("data-id", i);
        itemCard.addEventListener("click", flipCard);
        cont.append(itemCard)
    }
}

function evenCheck () {
    let allCards = document.querySelectorAll('img');
    let first = idClickedCard[0];
    let second = idClickedCard[1];

    if ((clickedCard[0] === clickedCard[1]) && idClickedCard[0] !== idClickedCard[1]) {
        allCards[first].setAttribute("src", "/img/yes.jfif")
        allCards[second].setAttribute("src", "/img/yes.jfif")
        allCards[first].removeEventListener("click", flipCard)
        allCards[second].removeEventListener("click", flipCard)

        goodCard.push(clickedCard);
        score++;
        count.innerHTML = "Votre score total est de : " + score + " sur 8 !";
    }
    else{
        allCards[first].setAttribute("src", "/img/logo.png")
        allCards[second].setAttribute("src", "/img/logo.png")
    }
    clickedCard = [];
    idClickedCard = [];

    if (goodCard.length === (cards.length / 2)){
        let btnRestart = document.createElement("button");
        btnRestart.innerHTML = "Restart";
        btnRestart.addEventListener("click", () => {
            window.location.reload();
        })
        count.innerHTML = "Bravo, vous avez gagné la partie !";
        count.append(btnRestart)
    }
}

function flipCard() {
    let idCard = this.getAttribute("data-id");
    clickedCard.push(cards[idCard].name);
    idClickedCard.push(idCard);
    this.setAttribute("src", cards[idCard].img)

    if (clickedCard.length === 2){
        setTimeout(evenCheck, 700)
    }
}

createGame();









