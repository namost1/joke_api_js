const apiURL = "https://publicapis.io/jokes-api";

const viccHelye = document.getElementById("viccHelye");
const randomVicc = document.getElementById("randomVicc");

async function getRandomJoke() {
  try {
    const URL = "https://official-joke-api.appspot.com/jokes/random"
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Api válasza: ${response.status}`);
    }

    const result = await response.json();
    viccHelye.innerHTML = "Itt a vicc: " + result.setup + " " + result.punchline;
  } catch (error) {
    viccHelye.innerHTML = error;
  }
}