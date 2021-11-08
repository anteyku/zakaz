let arrow = document.querySelector(`.switch`);
let logo = document.querySelector(`#Magnum`);

// Проверка проскроленного разстояния от верху
window.addEventListener(`scroll`, (e)=>{
  let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  
  if(posTop >= 100){
    arrow.style.display = `block`;
  } else {
    arrow.style.display = `none`;
  }
})

// Прокрутка страницы к верху при нажатии на кнопку
arrow.addEventListener(`click`, ()=>{
  logo.scrollIntoView({block: "center", behavior: "smooth"})
})