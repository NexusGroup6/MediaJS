var mediaAluno1 = 0;
var mediaAluno2 = 0;
var mediaGeral = 0;
var nomeAluno1 = 0;
var nomeAluno2 = 0;

function aluno1() {
  nomeAluno1 = document.getElementById("nomeAluno1").value;
  var nota1aluno1 = parseFloat(document.getElementById("nota1aluno1").value);
  var nota2aluno1 = parseFloat(document.getElementById("nota2aluno1").value);
  var nota3aluno1 = parseFloat(document.getElementById("nota3aluno1").value);
  var nota4aluno1 = parseFloat(document.getElementById("nota4aluno1").value);

  mediaAluno1 = (nota1aluno1 + nota2aluno1 + nota3aluno1 + nota4aluno1) / 4;

  document.getElementById("nome1").innerHTML = nomeAluno1;
  document.getElementById("nota1").innerHTML =
    nota1aluno1 + ", " + nota2aluno1 + ", " + nota3aluno1 + ", " + nota4aluno1;
  document.getElementById("media1").innerHTML = mediaAluno1;

  if (mediaAluno1 >= 70) {
    situacao1.innerHTML = '<h6 style="color:#008800">' + "Aprovado!" + "</h6>";
  } else if (mediaAluno1 >= 50 && mediaAluno1 < 70) {
    situacao1.innerHTML = '<h6 style="color:#ffd500">' + "Recuperação!" + "</h6>";
  } else if (mediaAluno1 < 50) {
    situacao1.innerHTML = '<h6 style="color:#c22303">' + "Reprovado!" + "</h6>";
  }
}
function aluno2() {
  nomeAluno2 = document.getElementById("nomeAluno2").value;
  var nota1aluno2 = parseFloat(document.getElementById("nota1aluno2").value);
  var nota2aluno2 = parseFloat(document.getElementById("nota2aluno2").value);
  var nota3aluno2 = parseFloat(document.getElementById("nota3aluno2").value);
  var nota4aluno2 = parseFloat(document.getElementById("nota4aluno2").value);

  mediaAluno2 = (nota1aluno2 + nota2aluno2 + nota3aluno2 + nota4aluno2) / 4;

  document.getElementById("nome2").innerHTML = nomeAluno2;
  document.getElementById("nota2").innerHTML =
    nota1aluno2 + ", " + nota2aluno2 + ", " + nota3aluno2 + ", " + nota4aluno2;
  document.getElementById("media2").innerHTML = mediaAluno2;

  if (mediaAluno2 >= 70) {
    situacao2.innerHTML = '<h6 style="color:#008800">' + "Aprovado!" + "</h6>";
  } else if (mediaAluno2 >= 50 && mediaAluno2 < 70) {
    situacao2.innerHTML = '<h6 style="color:#ffd500">' + "Recuperação!" + "</h6>";
  } else if (mediaAluno2 < 50) {
    situacao2.innerHTML = '<h6 style="color:#c22303">' + "Reprovado!" + "</h6>";
  }
}

function media() {
mediaGeral = (mediaAluno1 + mediaAluno2) / 2;
document.getElementById('media').innerHTML = 'Média geral da turma ' + mediaGeral;
}
function mediaInferior() {
    if (mediaAluno1 < mediaGeral) {
        document.getElementById('mediaInferior1').innerHTML = nomeAluno1 + ' teve desempenho inferior ao da turma.';
    } if (mediaAluno2 < mediaGeral) {
        document.getElementById('mediaInferior2').innerHTML = nomeAluno2 + ' teve desempenho inferior ao da turma.';
    }
}

function limpar1() {
    document.getElementById('nomeAluno1').value = "";
    document.getElementById('nota1aluno1').value = "";
    document.getElementById('nota2aluno1').value = "";
    document.getElementById('nota3aluno1').value = "";
    document.getElementById('nota4aluno1').value = ""; 
}
function limpar2() {
    document.getElementById('nomeAluno2').value = "";
    document.getElementById('nota1aluno2').value = "";
    document.getElementById('nota2aluno2').value = "";
    document.getElementById('nota3aluno2').value = "";
    document.getElementById('nota4aluno2').value = ""; 
}
function limpar3() {
    document.getElementById('media').innerHTML = "";
}
function limpar4() {
    document.getElementById('mediaInferior1').innerHTML = "";
    document.getElementById('mediaInferior2').innerHTML = "";
}