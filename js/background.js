const images = [
    'https://cdn.pixabay.com/photo/2021/11/15/05/52/red-fox-6796430_960_720.jpg',
    'https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523_960_720.jpg',
    'https://cdn.pixabay.com/photo/2021/11/16/08/13/window-6800397_960_720.jpg',
    'https://cdn.pixabay.com/photo/2021/11/17/15/07/paris-6803796_960_720.jpg',
    'https://cdn.pixabay.com/photo/2021/08/26/15/39/cat-6576397_960_720.jpg'
];

const wrap = document.querySelector(".wrap");
const randomBg = images[Math.floor(Math.random() * images.length)];

wrap.style.backgroundImage = `url(${randomBg})`;
wrap.style.backgroundSize = "960px 720px";