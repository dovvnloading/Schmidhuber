import { TimelineEvent } from '../types';

export const GOLDEN_AGE_EVENTS: TimelineEvent[] = [
  {
    id: '1990-gan',
    year: '1990',
    title: 'GANs & Curiosity',
    content: 'Schmidhuber introduces Generative Adversarial Networks and Artificial Curiosity.',
    imageKeyword: 'adversary',
    detailedMarkdown: `
# 1990: Generative Adversarial Networks (GANs)

Long before the 2014 "GAN" paper, **Jürgen Schmidhuber** (1990) proposed **Artificial Curiosity** using adversarial principles.

### The Minimax Game
*   **Controller (Generator)**: Generates outputs/experiments to maximize the error of the predictor.
*   **World Model (Predictor/Discriminator)**: Learns to predict the consequences of the controller's actions (minimizing error).

This "fight" motivates the system to invent novel patterns and explore the world, laying the groundwork for modern Generative AI and deepfakes.
    `
  },
  {
    id: '1991-transformers',
    year: '1991',
    title: 'Linear Transformers',
    content: 'Schmidhuber publishes the Unnormalized Linear Transformer (Fast Weight Programmers).',
    imageKeyword: 'transformer',
    detailedMarkdown: `
# 1991: Roots of the Transformer

The **Transformer** (the "T" in ChatGPT) relies on **Key-Value attention**. 

In 1991, Schmidhuber published the **Unnormalized Linear Transformer** (then called "Fast Weight Programmers").
*   **Mechanism**: A slow net learns to program the weights of a fast net (using additive outer products of self-invented activation patterns).
*   **Equivalence**: Formally equivalent to modern Transformers with linearized self-attention.
*   **1993**: Extended to "internal spotlights of attention" in recurrent networks.

This was a highly parallelizable alternative to RNNs, published when compute was millions of times more expensive than today.
    `
  },
  {
    id: '1991-pretraining',
    year: '1991',
    title: 'Pre-Training & Distillation',
    content: 'Deep Learning via Unsupervised Pre-Training (the P in ChatGPT) and Knowledge Distillation.',
    imageKeyword: 'teach',
    detailedMarkdown: `
# 1991: Pre-Training & Distillation

### The "P" in ChatGPT
Before 2010, deep learning was difficult. Schmidhuber (1991) introduced **Unsupervised Pre-Training** via a **Neural History Compressor**.
*   A hierarchy of RNNs where each level tries to predict the input, passing only "unexpected" data to the next level.
*   This facilitates very deep learning (depth > 1000) by compressing sequence representations.

### Knowledge Distillation
Schmidhuber also introduced **Distillation** (collapsing a hierarchy into a single net).
*   A "Teacher" NN compresses its knowledge into a "Student" NN.
*   The Student imitates the Teacher's behavior.
*   This principle is now essential for models like **DeepSeek**.
    `
  },
  {
    id: '1991-lstm',
    year: '1991',
    title: 'Vanishing Gradients & LSTM',
    content: 'Sepp Hochreiter identifies the Vanishing Gradient problem; leads to LSTM.',
    imageKeyword: 'lstm',
    detailedMarkdown: `
# 1991-1997: LSTM & The Fundamental Problem

### The Problem (1991)
**Sepp Hochreiter** (Schmidhuber's student) formally analyzed the **Vanishing Gradient Problem**: in deep/recurrent networks, error signals vanish or explode as they flow backward in time.

### The Solution: LSTM (1997)
Published by **Hochreiter & Schmidhuber**.
*   **Core Idea**: Constant Error Carousels (CECs). By maintaining a residual connection with weight 1.0, error flows indefinitely.
*   **Impact**: Became the standard for speech recognition (Google, Apple, Amazon) and translation for decades.
*   **Legacy**: The **most cited AI paper of the 20th Century**.
    `
  }
];