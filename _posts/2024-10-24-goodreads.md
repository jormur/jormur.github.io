---
layout: post
title: analyzing viral content on goodreads
date: 2024-10-23 08:57:00
description: an nlp approach to literary quotes
tags: python jupyter nlp machine-learning
categories: data-science
---

This project applies advanced data science techniques to analyze what makes quotes go viral on Goodreads, combining traditional econometric methods with cutting-edge natural language processing. Using a dataset of popular quotes from the platform, I investigated how content characteristics, emotional sentiment, and author influence affect engagement.

The analysis employs multiple methodological approaches:

- Natural Language Processing (BERT) for sentiment analysis
- Network analysis to map author relationships and influence
- Machine learning for popularity prediction
- Statistical analysis of quote characteristics

Read the full report below:

{::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/goodreads_notebook.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/goodreads_notebook.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' and page.layout == 'post' %}
  {% jupyter_notebook jupyter_path %}
{% endif %}
{:/nomarkdown}

