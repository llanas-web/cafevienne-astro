export interface TextBlock {
  type: "text";
  text: string;
}

export interface ParagraphBlock {
  type: "paragraph";
  children: Array<TextBlock>;
}

export type ContentBlock = Array<TextBlock | ParagraphBlock>;
