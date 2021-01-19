const request = new XMLHttpRequest();
request.open('GET', 'http://localhost:8081/test');
request.setRequestHeader('accept', 'application/json');
request.send();
