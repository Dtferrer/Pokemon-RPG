var isYourPkmnChose = false;
var pkmn = $(".pokemon")

var yourPkmn;
var enemyPkmn;

var damage;
var counterdmg;

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
        $(this).appendTo(".urenemyimg").css({"background-color":"black", "color":"white"}).attr("id", "defender")
        defenderCheck();
        counterdmg = enemyPkmn.counter;
    }
    else {
        $(pkmn).appendTo(".enemiesimg").css("background-color", "red")
        $(this).appendTo(".urcharimg").css("background-color", "white").attr("id", "hero")
        isYourPkmnChose = true;
        heroCheck();
        damage = yourPkmn.attack;
    }
});

function heroCheck() {
    if ($("#hero").hasClass("pikachu")) {
   yourPkmn = pikachu;
    }
    else if ($("#hero").hasClass("venusaur")) {
    yourPkmn = venusaur;
    }
    else if ($("#hero").hasClass("charizard")) {
    yourPkmn = charizard;
    }
    else if ($("#hero").hasClass("blastoise")) {
    yourPkmn = blastoise;
    }

    console.log(yourPkmn);
}

function defenderCheck() {
    if ($("#defender").hasClass("pikachu")) {
        enemyPkmn = pikachu;
    }
    else if ($("#defender").hasClass("venusaur")) {
        enemyPkmn = venusaur;
    }
    else if ($("#defender").hasClass("charizard")) {
        enemyPkmn = charizard;
    }
    else if ($("#defender").hasClass("blastoise")) {
        enemyPkmn = blastoise;
    }
    
    console.log(enemyPkmn);
}

// ogherohealth = yourPkmn.hp;
// ogdefhealth = enemyPkmn.hp;

// damage = yourPkmn.attack;
// counterdmg = enemyPkmn.counter;

$(".attack").click(function () {
    
    // console.log("click")
    // hero();
    // console.log("clack")
    // defender();
    // console.log("clock")
    
    console.log(yourPkmn.attack);

    $("#hero > .health").addClass("herohealth");
    $("#defender > .health").addClass("defhealth");

    yourPkmn.hp = yourPkmn.hp - counterdmg;
    enemyPkmn.hp = enemyPkmn.hp - damage;

    console.log(yourPkmn.hp)

    damage = damage + yourPkmn.attack;
    
    console.log(damage);

    $(".herohealth").text("Health: " + yourPkmn.hp);
    $(".defhealth").text("Health: " + enemyPkmn.hp);

    console.log("cluck")

    if (yourPkmn.hp <= 0) {
        alert("You ran out of Pokemon! Game Over!");
        $(pkmn).appendTo(".list").css({"background-color":"white", "color":"black"})
        isYourPkmnChose = false;
        pikachu.hp = 100;
        venusaur.hp = 180;
        charizard.hp = 120;
        blastoise.hp = 150;
        $(".herohealth").text("Health: " + yourPkmn.hp);
        $(".defhealth").text("Health: " + enemyPkmn.hp);
        $("p").removeClass("herohealth defhealth");
    }

    else if (enemyPkmn.hp <= 0) {
        alert("You defeated your opponent! Dare to continue?");
        
    }
}); 

function damage() {

}
// function hero() {
//     if ($("#hero").hasClass("pikachu")) {
//         var yourPkmn = pikachu;
//     }
//     else if ($("#hero").hasClass("venusaur")) {
//         var yourPkmn = venusaur;
//     }
//     else if ($("#hero").hasClass("charizard")) {
//         var yourPkmn = charizard;
//     }
//     else if ($("#hero").hasClass("blastoise")) {
//         var yourPkmn = blastoise;
//     }
//     console.log(yourPkmn)

//     $("#hero > .health").addClass("herohealth");

//     damage = yourPkmn.attack;

//     $("#defender:contains('Health')").text("Health: " + (enemyPkmn.hp));

// }

// function defender() {
//     if ($("#defender").hasClass("pikachu")) {
//         var enemyPkmn = pikachu;
//     }
//     else if ($("#defender").hasClass("venusaur")) {
//         var enemyPkmn = venusaur;
//     }
//     else if ($("#defender").hasClass("charizard")) {
//         var enemyPkmn = charizard;
//     }
//     else if ($("#defender").hasClass("blastoise")) {
//         var enemyPkmn = blastoise;
//     }
//     console.log(enemyPkmn)

//     $("#defender > .health").addClass("defhealth");

//     var counterdmg = enemyPkmn.counter;
// }

$(".reset").click(function () {
    $(pkmn).appendTo(".list").css({"background-color":"white", "color":"black"})
    isYourPkmnChose = false;
});