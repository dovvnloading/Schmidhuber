export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  content: string;
  detailedMarkdown: string;
  imageKeyword: string;
}

export enum TabView {
  DOCS = 'DOCS',
  TIMELINE = 'TIMELINE',
  INFO = 'INFO'
}