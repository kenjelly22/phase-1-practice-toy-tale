// GLOBAL VARIBLES
const toyContainer = document.querySelector("#toy-collection")
const toysUrl = "http://localhost:3000/toys"
const inputForm = document.querySelector("form")
const [nameInput, imageInput] = document.querySelectorAll("input")

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

  // GET REQUEST
  fetch(toysUrl)
    .then((res) => res.json())
    .then((toys) => {
      toys.forEach((toy) => renderCollection(toy))
    })

  // POST REQUEST
  const postNewToy = (name, image, likes) => {
    fetch(toysUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        image: image,
        likes: likes,
      }),
    })
      .then((res) => res.json())
      .then((newToy) => {
        renderCollection(newToy)
      })
  }

  // INPUT FORM
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const name = nameInput.value
    const image = imageInput.value
    const likes = 0
    postNewToy(name, image, likes)
  })

  // RENDER FUNCTIONS
  const renderCollection = (toy) => {
    let card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML = `
      <h2>${toy.name}</h2>
      <img src="${toy.image}" class="toy-avatar" />
      <p class="likes">${toy.likes} Likes</p>
      <button class="like-btn" id="${toy.id}">Like ❤️</button>`
    toyContainer.appendChild(card)
    // console.log(toy)

    // LIKE BUTTON
    const likeButton = card.querySelector(".like-btn")
    likeButton.addEventListener("click", () => {
      toy.likes++
    })
  }
}) // End DOMContentLoaded

// When I click the like button
// I should grab the card ID of the card I clicked on
// I should grab the current # of Likes for that card
// onclick increment likes by 1
// show updated like count on card

// Onclick should send Patch request
// Will update the like count for that card ID
