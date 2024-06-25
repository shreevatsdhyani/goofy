function moodandgenres() {
    const moods = {"Romantic":"bg-[#7D2C2C]","Melancholic":"bg-[#FAFF00]","Happy":"bg-[#38771A]","Energetic":"bg-[#4E289D]","Peaceful":"bg-[#28739D]","Festive":"bg-[#932560]","Workout":"bg-[#7D2C2C]","Meditation":"bg-[#FAFF00]","Travel":"bg-[#38771A]","Chill":"bg-[#4E289D]","Motivational":"bg-[#38771A]","Party":"bg-[#4E289D]","Soulful":"bg-[#28739D]","Retro":"bg-[#932560]","Urban":"bg-[#7D2C2C]","Nostalgic":"bg-[#FAFF00]","Unwind":"bg-[#28739D]","Love":"bg-[#7D2C2C]","Dance":"bg-[#4E289D]","Rainy Day":"bg-[#932560]","Study":"bg-[#FAFF00]"};
    const mandg = document.getElementById("mandg");
    const parser = new DOMParser();
    Object.entries(moods).forEach(([ele,k]) =>{
        mandg.appendChild(parser.parseFromString(`<div class="${k}">
        <button class="mandg ">
            <div >${ele}</div>
        </button>
    </div>`,"text/html").body.firstChild);
    });
}

function heading1material() {
    const songscroll = document.getElementById("parentscrolldiv");
    const elementstr = `<div>
    <div>
        <img class="border-4" src="newassets/songdp.svg" alt="">
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
        <img class="border-4" src="assets/singer.svg" alt="">
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


function horizontalscroll(left,eleid) {
    if (left) {
        document.getElementById(eleid).scrollLeft -= 200;
    } else {
        document.getElementById(eleid).scrollLeft += 200;
    }

}

document.getElementById("explorebox").addEventListener("mouseenter", () => {
    document.getElementById("exploreimg").classList.add("animate-spin");
});
document.getElementById("explorebox").addEventListener("mouseleave", () => {
    document.getElementById("exploreimg").classList.remove("animate-spin");
});

heading1material();
moodandgenres();
heading2material();

