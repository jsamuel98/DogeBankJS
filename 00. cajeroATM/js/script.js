  let cuentas = [
    {nombre: "Samuel", cliente: "202201", pin: "0001", balance: 111},
    {nombre: "Samanta", cliente: "202202", pin: "0002", balance: 222},
    {nombre: "Karen", cliente: "202203", pin: "0003", balance: 333},
    {nombre: "Diana", cliente: "202204", pin: "0004", balance: 444},
    {nombre: "Alexa", cliente: "202205", pin: "0005", balance: 555},
];

  let user;
  let userIndex;
  let balance; 
  
  function login() {
    user = document.getElementById("account").value; /* Obtiene del documento html la informacion introducida en el elemento con el id "account" */
    let pwd = document.getElementById("pin").value; /* Obtiene del documento html la informacion introducida en el elemento con el id "pin" */
    let msg = document.getElementById("message");
    userIndex = cuentas.findIndex((element) => element.cliente === user); /* userIndex se define a traves de los datos que introducio el usuario, el sistema busca a que indice pertenece la cuenta y lo establece para obtener los datos de cada objeto en el arreglo */
  
    if (cuentas[userIndex] === undefined) {
      alert("No has ingresado un numero de cuenta valido, porfavor intenta de nuevo.")
    } else if (cuentas[userIndex].pin === pwd) {
      balance = Number(cuentas[userIndex].balance);   
      document.getElementById("saludo").innerHTML = "Hola, " + cuentas[userIndex].nombre + " <br> ¿Que operación vas a hacer hoy?"; 
      document.getElementById("msgMenu").classList.remove("d-none");
      document.getElementById("menu").classList.remove("d-none");
      document.getElementById("loginAccess").classList.add("d-none");
    } else {
      alert("La cuenta y el NIP no coinciden, intenta de nuevo.");
    }
  }
  
  function logout() {
    document.getElementById("menu").classList.add("d-none");
    document.getElementById("msgMenu").classList.add("d-none");
    document.getElementById("loginAccess").classList.remove("d-none");
    document.getElementById("montoRetiro").value = "";
    document.getElementById("montoDeposito").value = "";
    document.getElementById("message").innerHTML = "";
    document.getElementById("messageDeposito").innerHTML = "";
    document.getElementById("messageRetiro").innerHTML = "";
  }
  
  function displaySaldo() {
    document.getElementById("menu").classList.add("d-none");
    document.getElementById("viewConsulta").classList.remove("d-none");
    document.getElementById("saldo").innerHTML = "$ " + balance;
  }
  
  function displayRetiro() {
    document.getElementById("menu").classList.add("d-none");
    document.getElementById("viewRetiro").classList.remove("d-none");
  }
  
  function displayDeposito() {
    document.getElementById("menu").classList.add("d-none");
    document.getElementById("viewDeposito").classList.remove("d-none");
  }
  
  function regresar() {
    document.getElementById("menu").classList.remove("d-none");
    document.getElementById("viewConsulta").classList.add("d-none");
    document.getElementById("viewRetiro").classList.add("d-none");
    document.getElementById("viewDeposito").classList.add("d-none");
    document.getElementById("montoRetiro").value = "";
    document.getElementById("montoDeposito").value = "";
    document.getElementById("messageDeposito").innerHTML = "";
    document.getElementById("messageRetiro").innerHTML = "";
  }
  
  function hacerRetiro() {
    let montoRetiro = Number(document.getElementById("montoRetiro").value);
    if (document.getElementById("montoRetiro").value == "") {
      alert("Ingresa una monto valido.")
    } else if (balance - montoRetiro < 10) {
      alert("No puedes dejar tu cuenta con un saldo menor a $10, intenta retirar otra cantidad.");
      document.getElementById("montoRetiro").value = "";
    } else {
      balance -= montoRetiro;
      document.getElementById("messageRetiro").innerHTML = "Retiraste exitosamente la cantidad de " + montoRetiro + ". Tu nuevo saldo es de " + balance;
      document.getElementById("montoRetiro").value = "";
    }
  }
  
  function hacerDeposito() {
    let montoDeposito = Number(document.getElementById("montoDeposito").value);
    if (document.getElementById("montoDeposito").value == "") {
      alert("Ingresa monto valido a depositar.")
    } else if (balance + montoDeposito > 990) {
      alert("Tu cuenta no permite tener un saldo mayor a $990. Deposita otra cantidad o actualiza tu cuenta. ")
      document.getElementById("montoDeposito").value = "";
    } else {
      balance += montoDeposito;
      document.getElementById("messageDeposito").innerHTML =
        "Depositaste exitosamente la cantidad de " + montoDeposito + ". Tu nuevo saldo es de " + balance;
      document.getElementById("montoDeposito").value = "";
    }
  }
  