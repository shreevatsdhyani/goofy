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
            document.getElementById("searchbox").classList.remove("md:ml-[280px]");
        }
        else
        {

            document.getElementById("allelements").classList.remove("blur-sm");
            document.getElementById("searchbox").classList.remove("blur-sm");
            document.getElementById("searchbox").classList.remove("sm:ml-[240px]");
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
       

       
        expanded = false;
    }
    else {
        console.log(window.innerWidth);
        if (window.innerWidth >= 768) {
            document.getElementById("allelements").classList.add("md:ml-[280px]");
            document.getElementById("searchbox").classList.add("md:ml-[280px]");
        }
        else
        {

            document.getElementById("allelements").classList.add("blur-sm");
            document.getElementById("searchbox").classList.add("blur-sm");
            document.getElementById("searchbox").classList.add("sm:ml-[240px]");
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

        
        expanded = true;
    }
}


function crossappear() {
    if (document.getElementById("searchcontent").value != "") {
        document.getElementById("searchbox").classList.replace("rounded-2xl","rounded-t-2xl");
        document.getElementById("searchbox").classList.replace("border-2","border-t-2");
        document.getElementById("clearcross").classList.remove("hidden");
        document.getElementById("searchbox").classList.replace("h-10", "h-[230px]");
        document.getElementById("searchbox").classList.replace("bg-[#68686638]", "bg-gray-800");
        document.getElementById("searchhr").classList.remove("hidden");
        document.getElementById("searchsuggestions").classList.remove("hidden");
        document.getElementById("searchsuggestions").classList.replace("*:bg-[#40714494]", "bg-gray-800");


    } else {
        document.getElementById("searchbox").classList.replace("rounded-t-2xl","rounded-2xl");
        document.getElementById("searchbox").classList.replace("border-t-2","border-2");
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
    document.getElementById("logo").classList.add("hidden");
    document.getElementById("ham").classList.add("hidden");
    document.getElementById("searchbtn").classList.add("hidden");
    document.getElementById("searchbox").classList.remove("hidden");
    document.getElementById("searchbox").classList.replace("w-[70%]","w-[90%]");
    document.getElementById("searchbox").classList.add("ml-2.5");
    document.getElementById("searchcontent").focus();

    
}


function closesearch() {
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


document.getElementById("searchcontent").addEventListener("input", crossappear);
document.body.addEventListener("click",clickmanage);


function handleresize()
{
    const ribbonbox = document.getElementById('ribbonbox');
    if (window.innerWidth>=911) {
        ribbonbox.classList.remove('overflow-x-scroll');
    }
    if (window.innerWidth<911) {
        ribbonbox.classList.add('overflow-x-scroll');
    }
    if (window.innerWidth == 768 && !expanded)
        {
            lnav();
        }
    else if(window.innerWidth < 768 && expanded)
        {
            lnav();
        }    
}


handleresize();
window.addEventListener("resize",handleresize);