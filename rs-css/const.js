const level = document.querySelectorAll('.level_item');

const markup = document.querySelector('.markup');

const table = document.querySelector('.work_place');

const task = document.querySelector('.game_task');

const input = document.querySelector('.input_strobe');
const enter = document.querySelector('.css_field_btn');

const btnReset = document.querySelector('.reset_level');
const help = document.querySelector('.help_btn');

const wrightAnswers = ['round_plate', '#yellow', 'cucumber', 'square_plate orange', '#yellow cucumber', '.small', 'orange.small', 'square_plate orange.small', '*', 'round_plate + apple'];

const tableObjects = [`<div class="table_item round_plate wright"></div>
                      <div class="table_item round_plate wright"></div>`,
                  
                      `<div class="table_item round_plate"></div>
                      <div class="table_item square_plate"></div>
                      <div class="table_item round_plate wright" id="yellow"></div>`,

                      `<div class="table_item round_plate">
                        <div class="table_item cucumber wright"></div>
                      </div>
                      <div class="table_item square_plate">
                         <div class="table_item orange"></div>
                      </div>`,
                      
                      `<div class="table_item round_plate"></div>
                      <div class="table_item square_plate">
                         <div class="table_item orange wright"></div>
                      </div>
                      <div class="table_item orange"></div>`,
                     
                      `<div class="table_item square_plate">
                        <div class="table_item apple"></div>
                      </div>
                      <div class="table_item round_plate" id="yellow">
                        <div class="table_item cucumber wright"></div>
                      </div>
                      <div class="table_item round_plate">
                        <div class="table_item cucumber"></div>
                      </div>`,

                      `<div class="table_item apple"></div>
                      <div class="table_item round_plate"></div>
                      <div class="table_item round_plate">
                        <div class="table_item apple small wright"></div>
                      </div>
                      <div class="table_item apple small wright"></div>`,

                     `<div class="table_item square_plate">
                        <div class="table_item orange small wright"></div>
                      </div>
                      <div class="table_item apple"></div>
                      <div class="table_item round_plate">
                        <div class="table_item orange"></div>
                      </div>
                      <div class="table_item apple small"></div>
                      <div class="table_item round_plate">
                        <div class="table_item orange small wright"></div>
                      </div>`,
   
                      `<div class="table_item square_plate">
                        <div class="table_item orange"></div>
                      </div>
                      <div class="table_item orange small"></div>
                      <div class="table_item square_plate">
                        <div class="table_item orange small wright"></div>
                      </div>
                      <div class="table_item square_plate">
                        <div class="table_item apple small"></div>
                      </div>
                      <div class="table_item square_plate">
                        <div class="table_item orange small wright"></div>
                      </div>`,

                      `<div class="table_item cucumber wright"></div>                      
                      <div class="table_item apple wright"></div>
                      <div class="table_item square_plate wright">
                        <div class="table_item orange small"></div>
                      </div>
                      <div class="table_item square_plate wright" id="yellow">
                        <div class="table_item apple"></div>
                      </div>
                      <div class="table_item round_plate wright">
                        <div class="table_item cucumber"></div>
                      </div>`,

                     `<div class="table_item square_plate">
                        <div class="table_item apple"></div>
                      </div>
                      <div class="table_item round_plate"></div>                      
                      <div class="table_item apple small wright"></div>
                      <div class="table_item round_plate"></div>                      
                      <div class="table_item apple wright"></div>                      
                      <div class="table_item apple small"></div>`];

