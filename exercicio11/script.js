var mediaAluno1 = 0;
var mediaAluno2 = 0;
var mediaAluno3 = 0;
var mediaAluno4 = 0;
var mediaAluno5 = 0;

var mediaGeral = 0;

var nomeAluno1 = 0;
var nomeAluno2 = 0;
var nomeAluno3 = 0;
var nomeAluno4 = 0;
var nomeAluno5 = 0;

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
function aluno3() {
  nomeAluno3 = document.getElementById("nomeAluno3").value;
  var nota1aluno3 = parseFloat(document.getElementById("nota1aluno3").value);
  var nota2aluno3 = parseFloat(document.getElementById("nota2aluno3").value);
  var nota3aluno3 = parseFloat(document.getElementById("nota3aluno3").value);
  var nota4aluno3 = parseFloat(document.getElementById("nota4aluno3").value);

  mediaAluno3 = (nota1aluno3 + nota2aluno3 + nota3aluno3 + nota4aluno3) / 4;

  document.getElementById("nome3").innerHTML = nomeAluno3;
  document.getElementById("nota3").innerHTML =
    nota1aluno3 + ", " + nota2aluno3 + ", " + nota3aluno3 + ", " + nota4aluno3;
  document.getElementById("media3").innerHTML = mediaAluno3;

  if (mediaAluno3 >= 70) {
    situacao3.innerHTML = '<h6 style="color:#008800">' + "Aprovado!" + "</h6>";
  } else if (mediaAluno3 >= 50 && mediaAluno3 < 70) {
    situacao3.innerHTML = '<h6 style="color:#ffd500">' + "Recuperação!" + "</h6>";
  } else if (mediaAluno3 < 50) {
    situacao3.innerHTML = '<h6 style="color:#c22303">' + "Reprovado!" + "</h6>";
  }
}
function aluno4() {
  nomeAluno4 = document.getElementById("nomeAluno4").value;
  var nota1aluno4 = parseFloat(document.getElementById("nota1aluno4").value);
  var nota2aluno4 = parseFloat(document.getElementById("nota2aluno4").value);
  var nota3aluno4 = parseFloat(document.getElementById("nota3aluno4").value);
  var nota4aluno4 = parseFloat(document.getElementById("nota4aluno4").value);

  mediaAluno4 = (nota1aluno4 + nota2aluno4 + nota3aluno4 + nota4aluno4) / 4;

  document.getElementById("nome4").innerHTML = nomeAluno4;
  document.getElementById("nota4").innerHTML =
    nota1aluno4 + ", " + nota2aluno4 + ", " + nota3aluno4 + ", " + nota4aluno4;
  document.getElementById("media4").innerHTML = mediaAluno4;

  if (mediaAluno4 >= 70) {
    situacao4.innerHTML = '<h6 style="color:#008800">' + "Aprovado!" + "</h6>";
  } else if (mediaAluno4 >= 50 && mediaAluno4 < 70) {
    situacao4.innerHTML = '<h6 style="color:#ffd500">' + "Recuperação!" + "</h6>";
  } else if (mediaAluno4 < 50) {
    situacao4.innerHTML = '<h6 style="color:#c22303">' + "Reprovado!" + "</h6>";
  }
}
function aluno5() {
  nomeAluno5 = document.getElementById("nomeAluno5").value;
  var nota1aluno5 = parseFloat(document.getElementById("nota1aluno5").value);
  var nota2aluno5 = parseFloat(document.getElementById("nota2aluno5").value);
  var nota3aluno5 = parseFloat(document.getElementById("nota3aluno5").value);
  var nota4aluno5 = parseFloat(document.getElementById("nota4aluno5").value);

  mediaAluno5 = (nota1aluno5 + nota2aluno5 + nota3aluno5 + nota4aluno5) / 4;

  document.getElementById("nome5").innerHTML = nomeAluno5;
  document.getElementById("nota5").innerHTML =
    nota1aluno5 + ", " + nota2aluno5 + ", " + nota3aluno5 + ", " + nota4aluno5;
  document.getElementById("media5").innerHTML = mediaAluno5;

  if (mediaAluno5 >= 70) {
    situacao5.innerHTML = '<h6 style="color:#008800">' + "Aprovado!" + "</h6>";
  } else if (mediaAluno5 >= 50 && mediaAluno5 < 70) {
    situacao5.innerHTML = '<h6 style="color:#ffd500">' + "Recuperação!" + "</h6>";
  } else if (mediaAluno5 < 50) {
    situacao5.innerHTML = '<h6 style="color:#c22303">' + "Reprovado!" + "</h6>";
  }
}

function media() {
mediaGeral = (mediaAluno1 + mediaAluno2 + mediaAluno3 + mediaAluno4 + mediaAluno5) / 5;
document.getElementById('media').innerHTML = 'Média geral da turma ' + mediaGeral;
}
function mediaInferior() {
    if (mediaAluno1 < mediaGeral) {
        document.getElementById('mediaInferior1').innerHTML = nomeAluno1 + ' teve desempenho inferior ao da turma.';
    } if (mediaAluno2 < mediaGeral) {
        document.getElementById('mediaInferior2').innerHTML = nomeAluno2 + ' teve desempenho inferior ao da turma.';
    } if (mediaAluno3 < mediaGeral) {
      document.getElementById('mediaInferior3').innerHTML = nomeAluno3 + ' teve desempenho inferior ao da turma.';
    } if (mediaAluno4 < mediaGeral) {
    document.getElementById('mediaInferior4').innerHTML = nomeAluno4 + ' teve desempenho inferior ao da turma.';
    }  if (mediaAluno5 < mediaGeral) {
    document.getElementById('mediaInferior5').innerHTML = nomeAluno5 + ' teve desempenho inferior ao da turma.';
  }
}

function limpar1() {
    document.getElementById('nomeAluno1').value = "";
    document.getElementById('nota1aluno1').value = "";
    document.getElementById('nota2aluno1').value = "";
    document.getElementById('nota3aluno1').value = "";
    document.getElementById('nota4aluno1').value = ""; 

    document.getElementById('nomeAluno2').value = "";
    document.getElementById('nota1aluno2').value = "";
    document.getElementById('nota2aluno2').value = "";
    document.getElementById('nota3aluno2').value = "";
    document.getElementById('nota4aluno2').value = ""; 
}
function limpar2() {
    document.getElementById('nomeAluno3').value = "";
    document.getElementById('nota1aluno3').value = "";
    document.getElementById('nota2aluno3').value = "";
    document.getElementById('nota3aluno3').value = "";
    document.getElementById('nota4aluno3').value = ""; 

    document.getElementById('nomeAluno4').value = "";
    document.getElementById('nota1aluno4').value = "";
    document.getElementById('nota2aluno4').value = "";
    document.getElementById('nota3aluno4').value = "";
    document.getElementById('nota4aluno4').value = ""; 

    document.getElementById('nomeAluno5').value = "";
    document.getElementById('nota1aluno5').value = "";
    document.getElementById('nota2aluno5').value = "";
    document.getElementById('nota3aluno5').value = "";
    document.getElementById('nota4aluno5').value = ""; 
}
function limpar3() {
    document.getElementById('media').innerHTML = "";
}
function limpar4() {
    document.getElementById('mediaInferior1').innerHTML = "";
    document.getElementById('mediaInferior2').innerHTML = "";
    document.getElementById('mediaInferior3').innerHTML = "";
    document.getElementById('mediaInferior4').innerHTML = "";
    document.getElementById('mediaInferior5').innerHTML = "";
}