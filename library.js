

function createribbon() {
    const genres = ["Songs", "Albumns", "Artists", "Playlists"];
    const ribbox = document.getElementById("ribbonbox");
    const parser = new DOMParser();
    genres.forEach(ele => {
        ribbox.appendChild(parser.parseFromString(`<div>
        <button class="ribbonbuttons">
            <RB class="p-3">${ele}</RB>
        </button>
    </div>`, "text/html").body.firstChild);
    });
}

createribbon();

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

