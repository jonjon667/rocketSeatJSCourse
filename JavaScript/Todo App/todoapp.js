


var container = document.querySelector('div[id=app]');
var btnAddTodo = document.createElement('button');
var list = document.createElement('ul')
var todoText = document.createElement('input');
todoText.placeholder = 'Digite um todo'
container.appendChild(list);
container.appendChild(btnAddTodo);
container.appendChild(todoText);
btnAddTodo.innerHTML = 'Adicionar';
btnAddTodo.onclick = function(){
    var listItem = document.createElement('li');
    var removeItem = document.createElement('a')
    removeItem.href = '#'
    removeItem.innerHTML = 'Remove'
    removeItem.onclick = function(){
        list.removeChild(listItem)
    }
    listItem.appendChild(document.createTextNode(todoText.value))
    listItem.appendChild(removeItem)
    list.appendChild(listItem)
    todoText.value = null
};