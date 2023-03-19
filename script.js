var score = 0;
var power = 1;
var stonePickaxes = 0;
var ironPickaxes = 0;
var goldPickaxes = 0;
var diamondPickaxes = 0;
var obsidian = 0;
var amount = 0;


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
function buyPickaxe(pickaxeCost, plusPower)
{
    if (score >= pickaxeCost){
        score = score - pickaxeCost;
        power = power + plusPower;
        stonePickaxes = stonePickaxes + 1;
        document.getElementById("score").innerHTML = score;
        document.getElementById("power").innerHTML = 'Siła = ' + power;
    }
}
function buyObsidian()
{
    if (score >= 50000){
        score = score - 50000;
        obsidian = obsidian + 1;
        document.getElementById("obsidianCount") =
    }
}