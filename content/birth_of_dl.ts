import { TimelineEvent } from '../types';

export const BIRTH_OF_DL_EVENTS: TimelineEvent[] = [
  {
    id: '1965-deep-learning',
    year: '1965',
    title: 'First Deep Learning',
    content: 'Ivakhnenko and Lapa introduce the first working deep learning algorithms for MLPs with many layers.',
    imageKeyword: 'deep',
    detailedMarkdown: `
# 1965: The Birth of Deep Learning

**Alexey Ivakhnenko** and **V.G. Lapa** (Ukraine/USSR) introduced the first general, working learning algorithms for deep Multi-Layer Perceptrons (MLPs).

*   **Method**: The Group Method of Data Handling (GMDH).
*   **Achievement**: By 1971, they described a deep learning net with **8 layers**.
*   **Technique**: Layers were incrementally grown and trained by regression analysis, with superfluous units pruned using a validation set.

This work demonstrated that deep networks could learn hierarchical internal representations of data, decades before the term "Deep Learning" became a buzzword in the West.
    `
  },
  {
    id: '1967-sgd',
    year: '1967',
    title: 'Deep Learning by SGD',
    content: 'Shun-Ichi Amari trains deep MLPs using Stochastic Gradient Descent.',
    imageKeyword: 'gradient',
    detailedMarkdown: `
# 1967: Deep Learning by Stochastic Gradient Descent

While Ivakhnenko grew networks layer-by-layer, **Shun-Ichi Amari** (1967) suggested training MLPs with many layers in a non-incremental, end-to-end fashion.

*   **Algorithm**: **Stochastic Gradient Descent (SGD)**, originally proposed by Robbins & Monro (1951).
*   **Result**: Amari and his student Saito learned internal representations in a five-layer MLP to classify non-linearly separable patterns.

This approach—learning useful internal representations via SGD—remains the dominant paradigm in training modern AI models.
    `
  },
  {
    id: '1970-backprop',
    year: '1970',
    title: 'Backpropagation',
    content: 'Seppo Linnainmaa publishes the reverse mode of automatic differentiation (Backprop).',
    imageKeyword: 'code',
    detailedMarkdown: `
# 1970: Backpropagation

The famous **Backpropagation** algorithm (or "reverse mode of automatic differentiation") is the foundation of PyTorch, TensorFlow, and modern AI training.

*   **Inventor**: **Seppo Linnainmaa** (1970).
*   **NN Application**: First applied specifically to NNs by **Paul Werbos** (1982).
*   **Experimental Analysis**: Rumelhart, Hinton, & Williams (1985) demonstrated it could yield useful internal representations (though Amari had shown this with SGD decades earlier).

**Core Concept**: It is an efficient way to implement Leibniz's chain rule (1676) for networks of differentiable nodes.
    `
  },
  {
    id: '1979-cnn',
    year: '1979',
    title: 'Convolutional NNs',
    content: 'Kunihiko Fukushima introduces the Neocognitron, the architecture for CNNs.',
    imageKeyword: 'vision',
    detailedMarkdown: `
# 1979: The First Deep Convolutional NN

**Kunihiko Fukushima** introduced the **Neocognitron**, the basic architecture for **Convolutional Neural Networks (CNNs)**.

### Key Features
1.  **Convolutional Layers**: For local feature extraction.
2.  **Downsampling/Pooling**: For spatial invariance.

Inspired by the neurophysiological findings of Hubel and Wiesel, this architecture is the ancestor of Yann LeCun's LeNet and modern vision transformers.
*   **1987**: Alex Waibel combined convolutions with backpropagation (TDNNs).
*   **2011**: **Dan Ciresan** (Schmidhuber's lab) created **DanNet**, the first GPU-accelerated deep CNN to win international computer vision contests, triggering the modern Computer Vision revolution.
    `
  }
];