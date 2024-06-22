let expanded = false;
function lnav() {
    const navelements = ["leftnav","home", "explore", "library", "likedsongs", "addartists", "newplaylist",  "profile"];
    if (expanded) {
        document.getElementById("allelements").classList.remove("blur-sm");
        document.getElementById("searchbox").classList.remove("blur-sm");
        document.getElementById("leftnav").classList.replace("w-[50%]", "w-[17%]");
        document.getElementById("leftnav").classList.remove("bg-[#0e0e0a]");
        // document.getElementById("parentscrolldiv").classList.replace("w-[1040px]", "w-[1216px]");
        document.getElementById("hel").classList.replace("*:w-[90%]", "*:w-[80%]");
        document.getElementById("hel").classList.replace("*:pl-2", "*:pl-[14px]");
        document.getElementById("hel").classList.replace("*:ml-3", "*:ml-2");
        document.getElementById("hrnav").classList.replace("mx-5","mx-1.5");
        document.getElementById("profilebox").classList.replace("w-[90%]", "w-[80%]");
        document.getElementById("profilebox").classList.replace("pl-2", "pl-[10px]");
        document.getElementById("profilebox").classList.replace("ml-3", "ml-2");
        // document.getElementById("profileimg").classList.replace("ml-3.5", "ml-2");
        // document.getElementById("scrollnavbtn").classList.replace("pl-[800px]", "pl-[968px]");
        // document.getElementById("rightside").classList.replace("ml-64", "ml-[98px]");

        for (const i of navelements) {
            document.getElementById(i).classList.add("hidden");
        }
        expanded = false;
    }
    else {
        document.getElementById("allelements").classList.add("blur-sm");
        document.getElementById("searchbox").classList.add("blur-sm");
        document.getElementById("leftnav").classList.replace("w-[17%]", "w-[50%]");
        document.getElementById("leftnav").classList.add("bg-[#0e0e0a]");
        // document.getElementById("parentscrolldiv").classList.replace("w-[1216px]", "w-[1040px]");
        document.getElementById("hel").classList.replace("*:w-[80%]", "*:w-[90%]");
        document.getElementById("hel").classList.replace("*:pl-[14px]", "*:pl-2");
        document.getElementById("hel").classList.replace("*:ml-2", "*:ml-3");
        document.getElementById("hrnav").classList.replace("mx-1","mx-5");
        document.getElementById("profilebox").classList.replace("w-[80%]", "w-[90%]");
        document.getElementById("profilebox").classList.replace("pl-[10px]", "pl-2");
        document.getElementById("profilebox").classList.replace("ml-2", "ml-3");
        // document.getElementById("scrollnavbtn").classList.replace("pl-[968px]", "pl-[800px]");
        // document.getElementById("rightside").classList.replace("ml-[98px]", "ml-64");

        for (const i of navelements) {

            document.getElementById(i).classList.remove("hidden");

        }
        expanded = true;
    }
}


function crossappear() {
    if (document.getElementById("searchcontent").value != "") {
        document.getElementById("clearcross").classList.remove("hidden");
        document.getElementById("searchbox").classList.replace("h-10", "h-[230px]");
        document.getElementById("searchbox").classList.replace("bg-[#68686638]", "bg-gray-800");
        document.getElementById("searchhr").classList.remove("hidden");
        document.getElementById("searchsuggestions").classList.remove("hidden");
        document.getElementById("searchsuggestions").classList.replace("*:bg-[#40714494]", "bg-gray-800");


    } else {
        document.getElementById("clearcross").classList.add("hidden");
        document.getElementById("searchbox").classList.replace("h-[230px]", "h-10");
        document.getElementById("searchbox").classList.replace("bg-gray-800", "bg-[#68686638]");
        document.getElementById("searchhr").classList.add("hidden");
        document.getElementById("searchsuggestions").classList.add("hidden");
        document.getElementById("searchsuggestions").classList.replace("bg-gray-800", "*:bg-[#40714494]");
    }
    setTimeout(search(document.getElementById("searchcontent").value, 5),500);
}

function clearinput() {
    document.getElementById("searchcontent").value = "";
    crossappear();
}

function createribbon() {
    const genres = ["Relax", "Romance", "Energize", "Party", "Workout", "Sad", "Focus", "Sleep"];
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