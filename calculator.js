const wrapper = document.querySelector('.digit');
let val = ""

document.querySelectorAll('.calc-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        val += e.currentTarget.value;
        wrapper.innerHTML = `<span class="digit p-3">${val}</span>`;
    });
});

document.querySelector('.result').addEventListener('click', (e) => {
  const result = eval(val.replace(/×/g, '*').replace(/÷/g, '/'));
  const rounded = Math.round(result * 1000000)/1000000;
  wrapper.innerHTML = `<span class="digit p-3">${rounded}</span>`;
});

document.querySelector('.reset').addEventListener('click',(e)=>{
  let reset = ""
  val = reset
  wrapper.innerHTML = `<span class="digit p-3">${reset}</span>`;
})

