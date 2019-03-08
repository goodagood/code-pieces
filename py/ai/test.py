
import requests
import bs4

from os.path import expanduser
import sys
sys.path.append(expanduser('~'))
sys.path.append('.')


# keys in home folder
import keys

import search
import soup2txt

import txt


my_api_key = keys.google_api_key
my_cse_id  = keys.google_search_engine_id

def dosearch():
    results = search.google_search("try to find god", my_api_key, my_cse_id, num=10) 

    for result in results['items']:
        print(result["link"])
        link = result["link"]
        text = fetchtxt(link)

        result['text'] = text
        print(text[:100])

    return results


def fetchtxt(link):
    r = requests.get(link)
    soup = bs4.BeautifulSoup(r.text, 'html.parser')
    text = soup2txt.gettext(soup)
    print(text[:100])
    return text


def words():
    # try some algorithm

    print(txt.ta)
    pass


links = '''
    https://www.everystudent.com/features/know-God.html
    https://www.youtube.com/watch?v=pgmiPXAwiLg
    https://www.huffingtonpost.com/steve-mcswain/how-to-find-god-the-five-_b_4660375.html
    https://www.ted.com/talks/anjali_kumar_my_failed_mission_to_find_god_and_what_i_found_instead?language=en
    https://www.beliefnet.com/faiths/galleries/8-signs-god-is-trying-to-get-your-attention.aspx
    https://en.wikipedia.org/wiki/3_Acts_of_God
    https://www.imdb.com/title/tt3455338/
    https://thelife.com/dont-know-how
    https://www.amazon.com/Just-Do-Something-Liberating-Approach/dp/0802458386
    https://www.desiringgod.org/articles/why-are-so-many-christians-unhappy
    '''

if __name__ == "__main__":
    print(' __name__ == "__main__"')
    #words()

    fetchtxt("https://thelife.com/dont-know-how")


