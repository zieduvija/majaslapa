if(localStorage.getItem('color') != null) {
    document.documentElement.style.setProperty('--color', localStorage.getItem('color'));
}


document.querySelector('.blue').addEventListener('click', () => {
    document.documentElement.style.setProperty('--color', '#05528d');
    localStorage.setItem('color', '#05528d');
});

document.querySelector('.purple').addEventListener('click', () => {
    document.documentElement.style.setProperty('--color', 'purple');
    localStorage.setItem('color', 'purple');
});

document.querySelector('.black').addEventListener('click', () => {
    document.documentElement.style.setProperty('--color', 'black');
    localStorage.setItem('color', 'black');
});


document.querySelector('.yellow').addEventListener('click', () => {
    document.documentElement.style.setProperty('--color', '#ffb700');
    localStorage.setItem('color', '#ffb700');
});


const card = document.querySelector('.img')

let counter = 0;
let images = ['images/slideshow1.jpg', 'https://images.shiksha.com/mediadata/shikshaOnline/mailers/2022/naukri-learning/what-is/What-is-web-development.jpg', 'https://www.usnews.com/dims4/USNEWS/fb6e5fb/2147483647/crop/2000x1334+0+2/resize/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F65%2F62%2Fc9cb60d24ac89d56462b1228574a%2F201009-codingcomputer-stock.jpg', 'https://st2.depositphotos.com/2631505/5867/i/950/depositphotos_58676603-stock-photo-businessman-pointing-gun-to-computer.jpg'];
setInterval(() => {
    counter++;
    if(counter > images.length - 1) {
        counter = 0;
    }
    card.style.backgroundImage = `url(${images[counter]})`;
} , 5000);


let mybutton = document.getElementById("backup");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

