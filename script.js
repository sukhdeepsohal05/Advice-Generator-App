const adviceId = document.querySelector('.advice-id'),
advice = document.querySelector('.advice'),
generateAdviceBtn = document.querySelector('.generate-advice-btn');

const generateAdvice = async()=>{
    try {
        const res = await fetch('https://api.adviceslip.com/advice/117');
        const data = await res.json();
        setTimeout(() => {
            adviceId.textContent = `ADVICE  #${data.slip.id}`;
            advice.textContent = `“${data.slip.advice}”`;
        }, 200);
        advice.textContent = 'Loading Advice...';
    } catch (err) {
        console.log(err);
    }
}

generateAdviceBtn.addEventListener('click', ()=>{
    generateAdvice();
})

generateAdvice();