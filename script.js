const options = [
    ["Ha 1 milliard kroner, men måtte leve i et land uten internett", "Leve i en hytte i skogen uten elektrisitet, men ha frihet til å leve som du vil"],
    ["Få en gratis reise til hvilket som helst sted i verden", "Få 100 000 kroner, men må bruke dem umiddelbart"],
    ["Eie et dyr, men måtte aldri ta det ut av bur", "Alltid være alene, men kunne kommunisere med dyr"],
    ["Ha superkrefter, men kunne aldri bruke dem", "Være verdens mest intelligente, men ingen vil være venn med deg"],
    // Legg til flere alternativer her
];

let currentOption = 0;

// Funksjon for å vise alternativene
function showOptions() {
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = `<p>${options[currentOption][0]} <strong>eller</strong> ${options[currentOption][1]}</p>`;
}

// Funksjon for å starte spillet
function startGame() {
    document.getElementById("game-title").style.display = "none"; // Skjul tittelen
    document.getElementById("startButton").style.display = "none"; // Skjul startknappen

    document.getElementById("options").style.display = "block"; // Vis alternativene
    document.getElementById("nextButton").style.display = "block"; // Vis neste knapp

    showOptions(); // Vis første spørsmål
}

// Legg til event listener for startknappen
document.getElementById("startButton").addEventListener("click", startGame);

document.getElementById("nextButton").addEventListener("click", function() {
    currentOption = (currentOption + 1) % options.length; // Oppdater alternativet
    showOptions(); // Vis neste alternativ
});
