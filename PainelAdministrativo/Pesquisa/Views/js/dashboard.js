const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");
const boxTextColor = document.querySelectorAll(".text");
const boxNumberColor = document.querySelectorAll(".number");
const boxIconColor = document.querySelectorAll(".boxes .box i");

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