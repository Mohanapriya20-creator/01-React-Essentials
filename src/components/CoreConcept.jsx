//props is an object that contains all the attributes of the component
//argument to the component function
//with props we can reuse the component
export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt='...' />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  )
}