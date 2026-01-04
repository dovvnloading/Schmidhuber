import { TimelineEvent } from '../types';

export const FOUNDATIONS_EVENTS: TimelineEvent[] = [
  {
    id: '1676-chain-rule',
    year: '1676',
    title: 'The Chain Rule',
    content: 'Leibniz publishes the chain rule, the mathematical foundation for backward credit assignment.',
    imageKeyword: 'calculus',
    detailedMarkdown: `
# 1676: The Chain Rule For Backward Credit Assignment

**Gottfried Wilhelm Leibniz**, often considered the father of computer science (circa 1670), published the **chain rule** of differential calculus in a memoir in 1676. Guillaume de l'Hospital later described it in his 1696 textbook.

### Why is this crucial?
Today, this rule is the central mechanism for credit assignment in **Deep Neural Networks (NNs)**. NNs consist of nodes computing differentiable functions of inputs. The chain rule answers the fundamental question: 
> "How will the output of the final function change if we modify the parameters or weights of an earlier function a bit?"

### Gradient Descent
This answer is utilized by **Gradient Descent (GD)** (Cauchy, 1847) to iteratively adjust weights. 

*   **Leibniz's Legacy**: Beyond calculus, Leibniz described binary computers (1679), designed the first machine for all four arithmetic operations (1673), and his "Algebra of Thought" (1686) was a precursor to Boolean Algebra.
    `
  },
  {
    id: '1800-linear-regression',
    year: '1805',
    title: 'First NN / Linear Regression',
    content: 'Gauss and Legendre introduce the Method of Least Squares, mathematically identical to a linear neural network.',
    imageKeyword: 'math',
    detailedMarkdown: `
# Circa 1800: First Neural Net & Shallow Learning

In 1805, **Adrien-Marie Legendre** published what is now known as the **Method of Least Squares** (Linear Regression). **Johann Carl Friedrich Gauss** is credited with earlier unpublished work on this circa 1795.

### The Gauss-Legendre NN
Mathematically, this is identical to a **2-layer linear neural network**.
*   **Structure**: Input layer connected to an output layer via real-valued weights.
*   **Learning**: Adjusting weights to minimize the sum of squared errors between outputs and targets.

This represents **"Shallow Learning"**. While they didn't use the term "neuron" (the nerve cell wasn't imaged until 1836), the mathematical algorithm, error function, and adaptive parameters are the exact foundation used in modern AI courses before introducing deep non-linearities.

**Application**: Gauss famously used this to predict the location of the dwarf planet Ceres in 1801.
    `
  },
  {
    id: '1920-rnn',
    year: '1920',
    title: 'First Recurrent Architecture',
    content: 'Ising and Lenz introduce the Ising Model, the first non-learning recurrent network architecture.',
    imageKeyword: 'physics',
    detailedMarkdown: `
# 1920-1925: First Recurrent Network Architecture

Unlike feedforward NNs, **Recurrent Neural Networks (RNNs)** have feedback connections, allowing them to implement memory of past events. This is essential for sequence processing.

### The Ising Model
The first non-learning RNN architecture, the **Ising Model** (or Lenz-Ising model), was introduced by physicists **Ernst Ising** and **Wilhelm Lenz** in the 1920s. 
*   It settles into an equilibrium state in response to input conditions.
*   It serves as the physical foundation for later learning RNNs (like the Hopfield network).

### First Learning RNN (1972)
In 1972, **Shun-Ichi Amari** made the Ising architecture adaptive, allowing it to learn to associate input patterns with output patterns. This predates the "Hopfield Network" (1982) by a decade.
    `
  },
  {
    id: '1958-mlp',
    year: '1958',
    title: 'Multilayer Perceptrons',
    content: 'Frank Rosenblatt introduces MLPs. While not yet "deep learning", it set the stage for connectionism.',
    imageKeyword: 'network',
    detailedMarkdown: `
# 1958: Multilayer Feedforward NN

**Frank Rosenblatt** combined linear NNs with threshold functions to create the **Perceptron**. 
*   He experimented with **Multilayer Perceptrons (MLPs)** where the first layer had randomized weights and only the output layer learned.
*   This concept was essentially what was later rebranded as "Extreme Learning Machines" (ELMs).

### Limitations
Rosenblatt (1962) discussed "back-propagating errors" in hidden layers, but did not have a working Deep Learning algorithm. The famous **Backpropagation** algorithm for efficient credit assignment in deep networks was not published until 1970 (Linnainmaa).
    `
  }
];