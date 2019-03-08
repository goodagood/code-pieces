
from sklearn.feature_extraction.text import CountVectorizer


Sentences = ['We are using the Bag of Word model', 
        'Bag of Word model is used for extracting the features.']

vectorizer = CountVectorizer()

features_text = vectorizer.fit_transform(Sentences).todense()

print(vectorizer.vocabulary_)


###



from sklearn.datasets import fetch_20newsgroups
from sklearn.naive_bayes import MultinomialNB
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.feature_extraction.text import CountVectorizer


category_map = {'talk.religion.misc':'Religion',
        'rec.autos':'Autos',
        'rec.sport.hockey':'Hockey',
        'sci.electronics':'Electronics',
        'sci.space': 'Space'}


training_data = fetch_20newsgroups(subset = 'train',
           categories = category_map.keys(), shuffle = True, random_state = 5)


vectorizer_count = CountVectorizer()
train_tc = vectorizer_count.fit_transform(training_data.data)
print("\nDimensions of training data:", train_tc.shape)


tfidf = TfidfTransformer()
train_tfidf = tfidf.fit_transform(train_tc)


input_data = [
        'Discovery was a space shuttle',
        'Hindu, Christian, Sikh all are religions',
        'We must have to drive safely',
        'Puck is a disk made of rubber',
        'Television, Microwave, Refrigrated all uses electricity'
        ]


classifier = MultinomialNB().fit(train_tfidf, training_data.target)


input_tc = vectorizer_count.transform(input_data)


input_tfidf = tfidf.transform(input_tc)


predictions = classifier.predict(input_tfidf)


for sent, category in zip(input_data, predictions):
       print('\nInput Data:', sent, 
             '\n Category:', '\n',
             category_map[training_data.target_names[category]])



### gender finder


import random

from nltk import NaiveBayesClassifier
from nltk.classify import accuracy as nltk_accuracy
from nltk.corpus import names


def extract_features(word, N = 2):
      last_n_letters = word[-N:]
      return {'feature': last_n_letters.lower()}
        
if __name__=='__main__':


     male_list = [(name, 'male') for name in names.words('male.txt')]
     female_list = [(name, 'female') for name in names.words('female.txt')]
     data = (male_list + female_list)

     random.seed(5)
     random.shuffle(data)


namesInput = ['Rajesh', 'Gaurav', 'Swati', 'Shubha']


train_sample = int(0.8 * len(data))


for i in range(1, 6):
    print('\nNumber of end letters:', i)
    features = [(extract_features(n, i), gender) for (n, gender) in data]
    train_data, test_data = features[:train_sample], features[train_sample:]

    classifier = NaiveBayesClassifier.train(train_data)

    accuracy_classifier = round(100 * nltk_accuracy(classifier, test_data), 2)
    print('Accuracy = ' + str(accuracy_classifier) + '%')


for name in namesInput:
   print(name, '==>', classifier.classify(extract_features(name, i)))



