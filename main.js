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
    } else {
        document.getElementById("clearcross").classList.add("hidden");
    }
}
function clearinput() {
    document.getElementById("searchcontent").value = "";
    crossappear();
}
document.getElementById("searchcontent").addEventListener("input",crossappear);
