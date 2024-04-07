let expanded = true;
function lnav() {
    const navelements = ["home", "explore", "library", "addartists", "newplaylist", "hrnav"];
    if (expanded) {
        document.getElementById("leftnav").classList.replace("w-[240px]","w-[72px]");
        for (const i of navelements) {
            document.getElementById(i).classList.add("hidden");
        }
        expanded = false;
    } 
    else {
        document.getElementById("leftnav").classList.replace("w-[72px]","w-[240px]");
        for (const i of navelements) {

            document.getElementById(i).classList.remove("hidden");
    
        }
        expanded = true;
    }
}
function crossappear() {
    if (document.getElementById("searchcontent").value != "") {
        document.getElementById("clearcross").classList.remove("hidden");
        document.getElementById("searchbox").classList.replace("h-10","h-[245px]");
        document.getElementById("searchhr").classList.remove("hidden");
        document.getElementById("searchsuggestions").classList.remove("hidden");
        
    } else {
        document.getElementById("clearcross").classList.add("hidden");
        document.getElementById("searchbox").classList.replace("h-[245px]","h-10");
        document.getElementById("searchhr").classList.add("hidden");
        document.getElementById("searchsuggestions").classList.add("hidden");

    }
}
function clearinput() {
    document.getElementById("searchcontent").value = "";
    crossappear();
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