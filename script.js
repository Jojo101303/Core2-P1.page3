document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
  
    // Array of different sentences
    const sentences = [
      "Paul Valéry",
      "poet and thinker",
      "No poem is ended",
      "they were abandoned",
      "Stéphane Mallarmé",
      "quotations begin",
      "in a cloud"
    ];
    
    function createBox() {
      const box = document.createElement("div");
      box.className = "box";
      box.style.top = `${Math.random() * 90}vh`; // Randomize top position
      box.style.left = `${Math.random() * 90}vw`; // Randomize left position
  
      // Randomly select a sentence
      const randomIndex = Math.floor(Math.random() * sentences.length);
      const text = document.createTextNode(sentences[randomIndex]);
      box.appendChild(text);
  
      box.addEventListener("click", function () {
        alert("STORY BEGINS!");
        removeAllBoxes(); // Call the function to remove all boxes
      });
  
      container.appendChild(box);
    }
  
    // Function to remove all boxes
    function removeAllBoxes() {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    }
  
    // Create initial set of boxes
    for (let i = 0; i < 5; i++) {
      createBox();
    }
  
    
    container.addEventListener("mouseover", createBox);

    const centerButton = document.createElement("button");
    centerButton.textContent = "Story Continues";
    centerButton.classList.add("button"); 
    centerButton.addEventListener("click", function () {
        window.location.href = "https://jojo101303.github.io/Core2-P1.page6/"; // 
    });
    document.body.appendChild(centerButton);
  });
  
  
  