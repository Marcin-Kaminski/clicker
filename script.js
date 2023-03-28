let data = JSON.parse(localStorage.getItem("data"));
let score, power, pickCounts, damage, swordCounts, obsidian, isPortalSet, enderPearl;
let portal = document.getElementById("portal");
if (data === null) {
    score = 0;
    damage = 1;
    power = 1;
    obsidian = 0;
    isPortalSet = 0;
    enderPearl = 0;
    blazeRod = 0;
    blazePowder = 0;
    eyeOfEnder = 0;
    blazeHP = 10000;
    pickCounts = {
        stonePickCount: 0,
        ironPickCount: 0,
        goldPickCount: 0,
        diamondPickCount: 0,
    }
    swordCounts = {
        stoneSwordCount: 0,
        ironSwordCount: 0,
        goldSwordCount: 0,
        diamondSwordCount: 0
    }
} else {
    score = data.score;
    power = data.power;
    damage = data.damage;
    pickCounts = data.pickCounts;
    swordCounts = data.swordCounts;
    obsidian = data.obsidian;
    isPortalSet = data.isPortalSet;
    enderPearl = data.enderPearl;
    blazeRod = data.blazeRod;
    blazePowder = data.blazePowder;
    eyeOfEnder = data.eyeOfEnder;
    blazeHP = data.blazeHP;

}
let dataToLocalStorage = {
    score: score,
    power: power,
    pickCounts: pickCounts,
    swordCounts: swordCounts,
    damage: damage,
    obsidian: obsidian,
    isPortalSet: isPortalSet,
    enderPearl: enderPearl,
    blazeRod: blazeRod,
    blazePowder: blazePowder,
    eyeOfEnder: eyeOfEnder,
    blazeHP: blazeHP
}
function setToLocalStorage() // FUNCKJA SŁUŻĄCA DO ZAPISU DANYCH DO LS
{
    let dataToLocalStoraged = {
        score: score,
        power: power,
        pickCounts: pickCounts,
        swordCounts: swordCounts,
        damage: damage,
        obsidian: obsidian,
        isPortalSet: isPortalSet,
        enderPearl: enderPearl,
        blazeRod: blazeRod,
        blazePowder: blazePowder,
        eyeOfEnder: eyeOfEnder,
        blazeHP: blazeHP
    }
    localStorage.setItem('data', JSON.stringify(dataToLocalStoraged));
}
function gEBI(variable)
{
    return document.getElementById(variable)
}
function addScore()
{
    score += power;
    setToLocalStorage(power);
    gEBI('score').innerHTML = score;
}
window.onload = function() {
    gEBI('score').innerHTML = score;
    if (gEBI('power')) {
        gEBI('obsidianCount').innerHTML = 'Ilość: ' + obsidian;
        gEBI('power').innerHTML = 'Siła = ' + power;
        gEBI('stonePickCount').innerHTML = 'Ilość: ' + data.pickCounts['stonePickCount'];
        gEBI('ironPickCount').innerHTML = 'Ilość: ' + data.pickCounts['ironPickCount'];
        gEBI('goldPickCount').innerHTML = 'Ilość: ' + data.pickCounts['goldPickCount'];
        gEBI('diamondPickCount').innerHTML = 'Ilość: ' + data.pickCounts['diamondPickCount'];
    }
    if (gEBI('damage')) {
        gEBI('damage').innerHTML = "Obrażenia = " + damage;
        gEBI('stoneSwordCount').innerHTML = 'Ilość: ' + data.swordCounts['stoneSwordCount'];
        gEBI('ironSwordCount').innerHTML = 'Ilość: ' + data.swordCounts['ironSwordCount'];
        gEBI('goldSwordCount').innerHTML = 'Ilość: ' + data.swordCounts['goldSwordCount'];
        gEBI('diamondSwordCount').innerHTML = 'Ilość: ' + data.swordCounts['diamondSwordCount'];
        gEBI('enderPearlQuantity1').innerHTML = 'Ilość: ' + data.enderPearl;
        gEBI('enderPearlQuantity2').innerHTML = 'Ilość: ' + data.enderPearl;
        gEBI('blazeRodQuantity').innerHTML = 'Ilość: ' + data.blazeRod;
        gEBI('blazePowderQuantity').innerHTML = 'Ilość: ' + data.blazePowder;
        gEBI('eyeOfEnderQuantity').innerHTML = 'Ilość: ' + data.eyeOfEnder;
        gEBI('blazeHP').innerHTML = data.blazeHP;
    }
    if (isPortalSet === 1) {
        gEBI("portal").innerHTML = "<img onclick='goToNether()' id=\"portal\" src=\"photos/obsidianPortal.webp\" alt=\"\" class=\"portal\">\n"
        gEBI('portalText').innerHTML = "Teraz zbierz 12 oczu endera..."
    }
}
function reset()
{
    localStorage.clear();
    location.reload()
}
function buyPickaxe(pickaxeCost, plusPower, count)
{
    if (score >= pickaxeCost) {
        score -= pickaxeCost;
        power += plusPower;
        pickCounts[count] += 1;
        setToLocalStorage(score);
        setToLocalStorage(power);
        setToLocalStorage(pickCounts);
        gEBI('score').innerHTML = score;
        gEBI('power').innerHTML = 'Siła = ' + power;
        gEBI(count).innerHTML = 'Ilość : ' + pickCounts[count];
    }
}
function buySword(swordCost, plusDamage, count)
{
    if (score >= swordCost){
        score -= swordCost;
        damage += plusDamage;
        swordCounts[count] += 1;
        gEBI("score").innerHTML = score;
        gEBI("damage").innerHTML = 'Obrażenia = ' + damage;
        gEBI(count).innerHTML = 'Ilość : ' + swordCounts[count];
        setToLocalStorage(score);
        setToLocalStorage(damage);
        setToLocalStorage(swordCounts);
    }
}
function buyObsidian()
{
    if (score >= 1){
        score += 500000;
        setToLocalStorage(score);
        obsidian += 11;
        setToLocalStorage(obsidian);
        gEBI("obsidianCount").innerHTML = "Ilość: " + obsidian;
        if (isPortalSet === 0) {
            obsidian >= 10 ?  gEBI('portalText').innerHTML = "Kliknij, aby zbudować portal!" : '';
        }
    }
}
function buildPortal()
{
    let portalText = document.getElementById("portalText").innerHTML;
    if (isPortalSet === 0) {
        if (portalText === "Kliknij, aby zbudować portal!" && obsidian >= 10) {
            let portal = gEBI("portal");
            portal.innerHTML = "<img onclick='goToNether()' id=\"portal\" src=\"photos/obsidianPortal.webp\" alt=\"\" class=\"portal\">\n"
            obsidian -= 10;
            isPortalSet += 1;
            setToLocalStorage(obsidian)
            setToLocalStorage(isPortalSet)
            gEBI("obsidianCount").innerHTML = "Ilość: " + obsidian;
            gEBI('portalText').innerHTML = "Teraz zbierz 12 oczu endera..."
        }
    }
}
function buyPearl()
{
    if (score >= 50000) {
        score -= 50000;
        enderPearl += 1;
        setToLocalStorage(enderPearl);
        setToLocalStorage(score);
        gEBI('enderPearlQuantity1').innerHTML = "Ilość: " + enderPearl;
        gEBI('score').innerHTML = score;
        gEBI('enderPearlQuantity2').innerHTML = "Ilość: " + enderPearl;
    }
}
function killBlaze()
{
    if (blazeHP - damage <= 0) {
        blazeHP = 10000;
        blazeRod += 1;
        setToLocalStorage(blazeRod)
        setToLocalStorage(blazeHP)
        gEBI('blazeHP').innerHTML = blazeHP;
        gEBI('blazeRodQuantity').innerHTML = 'Ilość: ' + blazeRod;
    } else {
        blazeHP -= damage;
        setToLocalStorage(blazeHP)
        gEBI('blazeHP').innerHTML = blazeHP;

    }
}
function blazeRodIntoPowder()
{
    if (blazeRod >= 1) {
        blazeRod -= 1;
        blazePowder += 2;
        setToLocalStorage(blazeRod);
        setToLocalStorage(blazePowder);
        gEBI('blazeRodQuantity').innerHTML = "Ilość: " + blazeRod;
        gEBI('blazePowderQuantity').innerHTML = "Ilość: " + blazePowder
    }
}
function enderPearlIntoEyeOfEnder()
{
    if (blazePowder >= 1 && enderPearl >= 1) {
        blazePowder -= 1;
        enderPearl -= 1;
        eyeOfEnder += 1;
        setToLocalStorage(blazePowder);
        setToLocalStorage(enderPearl);
        setToLocalStorage(eyeOfEnder);
        gEBI('blazePowderQuantity').innerHTML = "Ilość: " + blazePowder;
        gEBI('enderPearlQuantity1').innerHTML = "Ilość: " + enderPearl;
        gEBI('enderPearlQuantity2').innerHTML = "Ilość: " + enderPearl;
        gEBI('eyeOfEnderQuantity').innerHTML = "Ilość: " + eyeOfEnder;
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