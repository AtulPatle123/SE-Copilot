import type { ChatMessage } from '../../domain/models/chat';

export interface ChatState {
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
}

export type ChatAction =
  | { type: 'message/sent'; payload: ChatMessage }
  | { type: 'message/received'; payload: ChatMessage }
  | { type: 'request/started' }
  | { type: 'request/failed'; payload: string };
