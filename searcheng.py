import warnings
import httpx
import re
from bs4 import BeautifulSoup
import requests

warnings.filterwarnings("ignore", category=DeprecationWarning)

def search(query: str, num_tracks: int = 5) -> list[dict[str, str]]:
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0"
    }

    page = httpx.get(f"https://music.youtube.com/search?q={query}", headers=headers).content.decode("unicode_escape")

    track_ids = list(set(re.findall(r'"videoId":"(.*?)"', page)))[3:num_tracks+3]

    track_info_list = []

    for track_id in track_ids:
        track_info = httpx.get(f"https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={track_id}",
                               headers=headers).json()

        track_data = {
            "title": track_info["title"],
            "id": track_id,
            "url": f"https://music.youtube.com/watch?v={track_id}",
            "artwork": f"https://img.youtube.com/vi/{track_id}/0.jpg",
            "author": {"name": track_info["author_name"], "url": track_info["author_url"]}
        }
        track_info_list.append(track_data)

    return track_info_list

# def ultrapromaxscrapping():
# headers = {
#         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
#     }
# page = httpx.get(f"https://music.youtube.com/search?q=shape", headers=headers)

# with open("something.json","w",encoding="unicode_escape") as  f:
#     f.write(BeautifulSoup(page,"html5lib").prettify())
# p = requests.get("https://music.youtube.com/search?q=shape",headers)
# x = BeautifulSoup(page.content.decode("unicode_escape"),"html.parser")
# q=x.findAll("div",{"class":"style-scope ytmusic-shelf-renderer"})
# print(q)
# print(x.prettify().find("contents"))
# with open("something.html","w",encoding="unicode_escape") as  f:
#     f.write(bytes(x.prettify(),"utf-8").decode("unicode_escape").replace("\\",""))
# with open("something.html","w+") as  f:
#     x = bytes(f.read().encode()).decode("unicode_escape")
#     f.write(x)
