const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();

setTimeout(() => {
    $("#message").fadeout('slow')
}, 5000);
