import type { ChatReply } from '../../domain/models/chat';

const RESPONSE_DELAY_MS = 1200;

function createDummyReply(prompt: string): ChatReply {
  const normalizedPrompt = prompt.trim();

  return {
    summary: `Here is a smart draft response for: "${normalizedPrompt}". This dummy result is shaped like a real AI response so it can be replaced with a live API later.`,
    highlights: [
      'Interprets the user prompt and returns structured output.',
      'Keeps the response format consistent for easy UI rendering.',
      'Uses a service layer so the API integration stays isolated.',
    ],
    nextSteps: [
      'Connect this service to a real OpenAI or backend endpoint.',
      'Store conversation history in a database if persistence is needed.',
      'Add streaming responses and conversation categories.',
    ],
  };
}

export async function requestChatReply(prompt: string): Promise<ChatReply> {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      if (!prompt.trim()) {
        reject(new Error('Please enter a prompt before sending.'));
        return;
      }

      resolve(createDummyReply(prompt));
    }, RESPONSE_DELAY_MS);
  });
}
