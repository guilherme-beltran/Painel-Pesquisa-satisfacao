class DarkMode {
    constructor() {
        this.body = document.querySelector("body");
        this.modeToggle = this.body.querySelector(".mode-toggle");
        this.sidebar = this.body.querySelector("nav");
        this.sidebarToggle = this.body.querySelector(".sidebar-toggle");

        this.boxTextColor = document.querySelectorAll(".text");
        this.boxNumberColor = document.querySelectorAll(".number");
        this.boxIconColor = document.querySelectorAll(".boxes .box i");
        this.textContentTable = document.querySelectorAll("td");
        this.textHeaderTable = document.querySelectorAll("th");

        this.nomeUsuario = document.querySelectorAll(".nome_usuario");
        this.dropDownSistemas = document.querySelectorAll(".select-btn");
        this.contentDropDownSistemas = document.querySelectorAll(".content");
        this.labelContent = document.querySelectorAll(".content .options");
        this.searchInput = document.querySelectorAll(".search input");
        
        this.modalBox = document.querySelectorAll(".modal-box, .section_modal.active .modal-box");
        this.titleModalBox = document.querySelectorAll(".modal-box h2");
        this.btnFechar = document.querySelectorAll("button.close-btn");

        this.iconUploadFile = document.querySelectorAll(".img-area i"); 
        this.textUploadFile = document.querySelectorAll(".img-area h3"); 

        let getMode = localStorage.getItem("mode");
        if (getMode && getMode === "dark") {
            this.body.classList.toggle("dark");
            this.updateColors();
        }

        let getStatus = localStorage.getItem("status");
        if (getStatus && getStatus === "close") {
            this.sidebar.classList.toggle("close");
        }

        this.modeToggle.addEventListener("click", () => {
            this.body.classList.toggle("dark");
            this.updateColors();
            if (this.body.classList.contains("dark")) {
                localStorage.setItem("mode", "dark");
            } else {
                localStorage.setItem("mode", "light");
            }
        });

        this.sidebarToggle.addEventListener("click", () => {
            this.sidebar.classList.toggle("close");
            if (this.sidebar.classList.contains("close")) {
                localStorage.setItem("status", "close");
            } else {
                localStorage.setItem("status", "open");
            }
        });
    }

    updateColors() {
        const isDarkMode = this.body.classList.contains("dark");
        const textColor = isDarkMode ? "var(--white)" : "var(--black)";
        const backgroundColor = isDarkMode ? "var(--black)" : "var(--white)";

        this.boxTextColor.forEach(element => (element.style.color = textColor));
        this.boxNumberColor.forEach(element => (element.style.color = textColor));
        this.boxIconColor.forEach(element => (element.style.color = textColor));
        this.textHeaderTable.forEach(element => (element.style.color = textColor));
        this.textContentTable.forEach(element => (element.style.color = textColor));
        this.nomeUsuario.forEach(element => (element.style.color = textColor));
        this.dropDownSistemas.forEach(element => {
            element.style.color = isDarkMode ? "var(--text-color)" : "var(--black)";
            element.style.background = backgroundColor;
        });
        this.modalBox.forEach(element => (element.style.background = backgroundColor));
        this.titleModalBox.forEach(element => (element.style.color = textColor));
        this.contentDropDownSistemas.forEach(element => (element.style.background = backgroundColor));
        this.labelContent.forEach(element => (element.style.color = textColor));
        this.searchInput.forEach(element => {
            element.style.color = isDarkMode ? "var(--text-color)" : "var(--black)";
            element.style.background = backgroundColor;
        });
        this.textUploadFile.forEach(element =>{ element.style.color = "var(--black)"});
        this.iconUploadFile.forEach(element =>{ element.style.color = "var(--black)"});
    }
}

const darkMode = new DarkMode();
