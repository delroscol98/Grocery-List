const userInput = document.getElementById('userInput');
const addButton = document.getElementById('addButton');
const groceryList = document.getElementById('groceryList');
const clearButton = document.getElementById('clearButton')

function addItem() {
    const newItem = document.createElement('li')

    if(userInput) {
        newItem.textContent = userInput.value
    }

    groceryList.appendChild(newItem)
}

addButton.addEventListener('click', addItem)

function clearList() {
    groceryList.innerHTML = ''
}

clearButton.addEventListener('click', clearList)
