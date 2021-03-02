let levelPass = [
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false,
   false
]

let currentLevel = '1 level';
let numLevel = parseInt(currentLevel);

function init(lev){   
   if (currentLevel === (lev + 1) + ' level'){
      table.innerHTML = tableObjects[lev];
      markup.innerHTML = markupObjects[lev];
      task.innerHTML = tasks[lev];            
   } 
   selectElements();   
};

function setLevel () {
   Array.from(level).forEach( level => {
      level.classList.remove('current_level')
   }); 

   input.classList.remove('help_effect');
   
   checkPassedLevel();   

   if (localStorage.getItem('level') === null || localStorage.getItem('level') === '') {
     currentLevel = '1 level';     
   } else {
      currentLevel = localStorage.getItem('level');
   };

   numLevel = parseInt(currentLevel);
   level[numLevel - 1].classList.toggle('current_level', currentLevel);   
   
   for (let i = 0; i < 10; i++){
      init(i);     

      level[i].addEventListener('click', () => {      
         Array.from(level).forEach( level => {
            level.classList.remove('current_level')
         });
         level[i].classList.toggle('current_level', currentLevel);
         currentLevel = level[i].textContent; 
         numLevel = i + 1;
         input.value = '';
         localStorage.setItem('level', currentLevel);
         localStorage.setItem('numLevel', numLevel);         
         init(i);                 
      });   
   }
};

function checkLevel(e){
   let answer = input.value;   
   const wright = document.querySelectorAll('.wright');

   for (let i = 0; i < 10; i++){
      if (answer === wrightAnswers[i] && currentLevel === `${i + 1} level`){
         levelPass[i] = true;
         localStorage.setItem(`${currentLevel}_passed`, true);              
         removeObjTable(wright);
         setPassedLevel();
         setTimeout (setLevel, 500);         
         setTimeout (finishGame, 300);
      }else{
         wrongInput(e);
         enter.addEventListener('click', () =>{
            const input_field = document.querySelector('.input_field');
            input_field.classList.toggle('wrong_aswer', input.value);
         });
      }
   }
};

function checkPassedLevel(){   
   for (let i = 1; i <= 10; i++){
      
      if (localStorage.getItem(`${i} level_passed`) == 'true'){
         level[i - 1].classList.add('passed_level');
         levelPass[i - 1] = true;         
      };   
   localStorage.setItem(`answer for ${i} level`, wrightAnswers[i - 1]);
   };    
};

function setPassedLevel(){
   
   if (levelPass[numLevel - 1] === true && numLevel <= 10){
      level[numLevel - 1].classList.toggle('passed_level', levelPass[numLevel - 1]);
      input.value = '';         

      if(numLevel < 10){
         numLevel = Number(numLevel) + 1; 
         currentLevel = numLevel + ' level';         
      }else {
         numLevel = 1;
         currentLevel = numLevel + ' level';
      }

      localStorage.setItem('level', currentLevel);
      localStorage.setItem('numLevel', numLevel);
   }   
};

function selectElements(){
   let tableItem = document.querySelectorAll('.table_item');
   let markupItem = document.querySelectorAll('.markup_item');
   let popupTooltip = document.querySelector('.popup_tooltip');   

   for (let i = 0; i < tableItem.length; i++){
      tableItem[i].addEventListener('mouseover', (e) => {
         e.stopPropagation();         
         markupItem[i].classList.add('select_markup');
         tableItem[i].classList.add('select_table');
         popupTooltip.classList.add('tooltip_hidden');
         if (markupItem[i].id === '1'){
            popupTooltip.innerHTML = '&lt;round_plate&gt;&lt;/round_plate&gt';
         } else if (markupItem[i].id === '2'){
            popupTooltip.innerHTML = '&lt;square_plate&gt;&lt;/square_plate&gt';
         } else if (markupItem[i].id === '3'){
            popupTooltip.innerHTML = '&lt;cucumber&gt;&lt;/cucumber&gt';
         } else if (markupItem[i].id === '4'){
            popupTooltip.innerHTML = '&lt;orange&gt;&lt;/orange&gt';
         } else if (markupItem[i].id === '5'){
            popupTooltip.innerHTML = '&lt;apple&gt;&lt;/apple&gt';
         } else if (markupItem[i].id === '6'){
            popupTooltip.innerHTML = '&lt;round_plate id="yellow"&gt;&lt;/round_plate&gt';
         } else if (markupItem[i].id === '7'){
            popupTooltip.innerHTML = '&lt;square_plate id="yellow"&gt;&lt;/square_plate&gt';
         } else if (markupItem[i].id === '8'){
            popupTooltip.innerHTML = '&lt;orange class="small"&gt;&lt;/orange&gt';
         }else if (markupItem[i].id === '9'){
            popupTooltip.innerHTML = '&lt;apple id="small"&gt;&lt;/apple&gt';
         };                         
      });

      tableItem[i].addEventListener('mouseout', (e) => {         
         markupItem[i].classList.remove('select_markup');
         tableItem[i].classList.remove('select_table');
         popupTooltip.classList.remove('tooltip_hidden');
         e.stopPropagation();
      }); 

      markupItem[i].addEventListener('mouseover', (e) => {         
         tableItem[i].classList.add('select_table');
         markupItem[i].classList.add('select_markup');
         popupTooltip.classList.add('tooltip_hidden');
         if (markupItem[i].id === '1'){
            popupTooltip.innerHTML = '&lt;round_plate&gt;&lt;/round_plate&gt';
         } else if (markupItem[i].id === '2'){
            popupTooltip.innerHTML = '&lt;square_plate&gt;&lt;/square_plate&gt';
         } else if (markupItem[i].id === '3'){
            popupTooltip.innerHTML = '&lt;cucumber&gt;&lt;/cucumber&gt';
         } else if (markupItem[i].id === '4'){
            popupTooltip.innerHTML = '&lt;orange&gt;&lt;/orange&gt';
         } else if (markupItem[i].id === '5'){
            popupTooltip.innerHTML = '&lt;apple&gt;&lt;/apple&gt';
         } else if (markupItem[i].id === '6'){
            popupTooltip.innerHTML = '&lt;round_plate id="yellow"&gt;&lt;/round_plate&gt';
         } else if (markupItem[i].id === '7'){
            popupTooltip.innerHTML = '&lt;square_plate id="yellow"&gt;&lt;/square_plate&gt';
         } else if (markupItem[i].id === '8'){
            popupTooltip.innerHTML = '&lt;orange class="small"&gt;&lt;/orange&gt';
         }else if (markupItem[i].id === '9'){
            popupTooltip.innerHTML = '&lt;apple id="small"&gt;&lt;/apple&gt';
         };                   
         e.stopPropagation();          
      });
      markupItem[i].addEventListener('mouseout', (e) => {
         e.stopPropagation();
         tableItem[i].classList.remove('select_table');
         markupItem[i].classList.remove('select_markup');
         popupTooltip.classList.remove('tooltip_hidden');                 
      });     
   }
};

window.addEventListener('DOMcontentLoaded', setLevel());
input.addEventListener('keypress', checkLevel);
btnReset.addEventListener('click', resetProgress);
help.addEventListener('click', makeHelp);



