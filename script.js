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
        viccHelye.innerHTML = result.setup + " " + result.punchline;
      } catch (error) {
        viccHelye.innerHTML = error;
      }
    }

    async function getRandomJokeById() {
      try {
        const viccId = document.getElementById("viccid").value
        const URL = `https://official-joke-api.appspot.com/jokes/${viccId}`
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`Api válasza: ${response.status}`);
        }

        const result = await response.json();
        viccHelye.innerHTML = result.setup + " " + result.punchline;
      } catch (error) {
        viccHelye.innerHTML = error;
      }
    }

    async function getRandomJokeProgramming() {
      try {
        const URL = "https://official-joke-api.appspot.com/jokes/programming/random"
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`Api válasza: ${response.status}`);
        }

        const result = await response.json();
        viccHelye.innerHTML = result[0].setup + " " + result[0].punchline;
      } catch (error) {
        viccHelye.innerHTML = error;
      }
    }

    async function getRandomJokeGeneral() {
      try {
        const URL = "https://official-joke-api.appspot.com/jokes/general/random"
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`Api válasza: ${response.status}`);
        }

        const result = await response.json();
        viccHelye.innerHTML =  result[0].setup + " " + result[0].punchline;
      } catch (error) {
        viccHelye.innerHTML = error;
      }
    }

    async function getRandomJokeKnockKnock() {
      try {
        const URL = "https://official-joke-api.appspot.com/jokes/knock-knock/random"
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`Api válasza: ${response.status}`);
        }

        const result = await response.json();
        viccHelye.innerHTML = result[0].setup + " " + result[0].punchline;
      } catch (error) {
        viccHelye.innerHTML = error;
      }
    }

    function kerjVicc() {
      const id = document.getElementById("viccid").value;
      const kategoria = document.getElementById("kategoria").value;

      if (id) {
        getRandomJokeById();
      } else {
        switch (kategoria) {
          case "general":
            getRandomJokeGeneral();
            break;
          case "programming":
            getRandomJokeProgramming();
            break;
          case "knockknock":
            getRandomJokeKnockKnock();
            break;
          default:
            getRandomJoke();
        }
      }
    }