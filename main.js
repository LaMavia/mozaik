const amount = 3000, out = document.querySelector('div.photo'), input = document.querySelector('input.input-link'), inNum = document.querySelector('input.input-num');
let link = './cat.jpg';
let size = 2;
let styles = [
    `--link: url(${link})`
];
function upStyles() {
    styles = [
        `--link: url(${link})`,
        `--s: ${size || 2}`
    ];
    const mStyles = styles.join("; ");
    out.setAttribute('style', mStyles);
}
upStyles();
function rc(min = 100, max = 255) {
    return Math.floor(Math.random() * (max - min) + min);
}
function setLink(l) {
    link = l || './cat.jpg';
    upStyles();
}
function setSize(s) {
    size = s;
    upStyles();
}
window.addEventListener('DOMContentLoaded', (e) => {
    for (let i = 0; i < amount; i++) {
        const el = document.createElement('div'), [r, g, b] = [rc(), rc(), rc()];
        el.classList.add('glass');
        el.style.setProperty('--color', `rgb(${r},${g},${b})`);
        out.appendChild(el);
    }
});
inNum.addEventListener('change', function (e) {
    setSize(e.target.value);
});
input.addEventListener('change', function (e) {
    setLink(e.target.value);
});
