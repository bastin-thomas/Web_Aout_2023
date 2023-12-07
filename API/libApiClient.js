function getMaxScore()
{
    const request = new XMLHttpRequest();
    request.open("GET", 'http://localhost/Calculotron/API/getMaxScore.php', false); // `false` makes the request synchronous
    request.send(null);

    if (request.status === 200) {
        var response = JSON.parse(request.responseText);
        return response.MaxScore;
    }
}

function setNewScore(player, score)
{
    const request = new XMLHttpRequest();
    request.open("GET", 'http://localhost/Calculotron/API/setNewScore.php?Player=\"'+ player + '\"&Score=' + score, false); // `false` makes the request synchronous
    request.send(null);

    if (request.status === 200) {
        var response = JSON.parse(request.responseText);
        return response.Success;
    }
}