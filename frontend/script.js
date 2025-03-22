document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o recarregamento da página

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log("Tentando logar com:", username, password); // 🔹 Verifica os valores enviados

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Resposta do login:", data); // 🔹 Verifica a resposta do backend

        if (data.success) {
            localStorage.setItem("token", data.token);
            console.log("Token salvo no LocalStorage:", localStorage.getItem("token")); // 🔹 Confirma que o token foi salvo
            window.location.href = "dashboard.html";
        } else {
            alert("Login falhou!");
        }
    })
    .catch(error => console.error("Erro no login:", error));
});
