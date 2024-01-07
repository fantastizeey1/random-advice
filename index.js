const resDiv = document.querySelector('#advice');
const resBtn = document.querySelector('#generate');
const adviceId = document.querySelector('#adviceNo');


resBtn.addEventListener('click', () => {
    getAdvice();
});


function getAdvice() {

    fetch(' https://api.adviceslip.com/advice').then(response =>
{
    return response.json();
}).then(adviceData => {
    const adviceNum = adviceData.slip.id;
    const adviceobj = adviceData.slip;

    adviceId.textContent = adviceNum; 

    resDiv.innerHTML = `<p>"${adviceobj.advice}"</p>`;
    console.log(adviceobj);
}).catch( error =>{
    console.log(error);
});

}

window.onload = () =>{
    getAdvice();
}

