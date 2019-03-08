

from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics import accuracy_score

#from nltk.tokenize import RegexpTokenizer

# bring to ip
import txt




tv = TfidfVectorizer()
fit = tv.fit_transform([txt.news])

trans = tv.transform(['what is new about william and collins'])



#s = accuracy_score(trans.toarray()[0], fit.toarray()[0])
#print(s)
