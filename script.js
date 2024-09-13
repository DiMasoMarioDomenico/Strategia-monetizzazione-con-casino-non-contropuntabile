function calcola() {
    var bonus = parseFloat(document.getElementById("bonus").value);
    var rollover = parseFloat(document.getElementById("rollover").value);
    var contribuzione = parseFloat(document.getElementById("contribuzione").value) / 100;
    var rtp = parseFloat(document.getElementById("rtp").value) / 100;

    var volumeTotale = bonus * rollover;
    var volumeContribuzione = volumeTotale * contribuzione;
    var costoStimato = volumeTotale * (1 - rtp);

    var rischioAlto = volumeTotale * 0.1;
    var guadagnoAlto = volumeContribuzione - rischioAlto;

    var rischioMedio = volumeTotale * 0.15;
    var guadagnoMedio = volumeContribuzione - rischioMedio;

    var rischioBasso = volumeTotale * 0.2;
    var guadagnoBasso = volumeContribuzione - rischioBasso;

    document.getElementById("costoStimatoSlot").innerHTML = "Costo stimato SLOT per completamento rollover: €" + costoStimato.toFixed(2);
    document.getElementById("volumeTotale").innerHTML = "Volume totale da generare: €" + volumeTotale.toFixed(2);
    document.getElementById("rischioAlto").innerHTML = "Livello Rischio Alto: €" + rischioAlto.toFixed(2);
    document.getElementById("guadagnoAlto").innerHTML = "Guadagno atteso: €" + guadagnoAlto.toFixed(2);
    document.getElementById("rischioMedio").innerHTML = "Livello Rischio Medio: €" + rischioMedio.toFixed(2);
    document.getElementById("guadagnoMedio").innerHTML = "Guadagno atteso: €" + guadagnoMedio.toFixed(2);
    document.getElementById("rischioBasso").innerHTML = "Livello Rischio Basso: €" + rischioBasso.toFixed(2);
    document.getElementById("guadagnoBasso").innerHTML = "Guadagno atteso: €" + guadagnoBasso.toFixed(2);
}
