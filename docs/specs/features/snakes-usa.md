# Snakes USA Page

**Concept:** [Application Architecture](../application-architecture.md)

## Overview

The Snakes USA page is an educational resource that provides comprehensive information about snake species indigenous to the United States. It catalogs both venomous and non-venomous species with detailed descriptions, safety tips, and interesting facts.

## Implementation

### Page Component
`src/pages/SnakesUSA.tsx`

### Route
`/snakes-usa`

## Content Structure

### Page Sections
1. **Header** - Title and introduction
2. **Snake Safety Tips** - 4 safety guidelines
3. **Venomous Snakes** - 8 species with details
4. **Non-Venomous Snakes** - 15 species with details
5. **Interesting Facts** - 6 educational facts
6. **Conservation Note** - Environmental message

## Data Model

### Snake Interface
```typescript
interface Snake {
  name: string
  scientificName: string
  regions: string[]
  venomous: boolean
  description: string
  size: string
}
```

### Data Storage
Snake data is stored as two arrays within the component:
- `venomousSnakes: Snake[]` - 8 venomous species
- `nonVenomousSnakes: Snake[]` - 15 non-venomous species

## Venomous Snakes (8 Species)

### Included Species
1. **Eastern Diamondback Rattlesnake** - Southeast, 3-6 feet
2. **Western Diamondback Rattlesnake** - Southwest/Texas, 3-7 feet
3. **Timber Rattlesnake** - Northeast/Southeast/Midwest, 3-5 feet
4. **Copperhead** - Eastern/Central US, 2-3 feet
5. **Cottonmouth (Water Moccasin)** - Southeast, 2-4 feet
6. **Coral Snake** - Southeast/Texas, 2-3 feet
7. **Mojave Rattlesnake** - Southwest, 2-4 feet
8. **Sidewinder** - Southwest deserts, 1.5-2.5 feet

### Display Format
Each venomous snake card shows:
- Common name (heading)
- "VENOMOUS" badge (red/warning color)
- Scientific name (italicized)
- Description paragraph
- Size range
- Geographic regions

## Non-Venomous Snakes (15 Species)

### Included Species
1. **Eastern Rat Snake** - Eastern US, 3-6 feet
2. **Gopher Snake** - Western US, 3-7 feet
3. **Common Garter Snake** - Throughout US, 1.5-4 feet
4. **Corn Snake** - Southeast, 2-6 feet
5. **Milk Snake** - Throughout US, 2-4 feet
6. **King Snake** - Throughout US, 3-6 feet
7. **Racer** - Throughout US, 3-6 feet
8. **Hognose Snake** - Eastern/Central US, 1.5-3 feet
9. **Ring-necked Snake** - Throughout US, 10-15 inches
10. **Smooth Green Snake** - Northern US, 1-2 feet
11. **Water Snake** - Eastern/Central US, 2-4 feet
12. **Indigo Snake** - Southeast, 5-8 feet (longest native snake)
13. **Coachwhip** - Southern US, 4-8 feet
14. **Pine Snake** - Eastern US, 4-7 feet
15. **Rough Green Snake** - Southeast, 2-3 feet

### Display Format
Each non-venomous snake card shows:
- Common name (heading)
- "NON-VENOMOUS" badge (green/safe color)
- Scientific name (italicized)
- Description paragraph
- Size range
- Geographic regions

## Safety Tips Section

### Four Safety Guidelines
1. **👀 Watch Your Step** - Be aware in tall grass or rocky areas
2. **🚫 Don't Handle** - Never attempt to handle or kill snakes
3. **🏥 Seek Medical Help** - Get immediate medical attention if bitten
4. **📏 Keep Distance** - Maintain at least 6 feet from any snake

### Layout
Grid layout with icon, heading, and description for each tip.

## Interesting Facts Section

### Six Educational Facts
1. **🌡️ Temperature Regulation** - Ectothermic (cold-blooded)
2. **👃 Smell with Tongues** - Jacobson's organ for scent detection
3. **🦴 Flexible Jaws** - Can unhinge jaws to swallow large prey
4. **🌿 Ecosystem Role** - Control rodent populations
5. **👂 No Ears** - Sense vibrations through jawbones
6. **🔄 Shedding Skin** - Ecdysis process, multiple times per year

### Layout
Grid of fact cards with icon, heading, and description.

## Conservation Section

### Message
Emphasizes:
- Threats to snake populations (habitat loss, road mortality, persecution)
- Ecological importance of snakes
- Proper behavior when encountering snakes
- When to contact wildlife services

