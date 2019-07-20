var isYourPkmnChose = false;

var yourPkmn;
var enemyPkmn;

var damage;
var counterdmg;

var knockouts = 0;

var pikachu = {
    hp: 100,
    attack: 15,
    counter: 20
};

var venusaur = {
    hp: 180,
    attack: 10,
    counter: 10
};

var charizard = {
    hp: 120,
    attack: 13,
    counter: 16
};

var blastoise = {
    hp: 150,
    attack: 11,
    counter: 12
};

var original_pokemon = $(".pokemon");

console.log(original_pokemon);

$(".pokemon").click(function() {
    if (isYourPkmnChose) {
        $(this).appendTo(".urenemyimg").css({"background-color":"black", "color":"white"}).addClass("defender")
        defenderCheck();
        counterdmg = enemyPkmn.counter;
    }
    else {
        $(".pokemon").appendTo(".enemiesimg").css("background-color", "red")
        $(this).appendTo(".urcharimg").css("background-color", "white").addClass("hero")
        isYourPkmnChose = true;
        heroCheck();
        damage = yourPkmn.attack;
    }
});

$(".attack").click(function () {
    
    console.log(yourPkmn.attack);

    $(".hero > .health").addClass("herohealth");
    $(".defender > .health").addClass("defhealth");

    yourPkmn.hp = yourPkmn.hp - counterdmg;
    enemyPkmn.hp = enemyPkmn.hp - damage;

    console.log(yourPkmn.hp)

    damage = damage + yourPkmn.attack;
    
    console.log(damage);

    $(".herohealth").text("Health: " + yourPkmn.hp);
    $(".defhealth").text("Health: " + enemyPkmn.hp);

    console.log("cluck")

    healthCheck();
}); 

$(".reset").click(function () {
    reset();
});

function heroCheck() {
    if ($(".hero").hasClass("pikachu")) {
    yourPkmn = pikachu;
    }
    else if ($(".hero").hasClass("venusaur")) {
    yourPkmn = venusaur;
    }
    else if ($(".hero").hasClass("charizard")) {
    yourPkmn = charizard;
    }
    else if ($(".hero").hasClass("blastoise")) {
    yourPkmn = blastoise;
    }
}

function defenderCheck() {
    if ($(".defender").hasClass("pikachu")) {
        enemyPkmn = pikachu;
    }
    else if ($(".defender").hasClass("venusaur")) {
        enemyPkmn = venusaur;
    }
    else if ($(".defender").hasClass("charizard")) {
        enemyPkmn = charizard;
    }
    else if ($(".defender").hasClass("blastoise")) {
        enemyPkmn = blastoise;
    }
}

function healthCheck() {
    if (yourPkmn.hp <= 0) {
        alert("You ran out of Pokemon! Game Over!");

        reset();
    }

    else if (enemyPkmn.hp <= 0) {
        alert("You defeated your opponent! Dare to continue?");
        $(".urenemyimg").empty();
        $("p").removeClass("defhealth");

        knockouts++;
    }

    if (knockouts == 3) {
        alert("You beat the Elite Three! Congratulations!")

        reset();
    }
}

function reset() {
    $("p").removeClass("herohealth defhealth");
    $("div").removeClass("hero defender");
    $("img").removeAttr("class");

    isYourPkmnChose = false;

    pikachu.hp = 100;
    venusaur.hp = 180;
    charizard.hp = 120;
    blastoise.hp = 150;

    knockouts = 0;

    $(original_pokemon).appendTo(".list").css({"background-color":"white", "color":"black"});

    $(".p").text("Health: " + pikachu.hp);
    $(".v").text("Health: " + venusaur.hp);
    $(".c").text("Health: " + charizard.hp);
    $(".b").text("Health: " + blastoise.hp);

    // $(".urcharimg").empty();
    // $(".enemies").empty();
    // $(".urenemyimg").empty();

    // $(".list").replaceWith(original_state);

}