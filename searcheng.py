import warnings
import httpx
import re
import json
import time
import asyncio
# from bs4 import BeautifulSoup
# import requests

warnings.filterwarnings("ignore", category=DeprecationWarning)

# def search(query: str, num_tracks: int = 5) -> list[dict[str, str]]:
#     headers = {
#         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0"
#     }

#     page = httpx.get(f"https://music.youtube.com/search?q={query}", headers=headers).content.decode("unicode_escape")

#     track_ids = list(set(re.findall(r'"videoId":"(.*?)"', page)))[3:num_tracks+3]

#     track_info_list = []

#     for track_id in track_ids:
#         track_info = httpx.get(f"https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={track_id}",
#                                headers=headers).json()

#         track_data = {
#             "title": track_info["title"],
#             "id": track_id,
#             "url": f"https://music.youtube.com/watch?v={track_id}",
#             "artwork": f"https://img.youtube.com/vi/{track_id}/0.jpg",
#             "author": {"name": track_info["author_name"], "url": track_info["author_url"]}
#         }
#         track_info_list.append(track_data)

#     return track_info_list

# def ultrapromaxscrapping():
# headers = {
#         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
#     }
headers = {'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'}

# page = httpx.get(f"https://music.youtube.com/search?q=shape", headers=headers).content.decode("unicode_escape")

# page = bytes(str(page),"utf-8").decode("unicode_escape").replace("\\","")

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

# with open("botnewscraped.html","w",encoding="utf-8") as nf:
#     nf.write(page)

# with open("scraped.html","r") as f:
#     x = re.findall(r'path: \'\\/search\',([\s\S]*?)}\);\s*ytcfg.set',f.read())
#     with open("cleanscrapped.txt","w",encoding="utf-8") as file:
#         file.write(bytes(x[0],"utf-8").decode("unicode_escape"))
        # print(bytes(x[0],"utf-8").decode("unicode_escape").replace("\\",""))

# with open("newscraped.html","r") as f:
#     x = re.findall(r'JSON.parse\(\'\{"query":"(.*)"\}\'\), data: ([\s\S]*?)}\);ytcfg.set',f.read())
#     with open("cleanscrapped.txt","w") as file:
#         file.write(x[0][1])
        # json.dump(json.loads(x[0][1]),file,indent=4)
# with open("cleanscrapped.txt","r") as f:
#     with open("cleanscrapped.json","w") as file:
#         json.dump(json.loads(f.read()[1:-1]),file,indent=4)

# with open("testing.txt", "r") as f:
#     with open("cleanscrapped.json","w") as file:
#         file.write(f.read()[1:-1].replace('\\"','"').replace("\\{","\n{"))
        # print(ast.literal_eval(f.read()))
        # json.dump(ast.literal_eval(f.read()[1:-1]),file,indent=4)

# with open("cleanscrapped.txt","r") as file:
#     m = re.findall(r':".*".*".*",',file.read()[1:-1]) 
#     print(m)

# with open("botnewscraped.html","r",encoding="utf-8") as nf:
#     with open("botcleanscrapped.json","w") as f:
#         x = re.findall(r'JSON.parse\(\'\{"query":"(.*)"\}\'\), data: ([\s\S]*?)}\);ytcfg.set',nf.read())
#         json.dump(json.loads(x[0][1][1:-1]),f,indent=3)


"""Now picking data from botcleanscrapped.json"""

suggestiondict = {"songs":[],"artists":[]}

# async def get_author(channel_url,is_card = False,song_num=0):
#     author =  httpx.get(channel_url,headers=headers).content.decode("unicode_escape")
#     x = re.findall(r'"avatar":\{"thumbnails":\[([\s\S]*?)\]\}',author)
#     if is_card:
#         suggestiondict["artists"].append({suggestiondict["card"]["author_name"]:eval(x[-1])["url"]})
#     else:
#         suggestiondict["artists"].append({suggestiondict["songs"][song_num]["author_name"]:eval(x[-1])["url"]})

async def get_info(videoId,is_card=False,song_artist = False):
    info_dict:dict = httpx.get(f"https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={videoId}",headers=headers).json()
    info_dict.pop("provider_url")
    info_dict.pop("type")
    info_dict.pop("thumbnail_height")
    info_dict.pop("thumbnail_width")
    info_dict.pop("width")
    info_dict.pop("height")
    info_dict.pop("html")
    info_dict.pop("provider_name")
    info_dict.pop("version")
    info_dict["author_name"] = info_dict["author_name"].replace(" - Topic","")
    if is_card:
        suggestiondict["card"] = info_dict
        suggestiondict["artists"].append({"author_name":info_dict["author_name"],"thumbnail_url":eval(re.findall(r'"avatar":\{"thumbnails":\[([\s\S]*?)\]\}',httpx.get(info_dict["author_url"],headers=headers).content.decode("unicode_escape"))[-1])["url"]})
    else:
        suggestiondict["songs"].append(info_dict)
        if song_artist:
            suggestiondict["artists"].append({"author_name":info_dict["author_name"],"thumbnail_url":eval(re.findall(r'"avatar":\{"thumbnails":\[([\s\S]*?)\]\}',httpx.get(info_dict["author_url"],headers=headers).content.decode("unicode_escape"))[-1])["url"]})


