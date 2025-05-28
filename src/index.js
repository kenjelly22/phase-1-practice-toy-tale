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

  fetch("http://localhost:3000/toys")
    .then((res) => res.json())
    .then((data) => data.forEach((toy) => renderCollection(toy)))
  debugger
})

const renderCollection = (toy) => {
  let card = document.createElement("div")

  card.innerHTML = `
    <div class="card">
      <h2>Woody</h2>
      <img src="[toy_image_url] class="toy-avatar" />
      <p>4 Likes</p>
      <button class="like-btn" id="[toy_id]">Like ❤️</button>
    </div>`
  toyContainer.appendChild(card)
}
