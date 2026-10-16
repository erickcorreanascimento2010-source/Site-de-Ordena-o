// Lógica do Laboratório Interativo de Ordenação.
// Os algoritmos abaixo foram implementados manualmente: não usamos Array.sort()
// para realizar a ordenação principal.

const form = document.querySelector("#sort-form");
const numbersInput = document.querySelector("#numbers-input");
const algorithmSelect = document.querySelector("#algorithm-select");
const clearButton = document.querySelector("#clear-button");
const message = document.querySelector("#message");
const originalResult = document.querySelector("#original-result");
const sortedResult = document.querySelector("#sorted-result");
const stepsList = document.querySelector("#steps-list");

function showMessage(text, type) {
  message.textContent = text;
  message.className = `message visible ${type}`;
}

function clearMessage() {
  message.textContent = "";
  message.className = "message";
}

function formatNumber(number) {
  return Object.is(number, -0) ? "0" : String(number);
}

function formatSequence(numbers) {
  return numbers.map(formatNumber).join(", ");
}

// Aceita números separados por vírgulas, espaços ou quebras de linha.
// Recusa entradas com palavras ou tokens que não sejam números finitos.
function readNumbers(text) {
  const trimmedText = text.trim();

  if (trimmedText === "") {
    return { error: "Digite pelo menos um número antes de ordenar." };
  }

  const tokens = trimmedText.split(/[\s,]+/);

  for (const token of tokens) {
    if (token === "" || !/^[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/i.test(token)) {
      return { error: `O valor "${token}" não é um número válido. Use apenas números separados por vírgulas ou espaços.` };
    }

    if (!Number.isFinite(Number(token))) {
      return { error: `O valor "${token}" está fora do intervalo numérico permitido.` };
    }
  }

  return { numbers: tokens.map(Number) };
}

// Bubble Sort: compara elementos vizinhos e troca quando estão na ordem errada.
function bubbleSort(numbers, order) {
  const result = [...numbers];
  const steps = [];
  const direction = order === "asc" ? 1 : -1;

  for (let i = 0; i < result.length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < result.length - 1 - i; j++) {
      steps.push(`Comparando ${formatNumber(result[j])} e ${formatNumber(result[j + 1])}.`);

      const outOfOrder = direction === 1
        ? result[j] > result[j + 1]
        : result[j] < result[j + 1];

      if (outOfOrder) {
        const temporary = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temporary;
        swapped = true;
        steps.push(`Troca realizada: ${formatNumber(result[j])} ficou antes de ${formatNumber(result[j + 1])}.`);
      }
    }

    if (!swapped) {
      steps.push("Nenhuma troca nesta passagem; a sequência já está ordenada.");
      break;
    }
  }

  if (numbers.length < 2) {
    steps.push("A sequência tem menos de dois elementos; nenhuma troca é necessária.");
  }

  return { result, steps };
}

// Selection Sort: procura o menor (crescente) ou maior (decrescente)
// elemento da parte ainda não ordenada e o coloca na posição atual.
function selectionSort(numbers, order) {
  const result = [...numbers];
  const steps = [];

  for (let i = 0; i < result.length - 1; i++) {
    let selectedIndex = i;

    for (let j = i + 1; j < result.length; j++) {
      steps.push(`Comparando ${formatNumber(result[j])} com o elemento selecionado ${formatNumber(result[selectedIndex])}.`);

      const betterForOrder = order === "asc"
        ? result[j] < result[selectedIndex]
        : result[j] > result[selectedIndex];

      if (betterForOrder) {
        selectedIndex = j;
      }
    }

    if (selectedIndex !== i) {
      const temporary = result[i];
      result[i] = result[selectedIndex];
      result[selectedIndex] = temporary;
      steps.push(`Troca realizada: ${formatNumber(result[selectedIndex])} foi colocado na posição ${i + 1}.`);
    } else {
      steps.push(`O elemento ${formatNumber(result[i])} já está na posição correta.`);
    }
  }

  if (numbers.length < 2) {
    steps.push("A sequência tem menos de dois elementos; nenhuma troca é necessária.");
  }

  return { result, steps };
}

function displaySteps(steps) {
  stepsList.replaceChildren();

  if (steps.length === 0) {
    const item = document.createElement("li");
    item.textContent = "Nenhuma comparação foi necessária.";
    stepsList.appendChild(item);
    return;
  }

  // Limita a quantidade de linhas mostradas para manter a página legível
  // quando o visitante informa uma sequência muito grande.
  const visibleSteps = steps.slice(0, 100);

  for (const step of visibleSteps) {
    const item = document.createElement("li");
    item.textContent = step;
    stepsList.appendChild(item);
  }

  if (steps.length > visibleSteps.length) {
    const item = document.createElement("li");
    item.textContent = `Foram omitidas ${steps.length - visibleSteps.length} linhas para manter a exibição organizada.`;
    stepsList.appendChild(item);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearMessage();

  const parsed = readNumbers(numbersInput.value);

  if (parsed.error) {
    showMessage(parsed.error, "error");
    return;
  }

  const originalNumbers = parsed.numbers;
  const order = document.querySelector('input[name="order"]:checked').value;
  const algorithm = algorithmSelect.value;

  const output = algorithm === "bubble"
    ? bubbleSort(originalNumbers, order)
    : selectionSort(originalNumbers, order);

  originalResult.textContent = formatSequence(originalNumbers);
  sortedResult.textContent = formatSequence(output.result);
  displaySteps(output.steps);

  const algorithmName = algorithm === "bubble" ? "Bubble Sort" : "Selection Sort";
  const orderName = order === "asc" ? "crescente" : "decrescente";
  showMessage(`${algorithmName} executado com sucesso na ordem ${orderName}.`, "success");
});

clearButton.addEventListener("click", () => {
  numbersInput.value = "";
  originalResult.textContent = "Aguardando números...";
  sortedResult.textContent = "O resultado aparecerá aqui.";
  stepsList.replaceChildren();

  const item = document.createElement("li");
  item.textContent = "Digite uma sequência válida e clique em “Ordenar números”.";
  stepsList.appendChild(item);

  clearMessage();
  numbersInput.focus();
});
