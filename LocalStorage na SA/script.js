function enviarObjeto(){
let marca = document.getElementById("marca").value
let modelo = document.getElementById("modelo").value
let ano = document.getElementById("ano").value


console.log(`${marca} & ${modelo} & ${ano}`)

const obj = {
    marca: marca,
    modelo: modelo,
    ano: ano
}

localStorage.setItem('carro', JSON.stringify(obj));

}