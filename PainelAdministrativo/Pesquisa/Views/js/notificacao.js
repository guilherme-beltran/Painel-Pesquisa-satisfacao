const notifications = document.querySelector(".notifications");
const buttons = document.querySelectorAll(".manipularForm .btnSalvar");

const toastDetails = {
  timer: 5000,
  success: {
    icon: "fa-circle-check",
    text: "Alterações salvas com sucesso!.",
  },
  error: {
    icon: "fa-circle-xmark",
    text: "Erro: Não foi possível salvar as alterações.",
  },
  warning: {
    icon: "fa-triangle-exclamation",
    text: "Atenção: Alguma coisa precisa de atenção.",
  },
  info: {
    icon: "fa-circle-info",
    text: "Info: Informação importante.",
  },
};

const removeToast = (toast) => {
  toast.classList.add("hide");
  if (toast.timeoutId) clearTimeout(toast.timeoutId); 
  setTimeout(() => toast.remove(), 500);
};

const createToast = (id) => {
  
  const { icon, text } = toastDetails[id];
  const toast = document.createElement("li"); 
  toast.className = `toast ${id}`; 
 
  toast.innerHTML = `<div class="column">
                         <i class="fas ${icon}"></i>
                         <span>${text}</span>
                      </div>
                      <i class="fas fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
  notifications.appendChild(toast); 

  toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
};

buttons.forEach((btn) => {
  btn.addEventListener("click", () => createToast(btn.id));
});
