let expanded = true;
function lnav() {
    const navelements = ["home", "explore", "library", "addartists", "newplaylist", "hrnav"];
    if (expanded) {
        document.getElementById("leftnav").classList.replace("w-[240px]","w-[72px]");
        document.getElementById("upperflex").classList.replace("pl-[720px]","pl-[888px]");
        document.getElementById("parentscrolldiv").classList.replace("w-[1216px]","w-[1392px]");

        for (const i of navelements) {
            document.getElementById(i).classList.add("hidden");
        }
        expanded = false;
    } 
    else {
        document.getElementById("leftnav").classList.replace("w-[72px]","w-[240px]");
        document.getElementById("upperflex").classList.replace("pl-[888px]","pl-[720px]");
        document.getElementById("parentscrolldiv").classList.replace("w-[1392px]","w-[1216px]");


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
        document.getElementById("searchhr").classList.remove("hidden");
        document.getElementById("searchsuggestions").classList.remove("hidden");
        
    } else {
        document.getElementById("clearcross").classList.add("hidden");
        document.getElementById("searchbox").classList.replace("h-[255px]","h-10");
        document.getElementById("searchhr").classList.add("hidden");
        document.getElementById("searchsuggestions").classList.add("hidden");
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
document.getElementById("searchcontent").addEventListener("input",crossappear);
document.getElementById("explorebox").addEventListener("mouseenter", () =>
{
    document.getElementById("exploreimg").classList.add("animate-spin");
});
document.getElementById("explorebox").addEventListener("mouseleave", () =>
{
    document.getElementById("exploreimg").classList.remove("animate-spin");
});
