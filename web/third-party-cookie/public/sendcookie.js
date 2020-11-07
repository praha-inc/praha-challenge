const firstPartyButton = document.getElementById('first-button');

firstPartyButton.addEventListener('click', () => {
  const req = new XMLHttpRequest();
  req.open('GET', 'cookie');
  req.send();
});
