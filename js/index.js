const amountInput = document.getElementById("number");
const addForm = document.getElementById("addForm");

const savingsAmount = document.getElementById("savingsAmount");
const balanceAmount = document.getElementById("balanceAmount");

function getBudgetAmount(amount) {
  if (!amount) {
    amountInput.style.border = "1px solid #b80c09";
    amountInput.placeholder = "input can not be empty";
    amountInput.style.color = "#b80c09";
    setTimeout(() => {
      amountInput.style.color = "#495057";
      amountInput.style.border = "1px solid gray";
    }, 3000);
    
  } else {
    savingsAmount.innerText = amount;
    balanceAmount.innerText = amount;
    savingsForm.style.display = "block";
    savingsform.style.display = "none";
    editForm.style.display = "none";
    amountInput.value = "";
  }
}
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getsavingsAmount(amountInput.value);
});