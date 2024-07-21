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
heading4material();