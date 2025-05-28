// GLOBAL VARIBLES
const toyContainer = document.querySelector("#toy-collection")
const likeButton = document.querySelector(".like-btn")
const toysUrl = "http://localhost:3000/toys"

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

  // HTTP REQUESTS

  fetch(toysUrl)
    .then((res) => res.json())
    .then((toys) => {
      toys.forEach((toy) => renderCollection(toy))
    })

  const createNewToy = () => {
    fetch(toysUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        type: "text",
        name: "name",
        value: "",
        placeholder: "Enter a toy's name...",
        class: "input-text",
      }),
    })
  }

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
})
