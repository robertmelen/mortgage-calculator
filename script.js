document.getElementById('calc-btn').addEventListener('click',
    () => {
        const mortgageAmount = parseFloat(document.getElementById('first-input').value);
        const mortgageTerm = parseFloat(document.getElementById('second-input').value);
        const interestRate = parseFloat(document.getElementById('third-input').value);
        const mortgageType = document.querySelector('input[name="mortgage-type"]:checked').value;
        console.log(mortgageType)

        if (isNaN(mortgageAmount) || isNaN(mortgageTerm) || isNaN(interestRate)) {
            alert("enter valid numbers!")
            return
        };

        let monthlyRepayment = 0;
        let totalRepayment = 0;

        if (mortgageType === 'repayment') {
            const monthlyInterestRate = interestRate / 100 / 12;
            const numberOfPayments = mortgageTerm * 12;

            monthlyRepayment = (mortgageAmount * monthlyInterestRate) / (1 - Math.pow((1 + monthlyInterestRate), -numberOfPayments));
            totalRepayment = monthlyRepayment * numberOfPayments;

        } else if (mortgageType === 'interest-only') {
            monthlyRepayment = (mortgageAmount * (interestRate / 100)) / 12;
            totalRepayment = mortgageAmount + (monthlyRepayment * mortgageTerm * 12);
        }
        document.getElementById('monthly-repayment').textContent = `£      ${monthlyRepayment.toFixed(2)}`;
        document.getElementById('total-repayment').textContent = `£${totalRepayment.toFixed(2)}`;
    })

// Clear All button functionality
document.getElementById('clear-btn').addEventListener('click', () => {
    document.getElementById('first-input').value = '';
    document.getElementById('second-input').value = '';
    document.getElementById('third-input').value = '';

    // Uncheck radio buttons
    const radioButtons = document.querySelectorAll('input[name="mortgage-type"]');
    radioButtons.forEach(radio => radio.checked = false);

    // Clear results
    document.querySelector('.final-amount').textContent = '£0.00';
    document.querySelector('.repay-amount').textContent = '£0.00';
}); 