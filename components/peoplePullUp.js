export default ({ people }) => (
  <ul>
    {people.map((person, index) => (
      <li key={index}><strong>{person.fields.name}</strong>, {person.fields.description}</li>
    ))}
  </ul>
)