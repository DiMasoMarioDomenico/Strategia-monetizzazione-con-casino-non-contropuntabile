function calcola() {
    var bonus = parseFloat(document.getElementById("bonus").value);
    var rollover = parseFloat(document.getElementById("rollover").value);
    var contribuzione = parseFloat(document.getElementById("contribuzione").value) / 100;
    var costoSlot = parseFloat(document.getElementById("costoSlot").value) / 100;

    var volumeTotale = bonus * rollover;
    var volumeContribuzione = volumeTotale * contribuzione;
    var rischioAlto = volumeTotale * 0.1;
    var guadagnoAlto = volumeContribuzione - costoSlot;
    var rischioMedio = volumeTotale * 0.15;
    var guadagnoMedio = volumeContribuzione - costoSlot;
    var rischioBasso = volumeTotale * 0.2;
    var guadagnoBasso = volumeContribuzione - costoSlot;

    document.getElementById("volumeTotale").innerHTML = "Volume totale da generare: €" + volumeTotale.toFixed(2);
    document.getElementById("volumeContriuzione").innerHTML = "Volume da generare con contribuzione giochi: €" + volumeContribuzione.toFixed(2);
    document.getElementById("rischioAlto").innerHTML = "Livello Rischio Alto: €" + rischioAlto.toFixed(2);
    document.getElementById("guadagnoAlto").innerHTML = "Guadagno atteso (Alto): €" + guadagnoAlto.toFixed(2);
    document.getElementById("rischioMedio").innerHTML = "Livello Rischio Medio: €" + rischioMedio.toFixed(2);
    document.getElementById("guadagnoMedio").innerHTML = "Guadagno atteso (Medio): €" + guadagnoMedio.toFixed(2);
    document.getElementById("rischioBasso").innerHTML = "Livello Rischio Basso: €" + rischioBasso.toFixed(2);
    document.getElementById("guadagnoBasso").innerHTML = "Guadagno atteso (Basso): €" + guadagnoBasso.toFixed(2);
}
