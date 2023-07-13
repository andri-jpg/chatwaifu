import eel
import json
import time
import numpy as np
import pyaudio
import random
import soundfile as sf
from tts import tts_infer
from translate import translator
from llm_models import ChainingModel
import threading
from pysentimiento import create_analyzer

eel.init('chat')

with open('config.json') as user_config:
    configs = json.load(user_config)

name = configs['user_name']
assistant_name = configs['bot_name']
generator = None
emotion_analyzer = None
ts = None
tl = None

@eel.expose
def initialize_model():
    global generator, emotion_analyzer, ts, tl

    with open('config.json') as user_config:
        configs = json.load(user_config)

    name = configs['user_name']
    assistant_name = configs['bot_name']

    generator = ChainingModel(
        model='RedPajama-INCITE-Chat-3B-v1-q5_1',
        name=name,
        assistant_name=assistant_name
    )
    emotion_analyzer = create_analyzer(task="emotion", lang="en", model_name='bertweet-base-emotion-analysis')
    ts = tts_infer(model_name=configs['vits_model'])
    tl = translator(indonesian=False)

words_to_clean = ["\n<human", "\n<bot"]

def change_words(words, name, assistant_name):
    new_words = []
    for word in words:
        new_word = word.replace('human', name)
        new_words.append(new_word)
        new_word = word.replace('bot', assistant_name)
        new_words.append(new_word)
    return new_words

words_clean = change_words(words_to_clean, name, assistant_name)

        
def clean_res(result, words_to_clean):
    cleaned_result = result
    for word in words_clean:
        cleaned_result = cleaned_result.replace(word, "")
    return cleaned_result
p = pyaudio.PyAudio()
@eel.expose
def play_audio():
    filename = 'dialog.wav'
    data, samplerate = sf.read(filename, dtype='float32')

    data_int = (data * 32767).astype(np.int16)

    stream = p.open(format=pyaudio.paInt16,
                    channels=1,
                    rate=samplerate,
                    output=True)
    chunk_size = 1024
    i = 0
    while i < len(data_int):
        chunk_end = min(i + chunk_size, len(data_int))
        stream.write(data_int[i:chunk_end].tobytes())
        i += chunk_size

    stream.stop_stream()
    stream.close()

@eel.expose
def read_config_file():
    try:
        with open('config.json') as file:
            data = json.load(file)
            return data
    except FileNotFoundError:
        return None

@eel.expose
def save_config_file(data):
    try:
        with open('config.json', 'w') as file:
            json.dump(data, file, indent=2)
        return True
    except:
        return False

idle = [('waifu/idle.png')]
blink = [('waifu/blink.png')]
others = [(f"waifu/other{i}.png") for i in range(1, 6)]
anger = [(f"waifu/anger{i}.png") for i in range(1, 3)]
disgust = [(f"waifu/disgust{i}.png") for i in range(1, 3)]
fear = [(f"waifu/fear{i}.png") for i in range(1, 3)]
joy = [(f"waifu/joy{i}.png") for i in range(1, 3)]
surprise = [('waifu/surprise.png')]
sadness = [('waifu/sad.png')]
emotion_images = {
    'joy': joy,
    'others': others,
    'surprise': surprise,
    'disgust': disgust,
    'sadness': sadness,
    'fear': fear,
    'anger': anger
}

@eel.expose                       
def handleinput(x):
    eel.disableText()
    eel.statusBot('typing...')
    result = generator.chain(x)
    result = result["text"]
    en_answer = clean_res(result, words_to_clean)
    eel.botResponse(en_answer)
    eel.statusBot('recording audio....')
    emotion = emotion_analyzer.predict(en_answer).output 
    jp_answer = tl.en_jp(en_answer)
    ts.convert(jp_answer)
    eel.Audio()
    if jp_answer is not None:
        if emotion in emotion_images:
            image_list=emotion_images[emotion]
            random_index = random.randint(0, len(image_list) - 1)
            image = image_list[random_index]
            eel.emotion(image)
            eel.disableText('enable')
            eel.statusBot('idle')

eel.start('index.html', size =(903,860)) 