// Initialize variables
const profile = document.querySelector("#profile");

// Get github data
fetch("https://api.github.com/users/evanco239")
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => console.log(err));
