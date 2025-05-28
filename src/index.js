// GLOBAL VARIBLES
const toyContainer = document.querySelector("#toy-collection")
const likeButton = document.querySelector(".like-btn")

let addToy = false

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn")
  const toyFormContainer = document.querySelector(".container")
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy
    if (addToy) {
      toyFormContainer.style.display = "block"
    } else {
      toyFormContainer.style.display = "none"
    }
  })

  // FETCH REQUEST

  fetch("http://localhost:3000/toys")
    .then((res) => res.json())
    .then((toys) => {
      console.log(toys)
      toys.forEach((toy) => renderCollection(toy))
    })
})

// RENDER FUNCTIONS
const renderCollection = (toy) => {
  let card = document.createElement("card")

  card.innerHTML = `
    <div class="card">
      <h2>${toy.name}</h2>
      <img src="${toy.image}" class="toy-avatar" />
      <p>4 Likes</p>
      <button class="like-btn" id="${toy.id}">Like ❤️</button>
    </div>`
  toyContainer.appendChild(card)
}

// Toy Data =
// Object { id: "1", name: "Woody", image: "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png", likes: 5 }
// ​
// id: "1"
// ​
// image: "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png"
// ​
// likes: 5
// ​
// name: "Woody"