const markupObjects = [ `<div>&lt;div class="table"&gt;
                           <div class="markup_item" id="1">&lt;round_plate /&gt;</div>
                           <div class="markup_item" id="1">&lt;round_plate /&gt;</div>
                        &lt;/div&gt;</div>`,

                        `<div>&lt;div class="table"&gt;
                           <div class="markup_item" id="1">&lt;round_plate /&gt;</div>
                           <div class="markup_item" id="2">&lt;square_plate /&gt;</div>
                           <div class="markup_item" id="6">&lt;round_plate id="yellow" /&gt;</div>
                        &lt;/div&gt;</div>`,

                        `<div>&lt;div class="table"&gt;
                        <div class="markup_item" id="1">&lt;round_plate&gt;
                           <div class="markup_item" id="3">&lt;cucumber /&gt;</div>
                        &lt;/round_plate&gt;</div>
                        <div class="markup_item" id="2">&lt;square_plate&gt;
                           <div class="markup_item" id="4">&lt;orange /&gt;</div>
                        &lt;/square_plate&gt;</div>                        
                        &lt;/div&gt;</div>`,
                     
                        `<div>&lt;div class="table"&gt;
                        <div class="markup_item" id="1">&lt;round_plate /&gt;</div>
                        <div class="markup_item" id="2">&lt;square_plate &gt;
                           <div class="markup_item" id="4">&lt;orange /&gt;</div>
                        &lt;/square_plate&gt;</div>
                        <div class="markup_item" id="4">&lt;orange /&gt;</div>
                        &lt;/div&gt;</div>`,

                        `<div>&lt;div class="table"&gt;
                        <div class="markup_item" id="2">&lt;square_plate&gt;
                           <div class="markup_item" id="5">&lt;apple /&gt;</div>
                        &lt;/square_plate&gt;</div>
                        <div class="markup_item" id="6">&lt;round_plate id="yellow"&gt;
                           <div class="markup_item" id="3">&lt;cucumber /&gt;</div>
                        &lt;/round_plate&gt;</div>
                        <div class="markup_item" id="1">&lt;round_plate&gt;
                           <div class="markup_item" id="3">&lt;cucumber /&gt;</div>
                        &lt;/round_plate&gt;</div>                       
                        &lt;/div&gt;</div>`,
                     
                        `<div>&lt;div class="table"&gt;
                        <div class="markup_item" id="5">&lt;apple /&gt;</div>
                        <div class="markup_item" id="1">&lt;round_plate /&gt;</div>
                        <div class="markup_item" id="1">&lt;round_plate&gt;
                           <div class="markup_item" id="9">&lt;apple class="small" /&gt;</div>
                        &lt;/round_plate&gt;</div>                        
                        <div class="markup_item" id="9">&lt;apple class="small" /&gt;</div>                                               
                        &lt;/div&gt;</div>`,

                        `<div>&lt;div class="table"&gt;
                        <div class="markup_item" id="2">&lt;square_plate&gt;
                           <div class="markup_item" id="8">&lt;orange class="small" /&gt;</div>
                        &lt;square_plate /&gt;</div>
                        <div class="markup_item" id="5">&lt;apple /&gt;</div>
                        <div class="markup_item" id="1">&lt;round_plate&gt;
                           <div class="markup_item" id="4">&lt;orange /&gt;</div>
                        &lt;/round_plate&gt;</div>                        
                        <div class="markup_item" id="9">&lt;apple class="small" /&gt;</div>
                        <div class="markup_item" id="1">&lt;round_plate&gt;
                           <div class="markup_item" id="8">&lt;orange class="small" /&gt;</div>
                        &lt;round_plate /&gt;</div>                       
                        &lt;/div&gt;</div>`,

                        `<div>&lt;div class="table"&gt;
                        <div class="markup_item" id="2">&lt;square_plate&gt;
                           <div class="markup_item" id="4">&lt;orange /&gt;</div>
                        &lt;square_plate /&gt;</div>
                        <div class="markup_item" id="8">&lt;orange class="small" /&gt;</div>
                        <div class="markup_item" id="2">&lt;square_plate&gt;
                           <div class="markup_item" id="8">&lt;orange class="small" /&gt;</div>
                        &lt;/round_plate&gt;</div> 
                        <div class="markup_item" id="2">&lt;square_plate&gt;
                           <div class="markup_item" id="9">&lt;apple class="small" /&gt;</div>
                        &lt;round_plate /&gt;</div>
                        <div class="markup_item" id="2">&lt;square_plate&gt;
                           <div class="markup_item" id="8">&lt;orange class="small" /&gt;</div>
                        &lt;round_plate /&gt;</div>                       
                        &lt;/div&gt;</div>`,

                        `<div>&lt;div class="table"&gt;
                        <div class="markup_item" id="3">&lt;cucumber /&gt;</div>
                        <div class="markup_item" id="5">&lt;apple /&gt;</div>
                        <div class="markup_item" id="2">&lt;square_plate&gt;
                           <div class="markup_item" id="8">&lt;orange class="small" /&gt;</div>
                        &lt;/square_plate&gt;</div>                        
                        <div class="markup_item" id="7">&lt;square_plate id="yellow"&gt;
                           <div class="markup_item" id="5">&lt;apple /&gt;</div>
                        &lt;/square_plate&gt;</div>
                        <div class="markup_item" id="1">&lt;round_plate&gt;
                           <div class="markup_item" id="3">&lt;cucumber /&gt;</div>
                        &lt;/round_plate&gt;</div>
                        &lt;/div&gt;</div>`,
                        
                        `<div>&lt;div class="table"&gt;
                        <div class="markup_item" id="2">&lt;square_plate&gt;
                           <div class="markup_item" id="5">&lt;apple /&gt;</div>
                        &lt;/square_plate&gt;</div>
                        <div class="markup_item" id="1">&lt;round_plate /&gt;</div>
                        <div class="markup_item" id="9">&lt;apple class="small" /&gt;</div>
                        <div class="markup_item" id="1">&lt;round_plate /&gt;</div>
                        <div class="markup_item" id="5">&lt;apple /&gt;</div>
                        <div class="markup_item" id="9">&lt;apple class="small" /&gt;</div>                        
                        &lt;/div&gt;</div>`];

const tasks = ['Select the round plates', 
               'Select the yellow plate', 
               'Select the cucumber on the round plate',
               'Select the orange on the square plate',
               'Select the cucumber on the yellow plate',
               'Select the small apples',
               'Select the small oranges',
               'Select the small oranges on the square plate',
               'Select all the things!',
               `Select the apple that's next to the round plate`];