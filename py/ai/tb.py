

from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfVectorizer
#from sklearn.feature_extraction.text import TfidfTransformer
#from nltk.tokenize import RegexpTokenizer

# bring to ip
import txt

#tokenizer to remove unwanted elements from out data like symbols and numbers
#token = RegexpTokenizer(r'[a-zA-Z0-9]+')

cv = CountVectorizer()
tv = TfidfVectorizer()

ft = cv.fit_transform(txt.floyd)
tvfit = tv.fit_transform(txt.floyd)
