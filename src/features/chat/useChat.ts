import { startTransition, useReducer } from 'react';
import type { FormEvent } from 'react';
import { chatReducer, initialChatState } from './chat.reducer';
import { buildAssistantMessage, createMessageId } from './chat.helpers';
import { requestChatReply } from './chat.service';

export function useChat() {
  const [state, dispatch] = useReducer(chatReducer, initialChatState);

  async function sendMessage(prompt: string) {
    const submittedPrompt = prompt.trim();

    if (!submittedPrompt) {
      dispatch({
        type: 'request/failed',
        payload: 'Please enter a prompt before sending.',
      });
      return;
    }

    dispatch({
      type: 'message/sent',
      payload: {
        id: createMessageId('user'),
        role: 'user',
        content: submittedPrompt,
        createdAt: new Date().toISOString(),
      },
    });

    dispatch({ type: 'request/started' });

    try {
      const reply = await requestChatReply(submittedPrompt);

      startTransition(() => {
        dispatch({
          type: 'message/received',
          payload: {
            id: createMessageId('assistant'),
            role: 'assistant',
            content: buildAssistantMessage(reply),
            createdAt: new Date().toISOString(),
          },
        });
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Something went wrong.';

      dispatch({ type: 'request/failed', payload: errorMessage });
    }
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
    prompt: string,
    resetPrompt: () => void,
  ) {
    event.preventDefault();
    await sendMessage(prompt);
    resetPrompt();
  }

  return {
    state,
    sendMessage,
    handleSubmit,
  };
}
