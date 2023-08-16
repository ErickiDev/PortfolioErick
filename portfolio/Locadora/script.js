function validationForm() {
  let validationCod = document.forms["register"]["cod"].value;
  let validationTitle = document.forms["register"]["title"].value;
  let validationDirector = document.forms["register"]["director"].value;
  let validationDate = document.forms["register"]["date"].value;
  let validationActor = document.forms["register"]["actor"].value;
  let validationIMDb = document.forms["register"]["imdb"].value;
  let validationRadio = document.forms["register"]["radio"].value;

  if (validationCod == "") {
    alert("O Código deve ser preenchido");
    return false;
  }
  if (validationTitle == "") {
    alert("O titulo deve ser preenchdido");
    return false;
  }
  if (validationDirector == "") {
    alert("O nome do diretor precisa ser preenchido");
    return false;
  }
  if (validationDate == "") {
    alert("A data deve ser preenchida");
    return false;
  }
  if (validationActor == "") {
    alert("O nome do ator/atriz principal deve ser preenchido");
    return false;
  }
  if (validationIMDb == "") {
    alert("A nota IMDb deve ser preenchida");
    return false;
  }
  if (validationRadio == "") {
    alert("O gênero deve ser preenchido");
    return false;
  }
  console.log("A validação ocorreu de forma correta");
}

function insert() {
  let cod = document.forms["register"]["cod"].value;
  let title = document.forms["register"]["title"].value;
  let director = document.forms["register"]["director"].value;
  let date = document.forms["register"]["date"].value;
  let actor = document.forms["register"]["actor"].value;
  let imdb = document.forms["register"]["imdb"].value;
  let radio = document.forms["register"]["radio"].value;

  let insert = window.document.getElementById("insertRow");

  insert.innerHTML = `
  <th scope='row'>${cod}</th>
  <td>${title}</td>
  <td>${director}</td>
  <td>${date}</td>
  <td>${radio}</td>
  <td>${actor}</td>
  <td>${imdb}</td>
  
  `;
}
