 
    let calculoFeito = false;
  
    function calcularMicroplasticos() {
      if (calculoFeito) {
        const aviso = document.getElementById("mensagemBloqueio");
        aviso.classList.remove("d-none");
        aviso.innerHTML = "⚠️ Você já usou a calculadora.<br>📲 Faça um plano para obter acesso ilimitado.";
        return;
      }
  
      const agua = parseFloat(document.getElementById("agua").value) || 0;
      const peixe = parseFloat(document.getElementById("peixe").value) || 0;
      const ar = parseFloat(document.getElementById("ar").value) || 0;
      const sal = parseFloat(document.getElementById("sal").value) || 0;
      const bebida = parseFloat(document.getElementById("bebida").value) || 0;
      const refeicao = parseFloat(document.getElementById("refeicao").value) || 0;
  
      const microAgua = agua * 10;
      const microPeixe = peixe / 10;
      const microAr = ar * 0.83;
      const microSal = sal * 0.5;
      const microBebida = bebida * 15;
      const microRefeicao = refeicao * 5;
  
      const totalDia = microAgua + microPeixe + microAr + microSal + microBebida + microRefeicao;
      const totalSemana = totalDia * 7;
  
      const resultado = document.getElementById("resultado");
      resultado.classList.remove("d-none");
      resultado.innerHTML = `
        📅 <strong>Estimativa diária:</strong> ${totalDia.toFixed(2)} partículas<br>
        🗓️ <strong>Estimativa semanal:</strong> ${totalSemana.toFixed(2)} partículas<br><br>
        <small><i><strong>Essas são estimativas médias baseadas em estudos científicos.</strong></i></small><br><br>
        <strong>🔒 Para continuar acompanhando sua exposição, assine um plano e tenha acesso total!</strong>
      `;
  
      document.querySelectorAll("input").forEach(input => input.disabled = true);
      const botao = document.getElementById("botao");
      botao.disabled = true;
      botao.innerText = "Cálculo realizado";
      botao.classList.remove("btn-elegant");
      botao.classList.add("btn-secondary");
     
      calculoFeito = true;
    }
  