const options = [
    ["Ha 1 milliard kroner, men måtte leve i et land uten internett", "Leve i en hytte i skogen uten elektrisitet, men ha frihet til å leve som du vil"],
    ["Få en gratis reise til hvilket som helst sted i verden", "Få 100 000 kroner, men må bruke dem umiddelbart"],
    ["Eie et dyr, men måtte aldri ta det ut av bur", "Alltid være alene, men kunne kommunisere med dyr"],
    ["Ha superkrefter, men kunne aldri bruke dem", "Være verdens mest intelligente, men ingen vil være venn med deg"],
    // Legg til flere alternativer her
];

let currentOption = 0;

function showOptions() {
    document.getElementById("option1").textContent = options[currentOption][0];
    document.getElementById("option2").textContent = options[currentOption][1];
}

document.getElementById("nextButton").addEventListener("click", function() {
    currentOption = (currentOption + 1) % options.length;
    showOptions();
});

// Vis de første alternativene
showOptions();
