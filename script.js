function calcola() {
    var bonus = parseFloat(document.getElementById("bonus").value);
    var rollover = parseFloat(document.getElementById("rollover").value);
    var contribuzione = parseFloat(document.getElementById("contribuzione").value) / 100;
    var rtp = parseFloat(document.getElementById("rtp").value) / 100;  // Percentuale di RTP

    var volumeTotale = bonus * rollover;
    var volumeContribuzione = volumeTotale * contribuzione;
    var costoStimato = volumeTotale * (1 - rtp);  // Calcolo del costo stimato

    var rischioAlto = volumeTotale * 0.1;
    var guadagnoAlto = volumeContribuzione - costoStimato;
    var rischioMedio = volumeTotale * 0.15;
    var guadagnoMedio = volumeContribuzione - costoStimato;
    var rischioBasso = volumeTotale * 0.2;
    var guadagnoBasso = volumeContribuzione - costoStimato;

    document.getElementById("volumeTotale").innerHTML = "Volume totale da generare: €" + volumeTotale.toFixed(2);
    document.getElementById("volumeContriuzione").innerHTML = "Volume da generare con contribuzione giochi: €" + volumeContribuzione.toFixed(2);
    document.getElementById("costoStimato").innerHTML = "Costo stimato SLOT per completamento rollover: €" + costoStimato.toFixed(2);
    document.getElementById("rischioAlto").innerHTML = "Livello Rischio Alto: €" + rischioAlto.toFixed(2) + " con un guadagno atteso di: €" + guadagnoAlto.toFixed(2);
    document.getElementById("rischioMedio").innerHTML = "Livello Rischio Medio: €" + rischioMedio.toFixed(2) + " con un guadagno atteso di: €" + guadagnoMedio.toFixed(2);
    document.getElementById("rischioBasso").innerHTML = "Livello Rischio Basso: €" + rischioBasso.toFixed(2) + " con un guadagno atteso di: €" + guadagnoBasso.toFixed(2);
}
