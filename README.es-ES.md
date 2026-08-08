

<div align="center">
  <h1>ChatWaifu: Una interfaz de chat simple con una waifu anime</h1>
  <p>
    <a href="https://github.com/andri-jpg/chatwaifu"><img src="https://forthebadge.com/images/badges/built-with-love.svg" alt="Built with love"></a>
  </p>
  
  [![made-with-python](https://img.shields.io/badge/Made%20with-Python-1f425f.svg)](https://www.python.org/)
  [![license](https://img.shields.io/github/license/andri-jpg/chatwaifu)](LICENSE)
</div>

## Descripción

ChatWaifu es una interfaz de chat fácil de usar que permite a los usuarios interactuar con un personaje de waifu anime. Ofrece una interfaz de usuario simple e intuitiva para mantener conversaciones atractivas con tu compañero virtual. Desarrollado con Python, ChatWaifu permite una comunicación fluida con una waifu anime, brindando una experiencia de chat encantadora. Este proyecto es una implementación de la [pipeline de PyWaifu](https://www.github.com/andri-jpg/PyWaifu).

ChatWaifu se ejecuta sin conexión en tu PC y consume aproximadamente menos de 4 GB de RAM, lo que significa que puede funcionar en sistemas con al menos 6 GB de RAM.

![ram](https://github.com/andri-jpg/chatwaifu/assets/91838310/22a23c24-fb4e-481f-ae9d-c29df3cd9dee)

## Las ilustraciones de personajes anime utilizadas en este proyecto son proporcionadas por @Zr6Ov a través de Picrew. <br> Twitter: [@Zr6Ov](https://twitter.com/Zr6Ov) <br> Enlace al perfil de Picrew: [✦絢瀬](https://picrew.me/en/search/creator?crid=1560771)

*Activa el sonido 🔊


https://github.com/andri-jpg/chatwaifu/assets/91838310/54847989-db7b-4f9f-bbb7-66fefe0c7ef8


## Características

- Chat en tiempo real con un personaje de waifu anime.
- Interfaz de usuario simple e intuitiva.
- Configuración y personalización fáciles.
- Sin conexión (offline).

## Personalización
- Personaje Waifu: Puedes personalizar la apariencia y el comportamiento del personaje waifu modificando config.json, template.json y la carpeta waifu.
- Interfaz de usuario: Personaliza la interfaz de usuario modificando los archivos HTML y CSS según tus preferencias.

## Requisitos:
- Git
- Python 3.9.16 (recomendado)

## Instalación:
- Asegúrate de tener instaladas las herramientas de compilación de C/C++ y de que CMake esté instalado.
- Instala las herramientas de compilación de msvc si estás usando Windows [Build tools](https://aka.ms/vs/17/release/vs_BuildTools.exe)
- Configura un entorno virtual (venv) o Miniconda (opcional pero altamente recomendado).
- Clona el repositorio:
  ```bash
  git clone https://github.com/andri-jpg/chatwaifu
  cd chatwaifu
  ```
- Instala los paquetes requeridos:
  ```bash
  pip install -r requirements.txt
  
  ```

## Uso:
- Ejecuta `main.py`:
  ```bash
  # Para el modo predeterminado
  python main.py

  # Para el modo en indonesio
  python main_indonesian.py
  ```

## TODO
- Documentación

## Créditos:
- [pysentimentio](https://github.com/pysentimiento)
- [@Zr6Ov](https://twitter.com/Zr6Ov)
- [zomehwh](https://huggingface.co/spaces/zomehwh/vits-models)
- [llm-rs](https://github.com/LLukas22/llm-rs-python)
- [vits-finetuning](https://github.com/SayaSS/vits-finetuning)
- [Helsinki-NLP](https://huggingface.co/Helsinki-NLP)
- [staka/fugumt](https://huggingface.co/staka/fugumt-ja-en)
- [rustformers](https://github.com/rustformers/llm)
