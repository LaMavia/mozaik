const amount:number = 3000,
  out:Element = document.querySelector('div.photo'),
  input:Element = document.querySelector('input.input-link'),
  inNum:Element = document.querySelector('input.input-num')
let link:string = './cat.jpg'
let size = 2;
let styles = [
  `--link: url(${link})`
]

function upStyles():void{
  styles = [
    `--link: url(${link})`,
    `--s: ${size || 2}`
  ]
  const mStyles = styles.join("; ")
  out.setAttribute('style', mStyles)
}
upStyles()
function rc(min:number = 100, max:number = 255):number{
  return Math.floor(Math.random() * (max - min) + min)
}
function setLink(l:string):void{
  link = l || './cat.jpg'
  upStyles()
}
function setSize(s:number):void{
  size = s
  upStyles()
}

window.addEventListener('DOMContentLoaded', (e) => {
  for(let i = 0;i < amount;i++){
    const el = document.createElement('div'),
          [r,g,b]:number[] = [rc(),rc(),rc()]
    el.classList.add('glass')
    el.style.setProperty('--color', `rgb(${r},${g},${b})`)
    out.appendChild(el)
  }
})
inNum.addEventListener('change', function(e){
  setSize(e.target.value)
})
input.addEventListener('change', function(e){
  setLink(e.target.value)
})