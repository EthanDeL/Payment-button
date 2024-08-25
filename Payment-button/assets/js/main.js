// PAY BUTTON //
document.getElementById('paymentButton').addEventListener('click', function() {
    let button = this;

    // SHOW PROCESSING
    button.classList.add('processing');
    button.disabled = true;

    // SIMULATION OF PROCESSING
    setTimeout(function() {
        button.classList.remove('processing');
        button.classList.add('paid');
    }, 3000); 
});
