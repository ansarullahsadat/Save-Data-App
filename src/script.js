"use strict"

const form = document.querySelector("#myForm")

form.addEventListener("submit", function (event) {
  event.preventDefault() // Prevent form submission

  // Get form values
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value

  // Save data to local storage
  localStorage.setItem("name", name)
  localStorage.setItem("email", email)

  alert("Data saved successfully!🥳")

  // Update output section with saved data
  document.getElementById("saved-name").textContent = name
  document.getElementById("saved-email").textContent = email
})

// Retrieve data from local storage on page load

window.addEventListener("load", function () {
  const name = localStorage.getItem("name")
  const email = localStorage.getItem("email")

  // Fill the form fields with the saved data, if available
  if (name) {
    document.getElementById("name").value = name
    document.getElementById("saved-name").textContent = name
  }
  if (email) {
    document.getElementById("email").value = email
  }
})
