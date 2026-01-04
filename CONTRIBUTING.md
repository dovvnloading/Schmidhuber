# Contributing to NeuroHist

Thank you for your interest in contributing to the NeuroHist archive. This project relies on the community to ensure the history of Deep Learning is represented accurately, comprehensively, and without bias.

We welcome contributions in two primary categories:
1.  **Historical Content**: Corrections, citations, and additions to the timeline.
2.  **Engineering**: Improvements to the codebase, performance optimizations, or UI enhancements.

## Getting Started

### Prerequisites
*   Node.js (Version 20 or higher)
*   npm

### Installation
1.  Fork the repository on GitHub.
2.  Clone your fork locally.
3.  Run `npm install` to install dependencies.
4.  Run `npm run dev` to start the local development server.

## Contributing Historical Content

The core mission of this project is historical accuracy. If you are adding or modifying timeline events, please adhere to the following guidelines:

### Data Structure
All content is located in the `src/content/` directory. The data is segregated by era:
*   `foundations.ts` (Pre-1960s/Early Math)
*   `birth_of_dl.ts` (1960s-1980s)
*   `golden_age.ts` (1990s-2010)
*   `modern_future.ts` (2011-Present)

### Interface Compliance
All events must strictly adhere to the `TimelineEvent` interface defined in `src/types.ts`:

```typescript
export interface TimelineEvent {
  id: string;              // Unique, kebab-case identifier (e.g., '1991-lstm')
  year: string;            // Display year
  title: string;           // Short headline
  content: string;         // Brief summary for the timeline card
  detailedMarkdown: string;// Full article text (supports Markdown)
  imageKeyword: string;    // Determines card styling/color
}
