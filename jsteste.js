// const anne = [25, 0, 0];
// const renan = [25, 25, 25];
// const mayara = [25, 25, 25];
// const thyago = [25, 0, 0];
// const hely = [25, 0, 0];

const pag = [
    { nome: "Anne", mar: 25, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Renan", mar: 25, abr: 25, mai: 25, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Mayara", mar: 25, abr: 25, mai: 25, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Thyago", mar: 25, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Helyziane", mar: 25, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
]
// Total total
let total = 0;
function totalPag() {
    for (const pessoa of pag) {
        for (const mes in pessoa) {
            if (typeof pessoa[mes] === 'number') {
                total += pessoa[mes];
            }
        }
    }
}


// Total por pessoa

const totalPorPessoa = {};

function totalPessoa() {
    for (const pessoa of pag) {
        let total = 0;

        for (const mes in pessoa) {
            if (mes !== "nome") {
                total += pessoa[mes];
            }
        }

        totalPorPessoa[pessoa.nome] = total;
        console.log(pessoa.nome);
    }

    console.log(totalPorPessoa);
}

// Total por mes

function totalMes() {
    const totalPorMes = {};
    for (const pessoa of pag) {
        for (const mes in pessoa) {
            if (mes !== "nome") {
                totalPorMes[mes] = (totalPorMes[mes] || 0) + pessoa[mes];
                // console.log(mes);
            }
        }
    }
    console.log("Total por mês:", totalPorMes);
}
