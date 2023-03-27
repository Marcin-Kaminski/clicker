let data = JSON.parse(localStorage.getItem("data"));
let score = data.score || 0;
let power = data.power || 1;

let obsidian = parseInt(localStorage.getItem('obsidian')) || 0;
let pickCounts = data.counts || {
    stonePickCount: 0,
    ironPickCount: 0,
    goldPickCount: 0,
    diamondPickCount: 0,
}
let swordCounts = {
    stoneSwordCount: 0,
    ironSwordCount: 0,
    goldSwordCount: 0,
    diamondSwordCount: 0
}
let dataToLocalStorage = {
    score: score,
    power: power,
    counts: pickCounts
}
function gEBI(variable) // czemu nie tak? dużo mniej kodu
{
    return document.getElementById(variable)
}
function addScore()
{
    score += power;
    localStorage.setItem('score', score.toString());
    gEBI('score').innerHTML = score;
}


window.onload = function() {
    document.getElementById("score").innerHTML = score;
    document.getElementById("power").innerHTML = 'Siła = ' + power;
    document.getElementById("obsidianCount").innerHTML = 'Ilość: ' + obsidian;
    document.getElementById("damage").innerHTML = "Obrażenia: " + damage;
}
function reset()
{
    localStorage.clear();
    location.reload()
    // power = 0;
    // localStorage.setItem('power', power.toString());
    // score = 0;
    // localStorage.setItem('score', score.toString());
    // obsidian = 0;
    // localStorage.setItem('obsidian', obsidian.toString());
    // document.getElementById("stonePickCount").innerHTML = 0;
    // document.getElementById("ironPickCount").innerHTML = 0;
    // document.getElementById("goldPickCount").innerHTML = 0;
    // document.getElementById("diamondPickCount").innerHTML = 0;
    // document.getElementById("stoneSwordCount").innerHTML = 0;
    // document.getElementById("ironSwordCount").innerHTML = 0;
    // document.getElementById("goldSwordCount").innerHTML = 0;
    // document.getElementById("diamondSwordCount").innerHTML = 0;
    // document.getElementById("enderPearlCount1").innerHTML = 0;
    // document.getElementById("enderPearlCount2").innerHTML = 0;
    // document.getElementById("diamondSwordCount").innerHTML = 0;
}
function buyPickaxe(pickaxeCost, plusPower, count)
{
    if (score >= pickaxeCost) {
        score -= pickaxeCost;
        power += plusPower;
        pickCounts[count] += 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("power").innerHTML = 'Siła = ' + power;
        document.getElementById(count).innerHTML = 'Ilość : ' + pickCounts[count];

        localStorage.setItem('data', JSON.stringify(dataToLocalStorage))
    }
}
function buySword(swordCost, plusDamage, count)
{
    if (score >= swordCost){
        score -= swordCost;
        damage += plusDamage;
        pickCounts[count] += 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("power").innerHTML = 'Siła = ' + power;
        document.getElementById(count).innerHTML = 'Ilość : ' + swordCounts[count];
    }
}
function buyObsidian()
{
    if (score >= 1){
        score += 500000;
        localStorage.setItem('score', score.toString());
        document.getElementById('score').innerHTML = score;
        obsidian += 1;
        document.getElementById("obsidianCount").innerHTML = "Ilość: " + obsidian;
        obsidian >= 10 ? document.getElementById("portalText").innerHTML = "Kliknij, aby zbudować portal!" : '';
    }
}
function buildPortal()
{
    let portalText = document.getElementById("portalText").innerHTML;
    if (portalText === "Kliknij, aby zbudować portal!" && obsidian >= 10) {
        let portal = document.getElementById("portal");
        portal.innerHTML = "<img onclick='goToNether()' id=\"portal\" src=\"photos/obsidianPortal.webp\" alt=\"\" class=\"portal\">\n"
        obsidian -= 10;
        localStorage.setItem('obsidian', obsidian.toString())
        document.getElementById("obsidianCount").innerHTML = "Ilość: " + obsidian;
    }
}
function goToNether()
{
    window.location = "nether.html";
}
function goToEarth()
{
    window.location = "index.html";

}