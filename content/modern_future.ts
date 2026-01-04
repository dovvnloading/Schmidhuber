import { TimelineEvent } from '../types';

export const MODERN_FUTURE_EVENTS: TimelineEvent[] = [
  {
    id: '2015-resnet',
    year: '2015',
    title: 'Highway Nets & ResNets',
    content: 'Deep learning jumps from tens of layers to hundreds via Gated Residual Networks.',
    imageKeyword: 'network-2',
    detailedMarkdown: `
# 2015: Very Deep Feedforward NNs

In May 2015, Schmidhuber's team (Srivastava, Greff, Schmidhuber) introduced **Highway Networks**.
*   **Concept**: Applying the LSTM principle (gated residual connections) to feedforward networks.
*   **Result**: The first working FNNs with **hundreds of layers**.

### ResNet (Dec 2015)
The **ResNet** (He et al.) is essentially a Highway Net with open gates. It became the most cited AI paper of the 21st century. The underlying principle remains the **Constant Error Flow** derived in 1991.
    `
  },
  {
    id: '2025-most-cited',
    year: '2025',
    title: 'Impact & Legacy',
    content: 'The most cited neural networks (LSTM, ResNet, AlexNet, GANs, Transformers) all build on work done in Schmidhuber\'s labs.',
    imageKeyword: 'deep',
    detailedMarkdown: `
# The most cited neural networks all build on work done in my labs

**Jürgen Schmidhuber (2021, updated Oct 2025)**

Modern Artificial Intelligence is dominated by artificial neural networks (NNs) and deep learning. Foundations of the most popular NNs originated in my labs at TU Munich and IDSIA. Here I discuss: 

1.  **Long Short-Term Memory (LSTM)**, the most cited AI of the 20th century.
2.  **ResNet**, the most cited AI of the 21st century, an open-gated variant of our earlier Highway Net (a gated ResNet) which was 10 times deeper than previous feedforward NNs.
3.  **AlexNet and VGG Net**, two highly cited NNs building on our similar earlier DanNet: the first deep convolutional NN to win image recognition competitions and achieve superhuman performance (2011).
4.  **Generative Adversarial Networks (GANs)**, an instance of my earlier Adversarial Artificial Curiosity.
5.  **Variants of Transformers**, unnormalized linear Transformers are formally equivalent to my 1991 Fast Weight Programmers.

Most of this started with our **Annus Mirabilis of 1990-1991** when compute was millions of times more expensive than today. Back then we laid foundations of **Generative AI**, publishing principles of GANs (now used for deepfakes), Transformers (the T in ChatGPT), Pre-training for deep NNs (the P in ChatGPT), NN distillation, and DeepSeek. 

As of 2025, three of the eight most-cited scientific articles of the 21st century, across all disciplines, are about NNs: #1, #7, and #8. They are based directly on the techniques published in our previous work mentioned above.

---

### (1) LSTM
According to Google Scholar, the most cited AI paper of the 20th century is our 1997 journal publication on **Long Short-Term Memory (LSTM)**. To the best of my knowledge, it is also the most cited Computer Science paper of the 20th century. LSTM NNs are now permeating the modern world, with innumerable applications including in healthcare, learning robots, game playing, speech processing, and machine translation. They are used billions of times a day by countless people. This led Bloomberg to say LSTM is arguably the most commercial AI achievement. LSTMs as we know them today go beyond earlier work and were made possible through my students Sepp Hochreiter, Felix Gers, Alex Graves, Daan Wierstra, and others.

### (2) Highway Net to ResNet
The most cited paper of the 21st century is about **deep residual learning** (Dec 2015). It cites our earlier **Highway Net** (May 2015) and describes a variant thereof: the ResNet. Highway Nets were the first working gradient-based feedforward NNs with hundreds of layers, 10 times deeper than previous FNNs. ResNets are like Highway Nets whose gates remain always open. In turn, Highway Nets are gated ResNets. Highway Nets showed how very deep NNs can be trained by gradient descent, and perform roughly as well as ResNets on ImageNet. They were made possible through my students Rupesh Kumar Srivastava and Klaus Greff. The USPTO granted a patent for this invention to NNAISENSE in 2021. All of this was based on the residual connections introduced in 1991 by my student Sepp Hochreiter to solve the vanishing gradient problem.

Remarkably, the most cited AIs of the 20th and 21st century (1 & 2) are closely connected, because the Highway Net is actually the feedforward NN version of our recurrent LSTM. Deep learning is all about NN depth. LSTMs brought essentially unlimited depth to supervised recurrent NNs; Highway Nets brought it to feedforward NNs.

### (3) DanNet to AlexNet to VGG Net
The fourth most-cited AI paper of the 21st century describes **AlexNet** (2012), a convolutional NN (CNN) similar to our earlier **DanNet** (2011). DanNet had a temporary monopoly on winning computer vision contests and won 4 of them before AlexNet arrived on the scene. At the IJCNN 2011 computer vision competition in Silicon Valley, DanNet crushed the competition, performing three times better than the closest competitor (by LeCun's team), and twice as good as humans. AlexNet cited DanNet but also used ReLUs (1969) and stochastic delta rule/dropout (1990) without citation. DanNet and AlexNet actually followed our earlier work on supervised deep NNs (2010) which abandoned the unsupervised pre-training for deep NNs introduced by myself in 1991—and later championed by an AlexNet co-author. Another of the most cited NNs of the 21st century—the VGG network—is also similar to DanNet (also using its trick of increasing NN depth through small convolution filters). Other highly cited CNNs further extended the work of 2011. DanNet was made possible through my postdoc Dan Ciresan with the help of Ueli Meier and Jonathan Masci.

### (4) Curiosity to GANs
Another highly cited NN paper of 2014 on **Generative Adversarial Networks (GANs)** describes a system similar to my adversarial NNs using Predictability Minimization for creating disentangled representations (1991). In fact, GANs are a simple application of my even earlier popular **Adversarial Curiosity Principle from 1990** where two dueling NNs (a generator and a predictor that sees the generator's output) are trying to maximize each other's loss in a minimax game: the first NNs that were both generative and adversarial. GANs are an instance of this where the trials are constrained such that they remain very short, like in bandit problems.

### (5) Linear Transformers to Quadratic Transformers
The third most-cited AI paper of the 21st century is about quadratic **Transformer NNs** (2017). It turns out that Transformers (see the T in ChatGPT) are a variant of my 1991 **Fast Weight Controllers or Fast Weight Programmers** which are now called unnormalized linear Transformers with linearized self-attention. The 1991 linear Transformers are efficient in the sense that they scale linearly with the context size. The self-attention in the 2017 quadratic Transformers (scaling quadratically with the context size) combines this with a projection and softmax (using attention terminology like the one I introduced in 1993). My 1991 unnormalized linear Transformers separated storage and control like in traditional computers, but in an adaptive and fully neural way (rather than in a hybrid fashion).

---

### Industry Impact
The world's most valuable companies (NVIDIA, Microsoft, Apple, Google, Meta, others) were deeply influenced by our contributions above. 
*   The paper on ResNet—the open-gated variant of our Highway Net—was published by **Microsoft**, and its first author was hired by **Facebook**. 
*   Most of the AlexNet/VGG Net authors—who built on our 2011 DanNet—went to **Google**. 
*   Google also published the 2017 quadratic Transformer closely related to my unnormalized linear Transformer of 1991, and bought the company **DeepMind** co-founded by a student from my lab (now the core of Google). 
*   The second author of the DanNet papers and the first author of a 2014 paper on GANs (an instance of my ancient Adversarial Curiosity) were hired by **Apple**. 
*   All of these companies have also made extensive use of our LSTM.

### DeepSeek (Jan 2025)
In January 2025, the **DeepSeek Sputnik** wiped out a trillion USD from the stock market. DeepSeek-R1 used elements of my 2015 reinforcement learning (RL) prompt engineer and its 2018 refinement which collapses the 2015 RL machine and its world model into a single net through the neural net distillation procedure of 1991: a distilled chain of thought system.

---

### Concluding Remarks & Disclaimer
Of course, citation counts are poor indicators of truly pioneering work. As I pointed out in Nature (2011): "like the less-than-worthless collateralized debt obligations that drove the 2008 financial bubble, citations are easy to print and inflate, providing an incentive for professors to maximize citation counts instead of scientific progress."

**Deep Learning History**
Deep learning was—in fact—born in 1965 in Ukraine (back then the USSR) with the first nets of arbitrary depth that really learned, going beyond the "shallow learning" of Gauss and Legendre around 1800. Soon afterwards, multilayer perceptrons learned internal representations through stochastic gradient descent in Japan. A few years later, modern backpropagation (the reverse mode of automatic differentiation) was published in Finland (1970). The basic deep convolutional NN architecture was invented in the 1970s in Japan. We are standing on the shoulders of these works and many others.

Gradient-based unsupervised or self-supervised adversarial networks that duel each other in a minimax game originated in Munich (also the birthplace of the first self-driving cars in traffic). The principles of linear Transformers, NN distillation, and the fundamental problem of backpropagation-based Deep Learning were also discovered in Munich (1991). So were the first "modern" Deep Learners to overcome this problem, through (1) unsupervised or self-supervised pre-training (1991), and (2) Long Short-Term Memory. LSTM was further developed in Switzerland, which is also home of the first image recognition contest-winning deep GPU-based CNNs, the first superhuman visual pattern recognition (2011), and the first very deep, working feedforward NNs with hundreds of layers.

In the 2010s, all of this work was feverishly built on by an outstanding community of machine learning researchers, engineers, and practitioners to create amazing things that have impacted the lives of billions of people worldwide.

---

### References
*   **[AC]** J. Schmidhuber (AI Blog, 2021). 3 decades of artificial curiosity & creativity.
*   **[DL1]** J. Schmidhuber, 2015. Deep learning in neural networks: An overview. Neural Networks, 61, 85-117.
*   **[DLH]** J. Schmidhuber (AI Blog, 2022). Annotated History of Modern AI and Deep Learning.
*   **[LSTM1]** S. Hochreiter, J. Schmidhuber. Long Short-Term Memory. Neural Computation, 9(8):1735-1780, 1997.
*   **[HW1]** R. K. Srivastava, K. Greff, J. Schmidhuber. Highway networks. Preprints arXiv:1505.00387 (May 2015).
*   **[GAN1]** I. Goodfellow et al. Generative adversarial nets. NIPS 2014.
*   **[TR1]** A. Vaswani et al. Attention is all you need. NIPS 2017.
*   **[DAN]** J. Schmidhuber (AI Blog, 2021). 10-year anniversary. In 2011, DanNet triggered the deep convolutional neural network (CNN) revolution.
*   **[FWP]** J. Schmidhuber (AI Blog, 2021). 30-year anniversary of Neural nets learn to program neural nets with fast weights—like Transformer variants.
*   **[DS1]** DeepSeek-AI (2025). DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning.

*(For full list of references, please consult the original document at people.idsia.ch/~juergen)*
    `
  },
  {
    id: 'future-omega',
    year: '2040',
    title: 'The Omega Point',
    content: 'The timeline of history converges on an Omega point of exponential acceleration.',
    imageKeyword: 'future',
    detailedMarkdown: `
# The Broader Context: Big Bang to Omega

Schmidhuber (2014) identified a pattern of **exponential acceleration** in history. Dividing the time intervals between major breakthroughs by 4 leads to a convergence point: **Omega (circa 2040)**.

1.  **Life**: 3.5 billion years ago.
2.  **Animals**: 900 million years ago.
3.  **Mammals**: 220 million years ago.
4.  ...
5.  **Industrial Revolution**: ~1850.
6.  **Digital/AI Revolution**: ~1990.
7.  **Omega**: ~2040.

### The Future
*   **Self-Replicating Machines**: AI-controlled robots that can build robot factories (space colonization).
*   **AI Sphere**: Expansion of intelligence into the solar system and galaxy, driven by the search for resources (energy/matter).
    `
  }
];