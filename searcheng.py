import warnings
import httpx
import re

warnings.filterwarnings("ignore", category=DeprecationWarning)

def search(query: str, num_tracks: int = 5) -> list[dict[str, str]]:
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0"
    }

    page = httpx.get(f"https://music.youtube.com/search?q={query}", headers=headers).content.decode("unicode_escape")

    track_ids = list(set(re.findall(r'"videoId":"(.*?)"', page)))[:num_tracks]

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
