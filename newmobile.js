let expanded = false;

let islike =false;
let isplaying = false;
let islyrics = false;
let repeat = 0;
let volume = "100";
// working player
const playerprogress = document.getElementById("playerprogress");
const song = document.getElementById("song");
const controllingicon = document.getElementById("playpause");

song.addEventListener("loadeddata",()=>
{
    playerprogress.max = Math.floor(song.duration);
    document.getElementById("song_duration").innerText = `${Math.floor(song.duration/60)}:${Math.floor(song.duration%60)}`;
});

function playpause() {
    const playbtn = document.getElementById("playpause");
    if (isplaying) {
        playbtn.src = "newassets/player/play.svg";
        playbtn.setAttribute("title", "Play");
        isplaying = false;
        song.pause();
        
    }
    else {
        playbtn.src = "newassets/player/pause.svg";
        playbtn.setAttribute("title", "Pause");
        isplaying = true;
        song.play();
    }
}




function volbtn() {
    const volume_slider = document.getElementById("volumeslider");
    const volbtn = document.getElementById("volbtn");
    
    if (volume_slider.value=="0") {
        volume_slider.value = volume;
        volumeManage();
    }
    else {
        volume = volume_slider.value;
        volbtn.src = "newassets/player/volmute.svg";
        volbtn.setAttribute("title", "Mute");
        volume_slider.value = "0";
        volumeManage();
    }
    song.volume = parseInt(volume_slider.value/100);
}

function lyricsbtn() {
    const lyricsbtn = document.getElementById("lyricsbtn");
    if (islyrics) {
        lyricsbtn.src = "newassets/player/lyrics.svg";
        lyricsbtn.setAttribute("title", "Lyrics");
        islyrics = false;
    }
    else {
        lyricsbtn.src = "newassets/player/nolyrics.svg";
        lyricsbtn.setAttribute("title", "Lyrics off");
        islyrics = true;
    }
}
function likebtn() {
    const likebtn = document.getElementById("likebtn");
    if (islike) {
        likebtn.src = "newassets/player/playerlikesong.svg";
        likebtn.setAttribute("title", "Like Song");
        islike = false;
    }
    else {
        likebtn.src = "newassets/player/playerlikesongblue.svg";
        likebtn.setAttribute("title", "Dislike Song");
        islike = true;
    }
}
function changerepeat() {
    const repeatelements = ["newassets/player/repeatoff.svg", "newassets/player/repeatonce.svg", "newassets/player/repeatall.svg"];
    const repbtn = document.getElementById("repeatingbtn");
    if (repeat==0) {
        repbtn.setAttribute("src", repeatelements[1]);
        repbtn.setAttribute("title", "Repeat once");
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

function volumeManage() {
    const volslider = document.getElementById("volumeslider");
    const volbtn = document.getElementById("volbtn");
    const slidervalue = parseInt(volslider.value);
    if (slidervalue<=0) {
        volbtn.src= "newassets/player/volmute.svg";
        volbtn.setAttribute("title", "Unmute");
    }
    else if(slidervalue<=33 && slidervalue>0){
        volbtn.src= "newassets/player/volmin.svg";
    }
    else if(slidervalue>33 && slidervalue<66)
    {
        volbtn.src= "newassets/player/volmid.svg";
    }
    else
    {
        volbtn.src= "newassets/player/volmax.svg";
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
if (song.readyState) {
    setInterval(sliderTools,1000);
}



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
    else if ((event.key == "m" || event.key=="M") && document.activeElement!=document.getElementById("searchcontent")) {
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
        document.getElementById("searchbox").classList.remove("rounded-2xl");
        document.getElementById("searchbox").classList.add("rounded-t-2xl");
        document.getElementById("searchbox").classList.add("rounded-b-xl");
        // document.getElementById("searchbox").classList.remove("border-b-2");
        document.getElementById("clearcross").classList.remove("hidden");
        // document.getElementById("searchbox").classList.replace("h-10", "h-[230px]");
        // document.getElementById("searchbox").classList.replace("h-12", "h-54");
        document.getElementById("searchbox").classList.replace("bg-[#68686638]", "bg-gray-800");
        // document.getElementById("searchhr").classList.remove("hidden");
        document.getElementById("searchsuggestions").classList.remove("hidden");
       


    } else {
        document.getElementById("searchbox").classList.add("rounded-2xl");
        document.getElementById("searchbox").classList.remove("rounded-t-2xl");
        document.getElementById("searchbox").classList.remove("rounded-b-xl");
        // document.getElementById("searchbox").classList.add("border-b-2");
        document.getElementById("clearcross").classList.add("hidden");
        // document.getElementById("searchbox").classList.replace("h-[230px]", "h-10");
        // document.getElementById("searchbox").classList.replace("h-20", "h-12");
        document.getElementById("searchbox").classList.replace("bg-gray-800", "bg-[#68686638]");
        // document.getElementById("searchhr").classList.add("hidden");
        document.getElementById("searchsuggestions").classList.add("hidden");
 
        closesearch();
    }
    // setTimeout(search(document.getElementById("searchcontent").value, 7),500);
    
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
            // document.getElementById("songname5").innerHTML = data["songs"][3]["title"];
            document.getElementById("songname6").innerHTML = data["artists"][0]["author_name"];
            // document.getElementById("songname7").innerHTML = data["artists"][1]["author_name"];
            
            document.getElementById("pic2").src = data["songs"][0]["thumbnail_url"];
            document.getElementById("pic3").src = data["songs"][1]["thumbnail_url"];
            document.getElementById("pic4").src = data["songs"][2]["thumbnail_url"];
            // document.getElementById("pic5").src = data["songs"][3]["thumbnail_url"];
            document.getElementById("pic6").src = data["artists"][0]["thumbnail_url"];
            // document.getElementById("pic7").src = data["artists"][1]["thumbnail_url"];
        })
        .catch(error => {
            // Handle any errors
            console.error('Error fetching search results:', error);
        });
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



// antony
document.getElementById("explorebox").addEventListener("mouseenter", () => {
    document.getElementById("exploreimg").classList.add("animate-spin");
});
document.getElementById("explorebox").addEventListener("mouseleave", () => {
    document.getElementById("exploreimg").classList.remove("animate-spin");
});
