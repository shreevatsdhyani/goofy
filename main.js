let expanded = true;
let isplaying = false;
let islyrics = false;
let repeat = 0;
// working player
const playerprogress = document.getElementById("playerprogress");
const song = document.getElementById("song");
const controllingicon = document.getElementById("playpause");

playerprogress.max = song.duration;
document.getElementById("song_duration").innerText = `${Math.floor(song.duration/60)}:${Math.floor(song.duration%60)}`
// playerprogress.value = song.currentTime;
// song.onloadeddata = function(){
//     playerprogress.max = song.duration;
//     playerprogress.value = song.currentTime;
//     console.log(playerprogress.max);
//     console.log(playerprogress.value);
// }


function lnav() {
    const navelements = ["home", "explore", "library", "likedsongs", "addartists", "newplaylist", "hrnav", "profile"];
    if (expanded) {
        document.getElementById("leftnav").classList.replace("w-[240px]", "w-[72px]");
        document.getElementById("leftnav").classList.remove("bg-[#0e0e0a]");
        document.getElementById("parentscrolldiv").classList.replace("w-[1040px]", "w-[1216px]");
        document.getElementById("hel").classList.replace("*:w-48", "*:w-[52px]");
        document.getElementById("hel").classList.replace("*:pl-2", "*:pl-[14px]");
        document.getElementById("hel").classList.replace("*:ml-3", "*:ml-2");
        document.getElementById("profilebox").classList.replace("w-48", "w-[52px]");
        document.getElementById("profilebox").classList.replace("pl-2", "pl-[14px]");
        document.getElementById("profilebox").classList.replace("ml-1", "ml-2");
        document.getElementById("scrollnavbtn").classList.replace("pl-[800px]", "pl-[968px]");
        document.getElementById("rightside").classList.replace("ml-64", "ml-[98px]");

        for (const i of navelements) {
            document.getElementById(i).classList.add("hidden");
        }
        expanded = false;
    }
    else {
        document.getElementById("leftnav").classList.replace("w-[72px]", "w-[240px]");
        document.getElementById("leftnav").classList.add("bg-[#0e0e0a]");
        document.getElementById("parentscrolldiv").classList.replace("w-[1216px]", "w-[1040px]");
        document.getElementById("hel").classList.replace("*:w-[52px]", "*:w-48");
        document.getElementById("hel").classList.replace("*:pl-[14px]", "*:pl-2");
        document.getElementById("hel").classList.replace("*:ml-2", "*:ml-3");
        document.getElementById("profilebox").classList.replace("w-[52px]", "w-48");
        document.getElementById("profilebox").classList.replace("pl-[14px]", "pl-2");
        document.getElementById("profilebox").classList.replace("ml-2", "ml-1");
        document.getElementById("scrollnavbtn").classList.replace("pl-[968px]", "pl-[800px]");
        document.getElementById("rightside").classList.replace("ml-[98px]", "ml-64");

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



function horizontalscroll(left,eleid) {
    if (left) {
        document.getElementById(eleid).scrollLeft -= 200;
    } else {
        document.getElementById(eleid).scrollLeft += 200;
    }

}

// regulates the working of the song
function playpause() {
    const playbtn = document.getElementById("playpause");
    if (isplaying) {
        playbtn.src = "assets/play.svg";
        playbtn.setAttribute("title", "Play");
        isplaying = false;
        song.pause();
        
    }
    else {
        playbtn.src = "assets/pause.svg";
        playbtn.setAttribute("title", "Pause");
        isplaying = true;
        song.play();
    }
}




function volbtn() {
    const volume_slider = document.getElementById("volumeslider");
    const volbtn = document.getElementById("volbtn");
    
    if (volume_slider.value=="0") {
        volbtn.src = "assets/volmax.svg";
        volbtn.setAttribute("title", "Unmute");
        volume_slider.value = "100";
        // song.muted = false;
        // isvolmax = false;
    }
    else {
        volbtn.src = "assets/volmute.svg";
        volbtn.setAttribute("title", "Mute");
        volume_slider.value = "0";
        // isvolmax = true;
        // song.muted = true;
    }
    song.volume = parseInt(volume_slider.value/100);
}

function lyricsbtn() {
    const lyricsbtn = document.getElementById("lyricsbtn");
    if (islyrics) {
        lyricsbtn.src = "assets/lyrics.svg";
        lyricsbtn.setAttribute("title", "Lyrics");
        islyrics = false;
    }
    else {
        lyricsbtn.src = "assets/lyricsoff.svg";
        lyricsbtn.setAttribute("title", "Lyrics off");
        islyrics = true;
    }
}
function changerepeat() {
    const repeatelements = ["assets/repeatoff.svg", "assets/repeatone.svg", "assets/repeat.svg"];
    const repbtn = document.getElementById("repeatingbtn");
    if (repeat==0) {
        repbtn.setAttribute("src", repeatelements[1]);
        repbtn.setAttribute("title", "Repeat one");
        repeat = 1;
        // song.loop = true;
    }
    else if (repeat==1) {
        repbtn.setAttribute("src", repeatelements[2]);
        repbtn.setAttribute("title", "Repeat all");
        repeat = 2;
    }
    else {
        repbtn.setAttribute("src", repeatelements[0]);
        repbtn.setAttribute("title", "Repeat off");
        repeat =0;
        // song.loop = false;
    }

}
// Define the search function in your JavaScript code
function search(query) {
    // Construct the URL with query parameters
    const url = `http://127.0.0.1:5000/api/search?query=${encodeURIComponent(query)}`;
    // Make a GET request using fetch
    fetch(url)
        .then(response => {
            // Check if the response is OK (status code 200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the JSON response
            return response.json();
        })
        .then(data => {
            console.log(data);
            try {
                document.getElementById("songname1").innerHTML = data["card"]["title"];
                document.getElementById("pic1").src = data["card"]["thumbnail_url"];
            } catch (TypeError) {
                
            }
            
            document.getElementById("songname2").innerHTML = data["songs"][0]["title"];
            document.getElementById("songname3").innerHTML = data["songs"][1]["title"];
            document.getElementById("songname4").innerHTML = data["songs"][2]["title"];
            document.getElementById("songname5").innerHTML = data["artists"][0]["author_name"];
            
            document.getElementById("pic2").src = data["songs"][0]["thumbnail_url"];
            document.getElementById("pic3").src = data["songs"][1]["thumbnail_url"];
            document.getElementById("pic4").src = data["songs"][2]["thumbnail_url"];
            document.getElementById("pic5").src = data["artists"][0]["thumbnail_url"];
        })
        .catch(error => {
            // Handle any errors
            console.error('Error fetching search results:', error);
        });
}



// Example usage: call the search function with a query


document.getElementById("searchcontent").addEventListener("input", crossappear);
document.getElementById("explorebox").addEventListener("mouseenter", () => {
    document.getElementById("exploreimg").classList.add("animate-spin");
});
document.getElementById("explorebox").addEventListener("mouseleave", () => {
    document.getElementById("exploreimg").classList.remove("animate-spin");
});
document.getElementById("likedsongsbox").addEventListener("mouseenter", () => {
    document.getElementById("likedsongsimg").classList.add("animate-pulse");
});
document.getElementById("likedsongsbox").addEventListener("mouseleave", () => {
    document.getElementById("likedsongsimg").classList.remove("animate-pulse");
});



function volumeManage() {
    const volslider = document.getElementById("volumeslider");
    const volbtn = document.getElementById("volbtn");
    const slidervalue = parseInt(volslider.value);
    if (slidervalue<=0) {
        volbtn.src= "assets/volmute.svg";
    }
    else if(slidervalue<=33 && slidervalue>0){
        volbtn.src= "assets/volmin.svg";
    }
    else if(slidervalue>33 && slidervalue<66)
    {
        volbtn.src= "assets/volmid.svg";
    }
    else
    {
        volbtn.src= "assets/volmax.svg";
    }
    song.volume = slidervalue/100;
}

document.getElementById("volumeslider").addEventListener("input",volumeManage)

function sliderTools() {
    const min = Math.floor(song.currentTime/60);
    const sec = Math.floor(song.currentTime%60) < 10 ? "0" + Math.floor(song.currentTime%60):Math.floor(song.currentTime%60);
    playerprogress.value = song.currentTime;
    
    document.getElementById("song_progress").innerText = `${min}:${sec}`;
    if (song.ended) {
        const playbtn = document.getElementById("playpause");
        playbtn.src = "assets/play.svg";
        playbtn.setAttribute("title", "Play");
        isplaying = false;
        if (repeat==1 || repeat==2) {
            // playpause();
            song.currentTime=0;
            playpause();

        }
    }
}

// setInterval(() => {
    
//     sliderTools();
// }, 1000);

setInterval(sliderTools,1000);


playerprogress.addEventListener("input",()=>
{
    song.currentTime = playerprogress.value;
    document.getElementById("song_progress").innerText = song.currentTime;
    const min = Math.floor(song.currentTime/60);
    const sec = Math.floor(song.currentTime%60) < 10 ? "0" + Math.floor(song.currentTime%60):Math.floor(song.currentTime%60);
    document.getElementById("song_progress").innerText = `${min}:${sec}`;
    
});

document.addEventListener("keydown",function(event)
{
    if (event.key == " " && document.activeElement!=document.getElementById("searchcontent")) {
        event.preventDefault();
        playpause();
    }
    else if (event.key == "m" && document.activeElement!=document.getElementById("searchcontent")) {
        event.preventDefault();
        volbtn();
    }
    else if (event.key == "ArrowRight" && document.activeElement!=document.getElementById("searchcontent")) {

        event.preventDefault();
        if (document.activeElement==document.getElementById("volumeslider") || document.activeElement==document.getElementById("volumebutton")) {
            const volslider = document.getElementById("volumeslider");
            volslider.value = parseInt(volslider.value) + 5;
            volumeManage();
            // volslider.value = (parseInt(volslider.value)+10).toString();
        }
        else
        {
            song.currentTime+=5;
            sliderTools();
        }
        
    }
    else if (event.key == "ArrowLeft" && document.activeElement!=document.getElementById("searchcontent")) {
        event.preventDefault();
        if (document.activeElement==document.getElementById("volumeslider") || document.activeElement==document.getElementById("volumebutton")) {
            const volslider = document.getElementById("volumeslider");
            volslider.value = parseInt(volslider.value) - 5;
            volumeManage();
            // volslider.value = (parseInt(volslider.value)+10).toString();
        }
        else
        {
            song.currentTime-=5;
            sliderTools();
        }
        
    }
    
    
});