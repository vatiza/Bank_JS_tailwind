document.getElementById('btn-deposit').addEventListener('click',function(){
  const depositField=document.getElementById('deposit-input');
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  const depositTotalElement=document.getElementById('total-deposit');
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal=parseFloat(previousDepositTotalString)
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = currentDepositTotal;

  const balanceTotalElement = document.getElementById('total-balance');
  const preBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(preBalanceTotalString);

  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = currentBalanceTotal;


    depositField.value='';
})