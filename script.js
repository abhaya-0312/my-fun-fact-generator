function addFact() {
    const factInput = document.getElementById('new-fact');
    const factText = factInput.value.trim();

    if (factText !== '') {
        const factsList = document.getElementById('facts-list');
        const newFactItem = document.createElement('li');
        newFactItem.textContent = factText;
        factsList.appendChild(newFactItem);
        factInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a fact before adding.');
    }
}
