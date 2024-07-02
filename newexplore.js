function createribbon() {
    const genres = {"New Releases":"bg-[#FF5A5A]", "Trending":"bg-[#FF75C5]", "Mood & Genres":"bg-[#8FFF7D]", "Top Artists":"bg-[#76DEFF]"};
    const ribbox = document.getElementById("ribbonbox");
    const parser = new DOMParser();
    Object.entries(genres).forEach(([ele,k]) => {
        ribbox.appendChild(parser.parseFromString(`<div>
        <button class="${k} mr-2 text-black text-lg font-semibold border-white border-[3px] rounded-lg hover:shadow-lg hover:shadow-white hover:scale-110">
            <div class="px-5 py-1 text-xl">${ele}</div>
        </button>
    </div>`, "text/html").body.firstChild);
    });
}

function horizontalscroll(left,eleid) {
    if (left) {
        document.getElementById(eleid).scrollLeft -= 200;
    } else {
        document.getElementById(eleid).scrollLeft += 200;
    }

}

function heading1material() {
    const songscroll = document.getElementById("parentscrolldiv1");
    const elementstr = `<div>
    <div class="h-40 w-40 border-white border-2">
        <img src="newassets/songdp.svg" alt="">
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
    for (let i = 0; i < 10; i++) {
        songscroll.appendChild(newelements.cloneNode(true));
    }
}
function heading2material() {
    const songscroll = document.getElementById("parentscrolldiv2");
    const elementstr = `<div>
    <div class="h-40 w-40 border-white border-2">
        <img src="newassets/songdp.svg" alt="">
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
    for (let i = 0; i < 10; i++) {
        songscroll.appendChild(newelements.cloneNode(true));
    }
}


function moodandgenres() {
    const moods = ["Romantic","Melancholic","Happy","Energetic","Peaceful","Spiritual","Patriotic","Festive","Rainy Day","Wedding","Workout","Meditation","Travel","Chill","Motivational","Party","Soulful","Retro","Urban","Rural","Nostalgic","Contemporary","Experimental","Unwind","Love","Dance","Lounge","Study"];
    const mandg = document.getElementById("mandg");
    const parser = new DOMParser();
    moods.forEach(([ele,k]) =>{
        mandg.appendChild(parser.parseFromString(`<div>
        <button class="${k} mr-2 text-black text-lg font-semibold border-white border-[3px] rounded-lg hover:shadow-lg hover:shadow-white hover:scale-110">
            <div class="px-5 py-1 text-xl">${ele}</div>
        </button>
    </div>`,"text/html").body.firstChild);
    });
}



function heading4material() {
    const songscroll = document.getElementById("parentscrolldiv4");
    const elementstr = `<div>
    <div class="h-40 w-40 border-white border-2">
        <img src="newassets/artistdp.svg" alt="">
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
    for (let i = 0; i < 10; i++) {
        songscroll.appendChild(newelements.cloneNode(true));
    }
}




document.getElementById("explorebox").addEventListener("mouseenter", () => {
    document.getElementById("exploreimg").classList.add("animate-spin");
});
document.getElementById("explorebox").addEventListener("mouseleave", () => {
    document.getElementById("exploreimg").classList.remove("animate-spin");
});

createribbon();
heading1material();
heading2material();
heading4material();
moodandgenres();