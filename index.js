function submitData (name, email) {
    const sin = { name, email};
    return fetch("http://localhost:3000/users", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",  
        },
        body: JSON.stringify(sin),
    })
    .then((response) => response.json())
    .then((data) => {
        document.body.innerHTML = data.id;
    })
    .catch((error) => {
        document.body.innerHTML = error.message;
    });
}
