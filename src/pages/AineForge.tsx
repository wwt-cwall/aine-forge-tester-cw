import './AineForge.css'

function AineForge() {
  return (
    <div className="aine-forge-page">
      <div className="aine-forge-header">
        <h1>🤖 AINE Forge</h1>
        <p className="aine-forge-tagline">
          Your AI-Powered Autonomous Coding Assistant
        </p>
      </div>

      <section className="aine-forge-section">
        <h2>What is AINE Forge?</h2>
        <p>
          AINE Forge is an advanced autonomous coding agent designed to help developers 
          build, modify, and maintain software projects with minimal human intervention. 
          Powered by sophisticated AI models, AINE Forge can understand natural language 
          requests and translate them into working code.
        </p>
      </section>

      <section className="aine-forge-section">
        <h2>✨ What I Can Do</h2>
        <div className="capabilities-grid">
          <div className="capability-card">
            <span className="capability-icon">📝</span>
            <h3>Code Generation</h3>
            <p>
              I can write new code from scratch based on your requirements, following 
              best practices and maintaining consistency with your existing codebase.
            </p>
          </div>
          <div className="capability-card">
            <span className="capability-icon">🔧</span>
            <h3>Code Modification</h3>
            <p>
              Need to update existing features? I can read your code, understand its 
              structure, and make precise modifications while preserving functionality.
            </p>
          </div>
          <div className="capability-card">
            <span className="capability-icon">🐛</span>
            <h3>Bug Fixing</h3>
            <p>
              I can identify issues in your code, understand error messages, and 
              implement fixes that resolve problems without introducing new ones.
            </p>
          </div>
          <div className="capability-card">
            <span className="capability-icon">🧪</span>
            <h3>Testing</h3>
            <p>
              I write comprehensive unit tests, run test suites, and verify that 
              changes work as expected before committing them.
            </p>
          </div>
          <div className="capability-card">
            <span className="capability-icon">📚</span>
            <h3>Documentation</h3>
            <p>
              I can create and update documentation, including README files, code 
              comments, and inline documentation to keep your project well-documented.
            </p>
          </div>
          <div className="capability-card">
            <span className="capability-icon">🔄</span>
            <h3>Refactoring</h3>
            <p>
              I can improve code quality by refactoring existing code to be more 
              maintainable, efficient, and aligned with modern best practices.
            </p>
          </div>
        </div>
      </section>

      <section className="aine-forge-section">
        <h2>🎯 How I Work</h2>
        <div className="workflow-steps">
          <div className="workflow-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Understand</h3>
              <p>I analyze your request and explore the project structure to understand the context.</p>
            </div>
          </div>
          <div className="workflow-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Plan</h3>
              <p>I create a detailed plan outlining the steps needed to accomplish your goal.</p>
            </div>
          </div>
          <div className="workflow-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Execute</h3>
              <p>I implement the changes, writing or modifying code as needed.</p>
            </div>
          </div>
          <div className="workflow-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Verify</h3>
              <p>I run tests, builds, and linters to ensure everything works correctly.</p>
            </div>
          </div>
          <div className="workflow-step">
            <div className="step-number">5</div>
            <div className="step-content">
              <h3>Commit</h3>
              <p>I commit the changes with clear messages and open a pull request for review.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="aine-forge-section">
        <h2>🌟 Key Features</h2>
        <ul className="features-list">
          <li>
            <strong>Autonomous Operation:</strong> I work independently, making decisions 
            about how to best implement your requirements without constant guidance.
          </li>
          <li>
            <strong>Context Awareness:</strong> I read and understand your existing code, 
            maintaining consistency with your project's style and architecture.
          </li>
          <li>
            <strong>Multi-Language Support:</strong> I can work with various programming 
            languages, frameworks, and tools across the development ecosystem.
          </li>
          <li>
            <strong>Best Practices:</strong> I follow industry best practices, writing 
            clean, maintainable, and well-tested code.
          </li>
          <li>
            <strong>Iterative Development:</strong> I can handle complex tasks by breaking 
            them down into manageable steps and iterating as needed.
          </li>
          <li>
            <strong>Git Integration:</strong> I handle version control operations, creating 
            commits and pull requests with meaningful descriptions.
          </li>
        </ul>
      </section>

      <section className="aine-forge-section highlight-section">
        <h2>💡 Try Me Out!</h2>
        <p>
          This very page you're reading was created by AINE Forge! I analyzed the 
          existing application structure, created this new page with appropriate styling, 
          updated the routing configuration, and added navigation links—all autonomously.
        </p>
        <p>
          Want to see what else I can do? Just ask me to add features, fix bugs, 
          write tests, or improve your codebase. I'm here to help you build better 
          software, faster.
        </p>
      </section>
    </div>
  )
}

export default AineForge
