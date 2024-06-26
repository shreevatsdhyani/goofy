
function heading1material() {
    const songscroll = document.getElementById("parentscrolldiv");
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
    </div>`
    const parser = new DOMParser();
    // const newelements = parser.parseFromString(elementstr, "text/html").body.firstChild;
    for (let i = 0; i < 1; i++) {
        songscroll.appendChild(parser.parseFromString(elementstr1,"text/html").body.firstChild);
    }
    songscroll.appendChild(parser.parseFromString(elementstr2,"text/html").body.firstChild);
    console.log((parser.parseFromString(elementstr1,"text/html").body.firstChild));
    console.log(parser.parseFromString(elementstr2,"text/html").body.firstChild);
}

function horizontalscroll(left,eleid) {
    if (left) {
        document.getElementById(eleid).scrollLeft -= 200;
    } else {
        document.getElementById(eleid).scrollLeft += 200;
    }

}

heading1material();

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

