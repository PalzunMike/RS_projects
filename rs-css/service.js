function removeObjTable (obj){
   for (let i = 0; i < obj.length; i++){      
   obj[i].classList.add('hidden');
   }
};

function wrongInput(e){
   const input_field = document.querySelector('.input_field');
   if (e.type === 'keypress'){     
      if (e.keyCode == 13 || e.which == 13){
         input_field.classList.toggle('wrong_aswer', input.value);      
      }else {
         input_field.classList.remove('wrong_aswer');
      };
   };
};



function resetProgress(){
   Array.from(level).forEach( level => {
      level.classList.remove('passed_level')
   });

   for (let i = 0; i < 10; i++){
      levelPass[i] = false;
   };

   for (let i = 1; i <= 10; i++){
      localStorage.setItem(`${i} level_passed`, false);
   };
};

function makeHelp(){
   input.classList.toggle('help_effect');

   for (let i = 0; i < 10; i++){      
      input.value = localStorage.getItem(`answer for ${numLevel} level`);
   }
};

function finishGame(){
   
   let win = levelPass.every(element => element == true);  
   let popup = document.querySelector('.popup_win');
   let btnAgain = document.querySelector('.again_btn');

   if (win){
      popup.classList.remove('popup_hidden');
      btnAgain.addEventListener('click', () => {
         popup.classList.add('popup_hidden');
         resetProgress();
      })
   }   
};

