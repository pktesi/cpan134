const board = document.getElementById('chessboard');
const pieces = {
  r: '♜', n: '♞', b: '♝', q: '♛', k: '♚', p: '♟',
  R: '♖', N: '♘', B: '♗', Q: '♕', K: '♔', P: '♙'
};

// Initial board setup (FEN-style)
const setup = [
  'rnbqkbnr',
  'pppppppp',
  '        ',
  '        ',
  '        ',
  '        ',
  'PPPPPPPP',
  'RNBQKBNR'
];

// Create board
setup.forEach((row, i) => {
  row.split('').forEach((char, j) => {
    const square = document.createElement('div');
    square.classList.add('square');
    square.classList.add((i + j) % 2 === 0 ? 'white' : 'black');
    square.setAttribute('data-row', i);
    square.setAttribute('data-col', j);

    if (char !== ' ') {
      square.textContent = pieces[char];
      square.setAttribute('draggable', true);
    }

    board.appendChild(square);
  });
});

// Drag and Drop
let draggedPiece = null;

board.addEventListener('dragstart', e => {
  draggedPiece = e.target.textContent;
  e.target.textContent = '';
});

board.addEventListener('dragover', e => {
  e.preventDefault();
  if (e.target.classList.contains('square')) {
    e.target.classList.add('dragover');
  }
});

board.addEventListener('dragleave', e => {
  e.target.classList.remove('dragover');
});

board.addEventListener('drop', e => {
  e.preventDefault();
  if (e.target.classList.contains('square')) {
    e.target.classList.remove('dragover');
    e.target.textContent = draggedPiece;
  }
});
