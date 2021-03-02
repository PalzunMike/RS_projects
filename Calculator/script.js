var numbers = document.querySelectorAll('.number');
    operators = document.querySelectorAll('.operator');
    decimalBtn = document.getElementById('decimal');
    clearBtns = document.querySelectorAll('.clearBtns');
    resultBtn = document.getElementById('result');
    squareBtn = document.getElementById('square');
    negativeBtn = document.getElementById('negative');
    display = document.getElementById('display');
    memoryCurrentNumber = 0;
    memoryNewNumber = false;
    memoryPendingOperation = '';

for (let i=0; i<numbers.length; i++){
    let number = numbers[i];
    number.addEventListener('click', function (e){
       numberPress(e.target.textContent);
    });
};

for (let i=0; i<operators.length; i++){
    let operator = operators[i];
    operator.addEventListener('click', function (e){
         operation(e.target.textContent);
    });
};

for (let i=0; i<clearBtns.length; i++){
    let clearBtn = clearBtns[i];
    clearBtn.addEventListener('click', function(e){
        clear(e.srcElement.id);
    });
};

decimalBtn.addEventListener('click', decimal);

squareBtn.addEventListener('click', calcSquare);

negativeBtn.addEventListener('click', doNegativeNumber);


 
function numberPress(number){
    if (memoryNewNumber){
        display.value = number;
        memoryNewNumber = false;
    } else {
        if (display.value === '0'){
            display.value = number;
        } else {
            display.value += number;
        };
    };

};

function operation(op){
let  localOperationMemory = display.value;

    if (memoryNewNumber && memoryPendingOperation !== '='){
        display.value = memoryCurrentNumber;
    } else {
        memoryNewNumber = true;
            if (memoryPendingOperation === '+') {
                memoryCurrentNumber += parseFloat(localOperationMemory);
            } else if (memoryPendingOperation === '-') {
                memoryCurrentNumber -= parseFloat(localOperationMemory);     
            } else if (memoryPendingOperation === '*') {
                memoryCurrentNumber *= parseFloat(localOperationMemory);
            } else if (memoryPendingOperation === '/') {
                memoryCurrentNumber /= parseFloat(localOperationMemory);
            } else if (memoryPendingOperation === '^') {
                memoryCurrentNumber = Math.pow(memoryCurrentNumber, parseFloat(localOperationMemory));
            } else { 
                memoryCurrentNumber = parseFloat(localOperationMemory);
            }
        display.value = parseFloat(memoryCurrentNumber.toFixed(10));
        memoryPendingOperation = op;
    };
};

function decimal(){
    let localDecimalMemory = display.value;

    if (memoryNewNumber){
        localDecimalMemory = '0.';
        memoryNewNumber = false;
    } else { 
        if (localDecimalMemory.indexOf('.') === -1){
            localDecimalMemory += '.';
        };
    };
    display.value = localDecimalMemory;
};

function clear(id){
    if (id === 'ce'){
        display.value = '0';
        memoryNewNumber = true;
    } else if (id === 'c'){
        display.value = '0';
        memoryNewNumber = true;
        memoryCurrentNumber = 0;
        memoryPendingOperation = '';
    };
};

function calcSquare(){
    let localSquareMemory = display.value;

    if (localSquareMemory < 0){
        memoryCurrentNumber = 'Error';
    } else {
            memoryCurrentNumber = Math.sqrt(parseFloat(localSquareMemory));
        };
        display.value = memoryCurrentNumber;
};

function doNegativeNumber(){
    let localNegativeMemory = display.value;
    localNegativeMemory = -localNegativeMemory;
    display.value = localNegativeMemory;
};
