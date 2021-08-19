const bill = document.querySelector(".content__values-input")
const labelError = document.querySelector('.content__error-input')
const btnPorcentagem = document.querySelectorAll('.content__btn-bill')
const inputNumberOfPeople = document.querySelector('.content__values-input-people')
const customTip = document.querySelector('.content__btn-bill-custom')
const labelErrorPeople = document.querySelector('.content__error-input-people')

const btnCalculate = document.querySelector('.content__btn-calc-style')
const tipAmount = document.querySelector('.content__tip-amount')
const totalConta = document.querySelector('.content__total-conta')
const btnReset = document.querySelector('.content__reset')



function validationValuesInputs() {
    
    if ((bill.value === '0') || (bill.value === '')) {
      bill.classList.add("erroInput")
      labelError.classList.add('error-label')
    }else {
      bill.classList.remove("erroInput")
      labelError.classList.remove('error-label')
      // console.log(Number(bill.value))
      return Number(bill.value)
    }
    
}
let button;
function btnSelected(){
  if(customTip.value > 0 || customTip.value !== '') {
    let porcentCustom = Number(customTip.value) / 100
    // console.log(porcentCustom)
    return porcentCustom
  }

  btnPorcentagem.forEach((btn) => {
    btn.addEventListener('click', (e)=> {
      
      btnPorcentagem.forEach((btn)=> {
        if (btn.classList.contains('selected')) {
            btn.classList.toggle('selected')
        }
      })
      e.target.classList.toggle('selected')
        customTip.value = 0
        btnPorcentagem.forEach((btn) => {
          if(btn.classList.contains('selected')) {
            button = btn
            // console.log(Number(button.value))
              
            return Number(button.value)
          }
            
        })
      })
  })
  
  
}


function numberOfPeople() {
    if ((inputNumberOfPeople.value === '0') || (inputNumberOfPeople.value === '')) {
      inputNumberOfPeople.classList.add("erroInput")
      labelErrorPeople.classList.add('error-label')
    }else {
      inputNumberOfPeople.classList.remove("erroInput")
      labelErrorPeople.classList.remove('error-label') 
      // console.log(Number(inputNumberOfPeople.value))
      return (Number(inputNumberOfPeople.value))
      
    }
}

function calculoDaGorjeta() {
  
    let bill = validationValuesInputs()
    let numberPeople = numberOfPeople()
    let btnSelecionado = btnSelected()
    let gorjeta = 0;
    let total = 0;

    let totalPorPessoa = 0;
    let tipPorPessoa = 0;
    // console.log(btnSelecionado)

    if(bill !== '' && bill !== 'undefined' && numberPeople !== '' && numberPeople !== 'undefined') {

      if(customTip.value == 0) {
        gorjeta = (bill * Number(button.value)).toFixed(2)
        total = (Number(bill) + Number(gorjeta)).toFixed(2)

        tipPorPessoa = (Number(gorjeta) / Number(numberPeople)).toFixed(2)
        totalPorPessoa = (Number(total) / Number(numberPeople)).toFixed(2)

        tipAmount.innerHTML = tipPorPessoa
        totalConta.innerHTML = totalPorPessoa
        // console.log(gorjeta ,total)
      }else{
        button.classList.remove('selected')
        gorjeta = (bill * btnSelecionado).toFixed(2)
        total = (Number(bill) + Number(gorjeta)).toFixed(2)

        tipPorPessoa = (Number(gorjeta) / Number(numberPeople)).toFixed(2)
        totalPorPessoa = (Number(total) / Number(numberPeople)).toFixed(2)

        tipAmount.innerHTML = tipPorPessoa
        totalConta.innerHTML = totalPorPessoa
        // console.log(gorjeta ,total)
      }
      
    }else {
      console.log('Valor Invalid ou Undefined')
    }
}

function reset() {
  bill.value = ''
  inputNumberOfPeople.value = ''
  tipAmount.innerHTML = '0.00'
  totalConta.innerHTML = '0.00'
  customTip.value = ''
  button.classList.remove('selected')
}


btnCalculate.addEventListener('click', (e)=> {
  e.preventDefault()
  calculoDaGorjeta()
});

btnSelected()
btnReset.addEventListener('click', reset)






