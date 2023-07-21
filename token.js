/**
 * Chave do token no local storage
 */
const TOKEN_KEY = "TOKEN";

/**
 * Salva o token no local storage para ser pego depois
 */
function salvarToken(token) {
  // precisamos converter o token para string
  const tokenString = JSON.stringify(token);

  // guardamos o token "stringificado" no local storage
  localStorage.setItem(TOKEN_KEY, tokenString);
}

/**
 * Carrega o token guardado no local storage
 */
function carregarToken() {
  // pegamos a string do token
  const token = localStorage.getItem("TOKEN");
  // convertermos ela em um objeto do javascript
  return JSON.parse(token);
}

/**
 * Envia uma requisição GET para a URL, usando o token guardado no local storage
 */
async function getAutenticado(url) {
  const token = carregarToken();

  const resposta = await fetch(url, {
    method: "GET",
    headers: {
      // devemos incluir o token no cabeçalho authorization para que tenhamos acesso à API
      Authorization: `Bearer ${token.access}`,
    },
  });

  // retornamos a resposta
  return resposta.json();
}

/**
 * Envia uma requisição POST para a URL, usando o token guardado no local storage
 */
async function postAutenticado(url, body) {
  const token = carregarToken();

  const resposta = await fetch(url, {
    method: "POST",
    headers: {
      // devemos incluir o token no cabeçalho authorization para que tenhamos acesso à API
      Authorization: `Bearer ${token.access}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const json = await resposta.json();

  console.log(json);

  // retornamos a resposta
  return json;
}

/**
 * Envia uma requisição DELETE para a URL, usando o token guardado no local storage
 */
async function deleteAutenticado(url) {
  const token = carregarToken();

  const resposta = await fetch(url, {
    method: "DELETE",
    headers: {
      // devemos incluir o token no cabeçalho authorization para que tenhamos acesso à API
      Authorization: `Bearer ${token.access}`,
    },
  });

  // retornamos a resposta
  return resposta.json();
}

/**
 * Envia uma requisição PATCH para a URL, usando o token guardado no local storage
 */
async function patchAutenticado(url, body) {
  const token = carregarToken();

  const resposta = await fetch(url, {
    method: "PATCH",
    headers: {
      // devemos incluir o token no cabeçalho authorization para que tenhamos acesso à API
      Authorization: `Bearer ${token.access}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const json = await resposta.json();

  console.log(json);

  // retornamos a resposta
  return json;
}
