let expanded = true;
let isplaying = false;

function lnav() {
    const navelements = ["home", "explore", "library", "addartists", "newplaylist", "hrnav"];
    if (expanded) {
        document.getElementById("leftnav").classList.replace("w-[240px]","w-[72px]");
        document.getElementById("leftnav").classList.remove("bg-[#0e0e0a]");
        document.getElementById("upperflex").classList.replace("pl-[624px]","pl-[792px]");
        document.getElementById("parentscrolldiv").classList.replace("w-[1040px]","w-[1216px]");
        document.getElementById("hel").classList.replace("*:w-48","*:w-[52px]");
        document.getElementById("hel").classList.replace("*:pl-1","*:pl-[14px]");
        document.getElementById("hel").classList.replace("*:ml-5","*:ml-2");
        document.getElementById("scrollnavbtn").classList.replace("pl-[800px]","pl-[968px]");

        for (const i of navelements) {
            document.getElementById(i).classList.add("hidden");
        }
        expanded = false;
    } 
    else {
        document.getElementById("leftnav").classList.replace("w-[72px]","w-[240px]");
        document.getElementById("leftnav").classList.add("bg-[#0e0e0a]");
        document.getElementById("upperflex").classList.replace("pl-[792px]","pl-[624px]");
        document.getElementById("parentscrolldiv").classList.replace("w-[1216px]","w-[1040px]");
        document.getElementById("hel").classList.replace("*:w-[52px]","*:w-48");
        document.getElementById("hel").classList.replace("*:pl-[14px]","*:pl-1");
        document.getElementById("hel").classList.replace("*:ml-2","*:ml-5");
        document.getElementById("scrollnavbtn").classList.replace("pl-[968px]","pl-[800px]");

        for (const i of navelements) {

            document.getElementById(i).classList.remove("hidden");
    
        }
        expanded = true;
    }
}
function crossappear() {
    if (document.getElementById("searchcontent").value != "") {
        document.getElementById("clearcross").classList.remove("hidden");
        document.getElementById("searchbox").classList.replace("h-10","h-[255px]");
        document.getElementById("searchbox").classList.replace("bg-[#68686638]","bg-gray-800");
        document.getElementById("searchhr").classList.remove("hidden");
        document.getElementById("searchsuggestions").classList.remove("hidden");
        document.getElementById("searchsuggestions").classList.replace("*:bg-[#40714494]","bg-gray-800");

        
    } else {
        document.getElementById("clearcross").classList.add("hidden");
        document.getElementById("searchbox").classList.replace("h-[255px]","h-10");
        document.getElementById("searchbox").classList.replace("bg-gray-800","bg-[#68686638]");
        document.getElementById("searchhr").classList.add("hidden");
        document.getElementById("searchsuggestions").classList.add("hidden");
        document.getElementById("searchsuggestions").classList.replace("bg-gray-800","*:bg-[#40714494]");
    }
}
function clearinput() {
    document.getElementById("searchcontent").value = "";
    crossappear();
}
function expandprofile() {
    if (document.getElementById("profilebox").classList.contains("hidden")) {
        document.getElementById("profilebox").classList.remove("hidden");
    }
    else{
        document.getElementById("profilebox").classList.add("hidden");
    }
}
function heading1material() {
    let songscroll =  document.getElementById("parentscrolldiv");
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
    const newelements = parser.parseFromString(elementstr,"text/html").body.firstChild;
    for (let i = 0; i < 8; i++) {
        songscroll.appendChild(newelements.cloneNode(true));   
    }
}
function createribbon() {
    const genres = ["Relax","Romance","Energize","Party","Workout","Sad","Focus","Sleep"];
    const ribbox = document.getElementById("ribbonbox");
    const parser = new DOMParser();
    genres.forEach(ele => {
        ribbox.appendChild(parser.parseFromString(`<div>
        <button class="ribbonbuttons">
            <RB class="p-3">${ele}</RB>
        </button>
    </div>`,"text/html").body.firstChild);
    });
}
function horizontalscroll(left) {
    if (left) {
        document.getElementById("parentscrolldiv").scrollLeft -= 200;
    } else {
        document.getElementById("parentscrolldiv").scrollLeft += 200;
    }
    
}
function playpause() {
    const playbtn = document.getElementById("playpause");
    if (isplaying) {
        playbtn.src="assets/playbtn.svg";
        playbtn.setAttribute("title","Play");
        isplaying=false;
    }
    else {
        playbtn.src="assets/pause.svg";
        playbtn.setAttribute("title","Pause");
        isplaying=true;
    }
}
function changerepeat() {
    const repeatelements=["assets/repeatoff.svg","assets/repeatone.svg","assets/repeat.svg"];
    const repbtn = document.getElementById("repeatingbtn");
    if (repbtn.getAttribute("src").includes(repeatelements[0])) {
        repbtn.setAttribute("src",repeatelements[1]);
        repbtn.setAttribute("title","Repeat One");
        
    }
    else if(repbtn.getAttribute("src").includes(repeatelements[1])){
        repbtn.setAttribute("src",repeatelements[2]);
        repbtn.setAttribute("title","Repeat");
    }
    else{
        repbtn.setAttribute("src",repeatelements[0]);
        repbtn.setAttribute("title","Repeat Off");
    }
    
}
document.getElementById("searchcontent").addEventListener("input",crossappear);
document.getElementById("explorebox").addEventListener("mouseenter", () =>
{
    document.getElementById("exploreimg").classList.add("animate-spin");
});
document.getElementById("explorebox").addEventListener("mouseleave", () =>
{
    document.getElementById("exploreimg").classList.remove("animate-spin");
});
heading1material();
createribbon();