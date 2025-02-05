

    const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');


    inputRub.addEventListener('input',()=> {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    //отслеживает готовность запроса в данный момент
    request.addEventListener('load', ()=> {
        if(request.readyState === 4 && request.status === 200)  {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Что - то пошло не так.';
        }
    })

    //свойства
    //status
    //statusText
    //response
    //readyState



} )