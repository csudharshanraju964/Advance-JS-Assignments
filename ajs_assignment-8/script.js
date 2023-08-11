function fetchUser() {

    fetch("https://randomuser.me/api/").then((resp) => {
        return resp.json();
    }).then((data) => {
        let name = data.results[0].name.first + " " + data.results[0].name.last;
        let image = data.results[0].picture.large;
        let age = data.results[0].dob.age;
        let email = data.results[0].email;
        return { name, image, email, age };
    }).then((data) => {
        let container = document.getElementById('container');
        let h1 = document.createElement('h1');
        h1.textContent = data.name;
        let image = document.createElement("img");
        image.setAttribute('src', data.image);

        container.append(h1);
        container.append(image);

        document.getElementById('email').addEventListener('click', () => {
            container.innerHTML = "";
            let email = document.createElement("h1");
            h1.textContent = "Email : " + data.email;
            container.append(h1)
        })


        document.getElementById('age').addEventListener('click', () => {
            container.innerHTML = "";
            let email = document.createElement("h1");
            h1.textContent = "Age : " + data.age;
            container.append(h1)
        })

        document.getElementById('phone').addEventListener('click', () => {
            container.innerHTML= "";
            let phone = document.createElement("h1");
            h1.textContent = "Phone :" + data.phone;
            container.append(h1);
        })

    })

}
fetchUser();
document.getElementById('getuser').addEventListener('click', () => {
    document.getElementById('container').innerHTML = "";
    fetchUser();
})