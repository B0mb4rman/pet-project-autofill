<script>
const inputElement = document.querySelector('input[placeholder="Введите номер"]');
const valueToType = "Р111ОО777";

setTimeout(() => { // добавляем задержку
  inputElement.value = ''; // очищаем поле перед вводом новых данных
  let i = 0;
  const intervalId = setInterval(() => {
    const currentValue = inputElement.value;
    const charToType = valueToType[i];
    inputElement.value = currentValue + charToType;
    i++;

    if (i >= valueToType.length) {
      clearInterval(intervalId);
    }
  }, 250);
}, 1000); // задержка в 1 секунду перед вводом

const inputElement = document.querySelector('input[placeholder="Введите название"]');
const valueToType = "ТНП";

setTimeout(() => { // добавляем задержку
  inputElement.value = ''; // очищаем поле перед вводом новых данных
  let i = 0;
  const intervalId = setInterval(() => {
    const currentValue = inputElement.value;
    const charToType = valueToType[i];
    inputElement.value = currentValue + charToType;
    i++;

    if (i >= valueToType.length) {
      clearInterval(intervalId);
    }
  }, 250);
}, 3000); // задержка в 1 секунду перед вводом

const inputElement = document.querySelector('input[step="1"]');
const valueToType = "33";

setTimeout(() => { // добавляем задержку
  inputElement.value = ''; // очищаем поле перед вводом новых данных
  let i = 0;
  const intervalId = setInterval(() => {
    const currentValue = inputElement.value;
    const charToType = valueToType[i];
    inputElement.value = currentValue + charToType;
    i++;

    if (i >= valueToType.length) {
      clearInterval(intervalId);
    }
  }, 250);
}, 4000); // задержка в 1 секунду перед вводом


</script>