import eel
import pyaudio
import numpy as np
import soundfile as sf
import json
import time
import numpy as np
import pyaudio
import random
import soundfile as sf

eel.init('chat')      
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
    eel.botResponse('halo')
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
@eel.expose                       
def handleinput(x):
    print(x)


eel.botResponse('r')

eel.start('index.html', size =(903,860), mode='edge') 