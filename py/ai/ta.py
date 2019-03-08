
# test natural lang. things basics

from sklearn.feature_extraction.text import CountVectorizer
from nltk.tokenize import RegexpTokenizer

# bring to ip
import txt

#tokenizer to remove unwanted elements from out data like symbols and numbers
token = RegexpTokenizer(r'[a-zA-Z0-9]+')

cv = CountVectorizer(
        lowercase=True,
        stop_words='english',
        ngram_range = (1,1),
        tokenizer = token.tokenize)

#text_counts= cv.fit_transform(data['Phrase'])

from sklearn.datasets import fetch_20newsgroups
from sklearn.naive_bayes import MultinomialNB
from sklearn.feature_extraction.text import TfidfTransformer
#from sklearn.feature_extraction.text import CountVectorizer



category_map = {
    'talk.religion.misc':'Religion',
    'rec.autos':'Autos',
    'rec.sport.hockey':'Hockey',
    'sci.electronics':'Electronics',
    'sci.space': 'Space'}


training_data = fetch_20newsgroups(
    subset = 'train',
    categories = category_map.keys(), shuffle = True, random_state = 5)

# Build a count vectorizer and extract the term counts −

vectorizer_count = CountVectorizer()
train_tc = vectorizer_count.fit_transform(training_data.data)
print("\nDimensions of training data:", train_tc.shape)

#The tf-idf transformer is created as follows −

tfidf = TfidfTransformer()
train_tfidf = tfidf.fit_transform(train_tc)

#Now, define the test data −

input_data = [
   'Discovery was a space shuttle',
   'Hindu, Christian, Sikh all are religions',
   'We must have to drive safely',
   'Puck is a disk made of rubber',
   'Television, Microwave, Refrigrated all uses electricity'
]

#The above data will help us train a Multinomial Naive Bayes classifier −

classifier = MultinomialNB().fit(train_tfidf, training_data.target)

#Transform the input data using the count vectorizer −

input_tc = vectorizer_count.transform(input_data)

#Now, we will transform the vectorized data using the tfidf transformer −

input_tfidf = tfidf.transform(input_tc)

#We will predict the output categories −

predictions = classifier.predict(input_tfidf)

#The output is generated as follows −
#
for sent, category in zip(input_data, predictions):
   print('\nInput Data:', sent,
         '\n Category:', 
      category_map[training_data.target_names[category]])



