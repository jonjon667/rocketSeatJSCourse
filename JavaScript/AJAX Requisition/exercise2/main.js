var input = document.querySelector('input[name=user]')
var container = document.querySelector('div[id=app]')
var btnSearch = document.querySelector('button[id=btnSearch')
var itemList = document.createElement('ul')
container.appendChild(itemList)
btnSearch.onclick = function (){
    var endereco =  'https://api.github.com/users/'+ input.value +'/repos'
    itemList.innerHTML = 'Carregando'
    axios.get(endereco)
        .then(function(response){
            console.log(response.data);
            itemList.innerHTML = '';
            for (repository in response.data) {
                listItem = document.createElement('li')
                console.log(repository)
                var repositoryName = document.createTextNode(response.data[repository].name)
                listItem.appendChild(repositoryName)
                itemList.appendChild(listItem)
                }  
            }
        )
        .catch(function(error) {
            itemList.innerHTML = 'Erro na requisição'
        })
    }