// Function to calculate and display the total price
function calculateTotal() {
    // Get all the prices using their class name
    const prices = document.querySelectorAll('.prices');

    // Initialize the total variable to 0
    let totalPrice = 0;

    // Loop through each price element, convert it to a number, and add to totalPrice
    prices.forEach(price => {
        // Get the text content of the price, convert it to float, and add to totalPrice
        totalPrice += parseFloat(price.textContent) || 0;
    });

    // Create a new row to display the total price
    const table = document.querySelector('table');
    const newRow = document.createElement('tr');

    // Create a new cell for the total row
    const totalCell = document.createElement('td');
    totalCell.setAttribute('colspan', '2'); // Optional: Assuming the table has two columns

    // Set the text content of the new cell to display the total price
    totalCell.textContent = 'Total: ' + totalPrice.toFixed(2);

    // Append the new cell to the new row
    newRow.appendChild(totalCell);

    // Append the new row to the table
    table.appendChild(newRow);
}

// Call the function to calculate the total and display it when the page loads or after any change
calculateTotal();
