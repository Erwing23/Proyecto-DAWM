function loadDocument(page) {
    var txtFile = new XMLHttpRequest();
    txtFile.open("GET", page, true);

    txtFile.onreadystatechange = function() {
        if (txtFile.readyState === 4 && txtFile.status === 200) {
            let div = document.getElementById("main-content");
            div.innerHTML = txtFile.responseText;
        }
    }
    txtFile.send(null);
}

document.addEventListener('DOMContentLoaded', function() {
    //loadDocument("pages/design.html")
    loadDocument("pages/statistics.html");
    setTimeout(() => loadstatistics(), 1000)
    document.getElementById("design").addEventListener("click", () => loadDocument("pages/design.html"));

    document.getElementById("statistics").addEventListener("click", () => {
        loadDocument("pages/statistics.html");
        setTimeout(() => loadstatistics(), 1000)
    });
})
