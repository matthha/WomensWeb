con = document.querySelector('.container')
fr = '1fr '
amount = 3
document.querySelector('#b1').addEventListener('click', () => {

    if (amount>1) {amount-=1}
    con.style.gridTemplateColumns = fr.repeat(amount);
})
document.querySelector('#b2').addEventListener('click', () => {
    amount += 1;
    con.style.gridTemplateColumns = fr.repeat(amount);
})
// document.querySelector('#b3').addEventListener('click', () => {

//     con.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
// })