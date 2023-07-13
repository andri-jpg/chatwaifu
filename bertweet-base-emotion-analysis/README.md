---
language: 
  - en

tags:
  - emotion-analysis

---
# Emotion Analysis in English
## bertweet-base-emotion-analysis

Repository: [https://github.com/finiteautomata/pysentimiento/](https://github.com/finiteautomata/pysentimiento/)


Model trained with EmoEvent corpus for Emotion detection in English. Base model is [BerTweet](https://huggingface.co/vinai/bertweet-base).


## License

`pysentimiento` is an open-source library for non-commercial use and scientific research purposes only. Please be aware that models are trained with third-party datasets and are subject to their respective licenses. 

1. [TASS Dataset license](http://tass.sepln.org/tass_data/download.php)
2. [SEMEval 2017 Dataset license]()

## Citation

If you use `pysentimiento` in your work, please cite [this paper](https://arxiv.org/abs/2106.09462)

```
@misc{perez2021pysentimiento,
      title={pysentimiento: A Python Toolkit for Sentiment Analysis and SocialNLP tasks},
      author={Juan Manuel Pérez and Juan Carlos Giudici and Franco Luque},
      year={2021},
      eprint={2106.09462},
      archivePrefix={arXiv},
      primaryClass={cs.CL}
}
```

and also the dataset related paper

```
@inproceedings{del2020emoevent,
  title={EmoEvent: A multilingual emotion corpus based on different events},
  author={del Arco, Flor Miriam Plaza and Strapparava, Carlo and Lopez, L Alfonso Urena and Mart{\'\i}n-Valdivia, M Teresa},
  booktitle={Proceedings of the 12th Language Resources and Evaluation Conference},
  pages={1492--1498},
  year={2020}
}
```

Enjoy! 🤗
