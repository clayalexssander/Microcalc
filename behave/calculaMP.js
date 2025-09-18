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

  // Fatores de conversão baseados em pesquisas científicas
  const microAgua = agua * 39; // Mason et al. (2018) - água da torneira
  const microPeixe = peixe * 1.5; // Van Cauwenberghe & Janssen (2014)
  const microAr = ar * 9.3; // Zhang et al. (2020) - ambiente urbano
  const microSal = sal * 7; // Yang et al. (2015) - sal marinho
  const microBebida = bebida * 94; // Mason et al. (2018) - água engarrafada
  const microRefeicao = refeicao * 5; // Cox et al. (2019)

  const totalDia = microAgua + microPeixe + microAr + microSal + microBebida + microRefeicao;
  const totalSemana = totalDia * 7;
  const totalMes = totalDia * 30;
  const totalAno = totalDia * 365;

  // Média global baseada em Cox et al. (2019) - ~100,000 partículas/ano
  const mediaGlobal = 100000;
  const percentualComparacao = Math.min(100, (totalAno / mediaGlobal) * 100);

  const resultado = document.getElementById("resultado");
  resultado.classList.remove("d-none");
  resultado.innerHTML = `
    <h4 class="alert-heading">📊 Resultado da Sua Exposição</h4>
    <p>
      📅 <strong>Estimativa diária:</strong> ${Math.round(totalDia)} partículas<br>
      🗓️ <strong>Estimativa semanal:</strong> ${Math.round(totalSemana)} partículas<br>
      📈 <strong>Estimativa anual:</strong> ${Math.round(totalAno)} partículas
    </p>
    <hr>
    <p class="mb-1"><strong>Comparação com a média global anual (${mediaGlobal.toLocaleString()} partículas):</strong></p>
    <div class="progress">
      <div class="progress-bar bg-${percentualComparacao > 75 ? 'danger' : percentualComparacao > 50 ? 'warning' : 'info'}" 
           role="progressbar" style="width: ${percentualComparacao}%;" 
           aria-valuenow="${percentualComparacao}" aria-valuemin="0" aria-valuemax="100">
        ${percentualComparacao.toFixed(1)}%
      </div>
    </div>
    <p class="mt-2"><strong>🔒 Para continuar acompanhando sua exposição, assine um plano e tenha acesso total!</strong></p>
  `;

  // Detalhes do cálculo
  const detalhes = document.getElementById("detalhesCalculo");
  detalhes.classList.remove("d-none");
  detalhes.innerHTML = `
    <h5>🔍 Detalhes do Cálculo</h5>
    <table class="table table-sm">
      <thead>
        <tr>
          <th>Fonte</th>
          <th>Quantidade</th>
          <th>Partículas</th>
          <th>Fator</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Água</td>
          <td>${agua} L/dia</td>
          <td>${Math.round(microAgua)}</td>
          <td>39 partículas/L</td>
        </tr>
        <tr>
          <td>Peixe/frutos do mar</td>
          <td>${peixe} g/dia</td>
          <td>${Math.round(microPeixe)}</td>
          <td>1,5 partículas/g</td>
        </tr>
        <tr>
          <td>Ar urbano</td>
          <td>${ar} h/dia</td>
          <td>${Math.round(microAr)}</td>
          <td>9,3 partículas/h</td>
        </tr>
        <tr>
          <td>Sal</td>
          <td>${sal} g/dia</td>
          <td>${Math.round(microSal)}</td>
          <td>7 partículas/g</td>
        </tr>
        <tr>
          <td>Bebidas em plástico</td>
          <td>${bebida} L/dia</td>
          <td>${Math.round(microBebida)}</td>
          <td>94 partículas/L</td>
        </tr>
        <tr>
          <td>Refeições em plástico</td>
          <td>${refeicao} ref/dia</td>
          <td>${Math.round(microRefeicao)}</td>
          <td>5 partículas/refeição</td>
        </tr>
      </tbody>
    </table>
    <p class="mb-0"><small><em>Baseado em pesquisas científicas recentes. Valores podem variar conforme região e hábitos específicos.</em></small></p>
  `;

  document.querySelectorAll("input").forEach(input => input.disabled = true);
  const botao = document.getElementById("botao");
  botao.disabled = true;
  botao.innerText = "Cálculo realizado";
  botao.classList.remove("btn-outline-info");
  botao.classList.add("btn-secondary");
 
  calculoFeito = true;
  
  // Scroll para o resultado
  resultado.scrollIntoView({ behavior: 'smooth' });
}
