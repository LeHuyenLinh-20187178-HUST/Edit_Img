const storageData = JSON.parse(localStorage.getItem('history'));

for (let i = 0; i < storageData.length; i++) {
    var e = storageData[i];
    var username = document.createTextNode(e.username);
    var pass = document.createTextNode(e.password);
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    td1.appendChild(username);
    td2.appendChild(pass);
    tr.appendChild(td1);
    tr.appendChild(td2);
    document.getElementById('login').appendChild(tr);
}

const logoutData = JSON.parse(localStorage.getItem('logoutHistory'));

for (let i = 0; i < logoutData.length; i++) {
    var e = logoutData[i];
    var username = document.createTextNode(e.username);
    var pass = document.createTextNode(e.password);
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    td1.appendChild(username);
    td2.appendChild(pass);
    tr.appendChild(td1);
    tr.appendChild(td2);
    document.getElementById('logout').appendChild(tr);
}
