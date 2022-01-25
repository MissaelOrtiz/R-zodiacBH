import './zodiac-card.css'

export default function ZodiacCard({ name, dates }) {
  return (
    <div className="zodiac-card">
      <h2>Zodiac card</h2>
      <img alt={name} src={`/images/${name}`} />
      <span className="name">{name}</span>
      <span>{dates}</span>
    </div>
  )
}
