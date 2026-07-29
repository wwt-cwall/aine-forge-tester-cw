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

      <section className="aine-forge-section agentic-section">
        <h2>🚀 What is an Agentic Coding Assistant?</h2>
        <p>
          An <strong>agentic coding assistant</strong> goes far beyond traditional code completion 
          or suggestion tools. Unlike passive AI helpers that wait for prompts and provide snippets, 
          agentic assistants are <em>autonomous agents</em> that can independently plan, execute, 
          and verify complex software development tasks from start to finish.
        </p>
        
        <div className="agentic-comparison">
          <div className="comparison-column">
            <h3>Traditional AI Assistants</h3>
            <ul>
              <li>Provide code suggestions</li>
              <li>Answer specific questions</li>
              <li>Generate code snippets</li>
              <li>Require constant guidance</li>
              <li>Limited context awareness</li>
            </ul>
          </div>
          <div className="comparison-column highlight">
            <h3>Agentic Assistants (AINE Forge)</h3>
            <ul>
              <li>Complete entire features autonomously</li>
              <li>Plan multi-step workflows</li>
              <li>Read and modify existing codebases</li>
              <li>Make independent decisions</li>
              <li>Full project context understanding</li>
            </ul>
          </div>
        </div>

        <h3>💼 How Agentic Assistants Improve Developer Productivity</h3>
        <div className="productivity-benefits">
          <div className="benefit-card">
            <span className="benefit-icon">⚡</span>
            <h4>Accelerated Development</h4>
            <p>
              Complete routine tasks in minutes instead of hours. From adding new features 
              to writing tests, agentic assistants handle the implementation while you 
              focus on architecture and business logic.
            </p>
          </div>
          <div className="benefit-card">
            <span className="benefit-icon">🎯</span>
            <h4>Reduced Context Switching</h4>
            <p>
              Stay in your flow state. Delegate time-consuming tasks like documentation 
              updates, boilerplate code, or refactoring to the agent while you work on 
              high-value problems.
            </p>
          </div>
          <div className="benefit-card">
            <span className="benefit-icon">🛡️</span>
            <h4>Consistent Quality</h4>
            <p>
              Maintain code quality standards automatically. Agentic assistants follow 
              best practices, write tests, run linters, and ensure changes don't break 
              existing functionality.
            </p>
          </div>
          <div className="benefit-card">
            <span className="benefit-icon">📖</span>
            <h4>Knowledge Transfer</h4>
            <p>
              Onboard faster and learn continuously. The agent understands your codebase 
              and can explain patterns, update documentation, and help new team members 
              get up to speed quickly.
            </p>
          </div>
          <div className="benefit-card">
            <span className="benefit-icon">🔄</span>
            <h4>Continuous Improvement</h4>
            <p>
              Keep your codebase healthy. Agentic assistants can proactively refactor 
              technical debt, update dependencies, and modernize code without disrupting 
              your development workflow.
            </p>
          </div>
          <div className="benefit-card">
            <span className="benefit-icon">🌙</span>
            <h4>24/7 Availability</h4>
            <p>
              Work on your schedule. Assign tasks to the agent and come back to completed, 
              tested, and documented code—whether it's during your workday or overnight.
            </p>
          </div>
        </div>

        <div className="productivity-stats">
          <h4>The Bottom Line</h4>
          <p>
            By handling repetitive, time-consuming tasks autonomously, agentic coding 
            assistants can help developers reclaim <strong>30-50% of their time</strong>, 
            allowing them to focus on creative problem-solving, system design, and 
            delivering business value. It's not about replacing developers—it's about 
            amplifying their capabilities and eliminating the tedious work that slows 
            them down.
          </p>
        </div>
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
