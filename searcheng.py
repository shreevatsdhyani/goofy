import warnings
import httpx
import re
import json
import asyncio


warnings.filterwarnings("ignore", category=DeprecationWarning)





# suggestiondict = {"songs":[],"artists":[],"card":{}}



# async def get_info(videoId,is_card=False,song_artist = False):
#     info_dict:dict = httpx.get(f"https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={videoId}",headers=headers).json()
#     info_dict.pop("provider_url")
#     info_dict.pop("type")
#     info_dict.pop("thumbnail_height")
#     info_dict.pop("thumbnail_width")
#     info_dict.pop("width")
#     info_dict.pop("height")
#     info_dict.pop("html")
#     info_dict.pop("provider_name")
#     info_dict.pop("version")
#     info_dict["author_name"] = info_dict["author_name"].replace(" - Topic","")
#     if is_card:
#         suggestiondict["card"] = info_dict
#         suggestiondict["artists"].append({"author_name":info_dict["author_name"],"thumbnail_url":eval(re.findall(r'"avatar":\{"thumbnails":\[([\s\S]*?)\]\}',httpx.get(info_dict["author_url"],headers=headers).content.decode("unicode_escape"))[-1])["url"]})
#     else:
#         suggestiondict["songs"].append(info_dict)
#         if song_artist:
#             suggestiondict["artists"].append({"author_name":info_dict["author_name"],"thumbnail_url":eval(re.findall(r'"avatar":\{"thumbnails":\[([\s\S]*?)\]\}',httpx.get(info_dict["author_url"],headers=headers).content.decode("unicode_escape"))[-1])["url"]})
    

# async def songsearch(songname):
#     page = httpx.get(f"https://music.youtube.com/search?q={songname}", headers=headers).content.decode("unicode_escape")
#     m:list = json.loads(re.findall(r'JSON.parse\(\'\{"query":"(.*)"\}\'\), data: ([\s\S]*?)}\);ytcfg.set',page)[0][1][1:-1])["contents"]["tabbedSearchResultsRenderer"]["tabs"][0]["tabRenderer"]["content"]["sectionListRenderer"]["contents"]
#     card = None
#     for i in m:
#         if "musicCardShelfRenderer" in i.keys():
#             if i["musicCardShelfRenderer"]["subtitle"]["runs"][0]["text"] in ("Video","Song"):
#                 try:
#                     card=i["musicCardShelfRenderer"]["contents"][1]["musicResponsiveListItemRenderer"]["flexColumns"][0]["musicResponsiveListItemFlexColumnRenderer"]["text"]["runs"][0]["navigationEndpoint"]["watchEndpoint"]["videoId"]
#                     # await asyncio.gather(get_info(card,True))
#                 except KeyError:
#                     pass    
#         elif "musicShelfRenderer" in i.keys():
#             if i["musicShelfRenderer"]["title"]["runs"][0]["text"] == "Songs":
#                 song1=i["musicShelfRenderer"]["contents"][0]["musicResponsiveListItemRenderer"]["flexColumns"][0]["musicResponsiveListItemFlexColumnRenderer"]["text"]["runs"][0]["navigationEndpoint"]["watchEndpoint"]["videoId"]

#                 song2=i["musicShelfRenderer"]["contents"][1]["musicResponsiveListItemRenderer"]["flexColumns"][0]["musicResponsiveListItemFlexColumnRenderer"]["text"]["runs"][0]["navigationEndpoint"]["watchEndpoint"]["videoId"]
                
#                 song3=i["musicShelfRenderer"]["contents"][2]["musicResponsiveListItemRenderer"]["flexColumns"][0]["musicResponsiveListItemFlexColumnRenderer"]["text"]["runs"][0]["navigationEndpoint"]["watchEndpoint"]["videoId"]
                
                
#                 if card is not None:
#                     await asyncio.gather(get_info(song1,song_artist=True),get_info(song2),get_info(song3),get_info(card,is_card=True))
#                 else:
#                     await asyncio.gather(get_info(song1,song_artist=True),get_info(song2,song_artist=True),get_info(song3))
#                 break



class Songsearch:
    def __init__(self,songname:str) -> None:
        self.songname = songname
        self.suggestiondict = {"songs":[],"artists":[],"card":{}}
        self.headers = {'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'}

    async def get_info(self,videoId:str,is_card:bool=False,song_artist:bool = False)->None:
        info_dict:dict = httpx.get(f"https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={videoId}",headers=self.headers).json()
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
            self.suggestiondict["card"] = info_dict
            self.suggestiondict["artists"].append({"author_name":info_dict["author_name"],"thumbnail_url":eval(re.findall(r'"avatar":\{"thumbnails":\[([\s\S]*?)\]\}',httpx.get(info_dict["author_url"],headers=self.headers).content.decode("unicode_escape"))[-1])["url"]})
        else:
            self.suggestiondict["songs"].append(info_dict)
            if song_artist:
                self.suggestiondict["artists"].append({"author_name":info_dict["author_name"],"thumbnail_url":eval(re.findall(r'"avatar":\{"thumbnails":\[([\s\S]*?)\]\}',httpx.get(info_dict["author_url"],headers=self.headers).content.decode("unicode_escape"))[-1])["url"]})

    async def songsearch(self)->dict:
        page = httpx.get(f"https://music.youtube.com/search?q={self.songname}", headers=self.headers).content.decode("unicode_escape")
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
                        await asyncio.gather(self.get_info(song1,song_artist=True),self.get_info(song2),self.get_info(song3),self.get_info(card,is_card=True))
                    else:
                        await asyncio.gather(self.get_info(song1,song_artist=True),self.get_info(song2,song_artist=True),self.get_info(song3))
                    return self.suggestiondict
    

# current_task=None
async def main(query):
    # task = asyncio.create_task(songsearch(query))
    # await songsearch(query)
    # if task.done():
    #     return task.result()
    # global current_task
    # suggestiondict["songs"].clear()
    # suggestiondict["artists"].clear()
    # print("suggestiondict cleared!!")
    # Cancel the ongoing task if it exists
    # if current_task and not current_task.done():
    #     current_task.cancel()
    
    # Create a new task for the current query
    # current_task = asyncio.create_task(songsearch(query))
    # asyncio.gather(clearDict())
    inst = Songsearch(query)
    # current_task = asyncio.gather(inst.songsearch())
    try:
        # await current_task
        return await inst.songsearch()
    except (asyncio.CancelledError,IndexError):
        pass
def search(query):
    print(query)
    return asyncio.run(main(query))
    # print(suggestiondict)
    
    # print(suggestiondict)
    # print("\n\n")
    # suggestiondict["songs"].clear()
    # suggestiondict["artists"].clear()
    # suggestiondict["card"].clear()
    

