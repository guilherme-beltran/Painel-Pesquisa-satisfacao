class ModalEditar {
  constructor() {
    this.section = document.querySelector(".section_modal");
    this.overlay = document.querySelector(".overlay");
    this.closeBtn = document.querySelector(".close-btn");
    this.btnFinalizarAlteracao = document.querySelector(".btnFinalizarAlteracao");
    this.inputModal = document.querySelector(".section_modal input");
    this.btnEditores = document.querySelectorAll(".btnEditar");
    this.usuarioLogado = document.querySelector(".top .nome_usuario b").textContent;

    this.textoOriginal = "";
    this.perguntaAlterada = false;
    this.idCampo = "";

    this.btnEditores.forEach(btn => {
      btn.addEventListener("click", this.abrirModal.bind(this));
    });

    this.overlay.addEventListener("click", this.fecharModal.bind(this));

    this.closeBtn.addEventListener("click", () => {
      this.verificaAlteracaoPergunta(false);
      this.fecharModal();
    });

    this.btnFinalizarAlteracao.addEventListener("click", () => {
      this.verificaAlteracaoPergunta(true);
      this.fecharModal();
    });
  }

  abrirModal(event) {
    this.idCampo = event.target.parentElement.previousElementSibling.getAttribute("id");
    this.textoOriginal = event.target.parentElement.previousElementSibling.textContent;
    this.inputModal.value = this.textoOriginal;
    this.section.classList.add("active");

    const activeBtnEditar = document.querySelector(".activity-data a.btnEditar.active");
    if (activeBtnEditar) {
      activeBtnEditar.classList.remove("active");
    }
    event.target.classList.add("active");
  }

  fecharModal() {
    if (this.section.classList.contains("active")) {
      const novoTexto = this.inputModal.value;
      this.alterarPergunta(novoTexto);
      this.registrarLogAlteracao(novoTexto);
      this.section.classList.remove("active");
    }
  }

  registrarLogAlteracao(novoTexto) {
    if (!this.perguntaAlterada) {
      console.log('Nenhuma alteração feita.');
    } else {
      console.log("Id campo alterado: ", this.idCampo);
      console.log("Texto antigo: ", this.textoOriginal);
      console.log("Novo texto: ", novoTexto);
      console.log("Pergunta alterada? ", this.perguntaAlterada);
      console.log("Usuário que alterou: ", this.usuarioLogado);
    }
  }

  alterarPergunta(novoTexto) {
    if (this.perguntaAlterada) {
      const activeBtnEditar = document.querySelector(".activity-data a.btnEditar.active");
      if (activeBtnEditar) {
        const tr = activeBtnEditar.closest("tr");
        tr.querySelector("td:nth-child(2)").innerText = novoTexto;
      }
    }
  }

  verificaAlteracaoPergunta(valor) {
    this.perguntaAlterada = valor;
  }
}

// Instanciando a classe ModalEditar
const modalEditar = new ModalEditar();
