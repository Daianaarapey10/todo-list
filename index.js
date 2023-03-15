let newArray=[];
const input=document.getElementById("input-js");
const list = document.getElementById("list")


function addToDo(){ 
   let texto=input.value
   texto = texto.toLocaleLowerCase() //Coloca el texto en minuscula
   texto = texto[0].toLocaleUpperCase() + texto.substring(1) //1 coloca el texto en mayuscula - 2 toma a partir de la posicion que ponga hasta el final o donde yo quiera 
   if (!newArray.includes(texto)) {
      list.innerHTML += ` <li class="li-style"> ${texto} <button  class="button-delete" onclick="removeToDo(this, '${texto}')" id="delete">🗑️</button></li>`
      newArray.push(texto)
   } 
   cleaningInfo()

}

function cleaningInfo(){
    input.value = "" 
} 

function removeToDo(boton, texto){
    boton.parentElement.remove()
    newArray = newArray.filter(nombre => nombre !== texto)
    console.log(newArray, texto);
}

function deleteToDo(boton, texto){
    boton.removeChildren()
    newArray = [""]
    console.log(newArray, texto);
}