function generateComp() {
    const comp = Math.random();
    if (comp < 0.3) {
        return 'batu';
    }
    if (comp < 0.6) {
        return 'kertas';
    }
    return 'gunting'
}

function getResult(player, comp) {
    if (player == comp) return 'Seri';
    if (player == 'batu') return (comp == 'gunting') ? 'Menang' : 'Kalah';
    if (player == 'gunting') return (comp == 'kertas') ? "Menang" : "Kalah";
    if (player == 'kertas') return (comp == 'batu') ? "Menang" : "Kalah";
    return 'bukan pilihan';
}

function imgComp(comp){
    const imgComp = document.getElementsByTagName('img')[0];
    imgComp.setAttribute('src',`css/${comp}.jpg`)
}
function showResult(result){
    const textResult = document.getElementsByClassName('container-result')[0];
    textResult.innerHTML = `<h1>${result}</h1>`;
}
const batu = document.getElementsByClassName('card batu')[0];

batu.addEventListener('click', () => {
    const comp = generateComp();
    const p = 'batu'
    const result = getResult(p, comp);
    imgComp(comp);
    showResult(result);
    console.log(`Player : ${p}\nComp : ${comp}\nHasil : ${result}`);
})

const gunting = document.getElementsByClassName('card gunting')[0];

gunting.addEventListener('click', () => {
    const comp = generateComp();
    const p = 'gunting'
    const result = getResult(p, comp);
    imgComp(comp);
    showResult(result);
    console.log(`Player : ${p}\nComp : ${comp}\nHasil : ${result}`);
})

const kertas = document.getElementsByClassName('card kertas')[0];

kertas.addEventListener('click', () => {
    const comp = generateComp();
    const p = 'kertas'
    const result = getResult(p, comp);
    imgComp(comp);
    showResult(result);
    console.log(`Player : ${p}\nComp : ${comp}\nHasil : ${result}`);
})