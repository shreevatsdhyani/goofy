function moodandgenres() {
    const moods = [""];
    const mandg = document.getElementById("mandg");
    const parser = new DOMParser();
    moods.forEach(ele =>{
        mandg.appendChild(parser.parseFromString(`<div>
        <button class="mandg">
            <MG class="p-3">${ele}<?MG>
        </button>
    </div>`,"text/html").body.firstChild);
    });
}