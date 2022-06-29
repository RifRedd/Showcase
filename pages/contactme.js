console.log ("Hello World")

$(document).ready(function (){
    $('.submit').click(function (event) {
    event.preventDefault()
    console.log("button was clicked")
    })
})


