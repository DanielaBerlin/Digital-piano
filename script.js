const keys = document.querySelectorAll('.key');
const note = document.querySelectorAll('.key-pressed');

window.addEventListener('keydown', playNote);

function playNote(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`key[data-key="${e.keyCode}"]`);
    
    if (!key) return;

    const keyNote = key.dataset.note;

    
}
