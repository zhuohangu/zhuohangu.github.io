---
permalink: /
title: "👋 Call me Joshua."
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<!-- <div style="float: right; width: 300px; text-align: center;">
  <img src="/images/soccer_og.jpg" alt="The Campus South Athletic Field" width="300px">
  <figcaption><em>The Campus South Athletic Field</em></figcaption>
</div> -->
<!-- <div style="float: right; max-width: 300px; text-align: center; margin-left: 20px;">
  <img src="/images/soccer_og.jpg" alt="The Campus South Athletic Field" style="width: 100%; max-width: 300px; height: auto;">
  <figcaption><em>The Campus South Athletic Field</em></figcaption>
</div> -->
<!-- <div style="text-align: center; max-width: 100%; margin: auto;">
  <img src="/images/soccer_og.jpg" alt="The Campus South Athletic Field" style="width: 100%; max-width: 300px; height: auto;">
  <figcaption><em>The Campus South Athletic Field</em></figcaption>
</div> -->
<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; max-width: 100%;">

  <div style="flex: 1 1 150px; max-width: 300px; text-align: center;">
    <img src="/images/soccer_og.jpg" alt="The Campus South Athletic Field" style="width: auto; height: 200px;">
    <figcaption><em>The Campus South Athletic Field, Chicago, IL</em></figcaption>
  </div>

  <div style="flex: 1 1 150px; max-width: 300px; text-align: center;">
    <img src="/images/uchi-grad.jpg" alt="uchi-grad" style="width: auto; height: 200px;">
    <figcaption><em>Main Quadrangle — Here I am receiving my Bachelor of Science degree from UChicago, June 2025.</em></figcaption>
  </div>

</div>
🎓 I'm a first-year CS Ph.D. student at [CSAIL](https://www.csail.mit.edu/), MIT [EECS](https://www.eecs.mit.edu/). I graduated from the University of Chicago with a Bachelor of Science in Mathematics (with Specialization in Economics) and Computer Science.

## Research

<!-- 👨‍💻 My research interests lie broadly in **computer systems** and **machine learning**. I build more efficient and reliable systems, both tailored to and powered by state-of-the-art machine learning algorithms, to improve performance, resource efficiency, affordability, and/or scalability. My recent focus is on **ML/LLM inference and AI infrastructure**. -->
👨‍💻 My research interests lie broadly in **computer systems** and **artificial intelligence**. I build more efficient, reliable systems to improve ML/AI workloads. I've worked on **ML/LLM inference and AI infrastructure**, focusing on high-performance KV cache management in LLM serving, such as KV cache compression, P/D disaggregation, and KV blending/editing. I was also a community builder for two open-source projects **LMCache** and **vLLM Production Stack** as a member of LMCache Lab.

✏️ During my undergrad years, I began research in math. Advised by Prof. Gregory Lawler and Jinwoo Sung, I worked on probability theory. Later, I was fortunate to work with **Prof. Junchen Jiang** and Prof. Kexin Pei at UChicago, Prof. Ravi Netravali at Princeton, and Dr. Ganesh Ananthanarayanan at Microsoft Research on MLSys.

I'm always open to collaborations and working with undergraduate students. Check out [Collaborations](/collaborations/) for details.


<!-- ## Recent Projects -->

## Past Projects

