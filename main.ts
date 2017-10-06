const amount:number = 300,
  out:Element = document.querySelector('div.photo')
function rc():number{
  return Math.floor(Math.random() * (255 - 50) + 50)
}
for(let i = 0;i < amount;i++){
  const el = document.createElement('div'),
        [r,g,b]:number[] = [rc(),rc(),rc()]
  el.classList.add('glass')
  el.style.setProperty('--color', `rgb(${r},${g},${b})`)
  out.appendChild(el)
}