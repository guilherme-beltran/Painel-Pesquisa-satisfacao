const selectImageButtons = document.querySelectorAll('.select-image');
const inputFileLogo = document.querySelector('#file_logo');
const inputFileBackground = document.querySelector('#file_background');
const imgAreas = document.querySelectorAll('.img-area');

function handleImageSelection(inputFile, imgArea) {
  const image = inputFile.files[0];
  if (image) {
    console.log("Caminho do arquivo adicionado:", inputFile.value);
    if (image.size < 2000000) {
      const reader = new FileReader();
      reader.onload = () => {
        const allImg = imgArea.querySelectorAll('img');
        allImg.forEach(item => item.remove());
        const imgUrl = reader.result;
        const img = document.createElement('img');
        img.src = imgUrl;
        imgArea.appendChild(img);
        imgArea.classList.add('active');
        imgArea.dataset.img = image.name;
      };
      reader.readAsDataURL(image);
    } else {
      alert("O tamanho da imagem deve ser inferior a 2MB");
    }
  }
}

// Função para lidar com o evento de arrastar e soltar
function handleDrop(event, imgArea) {
    event.preventDefault();
  
    if (event.dataTransfer.items) {
      const file = event.dataTransfer.items[0].getAsFile();
      inputFileLogo.files = event.dataTransfer.files; // Atualiza o input file com o arquivo arrastado
      handleImageSelection(inputFileLogo, imgArea); // Chama a função de seleção de imagem
    }
  }
  
  // Evento de arrastar e soltar
  imgAreas.forEach(imgArea => {
    imgArea.addEventListener('dragover', event => event.preventDefault());
    imgArea.addEventListener('drop', event => handleDrop(event, imgArea));
  });
  

selectImageButtons.forEach(btn => {
  btn.addEventListener('click', function () {
    const inputFile = this.parentElement.querySelector('input[type="file"]');
    const imgArea = this.parentElement.querySelector('.img-area');
    inputFile.click();
  });
});

inputFileLogo.addEventListener('change', function () {
  const imgArea = this.parentElement.querySelector('.img-area');
  handleImageSelection(this, imgArea);
});

inputFileBackground.addEventListener('change', function () {
  const imgArea = this.parentElement.querySelector('.img-area');
  handleImageSelection(this, imgArea);
});
