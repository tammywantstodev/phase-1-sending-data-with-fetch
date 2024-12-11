// Add your code here
function submitData(){
    const body = document.querySelector('body');
   return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: "Steve",
            email: "steve@steve.com",
        }),
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const idElement = document.createElement('p');
        idElement.textContent = `ID: ${data.id}`;
        body.appendChild(idElement);
    })
    .catch(function (error) {
       const errorElement = document.createElement('p');
       errorElement.textContent=`Error: ${error.message}`;
       body.appendChild(errorElement);
    });


}