## User Interface

### Visual Design
- Clean, educational layout
- Color-coded badges (red for venomous, green for non-venomous)
- Grid layouts for cards
- Emoji icons for visual interest
- Responsive design

### Typography
- Clear hierarchy with headings
- Scientific names in italics
- Readable body text
- Consistent spacing

### Color Coding
- **Venomous cards:** Warning colors (red/orange tones)
- **Non-venomous cards:** Safe colors (green tones)
- **Safety tips:** Attention-grabbing colors
- **Facts:** Neutral, educational colors

## Styling

### CSS Classes
- `.snakes-usa-page` - Page wrapper
- `.snakes-usa-container` - Content container
- `.snakes-usa-header` - Page header
- `.snakes-usa-intro` - Introduction text
- `.snake-safety` - Safety section
- `.safety-grid` - Safety tips grid
- `.safety-tip` - Individual safety tip
- `.safety-icon` - Safety tip icon
- `.snake-section` - Snake category section
- `.venomous-section` - Venomous snakes section
- `.non-venomous-section` - Non-venomous snakes section
- `.section-intro` - Section introduction
- `.snake-grid` - Snake cards grid
- `.snake-card` - Individual snake card
- `.venomous-card` - Venomous snake card
- `.non-venomous-card` - Non-venomous snake card
- `.snake-header` - Card header with name and badge
- `.venomous-badge` - Venomous indicator badge
- `.non-venomous-badge` - Non-venomous indicator badge
- `.scientific-name` - Scientific name text
- `.snake-description` - Description paragraph
- `.snake-details` - Details section (size, regions)
- `.detail-item` - Individual detail
- `.snake-facts` - Facts section
- `.facts-grid` - Facts grid
- `.fact-card` - Individual fact card
- `.conservation-note` - Conservation section

## Content Characteristics

### Educational Focus
- Accurate scientific information
- Practical safety guidance
- Ecological context
- Conservation awareness

### Comprehensive Coverage
- Major venomous species
- Common non-venomous species
- Geographic distribution
- Size information

### Balanced Perspective
- Acknowledges danger of venomous species
- Emphasizes ecological value
- Promotes coexistence
- Discourages harm to snakes

## Technical Details

### Data Management
- Static data arrays in component
- No external API calls
- No state management needed
- Pure presentational component

### Rendering
- Maps over snake arrays to generate cards
- Dynamic count display (e.g., "8 Species")
- Consistent card structure
- Responsive grid layouts

## Accessibility

### Semantic HTML
- Proper heading hierarchy (h1, h2, h3)
- Section elements for content organization
- Descriptive class names

### Content Structure
- Clear visual hierarchy
- Logical reading order
- Descriptive headings
- Scannable layout

## Use Cases

### Educational Resource
- Learn about local snake species
- Identify snakes by description
- Understand geographic distribution
- Learn safety practices

### Reference Guide
- Quick lookup of species information
- Compare venomous vs non-venomous
- Check size ranges
- Find regional species

### Safety Information
- Learn how to stay safe around snakes
- Understand when to seek help
- Know proper behavior when encountering snakes

## Edge Cases

### Regional Variations
- Some species have overlapping ranges
- Regional subspecies not detailed
- Simplified geographic descriptions

### Species Selection
- Not exhaustive (50+ species in US)
- Focuses on notable/common species
- Represents major families

## Future Enhancements

### Potential Additions
- **Search/Filter** - Search by name, region, or characteristics
- **Image Gallery** - Photos of each species
- **Range Maps** - Visual maps showing distribution
- **Identification Tool** - Interactive key for identifying snakes
- **Seasonal Activity** - When species are most active
- **Habitat Details** - Preferred habitats for each species
- **Similar Species** - Comparison with look-alikes
- **First Aid Guide** - Detailed snakebite first aid
- **Local Resources** - Links to regional wildlife services
- **User Submissions** - Allow users to report sightings
- **Quiz Mode** - Test knowledge of snake identification
- **Print Version** - Printable field guide format

### Data Enhancements
- **More Species** - Expand to all US snake species
- **Subspecies** - Include regional variants
- **Behavior** - Detailed behavioral information
- **Diet** - What each species eats
- **Reproduction** - Breeding and lifecycle info
- **Conservation Status** - IUCN status for each species

The Snakes USA page provides a comprehensive, educational resource about indigenous snake species with a focus on safety, identification, and conservation.
