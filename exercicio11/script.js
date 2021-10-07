function aprovado() {
var nomeAluno = document.getElementById('nomeAluno').value;
var nota1 = parseFloat(document.getElementById('nota1').value);
var nota2 = parseFloat(document.getElementById('nota2').value);
var nota3 = parseFloat(document.getElementById('nota3').value);
var nota4 = parseFloat(document.getElementById('nota4').value);/**armazenamento de id's do HTML*/
//
if (nomeAluno && nota1 && nota2 && nota3 && nota4 || "") {//validação dos campos
    console.log('funcionando');
} else {
    alert('Valores não inseridos!');
    document.location.reload(true);
}
//
var media = (nota1 + nota2 + nota3 + nota4) / 4;//calc media
//
if (media >= 70) {
    document.getElementById('resultado').innerHTML = 'Nome do Aluno ' + nomeAluno + '<br>' +
    'Notas ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + '<br>' +
    'Média final ' + media + '<br>' +
    'Aprovado';
} else if (media >= 50 && media < 70) {
    document.getElementById('resultado').innerHTML = 'Nome do Aluno ' + nomeAluno + '<br>' +
    'Notas ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + '<br>' +
    'Média final ' + media + '<br>' +
    'Recuperação';
} else if (media < 50) {
    document.getElementById('resultado').innerHTML = 'Nome do Aluno ' + nomeAluno + '<br>' +
    'Notas ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + '<br>' +
    'Média final ' + media + '<br>' +
    'Reprovado';
}
}

function limpar() {
    document.getElementById('nomeAluno').value = "";
    document.getElementById('nota1').value = "";
    document.getElementById('nota2').value = "";
    document.getElementById('nota3').value = "";
    document.getElementById('nota4').value = "";//limpar valores do usuário

    document.getElementById('resultado').innerHTML = "";//limpar resultado
}