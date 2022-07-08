const imagesArray = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg",
];
let slideAttiva = 0;
const itemsDom = document.querySelector('.items');
for (let i = 0; i < imagesArray.length; i++) {
    itemsDom.innerHTML += `<div class="item">
                            <img class="img-slide" "src=${imagesArray[i]}"/>
                            </div>`;
};
const itemList = document.getElementsByClassName('item');
itemList[slideAttiva].classList.add('show');
const circleList = document.querySelector('.up');
const up = document.querySelector('.up');
const down = document.querySelector('.down');
up.addEventListener('click' ,
    function () {
        circleList[slideAttiva].classList.remove('active');
        itemList[slideAttiva].classList.remove('show');
        slideAttiva++;
        up.classList.remove('hidden');
        if (slideAttiva == itemList.lenght - 1) {
            next.classList.add('hidden');
        }
    }
);

down.addEventListener('click' ,
    function () {
        circleList[slideAttiva].classList.remove('active');
        itemList[slideAttiva].classList.remove('show');
        slideAttiva--;
        if (slideAttiva == 00) {
            next.classList.add('hidden');
        }
    }
);