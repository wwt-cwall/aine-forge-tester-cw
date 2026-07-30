import './ForgeGuide.css'

function ForgeGuide() {
  return (
    <div className="forge-guide-page">
      <div className="forge-guide-header">
        <h1>🚀 Getting Started with Forge</h1>
        <p className="forge-guide-tagline">
          Your Complete Guide to Using AI-Powered Autonomous Coding
        </p>
      </div>

      <section className="forge-guide-section intro-section">
        <h2>Welcome to Forge!</h2>
        <p>
          Forge is an autonomous AI coding assistant that can help you build, modify, and maintain 
          software projects. This guide will help you understand how to work effectively with Forge 
          and get the most out of this powerful tool.
        </p>
      </section>

      <section className="forge-guide-section">
        <h2>📸 What Forge Looks Like</h2>
        <p>
          Forge operates through a conversational interface where you can describe what you want 
          to build or change. Here's what a typical interaction looks like:
        </p>
        
        <div className="screenshot-placeholder">
          <div className="screenshot-content">
            <div className="screenshot-header">
              <span className="screenshot-dot"></span>
              <span className="screenshot-dot"></span>
              <span className="screenshot-dot"></span>
              <span className="screenshot-title">Forge Interface</span>
            </div>
            <div className="screenshot-body">
              <div className="chat-message user-message">
                <span className="message-label">You:</span>
                <p>"Add a new page to the application with information about how to get started using Forge"</p>
              </div>
              <div className="chat-message forge-message">
                <span className="message-label">Forge:</span>
                <p>I'll help you add a new "Getting Started with Forge" page...</p>
                <div className="forge-actions">
                  <div className="action-item">📋 Planning the implementation</div>
                  <div className="action-item">📂 Exploring project structure</div>
                  <div className="action-item">✍️ Creating new page component</div>
                  <div className="action-item">🎨 Adding styles</div>
                  <div className="action-item">🔗 Updating routes</div>
                  <div className="action-item">✅ Testing changes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="forge-guide-section">
        <h2>✨ Key Features of Forge</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🤖</span>
            <h3>Autonomous Operation</h3>
            <p>
              Forge works independently, making decisions about implementation details without 
              requiring constant guidance. Just describe what you want, and Forge handles the rest.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🧠</span>
            <h3>Context Understanding</h3>
            <p>
              Forge reads and understands your entire codebase, maintaining consistency with 
              your project's style, architecture, and conventions.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📝</span>
            <h3>Complete Implementation</h3>
            <p>
              From writing code to adding tests, updating documentation, and creating pull 
              requests—Forge handles the entire development workflow.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🔄</span>
            <h3>Iterative Refinement</h3>
            <p>
              Forge can iterate on its work based on feedback, test results, or changing 
              requirements, continuously improving until the task is complete.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🛡️</span>
            <h3>Quality Assurance</h3>
            <p>
              Forge runs tests, linters, and builds to verify changes work correctly before 
              committing, ensuring high code quality.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📚</span>
            <h3>Multi-Language Support</h3>
            <p>
              Forge works with various programming languages, frameworks, and tools across 
              the entire development ecosystem.
            </p>
          </div>
        </div>
      </section>

      <section className="forge-guide-section">
        <h2>🎯 How to Work with Forge</h2>
        <div className="workflow-guide">
          <div className="workflow-item">
            <div className="workflow-number">1</div>
            <div className="workflow-content">
              <h3>Be Clear and Specific</h3>
              <p>
                Describe what you want in clear, natural language. The more specific you are, 
                the better Forge can understand your requirements.
              </p>
              <div className="example-box good">
                <strong>✅ Good:</strong> "Add a dark mode toggle button to the navbar that 
                persists the user's preference in localStorage"
              </div>
              <div className="example-box bad">
                <strong>❌ Less Clear:</strong> "Make the app look better"
              </div>
            </div>
          </div>

          <div className="workflow-item">
            <div className="workflow-number">2</div>
            <div className="workflow-content">
              <h3>Provide Context When Needed</h3>
              <p>
                If you have specific requirements about styling, architecture, or implementation 
                details, mention them upfront.
              </p>
              <div className="example-box good">
                <strong>Example:</strong> "Add a user profile page using the same card-based 
                layout as the existing pages, with sections for bio, skills, and projects"
              </div>
            </div>
          </div>

          <div className="workflow-item">
            <div className="workflow-number">3</div>
            <div className="workflow-content">
              <h3>Let Forge Work Autonomously</h3>
              <p>
                Once you've described the task, Forge will plan and execute the work. You don't 
                need to provide step-by-step instructions—Forge figures out the implementation details.
              </p>
            </div>
          </div>

          <div className="workflow-item">
            <div className="workflow-number">4</div>
            <div className="workflow-content">
              <h3>Review and Iterate</h3>
              <p>
                After Forge completes the work, review the changes. If something needs adjustment, 
                just ask! Forge can iterate and refine based on your feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="forge-guide-section">
        <h2>💡 What Forge Can Do</h2>
        <div className="capabilities-list">
          <div className="capability-item">
            <span className="capability-icon">➕</span>
            <div className="capability-content">
              <h4>Add New Features</h4>
              <p>Create new components, pages, or entire features from scratch</p>
            </div>
          </div>
          <div className="capability-item">
            <span className="capability-icon">✏️</span>
            <div className="capability-content">
              <h4>Modify Existing Code</h4>
              <p>Update, refactor, or enhance existing functionality</p>
            </div>
          </div>
          <div className="capability-item">
            <span className="capability-icon">🐛</span>
            <div className="capability-content">
              <h4>Fix Bugs</h4>
              <p>Identify and resolve issues in your codebase</p>
            </div>
          </div>
          <div className="capability-item">
            <span className="capability-icon">🧪</span>
            <div className="capability-content">
              <h4>Write Tests</h4>
              <p>Create comprehensive unit and integration tests</p>
            </div>
          </div>
          <div className="capability-item">
            <span className="capability-icon">📖</span>
            <div className="capability-content">
              <h4>Update Documentation</h4>
              <p>Write or improve README files, comments, and documentation</p>
            </div>
          </div>
          <div className="capability-item">
            <span className="capability-icon">🎨</span>
            <div className="capability-content">
              <h4>Style and Design</h4>
              <p>Implement UI designs, add styling, and improve user experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="forge-guide-section expectations-section">
        <h2>👤 What Forge Expects from You</h2>
        <div className="expectations-content">
          <h3>Knowledge Level</h3>
          <p>
            You don't need to be an expert developer to use Forge effectively! Here's what helps:
          </p>
          <ul className="expectations-list">
            <li>
              <strong>Basic Understanding:</strong> Familiarity with general programming concepts 
              helps you describe what you want more clearly.
            </li>
            <li>
              <strong>Project Context:</strong> Understanding your project's goals and requirements 
              helps you guide Forge toward the right solutions.
            </li>
            <li>
              <strong>Review Capability:</strong> Ability to review code changes and provide 
              feedback on whether they meet your needs.
            </li>
          </ul>

          <h3>Communication Style</h3>
          <p>
            Forge works best when you communicate naturally. You don't need to use technical 
            jargon or provide implementation details unless you have specific preferences.
          </p>

          <div className="communication-examples">
            <div className="example-card">
              <h4>✅ Great Requests</h4>
              <ul>
                <li>"Add a contact form with name, email, and message fields"</li>
                <li>"Fix the bug where the counter resets when navigating between pages"</li>
                <li>"Make the navbar responsive for mobile devices"</li>
                <li>"Add unit tests for the Counter component"</li>
              </ul>
            </div>
            <div className="example-card">
              <h4>💡 Even Better</h4>
              <ul>
                <li>"Add a contact form with validation that shows error messages below each field"</li>
                <li>"The counter should persist its value using localStorage"</li>
                <li>"Make the navbar collapse into a hamburger menu on screens smaller than 768px"</li>
                <li>"Add tests that verify the counter increments, decrements, and resets correctly"</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="forge-guide-section tips-section">
        <h2>🎓 Pro Tips for Working with Forge</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <span className="tip-number">1</span>
            <h4>Start Small</h4>
            <p>
              Begin with smaller tasks to get comfortable with how Forge works, then gradually 
              tackle more complex features.
            </p>
          </div>
          <div className="tip-card">
            <span className="tip-number">2</span>
            <h4>Be Patient</h4>
            <p>
              Forge takes time to understand your codebase, plan the work, and implement changes 
              properly. Quality takes time!
            </p>
          </div>
          <div className="tip-card">
            <span className="tip-number">3</span>
            <h4>Provide Feedback</h4>
            <p>
              If something isn't quite right, let Forge know! It can iterate and improve based 
              on your feedback.
            </p>
          </div>
          <div className="tip-card">
            <span className="tip-number">4</span>
            <h4>Trust the Process</h4>
            <p>
              Forge follows best practices and runs tests to ensure quality. Trust that it's 
              working to deliver solid, maintainable code.
            </p>
          </div>
        </div>
      </section>

      <section className="forge-guide-section cta-section">
        <h2>🚀 Ready to Get Started?</h2>
        <p>
          Now that you understand how Forge works, you're ready to start building! Just describe 
          what you want to create or change, and Forge will take care of the implementation.
        </p>
        <div className="cta-box">
          <h3>Try It Out!</h3>
          <p>
            This very page you're reading was created by Forge! It analyzed the existing 
            application structure, created this comprehensive guide with matching styles, 
            updated the routing, and integrated everything seamlessly—all autonomously.
          </p>
        </div>
      </section>
    </div>
  )
}

export default ForgeGuide
