export type ChatRole = 'user' | 'assistant';

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  createdAt: string;
}

export interface ChatReply {
  summary: string;
  highlights: string[];
  nextSteps: string[];
}
