const searchBox = document.getElementById("searchBox");
const resultsDiv = document.getElementById("results");

searchBox.addEventListener("input", function () {
    const keyword = this.value.trim().toLowerCase();
    resultsDiv.innerHTML = "";

    if (keyword === "") return;

    const filtered = data.filter(item => {
        const term = item.term.toLowerCase();
        const def = item.definition.toLowerCase();
        return term.includes(keyword) || def.includes(keyword);
    });

    if (filtered.length === 0) {
        resultsDiv.innerHTML = "<p>❌ Không tìm thấy thuật ngữ.</p>";
        return;
    }

    filtered.forEach(item => {
        const div = document.createElement("div");
        div.className = "result";
        div.innerHTML = `
            <div class="term">${item.term}</div>
            <div class="definition">${item.definition}</div>
        `;
        resultsDiv.appendChild(div);
    });
});
