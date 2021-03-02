const cellSize = 100;
let counter = 0;
let timeout;
let timer = false;
let seconds = 0;

let cells = [];

function init() {
    //create main elements
    const h1 = document.createElement('h1');
    const infoBlock = document.createElement('div');
    const field = document.createElement('div');
    //create popup
    const popup = document.createElement('div');
    const popupText = document.createElement('div');
    const btnPopup = document.createElement('button');
    //add clases
    field.className = 'field';
    infoBlock.className = 'info_block';
    //add clases for popup
    popup.classList.add('popup');
    popup.classList.add('hidden');
    popupText.classList.add('popup_text');
    btnPopup.classList.add('btn_popup');
    //add content
    h1.innerText = 'Gem-puzzle';
    infoBlock.innerHTML =
        `<span class="time">Time: 00:00:00</span>
    <span class="moves">Moves:<span id='move'>${counter}</span></span>`;
    //add content for popup
    popupText.innerHTML = '';
    btnPopup.innerText = 'Ok';
    //add to DOM
    document.body.append(h1);
    document.body.append(infoBlock);
    document.body.append(field);
    document.body.append(popup);

    popup.appendChild(popupText);
    popup.appendChild(btnPopup);

    createCells();
}


function createCells() {
    const field = document.querySelector('.field');
    const moves = document.querySelector('.moves');

    const numbers = [...Array(15).keys()].sort(() => Math.random() - 0.5);

    for (let i = 0; i <= 15; i++) {
        const cell = document.createElement('div');
        const value = numbers[i - 1] + 1;

        cell.className = 'cell';
        cell.innerHTML = value;

        let left = 0;
        let top = 0;

        if (i !== 0) {
            left = (i - 1) % 4;
            top = ((i - 1) - left) / 4;
        } else {
            left = 3;
            top = 3;
            cell.className = 'empty';
        }

        cells.push({
            value: value,
            left: left,
            top: top,
            element: cell
        });

        cell.style.left = `${left * cellSize}px`;
        cell.style.top = `${top * cellSize}px`;

        field.append(cell);

        cell.addEventListener('click', () => {

            move(i);
            ++counter;
            moves.innerHTML = `Moves: ${counter}`;
            if (!timer && counter > 0) {
                setTimer();
                timer = !timer;
            }

        });
    }
}

function startNewgame() {
    let random = [...Array(16).keys()].sort(() => Math.random() - 0.5);

    for (let i = 1; i <= 15; ++i) {
        let cell = cells[i];
        if (random[i] === 0) {
            cells[0].value = random[i];
            cells[0].element.innerHTML = `${random[i]}`;
            cells[i].value = random[0];
            cells[i].element.innerHTML = `${random[0]}`;
        } else {
            cell.value = random[i];
            cell.element.innerHTML = `${random[i]}`;
        }

        let left = (i - 1) % 4;
        let top = ((i - 1) - left) / 4;

        cell.left = left;
        cell.top = top;

        cell.element.style.left = `${left * cellSize}px`;
        cell.element.style.top = `${top * cellSize}px`;
    }

}

function move(index) {
    const moves = document.querySelector('.moves');
    const popup = document.querySelector('.popup');
    const popupText = document.querySelector('.popup_text');

    const cell = cells[index];
    const leftDiff = Math.abs(cells[0].left - cell.left);
    const topDiff = Math.abs(cells[0].top - cell.top);

    if (leftDiff + topDiff > 1) {
        return;
    }
    
    cell.element.style.left = `${cells[0].left * cellSize}px`;
    cell.element.style.top = `${cells[0].top * cellSize}px`;

    const emptyLeft = cells[0].left;
    const emptyTop = cells[0].top;

    cells[0].left = cell.left;
    cells[0].top = cell.top;

    cell.left = emptyLeft;
    cell.top = emptyTop;

    const isFinished = cells.every(cell => {
        if (isNaN(cell.value)) {
            return (cell.top - cell.left) === 0;
        } else {
            return cell.value === cell.top * 4 + (cell.left + 1);
        }
    });

    if (isFinished) {
        let h = parseInt(seconds / 3600 % 24);
        let m = parseInt(seconds / 60 % 60);
        let s = parseInt(seconds % 60);

        popupText.innerHTML = `<p>Congratulations!</p><p>You won<br>in ${counter + 1} moves!</p><br>
        in ${addZero(h)}:${addZero(m)}:${addZero(s)}!</p>`;
        popup.classList.remove('hidden');

        document.querySelector('.btn_popup').addEventListener('click', () => {
            popup.classList.add('hidden');
            counter = 0;
            moves.innerHTML = `Moves: ${counter}`;
            timerDrop();
            clearTimeout(timeout);
            startNewgame();
        });
    }
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setTimer() {
    let time = document.querySelector('.time');

    let h = parseInt(seconds / 3600 % 24);
    let m = parseInt(seconds / 60 % 60);
    let s = parseInt(seconds % 60);
    time.innerHTML = `Time: ${addZero(h)}:${addZero(m)}:${addZero(s)}`;
    if (counter > 0) {
        ++seconds;
    }
    timeout = setTimeout(setTimer, 1000);
}

function timerDrop() {
    let time = document.querySelector('.time');
    timer = !timer;
    seconds = 0;
    time.innerHTML = `Time: 00:00:00`;
}

window.addEventListener("DOMcontentLoaded", init());