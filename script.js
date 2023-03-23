var score = 0;
var power = 1;
var obsidian = 0;
var pickCounts = {
     stonePickCount: 0,
     ironPickCount: 0,
     goldPickCount: 0,
     diamondPickCount: 0,
};


window.onload = function() {
    document.getElementById("score").innerHTML = score;
    document.getElementById("power").innerHTML = 'Siła = ' + power;
    document.getElementById("stonePickaxes").innerHTML = 0;
    document.getElementById("ironPickaxes").innerHTML = 0;
    document.getElementById("goldPickaxes").innerHTML = 0;
    document.getElementById("diamondPickaxes").innerHTML = 0;
    document.getElementById("obsidian").innerHTML = 0;

}
function addScore()
{
    score = score + power;
    document.getElementById("score").innerHTML = score;
}
function reset()
{
    onclick(location.reload())
}
function buyPickaxe(pickaxeCost, plusPower, count)
{
    if (score >= pickaxeCost){
        score -= pickaxeCost;
        power += plusPower;
        pickCounts[count] += 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("power").innerHTML = 'Siła = ' + power;
        document.getElementById(count).innerHTML = 'Ilość : ' + pickCounts[count];
    }
}
function buyObsidian()
{
    if (score >= 1){
        score = score + 500000;
        obsidian = obsidian + 1;
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