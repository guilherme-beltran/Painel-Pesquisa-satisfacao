const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");
const boxTextColor = document.querySelectorAll(".text");
const boxNumberColor = document.querySelectorAll(".number");
const boxIconColor = document.querySelectorAll(".boxes .box i");
const textContentTable = document.querySelectorAll("td");
const textHeaderTable = document.querySelectorAll("th");
const nomeUsuario = document.querySelectorAll(".nome_usuario");
const dropDownSistemas = document.querySelectorAll(".select-btn");
const textBtnEditar = document.querySelectorAll("a.btnEditar");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
        boxTextColor.forEach((element) =>{
            element.style.color = "var(--white)";
        });
        boxNumberColor.forEach((element) =>{
            element.style.color = "var(--white)";
        });
        boxIconColor.forEach((element) =>{
            element.style.color = "var(--white)";
        });
        textHeaderTable.forEach((element) =>{
            element.style.color = "var(--white)";
        });
        textContentTable.forEach((element) =>{
            element.style.color = "var(--white)";
        });
        nomeUsuario.forEach((element) =>{
            element.style.color = "var(--white)";
        });
        dropDownSistemas.forEach((element) =>{
            element.style.color = "var(--text-color)";
            element.style.background = "var(--black)";
        });
        // textBtnEditar.forEach((element) =>{
        //     element.style.color = "var(--white)";
        // });
    }else{
        localStorage.setItem("mode", "light");
        boxTextColor.forEach((element) =>{
            element.style.color = "var(--black)";
        });
        boxNumberColor.forEach((element) =>{
            element.style.color = "var(--black)";
        });
        boxIconColor.forEach((element) =>{
            element.style.color = "var(--black)";
        });
        textHeaderTable.forEach((element) =>{
            element.style.color = "var(--black)";
        });
        textContentTable.forEach((element) =>{
            element.style.color = "var(--black)";
        });
        nomeUsuario.forEach((element) =>{
            element.style.color = "var(--black)";
        });
        dropDownSistemas.forEach((element) =>{
            element.style.color = "var(--black)";
            element.style.background = "var(--white)";
        });
        // textBtnEditar.forEach((element) =>{
        //     element.style.color = "var(--black)";
        // });
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
});

//Combo Box

 const wrapper = document.querySelector(".wrapper"),
            selectBtn = wrapper.querySelector(".select-btn"),
            searchInp = wrapper.querySelector("input"),
            options = wrapper.querySelector(".options");

        let countries = ["Pesquisa de satisfação", "Reserve-me", "Parquinho", "Landing Page"];

        function addCountry(selectedCountry) {
            options.innerHTML = "";
            countries.forEach(country => {
                let isSelected = country == selectedCountry ? "selected" : "";
                let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
                options.insertAdjacentHTML("beforeend", li);
            });
        }
        addCountry();

        function updateName(selectedLi) {
            searchInp.value = "";
            addCountry(selectedLi.innerText);
            wrapper.classList.remove("active");
            selectBtn.firstElementChild.innerText = selectedLi.innerText;
        }

        searchInp.addEventListener("keyup", () => {
            let arr = [];
            let searchWord = searchInp.value.toLowerCase();
            arr = countries.filter(data => {
                return data.toLowerCase().startsWith(searchWord);
            }).map(data => {
                let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
                return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
            }).join("");
            options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Sistema não encontrado</p>`;
        });

        selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));

//Modal
const btnEditar1 = document.querySelector(".btnEditar.pergunta1");
  const btnEditar2 = document.querySelector(".btnEditar.pergunta2");
  const btnEditar3 = document.querySelector(".btnEditar.pergunta3");
  const btnEditar4 = document.querySelector(".btnEditar.pergunta4");
  const btnEditar5 = document.querySelector(".btnEditar.pergunta5");

  const section = document.querySelector(".section_modal");
  const overlay = document.querySelector(".overlay");
  const closeBtn = document.querySelector(".close-btn");

  const perguntas = document.querySelectorAll(".activity-data td:nth-child(2)");

  const btnFinalizarAlteracao = document.querySelector(".btnFinalizarAlteracao");
  const inputModal = document.querySelector(".section_modal input");

  let textoOriginal;

  function abrirModal(event) {
    textoOriginal = event.target.parentElement.previousElementSibling.innerText;
    inputModal.value = textoOriginal;
    section.classList.add("active");

    // Adiciona a classe "active" ao botão "Editar" clicado
    const activeBtnEditar = document.querySelector(".activity-data a.btnEditar.active");
    if (activeBtnEditar) {
      activeBtnEditar.classList.remove("active");
    }
    event.target.classList.add("active");
  }

  function fecharModal() {
    if (section.classList.contains("active")) { // Verifica se o modal está ativo
      const novoTexto = inputModal.value;
      console.log("Texto antigo: ", textoOriginal);
      console.log("Novo texto: ", novoTexto);

      // Atualizar o texto na segunda coluna da tabela com o novo texto
      const activeBtnEditar = document.querySelector(".activity-data a.btnEditar.active");
      if (activeBtnEditar) {
        const tr = activeBtnEditar.closest("tr");
        tr.querySelector("td:nth-child(2)").innerText = novoTexto;
      }

      section.classList.remove("active");
    }
  }

  btnEditar1.addEventListener("click", abrirModal);
  btnEditar2.addEventListener("click", abrirModal);
  btnEditar3.addEventListener("click", abrirModal);
  btnEditar4.addEventListener("click", abrirModal);
  btnEditar5.addEventListener("click", abrirModal);
  overlay.addEventListener("click", fecharModal);
  closeBtn.addEventListener("click", fecharModal);

  btnFinalizarAlteracao.addEventListener("click", fecharModal);


// const btnEditar1 = document.querySelector(".btnEditar.pergunta1");
// const btnEditar2 = document.querySelector(".btnEditar.pergunta2");
// const btnEditar3 = document.querySelector(".btnEditar.pergunta3");
// const btnEditar4 = document.querySelector(".btnEditar.pergunta4");
// const btnEditar5 = document.querySelector(".btnEditar.pergunta5");

// const section = document.querySelector(".section_modal");
// const overlay = document.querySelector(".overlay");
// const closeBtn = document.querySelector(".close-btn");


// const perguntas = document.querySelectorAll(".activity-data td:nth-child(2)");

// const btnFinalizarAlteracao = document.querySelector(".btnFinalizarAlteracao");
// const inputModal = document.querySelector(".section_modal input");

// function abrirModal(event) {
//   const pergunta = event.target.closest("tr").querySelector("td:nth-child(2)").innerText;
//   inputModal.value = pergunta;
//   section.classList.add("active");
// }

// function fecharModal() {
//   section.classList.remove("active");
// }

// btnEditar1.addEventListener("click", abrirModal);
// btnEditar2.addEventListener("click", abrirModal);
// btnEditar3.addEventListener("click", abrirModal);
// btnEditar4.addEventListener("click", abrirModal);
// btnEditar5.addEventListener("click", abrirModal);
// overlay.addEventListener("click", fecharModal);
// closeBtn.addEventListener("click", fecharModal);
// btnFinalizarAlteracao.addEventListener("click", fecharModal);
