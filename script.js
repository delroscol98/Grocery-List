const userInput = document.getElementById('userInput');
const addButton = document.querySelector('button');
const groceryList = document.getElementById('groceryList');

function addItem() {
    const newItem = document.createElement('li')

    if(userInput) {
        newItem.textContent = userInput.value
    }

    groceryList.appendChild(newItem)
}

addButton.addEventListener('click', addItem)