**I previously worked on the following open-source projects as a member of [LMCache Lab](https://www.linkedin.com/company/lmcache-lab):**

🚀**LMCache**: The first open-source Knowledge Delivery Network (KDN) that accelerates LLM applications up to 8x faster, at 8x lower cost  
- [LMCache Project](https://github.com/LMCache/LMCache) is open-source! **Check it out!**
- Website: [LMCache Website](https://lmcache.ai/)  
- Technical reports: [CacheGen](https://arxiv.org/abs/2310.07240) (SIGCOMM'24) and [CacheBlend](https://arxiv.org/abs/2405.16444) (EuroSys'25 Best Paper).

🚀**vLLM Production Stack**: Scale from a single vLLM instance to a distributed vLLM deployment without changing any application code
- [vLLM Production Stack Project](https://github.com/vllm-project/production-stack) is open-source! **Check it out!**

🚀**Resource Allocation for Multi-Tenant Retrieval-Augmented Generation (RAG) Systems**  
Check it out [here](https://uchi-jcl.github.io/group-website/projects/ragoptimization/)!

🚀**KV Cache Compression and Streaming for Multimodal Large Language Models (MLLMs)**

🚀**Knowledge Streaming from LLMs to Environments**  
Check it out [here](https://uchi-jcl.github.io/group-website/projects/knowledgestreaming/)!


## Selected Publications
*: Equal Contribution.

- Yuhan Liu, Yuyang Huang, Jiayi Yao, Shaoting Feng, **Zhuohan Gu**, Kuntai Du, Hanchen Li, Yihua Cheng, Junchen Jiang, Shan Lu, Madan Musuvathi, Esha Choukse.<br>
**DroidSpeak: KV Cache Sharing for Cross-LLM Communication and Multi-LLM Serving**<br>
_**NSDI 2026** (to appear)_ [[Paper](https://arxiv.org/abs/2411.02820)]

- Siddhant Ray, Rui Pan, **Zhuohan Gu**, Kuntai Du, Ganesh Ananthanarayanan, Ravi Netravali, Junchen Jiang.<br>
**METIS: Fast Quality-Aware RAG Systems with Configuration Adaptation**<br>
_**SOSP 2025**_ [[Paper](https://arxiv.org/abs/2412.10543)]

- **Zhuohan Gu**<sup>*</sup>, Jiayi Yao<sup>*</sup>, Kuntai Du, Junchen Jiang.<br>
**LLMSteer: Improving Long-Context LLM Inference by Steering Attention on Reused Contexts**<br>
_**NeurIPS 2024** workshop on Machine Learning for Systems_ [[Paper](https://arxiv.org/abs/2411.13009) / [Poster](https://zhuohangu.github.io/files/NeurIPS2024_poster.pdf)]

- Siddhant Ray, **Zhuohan Gu**, Xi Jiang, Junchen Jiang, Nick Feamster.<br>
**Transformer-based Predictions for Sudden Network Changes**<br>
_**NSDI 2024** Poster Session_ [[Poster](https://siddhant-ray.github.io/assets/pdf/transformer_nsdi_poster.pdf)]


<h2>All Publications</h2>
<details>
  <summary>Expand</summary>
  <ul>
    <li>Shaoting Feng, Hanchen Li, Kuntai Du, <strong>Zhuohan Gu</strong>, Yuhan Liu, Jiayi Yao, Siddhant Ray, Samuel Shen, Yihua Cheng, Ganesh Ananthanarayanan, Junchen Jiang.<br>
      <strong>AdaptCache: KV Cache Native Storage Hierarchy for Low-Delay and High-Quality Language Model Serving</strong><br>
      <em><strong>SOSP 2025</strong> Workshop on Big Memory (BigMem) 2025</em>
      <a href="https://arxiv.org/abs/2509.00105">[Paper]</a>
    </li>
    <li>Yuhan Liu, Yuyang Huang, Jiayi Yao, Shaoting Feng, <strong>Zhuohan Gu</strong>, Kuntai Du, Hanchen Li, Yihua Cheng, Junchen Jiang, Shan Lu, Madan Musuvathi, Esha Choukse.<br>
      <strong>DroidSpeak: KV Cache Sharing for Cross-LLM Communication and Multi-LLM Serving</strong><br>
      <em><strong>NSDI 2026</strong></em> (to appear)
      <a href="https://arxiv.org/abs/2411.02820">[Paper]</a>
    </li>
    <li><strong>Zhuohan Gu<sup>*</sup></strong>, Jiayi Yao<sup>*</sup>, Kuntai Du, Junchen Jiang.<br>
      <strong>LLMSteer: Improving Long-Context LLM Inference by Steering Attention on Reused Contexts</strong><br>
      <em><strong>NeurIPS 2024</strong> workshop on Machine Learning for Systems</em>
      [<a href="https://arxiv.org/abs/2411.13009">Paper</a> / <a href="https://zhuohangu.github.io/files/NeurIPS2024_poster.pdf">Poster</a>]
    </li>
    <li>Siddhant Ray, Rui Pan, <strong>Zhuohan Gu</strong>, Kuntai Du, Ganesh Ananthanarayanan, Ravi Netravali, Junchen Jiang.<br>
      <strong>METIS: Fast Quality-Aware RAG Systems with Configuration Adaptation</strong><br>
      <em><strong>SOSP 2025</strong></em>
      <a href="https://arxiv.org/abs/2412.10543">[Paper]</a>
    </li>
    <li>Siddhant Ray, <strong>Zhuohan Gu</strong>, Xi Jiang, Junchen Jiang, Nick Feamster.<br>
      <strong>Transformer-based Predictions for Sudden Network Changes</strong><br>
      <em><strong>NSDI 2024</strong> Poster Session</em>
      <a href="https://siddhant-ray.github.io/assets/pdf/transformer_nsdi_poster.pdf">[Poster]</a>
    </li>
    <li><strong>Zhuohan Gu</strong>, Dadu Chen.<br>
      <strong>An Introduction to Loewner Energy</strong><br>
      <em>UChicago Math REU 2024</em>
      <a href="https://zhuohangu.github.io/files/REU_2024.pdf">[Paper]</a>
    </li>
    <li><strong>Zhuohan Gu</strong>.<br>
      <strong>A Study in Markov Chains, Loop-Erased Random Walk, and Loop Soups</strong><br>
      <em>UChicago Math REU 2023</em>
      <a href="https://arxiv.org/abs/2411.09988">[Paper]</a>
    </li>
  </ul>
</details>


## Selected Awards

- **Quad Undergraduate Research Conference Grant** (supports faculty-mentored undergraduate participation in presenting papers at academic conferences), Chicago, IL, 10/2024
- **Jeff Metcalf Fellowship Grant** (supports students' career goals and offsets living expenses during internships), Chicago, IL, 05/2024
- **Honor Roll** (maintained an overall academic average of 93% or above), Washington, D.C., US, 2018-20
- **The Bijali Dutta Ghosh Book Award** (awarded for commitment to and ability in the Natural Sciences), Washington, D.C., US, 2020
- **Goldberg Science Award** (for achievement in the sciences outside of school), Washington, D.C., US, 2020
- **First Place Award, American Mathematics Competition (AMC) 12**, Washington, D.C., US, 2019


## Education
- B.S., University of Chicago, Mathematics and Computer Science, 2022-2025
<!-- - High School Diploma, St. Anselm's Abbey School, Washington, DC, 2017–2020 -->

## More About Me

I grew up in Guangzhou (Canton) and Hong Kong before moving to Washington, D.C. for high school.<br>
I speak English, Cantonese, and Mandarin fluently, and a little bit of Hakka and Spanish.<br>
I love piano and classical music. A lot. For piano, I mainly play Beethoven and Chopin, and sometimes Saint-Saëns and Mozart.<br>
I love sports. Also a lot. I played varsity soccer and basketball in high school, and I follow all kinds of sports, from soccer and basketball to tennis, golf, F1, etc. I’m a fan of Borussia Dortmund💛🖤.<br>
I also love movies, astronomy, food, etc.

_To be continued…_

<div class="stat" style="transform: scale(0.08); transform-origin: top left;">
    <script type="text/javascript" id="clstr_globe" src="https://clustrmaps.com/globe.js?d=4SQKQkc5llCCepDkHv5BYmCIevbYKzclJr0RIzH81ec"></script>
</div>

<style>
    .stat {
        margin: 0;
        padding: 0;
        margin-bottom: -600px
    }
</style>



<!-- A data-driven personal website
======
Like many other Jekyll-based GitHub Pages templates, Academic Pages makes you separate the website's content from its form. The content & metadata of your website are in structured markdown files, while various other files constitute the theme, specifying how to transform that content & metadata into HTML pages. You keep these various markdown (.md), YAML (.yml), HTML, and CSS files in a public GitHub repository. Each time you commit and push an update to the repository, the [GitHub pages](https://pages.github.com/) service creates static HTML pages based on these files, which are hosted on GitHub's servers free of charge.

Many of the features of dynamic content management systems (like Wordpress) can be achieved in this fashion, using a fraction of the computational resources and with far less vulnerability to hacking and DDoSing. You can also modify the theme to your heart's content without touching the content of your site. If you get to a point where you've broken something in Jekyll/HTML/CSS beyond repair, your markdown files describing your talks, publications, etc. are safe. You can rollback the changes or even delete the repository and start over - just be sure to save the markdown files! Finally, you can also write scripts that process the structured data on the site, such as [this one](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb) that analyzes metadata in pages about talks to display [a map of every location you've given a talk](https://academicpages.github.io/talkmap.html).

Getting started
======
1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Fork [this template](https://github.com/academicpages/academicpages.github.io) by clicking the "Use this template" button in the top right. 
1. Go to the repository's settings (rightmost item in the tabs that start with "Code", should be below "Unwatch"). Rename the repository "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and create content & metadata (see below -- also see [this set of diffs](http://archive.is/3TPas) showing what files were changed to set up [an example site](https://getorg-testacct.github.io) for a user with the username "getorg-testacct")
1. Upload any files (like PDFs, .zip files, etc.) to the files/ directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.  
1. Check status by going to the repository settings, in the "GitHub pages" section

Site-wide configuration
------
The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header. 

Create content & metadata
------
For site content, there is one markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

The repository includes [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the Academic Pages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons. 

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png)

For more info
------
More info about configuring Academic Pages can be found in [the guide](https://academicpages.github.io/markdown/), the [growing wiki](https://github.com/academicpages/academicpages.github.io/wiki), and you can always [ask a question on GitHub](https://github.com/academicpages/academicpages.github.io/discussions). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful. -->
