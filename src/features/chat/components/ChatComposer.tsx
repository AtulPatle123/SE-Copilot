import type { FormEvent } from 'react';

interface ChatComposerProps {
  prompt: string;
  helperText: string;
  isLoading: boolean;
  error: string | null;
  onPromptChange: (value: string) => void;
  onQuickSend: (prompt: string) => Promise<void>;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function ChatComposer({
  prompt,
  helperText,
  isLoading,
  error,
  onPromptChange,
  onQuickSend,
  onSubmit,
}: ChatComposerProps) {
  return (
    <form className="composer" onSubmit={onSubmit}>
      <label className="composer-label" htmlFor="prompt">
        Prompt
      </label>
      <textarea
        id="prompt"
        className="composer-input"
        rows={4}
        value={prompt}
        placeholder="Type your idea, requirement, or question here..."
        onChange={(event) => onPromptChange(event.target.value)}
      />

      <div className="composer-footer">
        <div>
          <p className="helper-text">{error ?? helperText}</p>
        </div>

        <div className="composer-actions">
          <button
            type="button"
            className="button button--secondary"
            onClick={() => void onQuickSend('Create a product requirement draft')}
            disabled={isLoading}
          >
            Demo Prompt
          </button>
          <button type="submit" className="button button--primary" disabled={isLoading}>
            {isLoading ? 'Generating...' : 'Send Prompt'}
          </button>
        </div>
      </div>
    </form>
  );
}
