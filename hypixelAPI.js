window.addEventListener('keydown', (event) => {
    if(event.keyCode === 13){
        insertData()
    }
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function getId(playername) {
    var api = new XMLHttpRequest();
    api.open("GET", `https://api.mojang.com/users/profiles/minecraft/${playername}`, false);
    api.send();
    var response = JSON.parse(api.response);

    return(response.id)
}
function insertData() {
    var playerNameCall = document.getElementById('inp_search_user').value;
    var uuid = getId(playerNameCall);
    getId(playerNameCall)
    var blank = "https://api.hypixel.net/player?uuid="+uuid+"&key=3a348449-5e70-4d5b-9995-1e1ca6cd6924";
    fetch(blank)
        .then(result => result.json())
        .then(({player}) => {
            console.log(player);
            const playerName = document.getElementById("playerName").innerHTML = player.displayname;
            document.getElementsByTagName("head")[0].innerHTML = '<title>Hypixel API</title><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"><link rel="stylesheet" href="Hypixel.css"><link rel="icon" href="https://crafatar.com/avatars/'+uuid+'?size=32&overlay" type="image/x-icon" sizes="16x16 32x32"><script src="hypixelAPI.js"></script>';
            const headDisplay = document.getElementById("headDisplay").outerHTML = '<img src="https://crafatar.com/renders/body/'+uuid+'?&overlay" id="headDisplay">'

            const bedWarsCoins = document.getElementById("bedWarsCoins").innerHTML = player.stats.Bedwars.coins;
            const bedWarsKills = document.getElementById("bedWarsKills").innerHTML = player.stats.Bedwars.kills_bedwars;
            const bedWarsDeaths = document.getElementById("bedWarsDeaths").innerHTML = player.stats.Bedwars.deaths_bedwars;
            const bedWarsWins = document.getElementById("bedWarsWins").innerHTML = player.stats.Bedwars.wins_bedwars;
            const bedWarsLevel = document.getElementById("bedWarsLevel").innerHTML = player.achievements.bedwars_level;
            if(bedWarsLevel < 99){
                document.getElementById("bedWarsLevel").style.color = "gray"
            } else if(100 < bedWarsLevel && bedWarsLevel < 199) {
                document.getElementById("bedWarsLevel").style.color = "white"
            } else if(200 < bedWarsLevel && bedWarsLevel < 299) {
                document.getElementById("bedWarsLevel").style.color = "gold"
            } else if(300 < bedWarsLevel && bedWarsLevel < 399) {
                document.getElementById("bedWarsLevel").style.color = "aqua"
            } else if(400 < bedWarsLevel && bedWarsLevel < 499) {
                document.getElementById("bedWarsLevel").style.color = "#darkgreen"
            } else if(500 < bedWarsLevel && bedWarsLevel < 599) {
                document.getElementById("bedWarsLevel").style.color = "cyan"
            } else if(600 < bedWarsLevel && bedWarsLevel < 699) {
                document.getElementById("bedWarsLevel").style.color = "darkred"
            } else if(700 < bedWarsLevel && bedWarsLevel < 799) {
                document.getElementById("bedWarsLevel").style.color = "fushia"
            } else if(800 < bedWarsLevel && bedWarsLevel < 899) {
                document.getElementById("bedWarsLevel").style.color = "darkblue"
            } else if(900 < bedWarsLevel) {
                document.getElementById("bedWarsLevel").style.color = "purple"
            }

            const skyWarsCoins = document.getElementById("skyWarsCoins").innerHTML = player.stats.SkyWars.coins;
            const skyWarsKills = document.getElementById("skyWarsKills").innerHTML = player.stats.SkyWars.kills;
            const skyWarsDeaths = document.getElementById("skyWarsDeaths").innerHTML = player.stats.SkyWars.deaths;
            const skyWarsWins = document.getElementById("skyWarsWins").innerHTML = player.stats.SkyWars.wins;

            const murderMysteryCoins = document.getElementById("murderMysteryCoins").innerHTML = player.stats.MurderMystery.coins;
            const murderMysteryKills = document.getElementById("murderMysteryKills").innerHTML = player.stats.MurderMystery.kills;
            const murderMysteryDeaths = document.getElementById("murderMysteryDeaths").innerHTML = player.stats.MurderMystery.deaths;

            const hungerGamesCoins = document.getElementById("hungerGamesCoins").innerHTML = player.stats.HungerGames.coins;
            const hungerGamesDeaths = document.getElementById("hungerGamesDeaths").innerHTML = player.stats.HungerGames.deaths;
            const hungerGamesWins = document.getElementById("hungerGamesWins").innerHTML = player.stats.HungerGames.wins;

            const taming = document.getElementById("taming").innerHTML = player.achievements.skyblock_domesticator;
            const farming = document.getElementById("farming").innerHTML = player.achievements.skyblock_harvester;
            const mining = document.getElementById("mining").innerHTML = player.achievements.skyblock_excavator;
            const combat = document.getElementById("combat").innerHTML = player.achievements.skyblock_combat;
            const foraging = document.getElementById("foraging").innerHTML = player.achievements.skyblock_gatherer;
            const fishing = document.getElementById("fishing").innerHTML = player.achievements.skyblock_angler;
            const enchanting = document.getElementById("enchanting").innerHTML = player.achievements.skyblock_augmentation;
            const alchemy = document.getElementById("alchemy").innerHTML = player.achievements.skyblock_concoctor;
            if(taming === 50){
                document.getElementsByClassName("skyblock")[0].getElementsByClassName("card")[0].style.background = "gold"
            }
            if(farming === 50){
                document.getElementsByClassName("skyblock")[0].getElementsByClassName("card")[1].style.background = "gold"
            }
            if(mining === 50){
                document.getElementsByClassName("skyblock")[0].getElementsByClassName("card")[2].style.background = "gold"
            }
            if(combat===50){
                document.getElementsByClassName("skyblock")[0].getElementsByClassName("card")[3].style.background = "gold"
            }
            if(foraging===50){
                document.getElementsByClassName("skyblock")[0].getElementsByClassName("card")[4].style.background = "gold"
            }
            if(fishing===50){
                document.getElementsByClassName("skyblock")[0].getElementsByClassName("card")[5].style.background = "gold"
            }if(enchanting===50){
                document.getElementsByClassName("skyblock")[0].getElementsByClassName("card")[6].style.background = "gold" 
            }
            if(alchemy===50){
                document.getElementsByClassName("skyblock")[0].getElementsByClassName("card")[7].style.background = "gold"
            }

            document.getElementById("mainStats").style.display = "block";
        })
}

function visitSite() {
    window.location.href = "stats.html"
}