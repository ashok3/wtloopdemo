var xhr = new XMLHttpRequest();
console.log('test');
xhr.open("PUT", 'https://6409f459d16b1f3ed6e239e8.mockapi.io/api/firstClassLounge/1', false);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({"firstClass":"true"}));