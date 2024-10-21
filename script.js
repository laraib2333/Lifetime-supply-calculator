
function calculate() {
    let fritSnack = document.getElementById('fav-snk').value;
    let currentAge = parseInt(document.getElementById('Crt-age').value);
    let maximumAge = parseInt(document.getElementById('Mxm-age').value);
    let amtPerDay = parseInt(document.getElementById('S-p-d').value);

    var total = (maximumAge - currentAge) * amtPerDay * 365;

    document.getElementById('message').innerText = 
        `You’ll need ${total} ${fritSnack} to enjoy your life until the ripe age of ${maximumAge}!`;
}