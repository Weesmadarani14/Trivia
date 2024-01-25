// check the answers to the code
document.addEventListener('DOMContentLoaded', function() {
    let corrects = document.querySelectorAll('.correct');
    for (let i = 0; i < corrects.length; i++) 
    {
        corrects[i].addEventListener('click', function () {
            corrects[i].style.backgroundColor = 'Green';
            corrects[i].parentElement.querySelector('.feedback').innerHTML = "CORRECT!!! :)";
        });
    }

    let incorrects = document.querySelectorAll('.incorrect');
        for (let i = 0; i < incorrects.length; i++)
        {
            incorrects[i].addEventListener('click', function() {
                incorrects[i].style.backgroundColor = 'Red';
                incorrects[i].parentElement.querySelector('.feedback').innerHTML = "INCORRECT :(";
            });
        }
});