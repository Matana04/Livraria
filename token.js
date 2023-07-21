function salvarToken(token) {
    localStorage.setItem("TOKEN", JSON.stringify(token))
}

function carregarToken() {
    const token = localStorage.getItem("TOKEN")
    return JSON.parse(token)
}

async function enviarRequisicaoAutenticada(url) {
    const token = carregarToken();

    const resposta = await fetch(
        url,
        {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token.access}`
          }
        }
    );

    return resposta.json();
}

