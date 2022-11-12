const exitBtn = document.querySelector('[data-exit]')
const burgerBtn = document.querySelector('[data-burger]')
const asider = document.querySelector('[data-asider]')
const menu = document.querySelector('[data-menu]')
burgerBtn.addEventListener('click' , ()=>{
    asider.classList.add('show');
    burgerBtn.classList.add('hide');
})

exitBtn.addEventListener('click' , ()=>{
    asider.classList.remove('show');
    burgerBtn.classList.remove('hide');
})
menu.addEventListener('click' , (e)=>{
    e.stopPropagation();
})
asider.addEventListener('click' , (e)=>{
    asider.classList.remove('show');
    burgerBtn.classList.remove('hide');
})
