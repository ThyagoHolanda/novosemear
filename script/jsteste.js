const pag = [
    { nome: "Anny", mar: 25, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Renan", mar: 25, abr: 25, mai: 25, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Mayara", mar: 25, abr: 25, mai: 25, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Thyago", mar: 25, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Helyziane", mar: 25, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Matheus", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Samuel", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Julio", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Gabriel", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Junior", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Igor", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Jefferson", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Sofia", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Cena", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Leticia Soares", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Leticia Ellen", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Vitoria Mariana", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Vitoria", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Geovana", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Emily", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Eriki", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Agatha", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Bianca", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Clara", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Mikael", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Rodrigo", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
    { nome: "Yasmin", mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0, jan: 0 },
]

// Ordena o array em ordem alfabética pelo nome das pessoas
pag.sort((a, b) => a.nome.localeCompare(b.nome));

console.log(pag); // Array ordenado