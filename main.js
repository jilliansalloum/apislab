const residents = document.querySelector("#residents")

function residentButton(event) {
    console.log('button clicked')
}

document.getElementById("residents").addEventListener("click", residentButton);

residents.addEventListener('click', residentButton)
console.log(residents.addEventListener('click', residentButton))

