function mudarnome() {
    const inputNome = document.getElementById("inputnome");


  localStorage.setItem("nome", inputNome.value);

}
alert("Bem-vindo, " + localStorage.getItem("nome") + "!");
