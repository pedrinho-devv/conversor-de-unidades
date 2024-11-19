// Selecionando os elementos corretamente
const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const converteElement = document.querySelector(".btn");
const messageElement = document.querySelector("#message");

// Função de conversão (incompleta - lógica precisa ser implementada)
function converter() {
  const inputValue = parseFloat(inputElement.value);
  const fromValue = fromElement.value;
  const toValue = toElement.value;

  if (fromValue === toValue) {
    outputElement.value = inputElement.value;
    messageElement.textContent = "";
    return;
  }
  // converter para metros
  let meters;
  switch (fromValue) {
    case "m":
      meters = inputElement.value;
      break;

    case "km":
      meters = inputElement.value * 1000;
      break;
    case "cm":
      meters = inputElement.value / 100;
      break;
    case "mm":
      meters = inputElement.value / 1000;
      break;
  }

  // unidades de saídas
  let result;
  switch (toValue) {
    case "m":
      result = meters;
      break;

    case "km":
      result = meters / 1000;
      break;
    case "cm":
      result = meters * 100;
      break;
    case "mm":
      result = meters * 1000;
      break;
  }
  //Exibir resultado no input
  outputElement.value = result;
  //Exibir resultado na message
  const fromLabel = fromElement.options[fromElement.selectedIndex].text;
  const toLabel = toElement.options[toElement.selectedIndex].text;
  const message = `${
    inputElement.value
  } ${fromLabel} equivalem a ${result.toFixed(2)} ${toLabel}`;
  messageElement.textContent = message;
}

// Associando o evento de clique ao botão
converteElement.addEventListener("click", converter);
