export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  //console.log(botaoAbrir, botaoFechar, containerModal);
  if (botaoAbrir && botaoFechar && containerModal) {
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle("ativo");
      //console.log(event)
    }
    function cliqueForaModal(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }

    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", cliqueForaModal);
  }
}

/*

 OBSERVAÇÃO: O CÓDIGO ACIMA FOI ABREVIADO COM A FUNÇÃO TOGGLE O CÓDIGO ABAIXO NÃO.

if (botaoAbrir && botaoFechar && containerModal) {
  function abrirModal(event) {
    event.preventDefault();
    containerModal.classList.add("ativo");
    //console.log(event)
  }

  function fecharModal(event) {
    containerModal.classList.remove("ativo");
    //console.log(event)
  }
  function cliqueForaModal(event) {
    if (event.target === this) {
      fecharModal(event);
    }
  }

  botaoAbrir.addEventListener("click", abrirModal);
  botaoFechar.addEventListener("click", fecharModal);
  containerModal.addEventListener("click", cliqueForaModal);
}
}
*/
