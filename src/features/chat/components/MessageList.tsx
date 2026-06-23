import type { ChatMessage } from '../../../domain/models/chat';
import { formatMessageTime } from '../../../shared/date';

interface MessageListProps {
  messages: ChatMessage[];
  isLoading: boolean;
}

export function MessageList({ messages, isLoading }: MessageListProps) {
  return (
    <section className="message-list" aria-label="Conversation">
      {messages.map((message) => (
        <article
          key={message.id}
          className={`message-card message-card--${message.role}`}
        >
          <div className="message-meta">
            <span>{message.role === 'assistant' ? 'SE-Copilot' : 'You'}</span>
            <time dateTime={message.createdAt}>
              {formatMessageTime(message.createdAt)}
            </time>
          </div>
          <p>{message.content}</p>
        </article>
      ))}

      {isLoading ? (
        <article className="message-card message-card--assistant message-card--loading">
          <div className="message-meta">
            <span>SE-Copilot</span>
            <span>thinking...</span>
          </div>
          <div className="typing-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </article>
      ) : null}
    </section>
  );
}