async def songsearch(songname):
    page = httpx.get(f"https://music.youtube.com/search?q={songname}", headers=headers).content.decode("unicode_escape")
    m:list = json.loads(re.findall(r'JSON.parse\(\'\{"query":"(.*)"\}\'\), data: ([\s\S]*?)}\);ytcfg.set',page)[0][1][1:-1])["contents"]["tabbedSearchResultsRenderer"]["tabs"][0]["tabRenderer"]["content"]["sectionListRenderer"]["contents"]
    card = None
    for i in m:
        if "musicCardShelfRenderer" in i.keys():
            if i["musicCardShelfRenderer"]["subtitle"]["runs"][0]["text"] in ("Video","Song"):
                try:
                    card=i["musicCardShelfRenderer"]["contents"][1]["musicResponsiveListItemRenderer"]["flexColumns"][0]["musicResponsiveListItemFlexColumnRenderer"]["text"]["runs"][0]["navigationEndpoint"]["watchEndpoint"]["videoId"]
                    # await asyncio.gather(get_info(card,True))
                except KeyError:
                    pass    
        elif "musicShelfRenderer" in i.keys():
            if i["musicShelfRenderer"]["title"]["runs"][0]["text"] == "Songs":
                song1=i["musicShelfRenderer"]["contents"][0]["musicResponsiveListItemRenderer"]["flexColumns"][0]["musicResponsiveListItemFlexColumnRenderer"]["text"]["runs"][0]["navigationEndpoint"]["watchEndpoint"]["videoId"]

                song2=i["musicShelfRenderer"]["contents"][1]["musicResponsiveListItemRenderer"]["flexColumns"][0]["musicResponsiveListItemFlexColumnRenderer"]["text"]["runs"][0]["navigationEndpoint"]["watchEndpoint"]["videoId"]
                
                song3=i["musicShelfRenderer"]["contents"][2]["musicResponsiveListItemRenderer"]["flexColumns"][0]["musicResponsiveListItemFlexColumnRenderer"]["text"]["runs"][0]["navigationEndpoint"]["watchEndpoint"]["videoId"]
                
                
                if card is not None:
                    await asyncio.gather(get_info(song1,song_artist=True),get_info(song2),get_info(song3),get_info(card,is_card=True))
                    # await asyncio.gather(get_author(suggestiondict["songs"][0]["author_url"]),get_author(suggestiondict["card"]["author_url"],True))
                else:
                    await asyncio.gather(get_info(song1,song_artist=True),get_info(song2,song_artist=True),get_info(song3))
                    # await asyncio.gather(get_author(suggestiondict["songs"][0]["author_url"]),get_author(suggestiondict["songs"][1]["author_url"],song_num=1))
                return suggestiondict

    

def search(query):
    print(query)
    x = asyncio.run(songsearch(query))
    print(x)
    return x
    

# x = time.time()
# print(songsearch(input("enter song name: ")))
# asyncio.run(songsearch("hello"))
# print(suggestiondict)
# print(time.time()-x)
# print(suggestiondict)
# author =  httpx.get("https://www.youtube.com/channel/UClmXPfaYhXOYsNn_QUyheWQ",headers=headers).content.decode("unicode_escape")
# with open("authorscrapped.html","r",encoding="utf-8") as nf:
#         x = re.findall(r'"avatar":\{"thumbnails":\[([\s\S]*?)\]\}',nf.read())
#         # print(len(eval(x[1])))
#         print(eval(x[1])["url"])
# print(author)
# https://www.youtube.com/channel/UClmXPfaYhXOYsNn_QUyheWQ
# page = httpx.get(f"https://music.youtube.com/search?q=samsung", headers=headers).content.decode("unicode_escape")
# with open("helloscrap.json","w") as hf:
#         json.dump(page,hf)
# flexcol = re.findall(r'\"flexColumns\":\[(.*)\],',page)
# print(eval(flexcol[0]))

# m = json.loads(re.findall(r'JSON.parse\(\'\{"query":"(.*)"\}\'\), data: ([\s\S]*?)}\);ytcfg.set',page)[0][1][1:-1])
# with open("samsung.json","w") as hf:
#     json.dump(m,hf,indent=3)