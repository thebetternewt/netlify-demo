const getWord = async () => {
  const res = await fetch('/getword');
  const word = await res.text();

  document.getElementById('random-word').innerText = word;
};

const getUsers = async () => {
  const res = await fetch('/api/users');
  const users = await res.json();

  const userList = document.getElementById('users');

  users.forEach(u => {
    const li = document.createElement('li');
    const textNode = document.createTextNode(u.name);
    li.appendChild(textNode);
    userList.appendChild(li);
  });
};

getWord();
getUsers();
