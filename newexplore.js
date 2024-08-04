function createribbon() {
    // const genres = {"New Releases":"bg-gradient-to-r from-[#7a2828] via-[#d29393] to-[#7a2828]", "Trending":"bg-gradient-to-r from-[#FF75C5] via-[#FFB6E0] to-[#FF75C5]", "Mood & Genres":"bg-gradient-to-r from-[#467b3d] via-[#b0f1a5] to-[#467b3d]", "Top Artists":"bg-gradient-to-r from-[#66DDEE] via-[#B3F5FF] to-[#66DDEE]"};
    const genres = ["New Releases","Trending","Mood & Genres","Top Artists"];

    const ribbox = document.getElementById("ribbonbox");
    const parser = new DOMParser();
    genres.forEach(ele => {
        ribbox.appendChild(parser.parseFromString(`<div>
        <button class=" mr-2 text-white hover:text-black text-lg   hover:bg-[#1d88e6] rounded-full hover:border-white border-2 border-[#1d88e6]  hover:shadow-white hover:scale-110 ">
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
    const moods = {
        "1": "border-l-[#8FFF7D] text-[#8FFF7D] hover:shadow-[#8FFF7D] border-[#8FFF7D]",
        "2":"border-l-[#FFC061] text-[#FFC061] hover:shadow-[#FFC061] border-[#FFC061]",
        "3": "border-l-[#FF5A5A] text-[#FF5A5A] hover:shadow-[#FF5A5A] border-[#FF5A5A]",
        "4": "border-l-[#A57BFF] text-[#A57BFF] hover:shadow-[#A57BFF] border-[#A57BFF]",
        "5": "border-l-[#76DEFF] text-[#76DEFF] hover:shadow-[#76DEFF] border-[#76DEFF]",
        "6": "border-l-[#FF75C5] text-[#FF75C5] hover:shadow-[#FF75C5] border-[#FF75C5]",
        "7": "border-l-[#FF75C5] text-[#FF75C5] hover:shadow-[#FF75C5] border-[#FF75C5]",
        "8": "border-l-[#8FFF7D] text-[#8FFF7D] hover:shadow-[#8FFF7D] border-[#8FFF7D]",
        "9": "border-l-[#FFC061] text-[#FFC061] hover:shadow-[#FFC061] border-[#FFC061]",
        "10": "border-l-[#FF5A5A] text-[#FF5A5A] hover:shadow-[#FF5A5A] border-[#FF5A5A]",
        "11": "border-l-[#A57BFF] text-[#A57BFF] hover:shadow-[#A57BFF] border-[#A57BFF]",
        "12": "border-l-[#76DEFF] text-[#76DEFF] hover:shadow-[#76DEFF] border-[#76DEFF]",
        "13": "border-l-[#76DEFF] text-[#76DEFF] hover:shadow-[#76DEFF] border-[#76DEFF]",
        "14": "border-l-[#FF75C5] text-[#FF75C5] hover:shadow-[#FF75C5] border-[#FF75C5]",
        "15": "border-l-[#8FFF7D] text-[#8FFF7D] hover:shadow-[#8FFF7D] border-[#8FFF7D]",
        "16": "border-l-[#FFC061] text-[#FFC061] hover:shadow-[#FFC061] border-[#FFC061]",
        "17": "border-l-[#FF5A5A] text-[#FF5A5A] hover:shadow-[#FF5A5A] border-[#FF5A5A]",
        "18": "border-l-[#A57BFF] text-[#A57BFF] hover:shadow-[#A57BFF] border-[#A57BFF]",
        "19": "border-l-[#A57BFF] text-[#A57BFF] hover:shadow-[#A57BFF] border-[#A57BFF]",
        "20": "border-l-[#76DEFF] text-[#76DEFF] hover:shadow-[#76DEFF] border-[#76DEFF]",
        "21": "border-l-[#FF75C5] text-[#FF75C5] hover:shadow-[#FF75C5] border-[#FF75C5]",
        "22": "border-l-[#8FFF7D] text-[#8FFF7D] hover:shadow-[#8FFF7D] border-[#8FFF7D]",
        "23": "border-l-[#FFC061] text-[#FFC061] hover:shadow-[#FFC061] border-[#FFC061]",
        "24": "border-l-[#FF5A5A] text-[#FF5A5A] hover:shadow-[#FF5A5A] border-[#FF5A5A]",
        "25": "border-l-[#FF5A5A] text-[#FF5A5A] hover:shadow-[#FF5A5A] border-[#FF5A5A]",
        "26": "border-l-[#A57BFF] text-[#A57BFF] hover:shadow-[#A57BFF] border-[#A57BFF]",
        "27": "border-l-[#76DEFF] text-[#76DEFF] hover:shadow-[#76DEFF] border-[#76DEFF]",
        "28": "border-l-[#FF75C5] text-[#FF75C5] hover:shadow-[#FF75C5] border-[#FF75C5]",
        "29": "border-l-[#8FFF7D] text-[#8FFF7D] hover:shadow-[#8FFF7D] border-[#8FFF7D]",
        "30": "border-l-[#FFC061] text-[#FFC061] hover:shadow-[#FFC061] border-[#FFC061]",
        "31": "border-l-[#FFC061] text-[#FFC061] hover:shadow-[#FFC061] border-[#FFC061]",
        "32": "border-l-[#FF5A5A] text-[#FF5A5A] hover:shadow-[#FF5A5A] border-[#FF5A5A]",
        "33": "border-l-[#A57BFF] text-[#A57BFF] hover:shadow-[#A57BFF] border-[#A57BFF]",
        "34": "border-l-[#76DEFF] text-[#76DEFF] hover:shadow-[#76DEFF] border-[#76DEFF]",
        "35": "border-l-[#FF75C5] text-[#FF75C5] hover:shadow-[#FF75C5] border-[#FF75C5]",
        "36": "border-l-[#8FFF7D] text-[#8FFF7D] hover:shadow-[#8FFF7D] border-[#8FFF7D]"
    };
    const mandg = document.getElementById("mandg");
    const parser = new DOMParser();
    Object.entries(moods).forEach(([ele,k]) =>{
        mandg.appendChild(parser.parseFromString(`<div>
        <button class="${k} bg-[#373737] border-l-8 mr-2 text-lg font-semibold border-[1px] rounded-lg hover:shadow-md hover:shadow-white hover:scale-110 justify-stretch min-w-full">
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