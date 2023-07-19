const anne = [25,0,0];
const renan = [25,25,25];
const mayara = [25,25,25];
const thyago = [25,0,0];
const hely = [25,0,0];
var soma = 0;

for (i = 0; i < 12; i++) {
    if (i<anne.length) {
        soma += Number(anne[i]);
    }
    if (i<renan.length) {
        soma += Number(renan[i]);
    }
    if (i<mayara.length) {
        soma += Number(mayara[i]);
    }
    if (i<thyago.length) {
        soma += Number(thyago[i]);
    }
    if (i<hely.length) {
        soma += Number(hely[i]);
    }
}
console.log(soma)