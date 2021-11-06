
// localStorage.setItem(`data`, 5); // Установить значения
// localStorage.clear();
// localStorage.getItem(`data`)
let thank = document.querySelector(`.module`);

window.addEventListener(`load`, ()=>{
  
  if(localStorage.getItem(`data`) == `true`){
    console.log(`Запрос на заявку отправлен и поэтому показую диаалоговое окно`);
    document.querySelector(`body`).style.overflowY = `hidden`; // Убераю скрол
    thank.style.display = `block`; // Показываю благодарность.

    setTimeout(function(){ // Убираю через 4 секунды блок
      thank.style.display = `none`;
      document.querySelector(`body`).style.overflowY = `scroll`;
      console.log(`время выполнилось`);
      window.onclick();
    }, 4000)

    localStorage.clear();
  }
})


document.querySelector(`form`).addEventListener(`submit`, ()=>{
  localStorage.setItem(`data`, true);
})