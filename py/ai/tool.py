
import requests


def fetchtxt(link):
    r = requests.get(result["link"])
    soup = bs4.BeautifulSoup(r.text)
    text = soup2txt.gettext(soup)
    result['text'] = text
    t.append(text)
    print(text[:100])



