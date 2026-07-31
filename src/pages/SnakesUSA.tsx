import './SnakesUSA.css'

interface Snake {
  name: string
  scientificName: string
  regions: string[]
  venomous: boolean
  description: string
  size: string
}

function SnakesUSA() {
  const venomousSnakes: Snake[] = [
    {
      name: "Eastern Diamondback Rattlesnake",
      scientificName: "Crotalus adamanteus",
      regions: ["Southeast"],
      venomous: true,
      description: "The largest venomous snake in North America, known for its distinctive diamond pattern and powerful rattle.",
      size: "3-6 feet"
    },
    {
      name: "Western Diamondback Rattlesnake",
      scientificName: "Crotalus atrox",
      regions: ["Southwest", "Texas"],
      venomous: true,
      description: "One of the most common rattlesnakes, responsible for the most snakebite fatalities in Mexico and the second most in the United States.",
      size: "3-7 feet"
    },
    {
      name: "Timber Rattlesnake",
      scientificName: "Crotalus horridus",
      regions: ["Northeast", "Southeast", "Midwest"],
      venomous: true,
      description: "A large, heavy-bodied snake found in deciduous forests. Known for being relatively docile but potentially dangerous.",
      size: "3-5 feet"
    },
    {
      name: "Copperhead",
      scientificName: "Agkistrodon contortrix",
      regions: ["Eastern US", "Central US"],
      venomous: true,
      description: "Named for its copper-colored head, this pit viper is responsible for more venomous bites than any other snake in the US, though bites are rarely fatal.",
      size: "2-3 feet"
    },
    {
      name: "Cottonmouth (Water Moccasin)",
      scientificName: "Agkistrodon piscivorus",
      regions: ["Southeast"],
      venomous: true,
      description: "A semi-aquatic pit viper named for the white interior of its mouth, which it displays when threatened.",
      size: "2-4 feet"
    },
    {
      name: "Coral Snake",
      scientificName: "Micrurus fulvius",
      regions: ["Southeast", "Texas"],
      venomous: true,
      description: "Recognized by its distinctive red, yellow, and black bands. Highly venomous but rarely bites humans due to its reclusive nature.",
      size: "2-3 feet"
    },
    {
      name: "Mojave Rattlesnake",
      scientificName: "Crotalus scutulatus",
      regions: ["Southwest"],
      venomous: true,
      description: "Considered one of the most dangerous rattlesnakes due to its potent neurotoxic venom.",
      size: "2-4 feet"
    },
    {
      name: "Sidewinder",
      scientificName: "Crotalus cerastes",
      regions: ["Southwest deserts"],
      venomous: true,
      description: "A small rattlesnake known for its unique sidewinding locomotion across desert sand.",
      size: "1.5-2.5 feet"
    }
  ]

  const nonVenomousSnakes: Snake[] = [
    {
      name: "Eastern Rat Snake",
      scientificName: "Pantherophis alleghaniensis",
      regions: ["Eastern US"],
      venomous: false,
      description: "An excellent climber and constrictor, often found in barns and attics hunting rodents.",
      size: "3-6 feet"
    },
    {
      name: "Gopher Snake",
      scientificName: "Pituophis catenifer",
      regions: ["Western US"],
      venomous: false,
      description: "Often mistaken for a rattlesnake due to its defensive behavior of hissing and vibrating its tail.",
      size: "3-7 feet"
    },
    {
      name: "Common Garter Snake",
      scientificName: "Thamnophis sirtalis",
      regions: ["Throughout US"],
      venomous: false,
      description: "One of the most common and widespread snakes in North America, often found in gardens and yards.",
      size: "1.5-4 feet"
    },
    {
      name: "Corn Snake",
      scientificName: "Pantherophis guttatus",
      regions: ["Southeast"],
      venomous: false,
      description: "A popular pet snake, named for its presence in corn fields where it hunts rodents.",
      size: "2-6 feet"
    },
    {
      name: "Milk Snake",
      scientificName: "Lampropeltis triangulum",
      regions: ["Throughout US"],
      venomous: false,
      description: "Often confused with coral snakes due to similar coloration, but harmless to humans.",
      size: "2-4 feet"
    },
    {
      name: "King Snake",
      scientificName: "Lampropeltis getula",
      regions: ["Throughout US"],
      venomous: false,
      description: "Named for its habit of eating other snakes, including venomous species. Immune to pit viper venom.",
      size: "3-6 feet"
    },
    {
      name: "Racer",
      scientificName: "Coluber constrictor",
      regions: ["Throughout US"],
      venomous: false,
      description: "Fast-moving snakes that actively hunt during the day. Despite the name, they don't constrict prey.",
      size: "3-6 feet"
    },
    {
      name: "Hognose Snake",
      scientificName: "Heterodon platirhinos",
      regions: ["Eastern and Central US"],
      venomous: false,
      description: "Known for its dramatic defensive display of flattening its neck and playing dead when threatened.",
      size: "1.5-3 feet"
    },
    {
      name: "Ring-necked Snake",
      scientificName: "Diadophis punctatus",
      regions: ["Throughout US"],
      venomous: false,
      description: "Small, secretive snakes with a distinctive yellow or orange ring around the neck.",
      size: "10-15 inches"
    },
    {
      name: "Smooth Green Snake",
      scientificName: "Opheodrys vernalis",
      regions: ["Northern US"],
      venomous: false,
      description: "A bright green snake that blends perfectly with grass and vegetation.",
      size: "1-2 feet"
    },
    {
      name: "Water Snake",
      scientificName: "Nerodia sipedon",
      regions: ["Eastern and Central US"],
      venomous: false,
      description: "Often mistaken for cottonmouths, these harmless snakes are commonly found near water.",
      size: "2-4 feet"
    },
    {
      name: "Indigo Snake",
      scientificName: "Drymarchon couperi",
      regions: ["Southeast"],
      venomous: false,
      description: "The longest native snake in the US, with a beautiful blue-black coloration.",
      size: "5-8 feet"
    },
    {
      name: "Coachwhip",
      scientificName: "Masticophis flagellum",
      regions: ["Southern US"],
      venomous: false,
      description: "One of the fastest snakes in North America, capable of speeds up to 4 mph.",
      size: "4-8 feet"
    },
    {
      name: "Pine Snake",
      scientificName: "Pituophis melanoleucus",
      regions: ["Eastern US"],
      venomous: false,
      description: "Large, powerful constrictors that produce a loud hissing sound when threatened.",
      size: "4-7 feet"
    },
    {
      name: "Rough Green Snake",
      scientificName: "Opheodrys aestivus",
      regions: ["Southeast"],
      venomous: false,
      description: "Arboreal snakes with bright green coloration, often found in trees and shrubs.",
      size: "2-3 feet"
    }
  ]

  return (
    <div className="snakes-usa-page">
      <div className="snakes-usa-container">
        <header className="snakes-usa-header">
          <h1>🐍 Snakes Indigenous to the United States</h1>
          <p className="snakes-usa-intro">
            The United States is home to approximately 50 species of snakes, ranging from tiny 
            ring-necked snakes to massive indigo snakes. This page highlights some of the most 
            notable indigenous species found across the country.
          </p>
        </header>

        <section className="snake-safety">
          <h2>🚨 Snake Safety Tips</h2>
          <div className="safety-grid">
            <div className="safety-tip">
              <span className="safety-icon">👀</span>
              <h3>Watch Your Step</h3>
              <p>Be aware of your surroundings, especially in tall grass or rocky areas</p>
            </div>
            <div className="safety-tip">
              <span className="safety-icon">🚫</span>
              <h3>Don't Handle</h3>
              <p>Never attempt to handle or kill a snake, even if you think it's non-venomous</p>
            </div>
            <div className="safety-tip">
              <span className="safety-icon">🏥</span>
              <h3>Seek Medical Help</h3>
              <p>If bitten, remain calm and seek immediate medical attention</p>
            </div>
            <div className="safety-tip">
              <span className="safety-icon">📏</span>
              <h3>Keep Distance</h3>
              <p>Maintain a safe distance of at least 6 feet from any snake</p>
            </div>
          </div>
        </section>

        <section className="snake-section venomous-section">
          <h2>⚠️ Venomous Snakes ({venomousSnakes.length} Species)</h2>
          <p className="section-intro">
            While venomous snakes should be treated with caution and respect, they play crucial 
            roles in ecosystems by controlling rodent populations. Most snakebites occur when 
            people attempt to handle or kill snakes.
          </p>
          <div className="snake-grid">
            {venomousSnakes.map((snake, index) => (
              <div key={index} className="snake-card venomous-card">
                <div className="snake-header">
                  <h3>{snake.name}</h3>
                  <span className="venomous-badge">VENOMOUS</span>
                </div>
                <p className="scientific-name">{snake.scientificName}</p>
                <p className="snake-description">{snake.description}</p>
                <div className="snake-details">
                  <div className="detail-item">
                    <strong>Size:</strong> {snake.size}
                  </div>
                  <div className="detail-item">
                    <strong>Regions:</strong> {snake.regions.join(', ')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="snake-section non-venomous-section">
          <h2>✅ Non-Venomous Snakes ({nonVenomousSnakes.length} Species)</h2>
          <p className="section-intro">
            Non-venomous snakes are beneficial to have around as they help control pest populations. 
            Many are docile and will flee when encountered. However, they may bite if cornered or 
            handled, so it's best to observe from a distance.
          </p>
          <div className="snake-grid">
            {nonVenomousSnakes.map((snake, index) => (
              <div key={index} className="snake-card non-venomous-card">
                <div className="snake-header">
                  <h3>{snake.name}</h3>
                  <span className="non-venomous-badge">NON-VENOMOUS</span>
                </div>
                <p className="scientific-name">{snake.scientificName}</p>
                <p className="snake-description">{snake.description}</p>
                <div className="snake-details">
                  <div className="detail-item">
                    <strong>Size:</strong> {snake.size}
                  </div>
                  <div className="detail-item">
                    <strong>Regions:</strong> {snake.regions.join(', ')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="snake-facts">
          <h2>🔍 Interesting Facts About US Snakes</h2>
          <div className="facts-grid">
            <div className="fact-card">
              <h3>🌡️ Temperature Regulation</h3>
              <p>Snakes are ectothermic (cold-blooded) and rely on external heat sources to regulate their body temperature.</p>
            </div>
            <div className="fact-card">
              <h3>👃 Smell with Tongues</h3>
              <p>Snakes use their forked tongues to collect scent particles and transfer them to the Jacobson's organ in their mouth.</p>
            </div>
            <div className="fact-card">
              <h3>🦴 Flexible Jaws</h3>
              <p>Snakes can unhinge their jaws to swallow prey much larger than their head diameter.</p>
            </div>
            <div className="fact-card">
              <h3>🌿 Ecosystem Role</h3>
              <p>Snakes are vital for controlling rodent populations and maintaining ecological balance.</p>
            </div>
            <div className="fact-card">
              <h3>👂 No Ears</h3>
              <p>Snakes don't have external ears but can sense vibrations through their jawbones.</p>
            </div>
            <div className="fact-card">
              <h3>🔄 Shedding Skin</h3>
              <p>Snakes shed their entire skin in one piece, a process called ecdysis, which occurs multiple times per year.</p>
            </div>
          </div>
        </section>

        <section className="conservation-note">
          <h2>🌍 Conservation</h2>
          <p>
            Many snake species face threats from habitat loss, road mortality, and persecution by humans. 
            Snakes play crucial roles in ecosystems and should be protected. If you encounter a snake, 
            observe it from a safe distance and allow it to move on naturally. Consider contacting local 
            wildlife services if a venomous snake is in a high-traffic area.
          </p>
        </section>
      </div>
    </div>
  )
}

export default SnakesUSA
