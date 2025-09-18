<h1>📊 Microcalc — Calculadora de Ingestão de Microplásticos</h1>

<img width="1500" height="4883" alt="image" src="https://github.com/user-attachments/assets/bc7e54d3-2764-4ccf-a74a-a62c7f7df5df" />

<p>
O <strong>Microcalc</strong> é um site responsivo que permite ao usuário estimar sua ingestão diária e semanal de microplásticos com base em hábitos pessoais.
Ele foi criado para conscientizar sobre o crescente consumo de microplásticos pelos seres humanos.
</p>

<h2>📖 Motivação</h2>

<p>
Este projeto surgiu após a leitura de artigos científicos que abordam o aumento do consumo de microplásticos pela população mundial, como:
</p>

<ul>
  <li><a href="https://revistatopicos.com.br/generate/pdf_zenodo/pub_12614821.pdf">Revista Tópicos — Microplásticos</a></li>
  <li><a href="https://rsdjournal.org/index.php/rsd/article/view/39302">Research, Society and Development Journal</a></li>
</ul>

<p>Os textos de conscientização utilizados no site têm como base fontes reconhecidas:</p>

<ul>
  <li><a href="https://brasilescola.uol.com.br/geografia/microplasticos.htm">Brasil Escola – Microplásticos</a></li>
  <li><a href="https://www.europarl.europa.eu/topics/pt/article/20181116STO19217/microplasticos-origens-efeitos-e-solucoes">Parlamento Europeu – Microplásticos: origens, efeitos e soluções</a></li>
</ul>

<h2>✨ Funcionalidades</h2>

<ul>
  <li>Explicação clara sobre <strong>o que são microplásticos</strong>, suas fontes primárias e secundárias.</li>
  <li>Seção informativa com <strong>impactos e vias de ingestão</strong> (alimentos, água, ar).</li>
  <li><strong>Calculadora interativa</strong> que estima a ingestão diária e semanal de microplásticos a partir de dados fornecidos pelo usuário.</li>
  <li>Layout <strong>totalmente responsivo</strong> usando Bootstrap.</li>
  <li>Seção de <strong>planos fictícios</strong> para demonstrar upgrade do serviço.</li>
</ul>

<h2>🖥️ Tecnologias utilizadas</h2>

<ul>
  <li><strong>HTML5</strong> – estrutura do site.</li>
  <li><strong>CSS3</strong> – estilização customizada.</li>
  <li><strong>Bootstrap 5.3.3</strong> – framework CSS para responsividade.</li>
  <li><strong>JavaScript (puro)</strong> – lógica de cálculo (arquivo <code>calculaMP.js</code>).</li>
  <li><strong>Imagens</strong> – arquivos estáticos na pasta <code>images</code>.</li>
</ul>

<h2>📂 Estrutura do projeto</h2>

<pre>
/
├── index.html        # Página principal
├── style/
│   └── style.css     # Estilos customizados
├── behave/
│   └── calculaMP.js  # Script de cálculo
└── images/           # Imagens usadas no site
</pre>

<h2>⚙️ Instalação / Execução local</h2>

<ol>
  <li>Clone ou baixe este repositório:
    <pre><code>git clone https://github.com/SEUUSUARIO/microcalc.git</code></pre>
  </li>
  <li>Abra o arquivo <code>index.html</code> no navegador ou use um servidor local.</li>
  <li>Preencha os campos da calculadora para ver sua estimativa.</li>
</ol>

<h2>📱 Responsividade</h2>

<p>
O site usa <strong>grid system do Bootstrap</strong>:<br>
<code>col-12</code> para telas pequenas e <code>col-md-*</code> para desktops.<br>
Imagens com <code>class="img-fluid"</code> para não estourarem o layout.<br>
Textos ajustados com <code>clamp()</code> no CSS para tamanhos proporcionais.
</p>

<h2>🚀 Melhorias futuras</h2>

<ul>
  <li>Permitir salvar histórico do usuário.</li>
  <li>Integrar com banco de dados para análises reais.</li>
  <li>Adicionar gráficos dinâmicos.</li>
</ul>

<h2>📄 Licença</h2>

<p>
Este projeto é distribuído sob a <strong>licença MIT</strong> – sinta-se à vontade para usar e modificar.
</p>
