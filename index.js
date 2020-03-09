// Base a ser utilizada
const alunosDaEscola = [{ nome: "Henrique", notas: [], cursos: [], faltas: 5 }, { nome: "Edson", notas: [], cursos: [], faltas: 2 }, { nome: "Bruno", notas: [10, 9.8, 9.6], cursos: [], faltas: 0 }, { nome: "Guilherme", notas: [10, 9.8, 9.6], cursos: [{ nomeDoCurso: "Full Stack", dataMatricula: new Date }], faltas: 0 }, { nome: "Carlos", notas: [], cursos: [], faltas: 0 }, { nome: "Lucca", notas: [10, 9.8, 9.6], cursos: [{ nomeDoCurso: "UX", dataMatricula: new Date }], faltas: 0 }];


// implementação
function adicionarAluno(nomeDoAluno) {
    if (alunosDaEscola.push({ nome: nomeDoAluno, notas: [], cursos: [], faltas: 0 })) {
        console.log("O aluno foi inserido corretamente.")
    }

    else { console.log("Não foi possível inserir o aluno") }
}

adicionarAluno("AlunoTeste")

function listarAlunos() {
    console.log("LISTA DE ALUNOS");
    for (i = 0; i < alunosDaEscola.length; i++) {
        console.log("Nome do Aluno: " + alunosDaEscola[i].nome);
        console.log("Notas: " + alunosDaEscola[i].notas);
        console.log("Faltas: " + alunosDaEscola[i].faltas);

        if (alunosDaEscola[i].cursos.length > 0) {
            for (i2 = 0; i2 < alunosDaEscola[i].cursos.length; i2++) {
                let curso = alunosDaEscola[i].cursos[i2].nomeDoCurso;
                let dataDaMatricula = alunosDaEscola[i].cursos[i2].dataMatricula;
                console.log("--Cursos Matriculados--")
                console.log("Curso: " + curso)
                let meses = [, "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Julho", "Agorto", "Setembro", "Outubro", "Novembro", "Dezembro"]

                console.log("Data da matrícula: " + dataDaMatricula.getDay() + " de " + meses[dataDaMatricula.getMonth()] + " de " + dataDaMatricula.getFullYear())
            }


        }
        else {
            console.log("Não está matriculado em um curso")
        }
        console.log("------------------")
    }

}

listarAlunos()

function buscarAluno(nomeDoAluno) {
    let alunosNomes = []

    for (i = 0; i < alunosDaEscola.length; i++) {
        if (
            alunosDaEscola[i].nome == nomeDoAluno) {
            let cursosNum = alunosDaEscola[i].cursos.length
            if (
                cursosNum == 0) {
                cursosNum + 0
            }
            else {
                cursosNum + 1
            }

            alunosNomes.push(alunosDaEscola[i].nome + ", Notas: " + alunosDaEscola[i].notas + ", Número de cursos:" + cursosNum + ", Faltas: " + alunosDaEscola[i].faltas)
        }
        else { }

    }
    if (alunosNomes.length >= 1) { console.log("Foi encontrado o aluno de nome: " + alunosNomes) }
    else { console.log("Não foi encontrado um aluno com esse nome") }
}

buscarAluno("Guilherme")

function perguntaSeCadastrado(nomeDoAluno) {
    let matriculado = []
    for (i = 0; i < alunosDaEscola.length; i++) {

        if (alunosDaEscola[i].nome === nomeDoAluno) {
            matriculado.push(nomeDoAluno)
        }

        else { }
    }
    if (matriculado.length >= 1) {
        // console.log("Aluno matriculado")
        return true
    }
    else {
        return false
        // console.log("Não está matriculado")}
    }
}
perguntaSeCadastrado("Guilherme")

function matricularAluno(objetoAluno, nomeCurso) {

    if (perguntaSeCadastrado(objetoAluno.nome)) {
        // console.log("Aluno já cadastrado")
        //lista os nomes e procura o index do nome
        var nomes = []
        for (i = 0; i < alunosDaEscola.length; i++) {
            nomes.push(alunosDaEscola[i].nome)
            // console.log(nomes)
        }
        // console.log(objetoAluno.nome)
        let nomeDoAlunoObjeto = objetoAluno.nome
        let indexDoAluno = []
        for (i = 0; i < nomes.length; i++) {
            if (nomes[i] == nomeDoAlunoObjeto) {
                indexDoAluno.push(i)
            }
            else { }
        }

        var cursosDoAluno = alunosDaEscola[indexDoAluno].cursos
        if (cursosDoAluno.push({ nomeDoCurso: nomeCurso, dataMatricula: new Date })) {
            console.log("O aluno " + objetoAluno.nome + " foi cadastrado no curso: " + nomeCurso)
        }
        else {
            console.log("Não foi possível cadastrar o aluno")
        }


    }
    else { console.log("Favor cadastrar o aluno antes de matricular em um curso") }

}

