import keyboard as kb
from time import sleep

with open('texto.txt', 'r', encoding='utf-8') as arquivo:
    texto = arquivo.read()

sleep(5)

kb.write(texto)