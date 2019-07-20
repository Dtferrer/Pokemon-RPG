var isYourPkmnChose = false;
var pkmn = $(".pokemon")

var pikachu = {
    hp: 100,
    attack: 10,
    counter: 30
};

var venusaur = {
    hp: 180,
    attack: 5,
    counter: 15
};

var charizard = {
    hp: 120,
    attack: 8,
    counter: 24
};

var blastoise = {
    hp: 150,
    attack: 6,
    counter: 18
};

$(".pokemon").click(function() {
    if (isYourPkmnChose) {
        $(this).appendTo(".urenemyimg").css({"background-color":"black", "color":"white"})
    }
    else {
        $(pkmn).appendTo(".enemiesimg").css("background-color", "red")
        $(this).appendTo(".urcharimg").css("background-color", "white")
        isYourPkmnChose = true;
    }
});




