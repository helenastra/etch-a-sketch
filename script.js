const board = document.querySelector('.board')
const resetButton = document.querySelector('#reset')
const eraseButton = document.querySelector('#erase')
const sizeButton = document.querySelector('#resize')
const drawButton = document.querySelector('#draw')

drawButton.addEventListener('click', () => whiteChalk())
eraseButton.addEventListener('click', () => erase())
sizeButton.addEventListener('click', () => reSize())
resetButton.addEventListener('click', () => resetBoard())

function createBoard(col, row) {
    for (i = 0; i < col * row; i++) {
        const div = document.createElement('div')
        board.style.gridTemplateColumns = `repeat(${col}, 1fr)`
        board.style.gridTemplateColumns = `repeat(${row}, 1fr)`
        board.appendChild(div).classList.add('box')
    }
}

function whiteChalk() {
    const boxes = board.querySelectorAll('.box')
    boxes.forEach(box => box.addEventListener('mouseover', () => {
        box.style.background = 'white'
    }))
}

function resetBoard() {
    const boxes = document.querySelectorAll('.box')
    boxes.forEach(box => box.style.background = '#346b31')
}

function erase() {
    const boxes = board.querySelectorAll('.box')
    boxes.forEach(box => box.addEventListener('mouseover', () => {
        box.style.background = '#346b31'
    }))
}

function reSize() {
    let size = prompt('Enter desired grid-size.')
    if (size === null || isNaN(size) || size < 1 ) {
        alert('Invalid grid-size, please retry.')
    }
    else {
        const boxes = document.querySelectorAll('.box')
        boxes.forEach(box => box.remove())
        createBoard(size, size)
    }
}

createBoard(16, 16)