function generateComp() {
    const comp = Math.random();
    if (comp > 0 && comp < 0.3) {
        return 'batu';
    }
    if (comp > 0.3 && comp < 0.6) {
        return 'kertas'
    }
    return 'gunting';
}

function matchResult(p, comp) {
    if (p === comp) return 'seri';
    if (p === 'batu') return (comp === 'gunting') ? 'menang' : 'kalah';
    if (p === 'kertas') return (comp == 'batu') ? 'menang' : 'kalah';
    if (p === 'gunting') return (comp == 'kertas') ? 'menang' : 'kalah';
}

function compShake() {
    const img = document.getElementById('compResult');
    const arrComp = ['batu', 'kertas', 'gunting'];
    let start = 0;
    const timeStart = new Date().getTime();

    setInterval(() => {

        if(new Date().getTime() - timeStart >= 1000){
            return clearInterval();
        }
        console.log(`css/${arrComp[start]}.jpg`);
        img.setAttribute('src', `css/${arrComp[start++]}.jpg`)
        if (start >= arrComp.length) {
            start = 0;
        }

    }, 100)
}

function setImg(comp){
    document.getElementById('compResult').setAttribute('src',`css/${comp}.jpg`)
}

function showResults(result){
    document.getElementById('container-result').innerHTML = `<h1>${result}</h1>`;
}

const contPlayer = document.getElementById('container-player');
const pBtn = contPlayer.querySelectorAll('img');

pBtn.forEach((e) => {
    e.addEventListener('click', () => {
        const p = e.id;
        const comp = generateComp();
        

        compShake();

        setTimeout(()=>{
            const result = matchResult(p,comp);
            setImg(comp)
            showResults(result);
            console.log(`${p} vs ${comp} : ${result}`);
        },1000);
        
    })
})