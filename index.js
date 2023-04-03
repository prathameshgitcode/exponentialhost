const apiUrl = "https://api.chucknorris.io/jokes/random";
const apiKey = "YOUR_API_KEY_HERE"; // Replace with your API key

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", () => {
  fetch(`${apiUrl}?apiKey=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      const joke = data.value;
      document.querySelector("p").textContent = joke;
    })
    .catch((error) => console.error(error));
});
