/*
  Nesse desafio você irá criar uma lista de ESTUDANTES e, cada
  estudante dentro dessa lista, deverá conter os seguintes dados:
    - nome.
    - nota da primeira prova.
    - nota da segunda prova.

  Depois de criada a lista:
    - Crie uma FUNÇÃO que irá calcular a média das notas de cada aluno;
    - Supondo que a média, para esse concurso é 7,
      verifique Se cada aluno obteve sucesso ou não em entrar no concurso e 
      mostre uma mensagem na tela.
*/


let studentList = [ /* lista de estudantes */
  {
    name: "Wilson Jr",
    noteOne: 9.78,
    noteTwo: 8
  },

  {
    name: "Joana",
    noteOne: 7,
    noteTwo: 6.9
  },

  {
    name: "Pulão",
    noteOne: 8.6,
    noteTwo: 10
  },

  {
    name: "Ronaldo",
    noteOne: 3.6,
    noteTwo: 8
  },
]

function averege(noteOne, noteTwo) { 
  return (noteOne + noteTwo) / 2
}

function printStudentAverege(student) {
  return `
   A média do(a) aluno(a)${student.name} é:
    ${averege(student.noteOne, student.noteTwo)}
  `
}


  for (let student of studentList) {
  let averegemessage = printStudentAverege(student)
  alert(averegemessage)

  if(averege(student.noteOne, student.noteTwo) >= 7) { 
    alert(`Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
  } else {
    alert(`Não foi dessa vez, ${student.name}! Tente novamente!`)
  }
}

