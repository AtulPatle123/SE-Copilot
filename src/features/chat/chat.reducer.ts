import type { ChatAction, ChatState } from './chat.types';

export const initialChatState: ChatState = {
  messages: [
    {
      id: 'welcome-message',
      role: 'assistant',
      content:
        'Hi, I am SE-Copilot. Tell me what you want to build, analyze, or improve, and I will respond with a structured draft.',
      createdAt: new Date().toISOString(),
    },
  ],
  isLoading: false,
  error: null,
};

export function chatReducer(state: ChatState, action: ChatAction): ChatState {
  switch (action.type) {
    case 'message/sent':
      return {
        ...state,
        messages: [...state.messages, action.payload],
        error: null,
      };
    case 'request/started':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'message/received':
      return {
        ...state,
        isLoading: false,
        messages: [...state.messages, action.payload],
      };
    case 'request/failed':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
