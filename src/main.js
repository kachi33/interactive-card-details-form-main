import './style.css'

const nameInput = document.getElementById('name');
nameInput.addEventListener('input', (e) => {
  const nameValue = e.target.value;

  document.getElementById('card-name-display').textContent = nameValue;
  console.log(nameValue);
});

const nunmberInput = document.getElementById('number');
nunmberInput.addEventListener('input', (e) => {
  const numberValue = e.target.value;

  document.getElementById('card-number-display').textContent = numberValue;
  console.log(numberValue); 
});