matricularAluno({ nome: "Henrique", notas: [], cursos: [], faltas: 5 }, "cursoTeste")


function aplicarFalta(objetoAluno) {

    if (perguntaSeCadastrado(objetoAluno.nome)) {

        var nomes = []
        for (i = 0; i < alunosDaEscola.length; i++) {
            nomes.push(alunosDaEscola[i].nome)
        }

        let nomeDoAlunoObjeto = objetoAluno.nome
        var indexDoAluno = []
        for (i = 0; i < nomes.length; i++) {
            if (nomes[i] == nomeDoAlunoObjeto) {
                indexDoAluno.push(i)
            }
            else {

            }
        }

        var localCursos = alunosDaEscola[indexDoAluno].cursos
        var numCursos = localCursos.length
        console.log(localCursos)
        console.log(numCursos)

        if (numCursos < 1) {
            console.log("este aluno não está matriculado em um curso")
        }
        else {
            console.log("tem curso")

            let localFaltas = alunosDaEscola[indexDoAluno].faltas


            var soma = localFaltas + 1
            if (soma > localFaltas) {
                console.log("Foi adicionada uma falta ao aluno " + objetoAluno.nome + ", totalizando " + soma + " faltas")
            }
            else {
                console.log("Não foi possível aplicar a falta o aluno")
            }


        }

    }
    else { console.log("Favor cadastrar o aluno antes de aplicar falta") }
}

aplicarFalta({ nome: "Henrique", notas: [], cursos: [], faltas: 5 })

function aplicarNota(objetoAluno) {
    if (perguntaSeCadastrado(objetoAluno.nome)) {
        //ve se matriculado
        var nomes = []
        for (i = 0; i < alunosDaEscola.length; i++) {
            nomes.push(alunosDaEscola[i].nome)
        }

        var nomeDoAlunoObjeto = objetoAluno.nome
        var indexDoAluno = []
        for (i = 0; i < nomes.length; i++) {
            if (nomes[i] == nomeDoAlunoObjeto) {
                indexDoAluno.push(i)
            }
            else {
            }
        }

        var localCursos = alunosDaEscola[indexDoAluno].cursos
        var numCursos = localCursos.length

        if (numCursos < 1) {
            console.log("Este aluno não está matriculado em um curso")

        }
        else {
            // console.log("Este aluno está matriculado em curso(s)") 


            var localNotas = alunosDaEscola[indexDoAluno].notas


            var nota = 10

            if (localNotas.push(nota)) {
                console.log("O aluno " + objetoAluno.nome + " recebeu uma nota " + nota)
            }
            else {
                console.log("Não foi possível aplicar a nota o aluno")
            }


        }


    }
    else { console.log("Este aluno ainda não é cadastrado") }

}
aplicarNota({ nome: "Guilherme", notas: [], cursos: [], faltas: 5 })


function aprovarAluno(objetoAluno) {
    if (perguntaSeCadastrado(objetoAluno.nome)) {

        var nomes = []
        for (i = 0; i < alunosDaEscola.length; i++) {
            nomes.push(alunosDaEscola[i].nome)
        }

        var nomeDoAlunoObjeto = objetoAluno.nome
        var indexDoAluno = []
        for (i = 0; i < nomes.length; i++) {
            if (nomes[i] == nomeDoAlunoObjeto) {
                indexDoAluno.push(i)
            }
            else {
                   }
        }

        var localCursos = alunosDaEscola[indexDoAluno].cursos
        var numCursos = localCursos.length

        if (numCursos < 1) {
            console.log("Este aluno não está matriculado em um curso")

        }
        else {
            let localFaltas = alunosDaEscola[indexDoAluno].faltas

            if (localFaltas > 3) {
                console.log("Reprovado em faltas")
            }
            else {
                console.log("Aprovado em faltas")

            let localNotas = alunosDaEscola[indexDoAluno].notas
            // ter pelo menos média 7 em notas(reduce)
            if (localNotas.length==-1) {
                console.log("o aluno não possui notas cadastradas")
            }
            else {
                let somaDasNotas = localNotas.reduce(function (acumulador, numero) {
                    return acumulador + numero;
                });
                let quantidadeDeElementos = localNotas.length
                let media = somaDasNotas / quantidadeDeElementos

                // console.log(somaDasNotas)
                console.log(media)
                if (media >= 7) {
                    console.log("Média: " + media + " - aluno aprovado")
                }
                else { console.log("Média: " + media + " - aluno reprovado ") }
            }
        }
        }
    }

    else {
        console.log("Favor cadastrar o aluno antes de aplicar falta")
    }
}

aprovarAluno({ nome: "Guilherme", notas: [], cursos: [], faltas: 5 })