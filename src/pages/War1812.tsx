import './War1812.css'

function War1812() {
  return (
    <div className="war1812-page">
      <header className="war1812-header">
        <h1>⚔️ The War of 1812</h1>
        <p className="war1812-subtitle">Understanding the Repercussions of America's Second War for Independence</p>
      </header>

      <main className="war1812-content">
        <section className="war1812-section">
          <h2>📜 Overview</h2>
          <p>
            The War of 1812, fought between the United States and Great Britain from June 1812 to February 1815, 
            was a pivotal conflict that shaped the future of North America. While often overshadowed by other wars 
            in American history, its repercussions were far-reaching and long-lasting.
          </p>
        </section>

        <section className="war1812-section">
          <h2>🇺🇸 Impact on the United States</h2>
          
          <div className="impact-card">
            <h3>National Identity and Pride</h3>
            <p>
              The war fostered a strong sense of American nationalism and identity. The successful defense 
              against British invasion, particularly the Battle of New Orleans, created national heroes like 
              Andrew Jackson and inspired the writing of "The Star-Spangled Banner."
            </p>
          </div>

          <div className="impact-card">
            <h3>Economic Independence</h3>
            <p>
              British blockades during the war forced Americans to develop their own manufacturing capabilities. 
              This led to the growth of American industry, particularly in textiles and manufacturing, reducing 
              dependence on European imports and laying the groundwork for the Industrial Revolution in America.
            </p>
          </div>

          <div className="impact-card">
            <h3>Political Changes</h3>
            <p>
              The Federalist Party, which opposed the war, effectively collapsed after the Hartford Convention. 
              This ushered in the "Era of Good Feelings" under Democratic-Republican dominance and reshaped 
              American political landscape for decades.
            </p>
          </div>

          <div className="impact-card">
            <h3>Military Reforms</h3>
            <p>
              The war exposed weaknesses in American military preparedness. This led to significant reforms, 
              including the establishment of a stronger standing army, improved coastal fortifications, and 
              the creation of a more professional military establishment.
            </p>
          </div>
        </section>

        <section className="war1812-section">
          <h2>🍁 Impact on Canada</h2>
          
          <div className="impact-card">
            <h3>Canadian Identity Formation</h3>
            <p>
              The successful defense against American invasion became a cornerstone of Canadian national identity. 
              The war united English and French Canadians in a common cause and is often cited as a key moment 
              in the development of Canadian nationalism.
            </p>
          </div>

          <div className="impact-card">
            <h3>Territorial Security</h3>
            <p>
              The war confirmed British North America's borders and ended serious American expansionist threats 
              to Canadian territory. This security allowed for more stable development of Canadian institutions 
              and settlements.
            </p>
          </div>
        </section>

        <section className="war1812-section">
          <h2>🪶 Impact on Native Americans</h2>
          
          <div className="impact-card impact-card-negative">
            <h3>Devastating Consequences</h3>
            <p>
              Native American tribes, particularly those who allied with the British under leaders like Tecumseh, 
              suffered catastrophic losses. The death of Tecumseh and the collapse of his confederacy ended 
              organized Native American resistance in the Old Northwest.
            </p>
          </div>

          <div className="impact-card impact-card-negative">
            <h3>Loss of British Support</h3>
            <p>
              The Treaty of Ghent abandoned Native American allies, leaving them without European support against 
              American expansion. This accelerated the displacement and removal of Native peoples from their 
              ancestral lands east of the Mississippi River.
            </p>
          </div>

          <div className="impact-card impact-card-negative">
            <h3>Accelerated Westward Expansion</h3>
            <p>
              With Native American resistance broken, American settlers rapidly expanded westward. This led to 
              forced relocations, including the Trail of Tears, and the systematic dispossession of Native lands.
            </p>
          </div>
        </section>

        <section className="war1812-section">
          <h2>🌍 International Repercussions</h2>
          
          <div className="impact-card">
            <h3>Anglo-American Relations</h3>
            <p>
              Despite the conflict, the war ultimately led to improved relations between the United States and 
              Britain. The Rush-Bagot Treaty (1817) demilitarized the Great Lakes, and the Convention of 1818 
              established the 49th parallel as the border, creating the world's longest undefended border.
            </p>
          </div>

          <div className="impact-card">
            <h3>End of Impressment</h3>
            <p>
              While not explicitly addressed in the Treaty of Ghent, the practice of British impressment of 
              American sailors effectively ended after the Napoleonic Wars concluded. This removed a major 
              source of Anglo-American tension.
            </p>
          </div>

          <div className="impact-card">
            <h3>Latin American Independence</h3>
            <p>
              Britain's preoccupation with the American war weakened its ability to support Spain in maintaining 
              control over its American colonies, indirectly contributing to the success of Latin American 
              independence movements.
            </p>
          </div>
        </section>

        <section className="war1812-section">
          <h2>📊 Long-Term Consequences</h2>
          
          <div className="consequences-grid">
            <div className="consequence-item">
              <span className="consequence-icon">🏛️</span>
              <h4>Manifest Destiny</h4>
              <p>The war's outcome emboldened American expansionism, contributing to the ideology of Manifest Destiny</p>
            </div>
            
            <div className="consequence-item">
              <span className="consequence-icon">🏭</span>
              <h4>Industrial Growth</h4>
              <p>Accelerated American industrialization and economic self-sufficiency</p>
            </div>
            
            <div className="consequence-item">
              <span className="consequence-icon">🤝</span>
              <h4>Peaceful Borders</h4>
              <p>Established lasting peace between the US and Canada, creating a model for international relations</p>
            </div>
            
            <div className="consequence-item">
              <span className="consequence-icon">⚖️</span>
              <h4>Slavery Debate</h4>
              <p>Regional divisions during the war foreshadowed the sectional conflicts that would lead to the Civil War</p>
            </div>
          </div>
        </section>

        <section className="war1812-section war1812-conclusion">
          <h2>🎯 Conclusion</h2>
          <p>
            The War of 1812's repercussions extended far beyond the battlefield. For the United States, it marked 
            a true coming of age as a nation, fostering nationalism and economic independence. For Canada, it 
            became a defining moment in national identity. For Native Americans, it was catastrophic, marking 
            the beginning of the end of their sovereignty east of the Mississippi. The war reshaped North American 
            politics, economics, and demographics in ways that continue to influence the continent today.
          </p>
          <p className="war1812-quote">
            "The War of 1812 was not merely a military conflict, but a transformative event that redefined 
            nations, peoples, and the very geography of North America."
          </p>
        </section>
      </main>
    </div>
  )
}

export default War1812
