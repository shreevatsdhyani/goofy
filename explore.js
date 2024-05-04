function moodandgenres() {
    const moods = ["Romantic","Melancholic","Happy","Energetic","Peaceful","Spiritual","Patriotic","Festive","Rainy Day","Wedding","Workout","Meditation","Travel","Chill","Motivational","Party","Soulful","Retro","Urban","Rural","Nostalgic","Contemporary","Experimental","Unwind","Love","Dance","Lounge","Study"];
    const mandg = document.getElementById("mandg");
    const parser = new DOMParser();
    moods.forEach(ele =>{
        mandg.appendChild(parser.parseFromString(`<div class="hover:bg-[#111827]">
        <button class="mandg">
            <MG class="p-3">${ele}</MG>
        </button>
    </div>`,"text/html").body.firstChild);
    });
}

function heading1material() {
    const songscroll = document.getElementById("parentscrolldiv");
    const elementstr = `<div>
    <div class="h-40 w-40">
        <img src="assets/songthumbnail.svg" alt="">
    </div>
    <div class="text-white w-40 pt-1">
        Song Name
    </div>
    <div class="text-white w-40">
        Artist Name
    </div>
</div>`
    const parser = new DOMParser();
    const newelements = parser.parseFromString(elementstr, "text/html").body.firstChild;
    for (let i = 0; i < 8; i++) {
        songscroll.appendChild(newelements.cloneNode(true));
    }
}

function heading2material() {
    const songscroll = document.getElementById("artistscrolldiv");
    const elementstr = `<div>
    <div class="h-40 w-40">
        <img src="assets/singer.svg" alt="">
    </div>
    <div class="text-white w-40 justify-center">
        Artist Name
    </div>
</div>`
    const parser = new DOMParser();
    const newelements = parser.parseFromString(elementstr, "text/html").body.firstChild;
    for (let i = 0; i < 8; i++) {
        songscroll.appendChild(newelements.cloneNode(true));
    }
}

heading1material();
moodandgenres();
heading2material();

