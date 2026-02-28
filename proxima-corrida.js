/* ANO AUTOMÁTICO */
document.getElementById("ano").textContent = new Date().getFullYear();

/* CALENDÁRIO 2026 */
const corridas2026 = [
  { nome: "GP da Austrália", local: "Melbourne, Austrália", data: "2026-03-08", imagem: "melbourne-australia.avif" },
  { nome: "GP da China", local: "Xangai, China", data: "2026-03-15", imagem: "china.avif" },
  { nome: "GP do Japão", local: "Suzuka, Japão", data: "2026-03-29", imagem: "japao.avif" },
  { nome: "GP do Bahrein", local: "Sakhir, Bahrein", data: "2026-04-12", imagem: "bahrein.avif" },
  { nome: "GP da Arábia Saudita", local: "Jeddah, Arábia Saudita", data: "2026-04-19", imagem: "jeddah.avif" },
  { nome: "GP do Brasil", local: "São Paulo, Brasil", data: "2026-11-08", imagem: "brasil.avif" },
  { nome: "GP de Abu Dhabi", local: "Yas Marina, Emirados Árabes", data: "2026-12-06", imagem: "abudhabi.avif" }
];

function formatarData(dataISO){
    const data = new Date(dataISO + "T00:00:00");
    return data.toLocaleDateString("pt-BR", {
        day:"2-digit",
        month:"long",
        year:"numeric"
    });
}

function pegarProximaCorrida(){
    const hoje = new Date();
    hoje.setHours(0,0,0,0);

    return corridas2026.find(corrida => {
        const dataCorrida = new Date(corrida.data + "T00:00:00");
        return dataCorrida >= hoje;
    });
}

const corrida = pegarProximaCorrida();

if(corrida){
    document.getElementById("gp-nome").textContent = corrida.nome;
    document.getElementById("gp-local").textContent = corrida.local;
    document.getElementById("gp-data").textContent = formatarData(corrida.data);

    document.getElementById("bg-corrida").style.background =
        `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('${corrida.imagem}') center/cover no-repeat`;
}else{
    document.getElementById("gp-nome").textContent = "Temporada Encerrada";
    document.getElementById("gp-local").textContent = "";
    document.getElementById("gp-data").textContent = "";
}