function generateEquations(operator, maxResult) {
    var equationsDiv = $('#equations');
    equationsDiv.empty();
    
    for (let i = 0; i < 10; i++) {


        let num1 = Math.floor(Math.random() * 10) + 1;
        let num2 = Math.floor(Math.random() * 10) + 1;
        
        let result = calculateResult(num1, num2, operator);
        let equation = createRandomEquation(num1, num2, result, operator);
        

        while (result > maxResult || (operator === "/" && !Number.isInteger(result))) {
        

            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;

            result = calculateResult(num1, num2, operator);
            equation = createRandomEquation(num1, num2, result, operator, i);
        }

        equationsDiv.append(equation);       
    }
}


function createRandomEquation(num1, num2, result, operator, i ) {
    let newDiv = $("<div></div>").addClass("equation").data("id", i);
    
    let num1Div =      $("<div></div>").addClass("num1").text(num1);
    num1Div.attr("data-id", i);
    num1Div.attr("data-value", num1);

    let operatorDiv =  $("<div></div>").addClass("operator").text(operator);
    operatorDiv.attr("data-id", i);
    operatorDiv.attr("data-value", operator);

    let num2Div =      $("<div></div>").addClass("num2").text(num2);
    num2Div.attr("data-id", i);
    num2Div.attr("data-value", num2);

    let equalDiv =     $("<div></div>").addClass("equal").text("=");
    equalDiv.attr("data-id", i);
    equalDiv.attr("data-value", "=");

    let resultDiv =    $("<div></div>").addClass("result").text(result);
    resultDiv.attr("data-id", i);
    resultDiv.attr("data-value", result);

   
    let input = $('<input>').attr('type', 'text').attr('id', 'input' + i).addClass("CalcInput");
    input.attr("data-id", i);
    
    
    let inputPosition = Math.floor(Math.random() * 3);
    switch(inputPosition){
        case 0:
            resultDiv.empty();
            resultDiv.append(input);
        break;
        
        case 1:
            num1Div.empty();
            num1Div.append(input);
        break;
        
        case 2:
        default:
            num2Div.empty();
            num2Div.append(input);
        break;
    }




    //callback pour vérifier si l'utilisateur a encore le focus sur l'input 
    input.blur(function() {
        let parentDiv = $(this).parent();
        let inputValue = parseInt($(this).val());
        let realvalue = parentDiv.attr("data-value");
        
        //if nan return
        if (isNaN(inputValue)){
            return;
        } 
        
        //Supression du champ et remplacement par le résultat
        parentDiv.empty();
        parentDiv.text(inputValue);

        if(inputValue == realvalue){
            
            parentDiv.css("color", "white");
            parentDiv.css("background-color", "green");
            parentDiv.css("border-color", "white");
            parentDiv.css("border-width", "1px");
            parentDiv.css("border-style", "solid");


            currentScore+=10*selectedNumber;
            refreshCurrentScore();
        }
        else{
            parentDiv.css("color", "red");
            parentDiv.css("border-color", "red");
            parentDiv.css("border-width", "1px");
            parentDiv.css("border-style", "solid");
        }

        Completed +=1;

        if(Completed >= MaxEquations){
            $(".btn-group").hide();
            $("#popupContainer").fadeIn();
            refreshCurrentScore();
        }
    });


    newDiv.append(num1Div);
    newDiv.append(operatorDiv);
    newDiv.append(num2Div);
    newDiv.append(equalDiv);
    newDiv.append(resultDiv);

    return newDiv;
}






function calculateResult(num1, num2, operator) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else {
        return num1 / num2;
    }
}

function restartGame(){
    if(currentScore != 0 ){
        setNewScore(getCookie("login"), currentScore);
    }
    

    Completed = 0;
    currentScore = 0;
    refreshCurrentScore();
    generateEquations(selectedOperation, selectedNumber);
}