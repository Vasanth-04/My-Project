//selecting popup-box popup-overlay
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var add = document.getElementById("add")

add.addEventListener("click", function () {

    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
})

//Selecting cancelbutton
var cancelpopup = document.querySelector(".cancel-popup")
cancelpopup.addEventListener("click", function (event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

});

//selecting add-popup,container,book-title-input,book-Author-input,book-short-input
var container = document.querySelector(".container")
var addpopup = document.getElementById("add-popup")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-Author-input")
var bookshortinput = document.getElementById("book-short-input")
addpopup.addEventListener("click", function (event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h2>${booktitleinput.value}</h2>
     <h5>${bookauthorinput.value}</h5>
     <p>${bookshortinput.value}</p>
     <button class="btn" onclick="deleteitem(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

})


function deleteitem(event) {
    event.target.parentElement.remove()
}

