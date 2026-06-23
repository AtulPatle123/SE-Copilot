export function ChatHeader() {
  return (
    <header className="chat-header">
      <div>
        <span className="eyebrow">AI Prompt Workspace</span>
        <h1>SE-Copilot</h1>
        <p>
          A modern AI-style prompt interface built with React, TypeScript, and a
          dummy response service that is ready to scale.
        </p>
      </div>
      <div className="status-card">
        <span className="status-dot" />
        <div>
          <strong>Dummy API active</strong>
          <p>Swappable service layer for future backend integration</p>
        </div>
      </div>
    </header>
  );
}
