alert("hello");

const form = document.querySelector('form');
console.log(form);

form.addEventListener('submit',function(b){ 

    b.preventDefault();             

  const height = parseInt(document.getElementById('height').value);
  // console.log(height);
  const weight = parseInt(document.getElementById('weight').value);
  // console.log(weight);
  const result = document.getElementById('results');
  // console.log(result);

  const bmiValue = (weight / ((height ** 2) / 10000)).toFixed(2);
  result.innerHTML = `<span>${bmiValue}</span>`;
})