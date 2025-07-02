document.addEventListener("DOMContentLoaded", function () {
    const imagens = document.querySelectorAll('#DIVniver img');
    const mesAtual = new Date().getMonth() + 1;
    const hoje = new Date();
    const diaAtual = hoje.getDate();
    const diamesHoje = `${diaAtual}/${mesAtual}`;
    let encontrouAniversariante = false;
    let encontrouAniversarianteDoDia = false;

    const nivernome = [
        { nome: "KIM DAYEON", url: "url('midia/PERFIL_Dayeon_BG.jpg')" },
        { nome: "EZAKI HIKARU", url: "url('midia/PERFIL_Hikaru_BG.jpg')" },
        { nome: "KIM CHAEHYUN", url: "url('midia/PERFIL_Chaehyun_BG.jpg')" },
        { nome: "HUENING BAHIYYIH", url: "url('midia/PERFIL_Bahiyyih_BG.jpg')" },
        { nome: "CHOI YUJIN", url: "url('midia/PERFIL_Choi-Yu-jin_BG.jpg')" },
        { nome: "SHEN XIAOTING", url: "url('midia/PERFIL_Xiaoting_BG.jpg')" },
        { nome: "SEO YOUNGEUN", url: "url('midia/PERFIL_Youngeun_BG.jpg')" }
    ];

    const secNiver = document.getElementById("SECniver");
    const divNiver = document.getElementById("DIVniver");
    const mensagemAniversarioDiv = document.getElementById("felizniver");
    const fogosVideo = document.getElementById("fogosVideo");

    imagens.forEach(img => {
        const alt = img.alt.trim(); // Ex: "Kim Dayeon 2/3"
        const partes = alt.split(" ");
        let nomeAniversariante = partes[0];
        let dataAniversario = partes[partes.length - 1]; // Pega a última parte como data

        // Lidar com nomes compostos como "Kim Dayeon"
        if (partes.length > 2) {
            nomeAniversariante = partes.slice(0, partes.length - 1).join(" ");
        }

        if (dataAniversario === diamesHoje) {
            const aniversarianteDoDia = nivernome.find(item => item.nome.toLowerCase() === nomeAniversariante.toLowerCase());
            if (aniversarianteDoDia && secNiver && divNiver) {
                secNiver.style.backgroundImage = aniversarianteDoDia.url;
                if (mensagemAniversarioDiv) {
                    mensagemAniversarioDiv.innerHTML = `<h4 id="felizniver"> Feliz aniversário, ${nomeAniversariante}! Hoje é o seu dia mais FELIZ!!!</h4>`;
                    mensagemAniversarioDiv.style.display = "block";
                }
                if (fogosVideo) {
                    fogosVideo.style.display = "block"; // Mostra o vídeo de fogos
                }
                img.style.display = "block";
                encontrouAniversarianteDoDia = true;
            }
        }
    });

    // Exibe os aniversariantes do mês se não houver um aniversariante do dia
    imagens.forEach(img => {
        const alt = img.alt.trim();
        const partes = alt.split(" ");
        const mesAniversario = parseInt(partes[partes.length - 1].split("/")[1]); // Pega o mês da data
        if (mesAniversario === mesAtual && !encontrouAniversarianteDoDia) {
            img.style.display = "inline-block";
            encontrouAniversariante = true;
        } else if (!encontrouAniversarianteDoDia) {
            img.style.display = "none";
        }
    });

    if (encontrouAniversariante || encontrouAniversarianteDoDia) {
        secNiver.style.display = "block";
    }
});