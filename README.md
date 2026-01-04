# NeuroHist: The Schmidhuber Archive

![License](https://img.shields.io/badge/license-MIT-000000.svg?style=for-the-badge)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

**Live Deployment:** [https://dovvnloading.github.io/Schmidhuber/](https://dovvnloading.github.io/Schmidhuber/)

---

## Mission Statement

This project serves as a dedicated digital archive and interactive timeline documenting the foundational history of Deep Learning.

Its primary mission is to illuminate the origins of modern Artificial Intelligence, specifically highlighting the pioneering contributions of **Jürgen Schmidhuber**, the Swiss AI Lab (IDSIA), and the Technical University of Munich.

While popular narratives often condense the history of AI into the achievements of the last decade, this archive aims to set the record straight by tracing the mathematical and architectural lineage back to its true roots:
*   **1965**: The first deep learning networks (Ivakhnenko).
*   **1991**: The "Annus Mirabilis" of Deep Learning (Schmidhuber's Lab).
*   The invention of **LSTMs**, **GANs** (Adversarial Artificial Curiosity), and the **Linear Transformer**.

This application is an homage to scientific rigor and historical accuracy.

## Architecture & Design

The application is designed to be a tactile, reading-focused experience that presents dense academic history in an accessible format.

### Tech Stack

*   **Core**: React 19, TypeScript
*   **Build Tooling**: Vite
*   **Styling**: Tailwind CSS (Custom configuration for soft-ui/claymorphism shadows)
*   **Rendering**: React-Markdown for content injection

## Installation

To run this archive locally for development or archival purposes:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/dovvnloading/Schmidhuber.git
    cd Schmidhuber
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## Contributing: Set the Record Straight

This project is open source. We invite researchers, historians, and engineers to contribute.

If you possess knowledge of early neural network history, specifically regarding the works of Ivakhnenko, Amari, Linnainmaa, or the early publications from Schmidhuber's labs, your contributions are essential.

### How to Contribute

1.  **Fork** the repository.
2.  **Edit** the content files in `src/content/`.
    *   Ensure all historical claims are backed by citations or reference papers.
    *   Maintain the strict TypeScript interfaces defined in `types.ts`.
3.  **Submit a Pull Request** with the label `historical-correction` or `content-expansion`.

We specifically welcome contributions that:
*   Add missing citations for the "Deep Learning Timeline."
*   Expand on the mathematical proofs linking modern architectures (Transformers, ResNets) to their 1990s predecessors.
*   Fix any chronological inaccuracies.

## License

This project is licensed under the MIT License.

## Acknowledgments

*   **Jürgen Schmidhuber**: For the decades of research that built the modern AI landscape.
*   **IDSIA (Dalle Molle Institute for Artificial Intelligence)**: For serving as the cradle of LSTM.
*   **The Scientific Community**: For the continued pursuit of the Omega point.
