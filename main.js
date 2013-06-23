var keys = [];
var change = false;
function Start()
{
    var stage = new Stage("c");
    var fighter1 = new mkFighter("Joe",5,5,20);
    fighter1.moveSet.push(new mkMove("HADOUKEN",new specialExecution().QRT_CIRCLE_F,3,3,2));
    console.log(fighter1.moveSet);
    var fighter2 = new mkFighter("John",3,7,20);
    // events
    stage.addEventListener(KeyboardEvent.KEY_DOWN, onKD);
    stage.addEventListener(KeyboardEvent.KEY_UP, onKU);
    stage.addEventListener(Event.ENTER_FRAME, onEF);
}

function onKD (e)
{
    if (keys.indexOf(e.keyCode) == -1){
        keys.push(e.keyCode);
        change = true;
    }
    if(e.keyCode == 37) left = true;
    if(e.keyCode == 38) up = true;
    if(e.keyCode == 39) right = true;
    if(e.keyCode == 40) down = true;
}

function onKU (e)
{
    keys.splice(keys.indexOf(e.keyCode),1);
    if(e.keyCode == 37) left = false;
    if(e.keyCode == 38) up = false;
    if(e.keyCode == 39) right = false;
    if(e.keyCode == 40) down = false;
    change = true;
}

function onEF (e)
{
    if (change === true){
        console.log(keys);
        change = false;
    }
}