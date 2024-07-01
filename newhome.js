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
function heading3material() {
    const songscroll = document.getElementById("parentscrolldiv3");
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
function heading5material() {
    const songscroll = document.getElementById("parentscrolldiv4");
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
function heading4material() {
    const songscroll = document.getElementById("h4");
    const elementstr = `<div>
    <div class="flex space-x-2">
                            <div class="border-white border-2"><img src="newassets/songsmalldp.svg"
                                    ></div>
                            <div>
                                <div>Song Name</div>
                                <div>Artists Name</div>
                            </div>
                        </div>
</div>`
    const parser = new DOMParser();
    const newelements = parser.parseFromString(elementstr, "text/html").body.firstChild;
    for (let i = 0; i < 9; i++) {
        songscroll.appendChild(newelements.cloneNode(true));
    }
}
function createribbon() {
    const genres = {"Relax":"bg-[#8FFF7D]", "Energize":"bg-[#FFC061]", "Romance":"bg-[#FF5A5A]", "Sad":"bg-[#A57BFF]", "Sleep":"bg-[#76DEFF]", "Podcasts":"bg-[#FF75C5]"};
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
createribbon();
heading1material();
heading2material();
heading3material();
heading4material();
heading5material();

