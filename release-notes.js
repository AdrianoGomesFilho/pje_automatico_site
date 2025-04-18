document.addEventListener("DOMContentLoaded", () => {
    const releaseNotesElement = document.getElementById("release-notes");
    const repoOwner = "AdrianoGomesFilho";
    const repoName = "pje_automatico";

    fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/releases/latest`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch release notes");
            }
            return response.json();
        })
        .then(data => {
            const releaseNotes = `
                <strong>${data.name}</strong> (${new Date(data.published_at).toLocaleDateString()}): 
                ${data.body.replace(/\n/g, "<br>")}
            `;
            releaseNotesElement.innerHTML = releaseNotes;
        })
        .catch(error => {
            releaseNotesElement.textContent = "Não foi possível carregar as notas de atualização.";
            console.error(error);
        });
});
