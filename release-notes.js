document.addEventListener("DOMContentLoaded", () => {
    const versionElement = document.getElementById("latest-version-info"); // Updated id to match
    const apiUrl = "https://api.github.com/repos/AdrianoGomesFilho/pje_automatico/releases/latest";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const version = data.tag_name;
            const releaseDate = new Date(data.published_at).toLocaleDateString("pt-BR");
            versionElement.textContent = `Última versão: ${version} (lançada em ${releaseDate})`;
        })
        .catch(error => {
            console.error("Erro ao buscar informações da versão:", error);
            versionElement.textContent = "Não foi possível carregar as informações da versão.";
        });
});