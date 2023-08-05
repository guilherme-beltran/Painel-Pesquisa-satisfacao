class ComboBoxSistemas {
    constructor() {
        this.wrapperSistema = document.querySelector(".sistemas .wrapper.sistemas");
        this.selectBtnSistema = this.wrapperSistema.querySelector(".sistemas .wrapper.sistemas .select-btn");
        this.searchInpSistema = this.wrapperSistema.querySelector(".sistemas .wrapper.sistemas .content input");
        this.optionsSistema = this.wrapperSistema.querySelector(".options");
        this.systems = ["Pesquisa de satisfação", "Reserva", "Parquinho", "Landing Page"];

        this.addSystem();

        this.searchInpSistema.addEventListener("keyup", () => {
            this.filterAndRenderOptions();
        });

        this.selectBtnSistema.addEventListener("click", () => {
            this.wrapperSistema.classList.toggle("active");
        });
    }

    addSystem(selectedCountry) {
        this.optionsSistema.innerHTML = "";
        this.systems.forEach(country => {
            let isSelected = country == selectedCountry ? "selected" : "";
            let li = `<li onclick="updateSystem(this)" class="${isSelected}">${country}</li>`;
            this.optionsSistema.insertAdjacentHTML("beforeend", li);
        });
    }

    filterAndRenderOptions() {
        let arr = [];
        let searchWord = this.searchInpSistema.value.toLowerCase();
        arr = this.systems.filter(data => {
            return data.toLowerCase().startsWith(searchWord);
        }).map(data => {
            let isSelected = data == this.selectBtnSistema.firstElementChild.innerText ? "selected" : "";
            return `<li onclick="updateSystem(this)" class="${isSelected}">${data}</li>`;
        }).join("");
        this.optionsSistema.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Sistema não encontrado</p>`;
    }
}

function updateSystem(selectedLi) {
    comboSistemas.searchInpSistema.value = "";
    comboSistemas.addSystem(selectedLi.innerText);
    comboSistemas.wrapperSistema.classList.remove("active");
    comboSistemas.selectBtnSistema.firstElementChild.innerText = selectedLi.innerText;
}


const comboSistemas = new ComboBoxSistemas();
