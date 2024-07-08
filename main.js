document.addEventListener("DOMContentLoaded", function() {
    // Sélectionne tous les boutons et l'affichage
    const buttons = document.querySelectorAll("button");
    const display = document.getElementById("affichage").querySelector("p");
    const audio = document.getElementById("clic");
  
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
      } catch (error) {
        currentDisplay = "Erreur";
      }
      display.textContent = currentDisplay;
    }
  
    // Ajoute des écouteurs d'événements pour tous les boutons
    buttons.forEach(button => {
      button.addEventListener("click", function() {
        // Lecture du son
        audio.currentTime = 0; // Remet le son au début
        audio.play();
        
        const value = button.value;
  
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
          case "=":
            calculate();
            break;
          default:
            if (currentDisplay === "0") {
              currentDisplay = value;
            } else {
              currentDisplay += value;
            }
        }
  
        display.textContent = currentDisplay;
      });
    });
  });
  