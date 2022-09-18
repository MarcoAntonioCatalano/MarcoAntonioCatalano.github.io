//const promedio = (n1 ,n2 ,n3 ,n4 ,n5)=>{
//let resultado = (n1 +n2 +n3 +n4 +n5) / 5 
//if (resultado>= 70) {
 //   console.log ("aprobado")
 //} else {
 //   console.log ("reprobado")
 //}
//}
//promedio (80, 90, 70, 75, 90)

//const myArray = ["puma", "adidas", "nike", "fila"];
 //console.log(myArray.splice (myArray.indexOf('nike'), 2));

 //let myArray = ["alo", "oi", "hola", "hello"];
 //delete myArray[0];
 //console.log(myArray);


 //Crear un arreglo con objetos y determinar si existe un valor determinado en las propiedades de los objetos.
 //let car = {
   //let brand = ('name, name1, name2')
   //name: "BMW"
   //name1: "Volvo"
   //name2: "Mercedes"
 //}
 //if (brand = "Other"){
 // console.log ("No se encontró el elemento")
 //} else {
  //// console.log ("Se encontró el elemento")
 //}
 //import "./styles.css";

/*let boton_uno = document.createElement("button");
let boton_dos = document.createElement("button");
let boton_tres = document.createElement("button");

let text_uno = document.createTextNode("fondo rojo");
let text_dos = document.createTextNode("tamaño div");
let text_tres = document.createTextNode("borde div");

boton_uno.appendChild(text_uno);
boton_dos.appendChild(text_dos);
boton_tres.appendChild(text_tres);

boton_uno.addEventListener("click", function () {
  let titulo = document.createElement("h1");
  let h1 = document.createTextNode("¡Rosario!");
  titulo.setAttribute("id", "titulo");
  titulo.appendChild(h1);
  console.log(titulo);

  document.body.appendChild(titulo);
  titulo.addEventListener("mouseover", () => {
    titulo.style.backgroundColor = "red";
  });
  titulo.addEventListener("copy", () => {
    alert("texto copiado");
  });
  titulo.addEventListener("mouseout", () => {
titulo.style.backgroundColor = "white";
  });
});

boton_dos.addEventListener("click", (e) => {
  let parrafo = document.createElement("p");
  parrafo.innerHTML = "¡Santa Fe!";
  document.body.appendChild(parrafo);
  parrafo.addEventListener("mouseover", () => {
    parrafo.style.fontSize = "45px";        
  });
});

boton_tres.addEventListener("click", (e) => {
  let borde = document.createElement("p")
  borde.innerHTML = "Argentina";
  document.body.appendChild(borde);
    borde.style.border = "thick solid lightblue";
});

document.body.appendChild(boton_uno);
document.body.appendChild(boton_dos);
document.body.appendChild(boton_tres);*/
let inputField = document.getElementById('nombre')
let boton = document.querySelector('button')
let data = JSON.parse(localStorage.getItem('nombres'))
let nombresArray = data !== [] ? data : []
let nombre = ''
inputField.addEventListener('change', function () {
    nombre = inputField.value
})
boton.addEventListener('click', function () {
    nombresArray.push(nombre)
    localStorage.setItem('nombres', JSON.stringify(nombresArray))
})
let lista = document.createElement('ul')
const crearLista = () => {
    data.forEach((e) => {
        let item = document.createElement('li')
        item.innerText = e
        lista.appendChild(item)
    })
}
crearLista()
document.body.appendChild(lista)