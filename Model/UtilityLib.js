// Fonction pour obtenir la valeur d'un cookie
function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
}

// Fonction pour définir un cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
}

//Vérifie qu'un cookie est présent ou non
function isCookiePresent(cookieName) {
    const cookies = document.cookie.split("; ");

    for (const cookie of cookies) {
        const [name, value] = cookie.split("=");
        if (name === cookieName) {
            return true;
        }
    }

    return false;
}

//Requète ajax pour supprimé un cookie
function deleteCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}




function loadMainPage(login) {
    let headerContent = `
        <h3>${login}</h3>
        <button id="DisconnectButton" class="btn btn-primary" class="Submit_button"> Déconnexion </button>
    `;
    let HeaderButton = document.createElement("aside");
    $("header").append(HeaderButton);
    $("aside").html(headerContent);
    
    
    //Init HTML Page Principale
    $("main").html(`
    <div class="Gamelayout">
        <div class="upperlayout">
            <button type="button" id="HighScores" class="btn btn-secondary">HighScores</button>

            <div class="currentScore">
                <h2>Score: 0</h2>
            </div>

            <div class="params">
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-primary active">
                        <input type="radio" name="options" id="addition" autocomplete="off" data-value="+" checked> +
                    </label>
                    <label class="btn btn-primary ">
                        <input type="radio" name="options" id="substraction" autocomplete="off" data-value="-"> -
                    </label>
                    <label class="btn btn-primary ">
                        <input type="radio" name="options" id="multiplication" autocomplete="off" data-value="*"> x
                    </label>
                    <label class="btn btn-primary ">
                        <input type="radio" name="options" id="division" autocomplete="off" data-value="/"> ÷ 
                    </label>
                </div>

                <input type="number" class="form-control" id="numberInput" min="1" step="1" value="20">           
                
                <button type="button" id="GenerateButton" class="btn btn-primary btn-lg">Generate</button>
            </div>
        </div>        
        

        <div class="gameZone">
            <div id="equations"></div>

            <div class="choiceSelection">
                <div class="Item"> 0  </div>
                <div class="Item"> 2  </div>
                <div class="Item"> 20 </div>
                <div class="Item"> 10 </div>
                <div class="Item"> 7  </div>
            </div>
        </div>
        
    </div>
    `);
}


function loadLoginPage() {
    $("aside").remove();
    $("main").html(`
    <div class="LoginLayout">
        <div>
            <h1 class="Title">Connexion</h1>
            <div id="LoginForm">
                <input  id="login" type="text" name="Pseudo" placeholder="Nom utilisateur"  required class="form-control"/>
                <button id="LoginButton" class="btn btn-primary" class="Submit_button"> Jouer </button>
            </div>

            <p id="message"></p>
        </div>
    </div>
    `);
}



function refreshCurrentScore(){
    $(".currentScore").html("<h2>Score: "+ currentScore +"</h2>");
}




