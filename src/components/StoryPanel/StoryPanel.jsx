import { useScrollReveal } from '../../hooks/useScrollReveal'
import { WheatMark } from '../../assets/icons.jsx'
import SectionHeading from '../SectionHeading/SectionHeading.jsx'
import './StoryPanel.css'

const PROCESS = [
  { label: 'Mill', detail: 'Stone-milled flour delivered weekly from a family farm two counties over.' },
  { label: 'Proof', detail: 'Sourdough starters proofed 12–48 hours depending on the loaf.' },
  { label: 'Bake', detail: 'Deck-oven baked in small batches, never more than 20 loaves at once.' },
  { label: 'Deliver', detail: 'Boxed warm and out the door before the morning rush.' },
]

/**
 * StoryPanel
 * Brand narrative section paired with a four-step process strip. Reveals
 * on scroll to give the page a second, quieter motion beat after the hero.
 */
function StoryPanel() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="story-panel" id="story">
      <div className="container story-panel__inner">
        <div className={`story-panel__copy reveal ${isVisible ? 'is-visible' : ''}`} ref={ref}>
          <WheatMark size={30} />
          <SectionHeading
            title="A neighborhood bakery, run like a craft workshop."
            description="Bakehouse Lane started as a single deck oven and a sourdough starter named Gerald. Six years later, the process hasn't changed — just the size of the ovens."
          />
        </div>

        <div className="story-panel__process">
          {PROCESS.map((step, i) => (
            <div className="story-panel__step" key={step.label}>
              <span className="story-panel__step-index">{String(i + 1).padStart(2, '0')}</span>
              <h4>{step.label}</h4>
              <p>{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StoryPanel
