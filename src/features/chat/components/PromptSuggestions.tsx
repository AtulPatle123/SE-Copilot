interface PromptSuggestionsProps {
  prompts: string[];
  onSelect: (prompt: string) => void;
}

export function PromptSuggestions({
  prompts,
  onSelect,
}: PromptSuggestionsProps) {
  return (
    <section className="suggestions-panel" aria-label="Suggested prompts">
      {prompts.map((prompt) => (
        <button
          key={prompt}
          type="button"
          className="suggestion-chip"
          onClick={() => onSelect(prompt)}
        >
          {prompt}
        </button>
      ))}
    </section>
  );
}
