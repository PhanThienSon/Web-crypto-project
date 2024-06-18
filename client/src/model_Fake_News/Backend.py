from flask import jsonify, request, Flask
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import load_model
import numpy as np
import nltk
import re
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer



def clean_text(text):
    text = text.lower()
    text = re.sub(r"[^\w\s]", "", text)

    tokens = word_tokenize(text)

    stop_words = set(stopwords.words("english"))
    tokens = [token for token in tokens if token not in stop_words]

    lemmatizer = WordNetLemmatizer()
    tokens = [lemmatizer.lemmatize(token) for token in tokens]

    cleaned_text = " ".join(tokens)
    return cleaned_text


app = Flask(__name__)

loaded_model = load_model("lstm_model.h5")

max_sequence_length = 50


@app.route("/predict", methods=['POST'])
def predict():
    json_data = request.json
    data = json_data['news']

    new_data = clean_text(data)

    tokenizer = Tokenizer()
    tokenizer.fit_on_texts([new_data])

    sequence = tokenizer.texts_to_sequences([new_data])
    padded_sequence = pad_sequences(sequence, padding='pre', maxlen=max_sequence_length)

    prediction = loaded_model.predict(padded_sequence)
    binary_prediction = np.round(prediction).flatten()[0]
    print(binary_prediction)
    response = {"prediction": int(binary_prediction)}

    return jsonify(response)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=6000, debug=True)