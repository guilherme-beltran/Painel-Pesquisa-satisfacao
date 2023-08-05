window.addEventListener('DOMContentLoaded', function () {
    let body = document.querySelector('body');
    let boxSigin = document.querySelector('.box.sigin');
    let boxForgotPassword = document.querySelector('.box.forgotPassword');
  
    function updateVisibility() {
      if (body.classList.contains('slide')) {
        boxSigin.style.visibility = 'visible';
        boxForgotPassword.style.visibility = 'hidden';
      } else {
        boxSigin.style.visibility = 'hidden';
        boxForgotPassword.style.visibility = 'visible';
      }
    }
  
    updateVisibility();
  
    let btnSiginList = document.querySelectorAll('.btnSigin');
    btnSiginList.forEach(function (btn) {
      btn.addEventListener('click', function () {
        body.classList.remove('slide');
        updateVisibility();
      });
    });
  
    let btnEsqueciSenhaList = document.querySelectorAll('.btnEsqueciSenha');
    btnEsqueciSenhaList.forEach(function (btn) {
      btn.addEventListener('click', function () {
        body.classList.add('slide');
        updateVisibility();
      });
    });
  });
  
//   Botão

const button = document.querySelector(".button");
// const h2 = document.querySelector(".form.forgotPasswordForm h2");
// const btnSigin = document.querySelector(".form.forgotPasswordForm .btnSigin");

const btnTl = new TimelineMax({
  paused: true
  //Caso queira tornar invisivel o botão de logar quando enviar o e-mail:
  // onStart: () => {
  //   // Oculta o h2 e o btnSigin assim que a animação do botão começar
  //   h2.style.visibility = 'hidden';
  //   btnSigin.style.visibility = 'hidden';
  // }
});

const animateButton = btnTl
  .to(".button", 0.2, { height: 4, background: "var(--light)" })
  .to(".loader", 1.35, { width: "100%" }, "loader")
  .to(
    ".button",
    0.2,
    {
      height: 35,
      background: "var(--teal)",
      color: "var(--white)",
      lineHeight: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '15px'
    },
    "loader+=4"
  )
  .to(".loader", 0, { alpha: 0 }, "loader+=3.5")
  .add(() => {
    // Remove o conteúdo atual do botão
    button.innerHTML = '';

    button.textContent = "E-mail enviado!";

    // Cria um elemento de imagem
    const image = document.createElement('img');
    image.src = 'Views/img/sucesso.png';
    image.alt = 'Sucesso';
    image.style.width = '25px';
    image.style.height = '25px';

    // Adiciona a imagem ao botão
    button.appendChild(image);
    
  })
  .delay(1);

  button.addEventListener("click", () => {
    const emailInput = document.getElementById("txtEmail");
    const email = emailInput.value.trim();
    const toast = document.querySelector(".toast");
    const closeIcon = document.querySelector(".close");
    const progress = document.querySelector(".progress");
    const tituloNotif = document.querySelector('.text-1');
    const textoNotif = document.querySelector('.text-2');
    let timer1, timer2;
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (email === '') {
      tituloNotif.textContent = 'Atenção';
      textoNotif.textContent = 'Nenhum e-mail foi informado.';
      toast.classList.add("active");
      progress.classList.add("active");
  
      timer1 = setTimeout(() => {
        toast.classList.remove("active");
      }, 5000);
  
      timer2 = setTimeout(() => {
        progress.classList.remove("active");
      }, 5300);
    } else if (!emailRegex.test(email)) {
      tituloNotif.textContent = 'Atenção';
      textoNotif.textContent = 'Informe um e-mail válido.';
      toast.classList.add("active");
      progress.classList.add("active");
  
      timer1 = setTimeout(() => {
        toast.classList.remove("active");
      }, 5000);
  
      timer2 = setTimeout(() => {
        progress.classList.remove("active");
      }, 5300);
    } else {
      animateButton.play();
    }
  });
  
  // closeIcon.addEventListener("click", () => {
  //   toast.classList.remove("active");
  
  //   setTimeout(() => {
  //     progress.classList.remove("active");
  //   }, 300);
  
  //   clearTimeout(timer1);
  //   clearTimeout(timer2);
  // });