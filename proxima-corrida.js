/* ================= ANO AUTOMÁTICO ================= */
const ano = document.getElementById("ano");

if (ano) {
    ano.textContent = new Date().getFullYear();
}

/* ================= CALENDÁRIO 2026 ================= */
const corridas2026 = [
  { nome: "GP da Austrália", local: "Melbourne, Austrália", data: "2026-03-08", imagem: "ImagensCircuito/circuito-melbourne.jpg" },
  { nome: "GP da China", local: "Xangai, China", data: "2026-03-15", imagem: "ImagensCircuito/circuito-xangai.jpg" },
  { nome: "GP do Bahrein", local: "Sakhir, Bahrein", data: "2026-04-12", imagem: "ImagensCircuito/circuito-bahrein.jpg" },
  { nome: "GP da Arábia Saudita", local: "Jeddah, Arábia Saudita", data: "2026-04-19", imagem: "ImagensCircuito/Circuito-Jeddah.jpg" },
  { nome: "GP de Miami", local: "Miami, Estados Unidos", data: "2026-05-03", imagem: "ImagensCircuito/Circuito-Miami.jpg" },
  { nome: "GP do Canadá", local: "Montreal, Canadá", data: "2026-05-24", imagem: "ImagensCircuito/Circuito-Canada.jpg" },
  { nome: "GP de Mônaco", local: "Monte Carlo, Mônaco", data: "2026-06-07", imagem: "ImagensCircuito/Circuito-Monaco.jpg" },
  { nome: "GP da Espanha", local: "Barcelona, Espanha", data: "2026-06-14", imagem: "ImagensCircuito/Circuito-Barcelona.jpg" },
  { nome: "GP da Áustria", local: "Spielberg, Áustria", data: "2026-06-28", imagem: "ImagensCircuito/Circuito-Austria.jpg" },
  { nome: "GP da Grã-Bretanha", local: "Silverstone, Reino Unido", data: "2026-07-05", imagem: "ImagensCircuito/Circuito-Silverstone.jpg" },
  { nome: "GP da Bélgica", local: "Spa-Francorchamps, Bélgica", data: "2026-07-19", imagem: "ImagensCircuito/Circuito-Belgica.jpg" },
  { nome: "GP da Hungria", local: "Budapeste, Hungria", data: "2026-07-26", imagem: "ImagensCircuito/Circuito-Hungria.jpg" },
  { nome: "GP da Holanda", local: "Zandvoort, Países Baixos", data: "2026-08-23", imagem: "ImagensCircuito/Circuito-Holanda.jpg" },
  { nome: "GP da Itália", local: "Monza, Itália", data: "2026-09-06", imagem: "ImagensCircuito/Circuito-Italia.jpg" },
  { nome: "GP de Madri", local: "Madri, Espanha", data: "2026-09-13", imagem: "ImagensCircuito/Circuito-Madri.jpg" },
  { nome: "GP do Azerbaijão", local: "Baku, Azerbaijão", data: "2026-09-27", imagem: "ImagensCircuito/Circuito-Azerbaijan.jpg" },
  { nome: "GP de Singapura", local: "Singapura", data: "2026-10-11", imagem: "ImagensCircuito/Circuito-Singapura.jpg" },
  { nome: "GP dos EUA", local: "Austin, Estados Unidos", data: "2026-10-25", imagem: "ImagensCircuito/Circuito-Austin.jpg" },
  { nome: "GP do México", local: "Cidade do México, México", data: "2026-11-01", imagem: "ImagensCircuito/Circuito-Mexico.jpg" },
  { nome: "GP de São Paulo", local: "São Paulo, Brasil", data: "2026-11-08", imagem: "ImagensCircuito/Circuito-Brasil.jpg" },
  { nome: "GP de Las Vegas", local: "Las Vegas, Estados Unidos", data: "2026-11-21", imagem: "ImagensCircuito/Circuito-Vegas.jpg" },
  { nome: "GP do Catar", local: "Lusail, Catar", data: "2026-11-29", imagem: "ImagensCircuito/Circuito-Catar.jpg" },
  { nome: "GP de Abu Dhabi", local: "Yas Marina, Emirados Árabes Unidos", data: "2026-12-06", imagem: "ImagensCircuito/Circuito-Abudhabi.jpg" }
];

/* ================= FORMATAR DATA ================= */
function formatarData(dataISO){
    const data = new Date(dataISO + "T00:00:00");

    return data.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });
}

/* ================= PEGAR PRÓXIMA CORRIDA ================= */
function pegarProximaCorrida(){

    const hoje = new Date();
    hoje.setHours(0,0,0,0);

    return corridas2026.find(corrida => {

        const dataCorrida = new Date(corrida.data + "T00:00:00");

        return dataCorrida >= hoje;
    });
}

/* ================= MOSTRAR NA TELA ================= */
const corrida = pegarProximaCorrida();

const gpNome = document.getElementById("gp-nome");
const gpLocal = document.getElementById("gp-local");
const gpData = document.getElementById("gp-data");
const bgCorrida = document.getElementById("bg-corrida");

if(corrida){

    if(gpNome) gpNome.textContent = corrida.nome;

    if(gpLocal) gpLocal.textContent = corrida.local;

    if(gpData) gpData.textContent = formatarData(corrida.data);

    if(bgCorrida){
        bgCorrida.style.background =
        `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('${corrida.imagem}') center/cover no-repeat`;
    }

}else{

    if(gpNome) gpNome.textContent = "Temporada Encerrada";

    if(gpLocal) gpLocal.textContent = "";

    if(gpData) gpData.textContent = "";
}