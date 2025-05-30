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
    document.getElementById("option1").textContent = options[currentOption][0];
    document.getElementById("option2").textContent = options[currentOption][1];
}

// Funksjon for å starte spillet
function startGame() {
    document.getElementById("main-container").innerHTML = `
        <h1>Pest eller Kolera</h1>
        <div id="options">
            <p id="option1"></p>
            <p id="option2"></p>
        </div>
        <button id="nextButton">Neste valg</button>
    `;
    showOptions();

    // Legg til event listener for å oppdatere alternativene
    document.getElementById("nextButton").addEventListener("click", function() {
        currentOption = (currentOption + 1) % options.length;
        showOptions();
    });
}

// Legg til event listener for startknappen
document.getElementById("startButton").addEventListener("click", startGame);
