import { useDeferredValue, useState } from 'react';
import { QUICK_PROMPTS } from '../chat.constants';
import { useChat } from '../useChat';
import { ChatComposer } from './ChatComposer';
import { ChatHeader } from './ChatHeader';
import { MessageList } from './MessageList';
import { PromptSuggestions } from './PromptSuggestions';

export function ChatShell() {
  const [prompt, setPrompt] = useState('');
  const { state, sendMessage, handleSubmit } = useChat();
  const deferredPrompt = useDeferredValue(prompt);

  const helperText = deferredPrompt
    ? 'Your draft is being prepared with dummy AI data.'
    : 'Try a product idea, a feature request, or a workflow question.';

  return (
    <main className="app-shell">
      <section className="chat-layout">
        <ChatHeader />
        <PromptSuggestions
          prompts={QUICK_PROMPTS}
          onSelect={(selectedPrompt) => setPrompt(selectedPrompt)}
        />
        <MessageList messages={state.messages} isLoading={state.isLoading} />
        <ChatComposer
          prompt={prompt}
          helperText={helperText}
          isLoading={state.isLoading}
          error={state.error}
          onPromptChange={setPrompt}
          onQuickSend={sendMessage}
          onSubmit={(event) =>
            handleSubmit(event, prompt, () => {
              setPrompt('');
            })
          }
        />
      </section>
    </main>
  );
}
