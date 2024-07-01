
function playlistCreate() {
    const songscroll = document.getElementById("playlistscrolldiv");
    const elementstr1 = `
    <div>
        <button>
                <img class="border-4" src="newassets/songdp.svg" alt="">
        </button>
        <div class="text-white text-start">
            Song Name
        </div>
        <div class="text-white text-start">
            Artist Name
        </div>    
        
    </div>
                   

`
    const elementstr2 = `
    <div> 
        <div>
            <button data-modal-target="crud-modal" data-modal-toggle="crud-modal">
                <div>
                    <div class="bg-black h-[188px] w-[188px] border-4 pt-12 pl-14">
                        <img  src="newassets/createplaylist.svg" alt=""></div>
                    </div>
                </div>    
            </button>
            <div class="text-white text-start">
            Create Playlist
        </div>
        </div>
    </div>`
    const parser = new DOMParser();
    // const createpl = parser.parseFromString(elementstr2, "text/html").body.firstChild;
    for (let i = 0; i < 1; i++) {
        songscroll.appendChild(parser.parseFromString(elementstr1,"text/html").body.firstChild);
    }
    songscroll.appendChild(parser.parseFromString(elementstr2,"text/html").body.firstChild);
    
}


function popularpl() {
    const songscroll = document.getElementById("popularscrolldiv");
    const elementstr = `<div>
    <div>
        <img class="border-4" src="newassets/songdp.svg" alt="">
    </div>
    <div class="text-white w-40 pt-1">
        Playlist Name
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

playlistCreate();
popularpl();

document.addEventListener('DOMContentLoaded', function () {
    const modalToggle = document.querySelector('[data-modal-toggle="crud-modal"]');
    const modalClose = document.querySelector('[data-modal-close="crud-modal"]');
    const modal = document.getElementById('crud-modal');

    modalToggle.addEventListener('click', function () {
      modal.classList.toggle('hidden');
    });

    modalClose.addEventListener('click', function () {
      modal.classList.toggle('hidden');
    });
  });

  function createribbon() {
    const genres = {"Song":"[#7D2C2C]", "Albumns":"[#FAFF00]", "Artists":"[#38771A]", "Playlists":"[#28739D]"};
    const ribbox = document.getElementById("ribbonbox");
    const parser = new DOMParser();
    Object.entries(genres).forEach(([ele,k]) => {
        ribbox.appendChild(parser.parseFromString(`<div>
        <button class="bg-${k} mr-2 text-black text-lg font-semibold border-white border-[3px] rounded-lg">
            <div class="px-5 py-1 text-xl text-shadow-lg ">${ele}</div>
        </button>
    </div>`, "text/html").body.firstChild);
    });
}

createribbon();