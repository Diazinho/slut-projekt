const form = document.querySelector('#payment-form');
const statusText = document.querySelector('.payment-gateway__status-text');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const cardNumber = form.elements['card-number'].value;
  const cardExpiry = form.elements['card-expiry'].value;
  const cardCVC = form.elements['card-cvc'].value;
  const cardholderName = form.elements['cardholder-name'].value;

  setTimeout(() => {
    const isSuccess = Math.random() >= 0.5;
    if (isSuccess) {
      statusText.innerText = 'Payment successful! Thank you for your order.';
      statusText.classList.remove('payment-gateway__status-text--pending', 'payment-gateway__status-text--error');
      statusText.classList.add('payment-gateway__status-text--success');
    } else {
      statusText.innerText = 'Payment failed. Please make sure to enter your details correctly.';
      statusText.classList.remove('payment-gateway__status-text--pending', 'payment-gateway__status-text--success');
      statusText.classList.add('payment-gateway__status-text--error');
    }
  }, 2000);

  statusText.innerText = 'Processing payment...';
  statusText.classList.remove('payment-gateway__status-text--success', 'payment-gateway__status-text--error');
  statusText.classList.add('payment-gateway__status-text--pending');
});
