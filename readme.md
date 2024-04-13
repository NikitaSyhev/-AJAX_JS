## AJAX и общение с сервером

### Калькулятор валют

Данные берутся с JSON, который, условно, лежит на сервере: current.json
Запрос делаем через: 
```
const request = new XMLHttpRequest();
```
Объект request имеет 3 метода:
```
request.open('GET', 'js/current.json'); - метод GET получение данных с сервера, + путь к серверу
request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); - тип контента + тип файла
request.send();
```