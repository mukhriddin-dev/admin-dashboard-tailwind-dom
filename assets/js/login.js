// HTML elements

let submitForm = $("#login-form"),
    userName = $("#username"),
    password = $("#password");





let baseUrl = `https://fakestoreapi.com`





async function authorization() {

    const user = {
        username: userName.value,
        password: password.value
    }



    try {
        if (user.password.trim().length === 0 || user.username.trim().length === 0) {
            alert("Please fill all the fields")
        } else {
            const response = await fetch(`${baseUrl}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });

            const result = await response.json();

            localStorage.setItem('token', result.token);

            if(localStorage.getItem('token')){
                window.location.href = "../../index.html";
            }
        }
    } catch (err) {
        console.log("mana xato:", err)
    }


}


submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    authorization()

})
