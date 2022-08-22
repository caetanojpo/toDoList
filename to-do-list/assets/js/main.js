function appListaTarefas () {
const txt = document.querySelector('.txt');
const btn = document.querySelector('.btn-add-tarefa')
const tarefas = document.querySelector('.tarefas');
const apagar = document.querySelector('.apagar');


txt.addEventListener('keypress', function(e){
    if (e.keyCode === 13) {
        if (!txt.value) return;
        criaTarefa(txt.value);
    }
});

document.addEventListener('click', function(e) {
    const el = e.target;
    if (el.classList.contains('btn-add-tarefa')) {
        if (!txt.value) return;
        criaTarefa(txt.value);
    }
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvaTarefa();
}
});

function criaBotaoApagar(li) {
    li.innerHTML += ' ';
    const apagar = document.createElement('button');
    apagar.setAttribute('class', 'apagar');
    apagar.innerHTML = 'erase';
    li.appendChild(apagar);
}

function limpaInput () {
    txt.value = '';
    txt.focus();
}

function criaTarefa (texto) {
    const li = criaLi();
    li.setAttribute('class', 'lista');
    li.innerText = texto;
    tarefas.appendChild(li);
    criaBotaoApagar(li);
    limpaInput();
    salvaTarefa();
}

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function salvaTarefa () {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace ('erase','').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON);
}

function recuperaTarefas (){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
recuperaTarefas ();
};

/* DARK MODE */

function appDarkMode() {
    const btn = document.querySelector(".icon")
    const container = document.querySelector(".container")

    btn.addEventListener('click', () => {
        container.classList.toggle('dark');
       

       const bg = document.querySelector('.body');
       bg.classList.toggle('dark');


    }); 
}

appListaTarefas ();
appDarkMode();
