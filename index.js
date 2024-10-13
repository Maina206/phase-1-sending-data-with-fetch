function submitData(userName, userEmail) {
    const data = {
      name: userName,
      email: userEmail,
    };
  
    return fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(function (data) {
        document.body.innerHTML += `<p>${data.id}</p>`
        console.log(data.id)
    })
    .catch(error => {
        document.body.innerHTML += `<p>${error.message}</p>`;
      });
  }

  submitData("Steve", "steve@steve.com")