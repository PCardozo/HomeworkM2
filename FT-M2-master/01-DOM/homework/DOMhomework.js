
// Tu codigo acá:
var toDoItems=[];
// Tu código acá:
var thatSpan= document.getElementById('createdBy');
thatSpan.innerHTML='Aplicación creada por Pablo C';

function ToDo (description) {
  // Tu código acá:
  this.description=description;
  this.complete=false;
}
// Tu código acá:
ToDo.prototype.completeToDo = function(){
  this.complete=true;
}





function buildToDo(todo, index) {
  // Tu código acá:
  let toDoShell = document.createElement('div');
  toDoShell.className='toDoShell';
  let CHECCBOX=document.createElement('input');
  CHECCBOX.type="checkbox";
  CHECCBOX.id=index;
  CHECCBOX.addEventListener('click',completeToDo);
  CHECCBOX.className='completeCheckbox';
  let toDoText = document.createElement('span');
  console.log('building todo item with xx'+todo.description+' xx as description and '+index+' as index');
  toDoText.innerHTML=todo.description;
  if (todo.complete){
    CHECCBOX.checked=true;
  }
  
  toDoShell.appendChild(toDoText);
  toDoShell.appendChild(CHECCBOX);
  return toDoShell;
}

function buildToDos(toDos) {
  // Tu código acá:
  console.log('log desde func buildToDos')
  let response= toDos.map(buildToDo)
  console.log(response)
  return response;
}

function displayToDos() {
  // Tu código acá:
  let toDoContainer = document.getElementById('toDoContainer');
  toDoContainer.innerHTML='';
  let nashe = buildToDos(toDoItems);
  for (let i = 0; i < nashe.length; i++) {
    toDoContainer.appendChild(nashe[i]);
    console.log('append '+i+'...');
  }
}


function addToDo() {
  // Tu código acá:
  let input = document.getElementById('toDoInput');
  let niu = new ToDo(input.value);
  toDoItems.push(niu);
  input.value='';
  displayToDos();
}

// Tu código acá:
let sam = document.getElementById('addButton');
sam.addEventListener('click',addToDo);


function completeToDo(event) {
  // DESCOMENTAR LA SIGUIENTE LINEA
  const index = event.target.id;
  // Tu código acá:
  toDoItems[index].completeToDo();
  displayToDos();
}


// Una vez que llegaste a este punto verificá que todos los tests pasen


// **********************************************EXTRA CREDITOS:********************************************** //

/*    Investigá sobre el tipo 'checkbox' del elemento input y realizar lo siguiente en la función 'buildToDo':
        a) Crer un checkbox en la función 'buildToDo'
        b) Asignarle como id a dicho checkbox el valor del index y quitar el id del index de toDoText
        c) Agregarle al checkbox el 'click' event listener de completeToDo y quitárle el event listener a toDoText
        d) Asignarle la clase 'completeCheckbox' al checkbox
        e) Dentro del bloque 'if' de la función buildToDo, si es true, setear el atributo 'checked' en true en el checkbox
        f) Agregar el checkbox sobre el elemento 'toDoShell'
*/
// ********************************************** ----------- ********************************************** //


// Acá debes insertar la llamada a 'displayToDos'
displayToDos(toDoItems);

// ---------------------------- NO CAMBIES NADA DE ACÁ PARA ABAJO ----------------------------- //
if (typeof module !== 'undefined') {
  module.exports = {
    toDoItems: toDoItems,
    ToDo: ToDo,
    buildToDos: buildToDos,
    buildToDo: buildToDo,
    completeToDo: completeToDo,
    displayToDos: displayToDos,
    addToDo: addToDo
  };
}



















