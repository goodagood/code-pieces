



from googleapiclient.discovery import build

def google_search(search_term, api_key, cse_id, **kwargs):

  service = build("customsearch", "v1", developerKey=api_key)
  res = service.cse().list(q=search_term, cx=cse_id, **kwargs).execute()
  #return res['items']
  return res


'''
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
