// GET

fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((data) => console.log(data));

//POST

fetch("https://dummyjson.com/products/add", {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        title: "Lincoln",
    })
})
.then(res => res.json())
.then(data => console.log(data));