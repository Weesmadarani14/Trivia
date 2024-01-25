// check the answers to the code
document.addEventListener('DOMContentLoaded', function() {
    let corrects = document.querySelectorAll('.correct');
    for (let i = 0; i < corrects.length; i++) 
    {
        corrects[i].addEventListener('click', function () {
            corrects[i].style.backgroundColor = 'Green';
            corrects[i].parentElement('.feedback').innerHTML = "CORRECT!!! :)";
        })
    }
});