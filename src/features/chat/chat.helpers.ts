import type { ChatReply } from '../../domain/models/chat';

export function buildAssistantMessage(reply: ChatReply): string {
  const highlights = reply.highlights.map((item) => `- ${item}`).join('\n');
  const nextSteps = reply.nextSteps.map((item) => `- ${item}`).join('\n');

  return `${reply.summary}\n\nKey points:\n${highlights}\n\nSuggested next steps:\n${nextSteps}`;
}

export function createMessageId(prefix: string): string {
  return `${prefix}-${crypto.randomUUID()}`;
}
