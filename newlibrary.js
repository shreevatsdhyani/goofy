function createribbon() {
//     const genres = { "Songs": "bg-gradient-to-r from-[#7a2828] via-[#d29393] to-[#7a2828]", "Albumns": "bg-gradient-to-r from-[#FF75C5] via-[#FFB6E0] to-[#FF75C5]", "Artists": "bg-gradient-to-r from-[#467b3d] via-[#b0f1a5] to-[#467b3d]", "Playlists": "bg-gradient-to-r from-[#66DDEE] via-[#B3F5FF] to-[#66DDEE]" };
    const genres = ["Songs","Albums","Artists","Playlists"];

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

function horizontalscroll(left, eleid) {
    if (left) {
        document.getElementById(eleid).scrollLeft -= 200;
    } else {
        document.getElementById(eleid).scrollLeft += 200;
    }

}

function heading1material() {
    const songscroll = document.getElementById("parentscrolldiv1");
    const elementstr = `
    
    
    <div>
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
    const elementstr = `
    
    
    <div>
    <div class="h-40 w-40 border-white border-2">
        <img src="newassets/songdp.svg" alt="">
    </div>
    <div class="text-white w-40 pt-1">
        Album Name
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
    const elementstr = `
    <div>
    <div class="h-40 w-40 border-white border-2">
        <img src="newassets/songdp.svg" alt="">
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
    const songscroll = document.getElementById("parentscrolldiv4");
    const elementstr = `
    <div>
    <div class="h-40 w-40 border-white border-2">
        <img src="newassets/songdp.svg" alt="">
    </div>
    <div class="text-white w-40 pt-1">
        Playlist Name
    </div>
    
</div>`
    const parser = new DOMParser();
    const newelements = parser.parseFromString(elementstr, "text/html").body.firstChild;
    for (let i = 0; i < 1; i++) {
        songscroll.appendChild(newelements.cloneNode(true));
    }
}


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


// // Wait for the DOM content to load
// document.addEventListener('DOMContentLoaded', function() {
//     // Get the modal and the toggle button
//     var modal = document.getElementById('crud-modal');
//     var modalToggle = document.querySelector('[data-modal-toggle="crud-modal"]');

//     // Add event listener for clicks on the document
//     document.addEventListener('click', function(event) {
//         // Check if the click is outside the modal and not on the toggle button
//         var isClickInsideModal = modal.contains(event.target);
//         var isClickOnToggle = (event.target === modalToggle);

//         if (!isClickInsideModal && !isClickOnToggle) {
//             // If clicked outside modal and not on toggle, hide the modal
//             modal.classList.add('hidden');
//         }
//     });
// });


createribbon();
heading1material();
heading2material();
heading3material();
heading4material();