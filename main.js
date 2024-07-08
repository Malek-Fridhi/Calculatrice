document.addEventListener("DOMContentLoaded", function() {
    // Sélectionne tous les boutons et l'affichage
    const buttons = document.querySelectorAll("button");
    const display = document.getElementById("affichage").querySelector("p");
    const audioClic = document.getElementById("clic");
    const audioEqual = document.getElementById("audioEqual");
    const audioDonkey = document.getElementById("donkey");
  
    // Variable pour stocker l'état actuel de l'affichage
    let currentDisplay = "0";
  
    // Fonction pour mettre à jour l'affichage
    function updateDisplay(value) {
      if (currentDisplay === "0") {
        currentDisplay = value;
      } else {
        currentDisplay += value;
      }
      display.textContent = currentDisplay;
    }
  
    // Fonction pour calculer le résultat
    function calculate() {
      try {
        // Utilise `eval` pour calculer le résultat (Attention: `eval` peut être dangereux avec des entrées non vérifiées)
        currentDisplay = eval(currentDisplay).toString();
  
        // Vérifie si le résultat est égal à 2
        if (currentDisplay === "2") {
          audioDonkey.currentTime = 0; // Réinitialise la lecture
          audioDonkey.play(); // Joue le son donkey.mp3
        } else {
          audioEqual.currentTime = 0; // Réinitialise la lecture
          audioEqual.play(); // Joue le son equal.mp3
        }
      } catch (error) {
        currentDisplay = "Erreur";
      }
      display.textContent = currentDisplay;
    }
  
    // Ajoute des écouteurs d'événements pour tous les boutons
    buttons.forEach(button => {
      button.addEventListener("click", function() {
        const value = button.value;
  
        // Lecture du son approprié
        if (value === "=") {
          calculate();
        } else {
          audioClic.currentTime = 0;
          audioClic.play();
          switch (value) {
            case "AC":
              currentDisplay = "0";
              break;
            case "DEL":
              if (currentDisplay.length > 1) {
                currentDisplay = currentDisplay.slice(0, -1);
              } else {
                currentDisplay = "0";
              }
              break;
            default:
              if (currentDisplay === "0") {
                currentDisplay = value;
              } else {
                currentDisplay += value;
              }
          }
          display.textContent = currentDisplay;
        }
      });
    });
  });
  