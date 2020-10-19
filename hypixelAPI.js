function insertData() {
    var username = prompt("Give username")
    let poggers1 = new XMLHttpRequest();
    poggers1.open("GET", "https://api.mojang.com/users/profiles/minecraft/"+username+"?at=0")
    poggers1.send()
    var name = prompt("insert uuid");
    var blank = "https://api.hypixel.net/player?uuid="+name+"&key=3a348449-5e70-4d5b-9995-1e1ca6cd6924";
    let poggers = new XMLHttpRequest();
    fetch(blank)
        .then(result => result.json())
        .then(({player}) => {
            console.log(player);
            const playerName = document.getElementById("playerName").innerHTML = player.displayname;
            document.getElementsByTagName("head")[0].innerHTML = '<title>Hypixel API</title><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"><link rel="stylesheet" href="Hypixel.css"><link rel="icon" href="https://crafatar.com/avatars/'+name+'?size=32&overlay" type="image/x-icon" sizes="16x16 32x32"><script src="hypixelAPI.js"></script>';
            const headDisplay = document.getElementById("headDisplay").outerHTML = '<img src="https://crafatar.com/renders/body/'+name+'?&overlay" id="headDisplay">'

            const bedWarsCoins = document.getElementById("bedWarsCoins").innerHTML = player.stats.Bedwars.coins;
            const bedWarsKills = document.getElementById("bedWarsKills").innerHTML = player.stats.Bedwars.kills_bedwars;
            const bedWarsDeaths = document.getElementById("bedWarsDeaths").innerHTML = player.stats.Bedwars.deaths_bedwars;

            const skyWarsCoins = document.getElementById("skyWarsCoins").innerHTML = player.stats.SkyWars.coins;
            const skyWarsKills = document.getElementById("skyWarsKills").innerHTML = player.stats.SkyWars.kills;
            const skyWarsDeaths = document.getElementById("skyWarsDeaths").innerHTML = player.stats.SkyWars.deaths;

            const murderMysteryCoins = document.getElementById("murderMysteryCoins").innerHTML = player.stats.MurderMystery.coins;
            const murderMysteryKills = document.getElementById("murderMysteryKills").innerHTML = player.stats.MurderMystery.kills;
            const murderMysteryDeaths = document.getElementById("murderMysteryDeaths").innerHTML = player.stats.MurderMystery.deaths;

            const hungerGamesCoins = document.getElementById("hungerGamesCoins").innerHTML = player.stats.HungerGames.coins;
            const hungerGamesDeaths = document.getElementById("hungerGamesDeaths").innerHTML = player.stats.HungerGames.deaths;
            const hungerGamesWins = document.getElementById("hungerGamesWins").innerHTML = player.stats.HungerGames.wins;

            document.getElementById("mainStats").style.display = "block"
        })
        
        poggers.open("GET", "https://api.hypixel.net/skyblock/profiles?key=3a348449-5e70-4d5b-9995-1e1ca6cd6924&uuid="+name)
        poggers.send();
    
    
}

function visitSite() {
    window.location.href = "stats.html"
}