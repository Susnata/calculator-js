var MilkuLabs = (function(){
  document.getElementById("calculator")
          .addEventListener("click", displayBtnPressed);
  let displayQ = []
      finalResult = false;        
  function displayBtnPressed(evt){
    function calculatePartialResult(operand1, operator, operand2){
      // debugger;
      let op1 = Number.parseFloat(operand1);
      let op2 = Number.parseFloat(operand2);
      let op = operator;

      switch(op){
        case "+" :
          op1 += op2;
          break;
        case "-" :
          op1 -= op2;
          break;
        case "X" :
          op1 *= op2;
          break;
        case "/" :
          op1 /= op2;
          break;
      }
      return op1;

    }
    function evaluateResult(){
      // debugger;
      let operand1 = "",
          operator = "",
          operand2 ="", tempOperand1,
          operatorFound = false;
          notFirst = false;
          arrEl = "";
      for(var i=0; i< displayQ.length; i++){
        debugger;
        arrEl = displayQ[i].trim();
        switch(arrEl){
          case "0" :
          case "1" :
          case "2" :
          case "3" :
          case "4" :
          case "5" :
          case "6" :
          case "7" :
          case "8" :
          case "9" :
          case "." : 
            // {
              if (!operatorFound){
                operand1 += arrEl;
                tempOperand1 = operand1;
              }
              else{
                operand2 += arrEl;
                if (operand2 !== ''){
                  operand1 = tempOperand1;
                }
                operand1 = calculatePartialResult(operand1,operator,operand2);
              }
            break;
            
            // }
          case "+" :
          case "-" :
          case "X" :
          case "/" :
            operator = arrEl;
            tempOperand1 = operand1;
            operand2 = "" ;
            if (!operatorFound) {
              // operator1 = arrEl;
              operatorFound = true;
            }
          break;
      }
    }
      //operand1 = calculatePartialResult(operand1,operator,operand2);
      return operand1;      
    }


    let targetEl = evt.target;
    let displayInput = document.getElementById("display-input")
        displayResult = document.getElementById("display-result");
    let keyType = targetEl.getAttribute("data-type"),
        operandKey = targetEl.getAttribute("data-value"),
        operatorKey = targetEl.getAttribute("data-operation");

//    debugger;
    switch(keyType) {
      case "operator" : 
        displayQ.push(operatorKey);
        displayInput.innerHTML = displayQ.join("");
        break;
      case "operand" :
        displayQ.push(operandKey);
        displayInput.innerHTML = displayQ.join("");
        break;
      case "evaluate" :
        //displayResult.innerHTML = evaluateResult();
        displayInput.innerHTML = "";
        finalResult = true;
        break;
      case "delete" :
        debugger; 
        // displayQ = displayQ.slice(0, displayQ.length - 1);
        // displayInput.innerHTML = displayQ.join("");
        if (finalResult){
          displayQ = [];
          finalResult = false;
        }else{
          displayQ = displayQ.slice(0, displayQ.length - 1);
          displayInput.innerHTML = displayQ.join("");          
        }
        break;
      }
    displayResult.innerHTML = evaluateResult();
    }
  return {
    displayBtnPressed : displayBtnPressed
  }

})();