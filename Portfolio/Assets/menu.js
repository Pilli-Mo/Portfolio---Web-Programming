const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

menuToggle.addEventListener('click', () => {
  sidebar.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('open');
});

document.getElementById('jahr').textContent = new Date().getFullYear();

// === Übung 2: countBs ===
const runScript_3 = document.getElementById('runScript_3');
if (runScript_3) {
  runScript_3.addEventListener('click', () => {
    const outputBox = document.getElementById('output_3');
    outputBox.innerHTML = ""; // clear old result

    let inputString = prompt("Bitte geben Sie einen String ein:", "");

    if (!inputString) {
      outputBox.innerHTML = "<p>Abbruch eingegeben.</p>";
    } else {
      const countBs = str =>
        str.split("").filter(char => char.toLowerCase() === "b").length;

      let count = countBs(inputString);

      outputBox.innerHTML =
        `<p>Der String enthält <strong>${count}</strong> 'B' oder 'b'.</p>`;
    }
  });
}