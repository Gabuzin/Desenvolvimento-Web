function mostrarPista() {
    let pista = document.getElementById("pista").value;
    let imagem = document.getElementById("imagemPista");

    if (pista == "interrogacao") {
        imagem.innerHTML = `
            <h4>DECIDE LOGO</h4>
            <img src="interrogacao.png"
                 alt="interrogacao"
                 width="500">
        `;
    }

    else if (pista == "Interlagos") {
        imagem.innerHTML = `
            <h4>Autodromo de Interlagos (São Paulo - SP)</h4>
            <img src="Autodromo de Interlagos (São Paulo - SP).jpg"
                 alt="Autodromo de Interlagos"
                 width="500">
        `;
    }

    else if (pista == "Goiania") {
        imagem.innerHTML = `
            <h4>Autodromo Internacional de Goiânia (Goiânia - GO)</h4>
            <img src="Autodromo Internacional de Goiânia (Goiânia - GO).jpg"
                 alt="Autodromo de Goiânia"
                 width="500">
        `;
    }

    else if (pista == "Taruma") {
        imagem.innerHTML = `
            <h4>Autodromo Internacional de Tarumã (Viamão - RS)</h4>
            <img src="Autodromo Internacional de Tarumã (Viamão - RS).jpg"
                 alt="Autodromo de Tarumã"
                 width="500">
        `;
    }

    else if (pista == "Mogi-Guaçu") {
        imagem.innerHTML = `
            <h4>Autodromo Velocitta (Mogi Guaçu - SP)</h4>
            <img src="Autodromo Velocitta (Mogi Guaçu - SP).jpg"
                 alt="Autodromo Velocitta"
                 width="500">
        `;
    }

    else {
        imagem.innerHTML = "";
    }
}


function mudar(id) {
    let elemento = document.getElementById(id);

    if (elemento.style.display === "none") {
        elemento.style.display = "block";
    } else {
        elemento.style.display = "none";
    }
}

function mostrarCadastro() {
    document.getElementById("selecaoPista").style.display = "none";
    document.getElementById("formularioPista").style.display = "block";
}