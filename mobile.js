let expanded = false;

function lnav() {
    document.getElementById("leftnav").classList.toggle("hidden");
    const navelements = ["home", "explore", "library", "likedsongs","profile"];
    for (const i of navelements) {

        document.getElementById(i).classList.toggle("sm:hidden");

    }
    if (expanded) {
        if (window.innerWidth >= 768) {
            document.getElementById("allelements").classList.remove("md:ml-[280px]");
        }
        else
        {

            document.getElementById("allelements").classList.remove("blur-sm");
            document.getElementById("searchbox").classList.remove("blur-sm");
            document.getElementById("logo").classList.remove("blur-sm");
            document.getElementById("searchbtn").classList.remove("blur-sm");
        }
        document.getElementById("leftnav").classList.replace("w-[50%]", "w-[17%]");
        document.getElementById("leftnav").classList.replace("w-[240px]", "sm:w-[72px]");
        document.getElementById("leftnav").classList.remove("bg-[#0e0e0a]");
        // document.getElementById("parentscrolldiv").classList.replace("w-[1040px]", "w-[1216px]");
        document.getElementById("hel").classList.replace("*:w-[90%]", "*:w-[80%]");
        document.getElementById("hel").classList.replace("*:pl-2", "*:pl-[14px]");
        document.getElementById("hel").classList.replace("*:ml-3", "*:ml-2");
        document.getElementById("hrnav").classList.replace("mx-5","mx-1.5");
        document.getElementById("profilebox").classList.replace("w-[90%]", "w-[80%]");
        document.getElementById("profilebox").classList.replace("pl-2", "pl-[10px]");
        document.getElementById("profilebox").classList.replace("ml-3", "ml-2");
        document.getElementById("addartists").classList.replace("flex", "hidden");
        document.getElementById("newplaylist").classList.replace("flex", "hidden");

       
        expanded = false;
    }
    else {
        console.log(window.innerWidth);
        if (window.innerWidth >= 768) {
            document.getElementById("allelements").classList.add("md:ml-[280px]");
        }
        else
        {

            document.getElementById("allelements").classList.add("blur-sm");
            document.getElementById("searchbox").classList.add("blur-sm");
            document.getElementById("logo").classList.add("blur-sm");
            document.getElementById("searchbtn").classList.add("blur-sm");
        }

        document.getElementById("leftnav").classList.replace("w-[17%]", "w-[50%]");
        document.getElementById("leftnav").classList.replace("sm:w-[72px]", "w-[240px]");
        document.getElementById("leftnav").classList.add("bg-[#0e0e0a]");
        document.getElementById("hel").classList.replace("*:w-[80%]", "*:w-[90%]");
        document.getElementById("hel").classList.replace("*:pl-[14px]", "*:pl-2");
        document.getElementById("hel").classList.replace("*:ml-2", "*:ml-3");
        document.getElementById("hrnav").classList.replace("mx-1","mx-5");
        document.getElementById("profilebox").classList.replace("w-[80%]", "w-[90%]");
        document.getElementById("profilebox").classList.replace("pl-[10px]", "pl-2");
        document.getElementById("profilebox").classList.replace("ml-2", "ml-3");
        document.getElementById("addartists").classList.replace("hidden", "flex");
        document.getElementById("newplaylist").classList.replace("hidden","flex" );

        
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
        closesearch();
    }
    // setTimeout(search(document.getElementById("searchcontent").value, 5),500);
}

function clearinput() {
    document.getElementById("searchcontent").value = "";
    crossappear();
}

function searchboxappear()
{
    document.getElementById("topbar").classList.remove("bg-gray-900");
    document.getElementById("logo").classList.add("hidden");
    document.getElementById("ham").classList.add("hidden");
    document.getElementById("searchbtn").classList.add("hidden");
    document.getElementById("searchbox").classList.remove("hidden");
    document.getElementById("searchbox").classList.replace("w-[70%]","w-[90%]");
    document.getElementById("searchbox").classList.add("ml-2.5");
    document.getElementById("searchcontent").focus();

    
}


function closesearch() {
    document.getElementById("topbar").classList.add("bg-gray-900");
    document.getElementById("logo").classList.remove("hidden");
    document.getElementById("ham").classList.remove("hidden");
    document.getElementById("searchbtn").classList.remove("hidden");
    document.getElementById("searchbox").classList.add("hidden");
    document.getElementById("searchbox").classList.replace("w-[90%]","w-[70%]");
    document.getElementById("searchbox").classList.remove("ml-2.5");
           
}

function clickmanage(event) {
    if(!document.getElementById("searchcontent").contains(event.target)&& !document.getElementById("searchbtn").contains(event.target) &&  !document.getElementById("searchpic").contains(event.target) )
        {
        
            closesearch();
            
        }
    if (!document.getElementById("leftnav").classList.contains("hidden") && !document.getElementById("leftnav").contains(event.target) && !document.getElementById("ham").contains(event.target)) {
        lnav();
        
    }    
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

function heading1material() {
    const songscroll = document.getElementById("parentscrolldiv");
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
createribbon();
heading1material();

document.getElementById("searchcontent").addEventListener("input", crossappear);
document.body.addEventListener("click",clickmanage);

window.addEventListener("resize",()=>{
    if (window.innerWidth == 768 && !expanded)
        {
            lnav();
        }
    else if(window.innerWidth < 768 && expanded)
        {
            lnav();
        }    
})