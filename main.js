var amount = 300, out = document.querySelector('div.photo');
function rc() {
    return Math.floor(Math.random() * (255 - 50) + 50);
}
for (var i = 0; i < amount; i++) {
    var el = document.createElement('div'), _a = [rc(), rc(), rc()], r = _a[0], g = _a[1], b = _a[2];
    el.classList.add('glass');
    el.style.setProperty('--color', "rgb(" + r + "," + g + "," + b + ")");
    out.appendChild(el);
}
