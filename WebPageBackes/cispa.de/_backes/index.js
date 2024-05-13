const btn_selected = document.getElementById('btn_selected');
const btn_all = document.getElementById('btn_all');
document.addEventListener('DOMContentLoaded', function() {
  btn_selected.style.color = 'crimson';
  btn_all.style.color = 'black';
  // btn_selected.style.color = 'white';
const boxes = document.getElementsByClassName('paper_wrapper_all');

  for (const box of boxes) {
    // 👇️ Remove element from DOM
    box.style.display = 'none';

    // 👇️ hide element (still takes up space on page)
    // box.style.visibility = 'hidden';
  }
});

btn_selected.addEventListener('click', () => {
  btn_selected.style.color = 'crimson';
  btn_all.style.color = 'black';
  // btn_selected.style.color = 'white';
const boxes = document.getElementsByClassName('paper_wrapper_all');

  for (const box of boxes) {
    // 👇️ Remove element from DOM
    box.style.display = 'none';

    // 👇️ hide element (still takes up space on page)
    // box.style.visibility = 'hidden';
  }
});
btn_all.addEventListener('click', () => {
  const boxes = document.getElementsByClassName('paper_wrapper_all');
  // btn_selected.style.backgroundColor = 'white';
  // btn_all.style.backgroundColor = 'white';
  btn_selected.style.color = 'black';
  btn_all.style.color = 'crimson';
  // btn_selected.style.color = 'white';
  for (const box of boxes) {
    // 👇️ Remove element from DOM
    box.style.display = 'list-item';

    // 👇️ hide element (still takes up space on page)
    // box.style.visibility = 'hidden';
  }
});
