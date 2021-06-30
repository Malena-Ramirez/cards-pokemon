const Card = ({name,img,abilities,exp}) =>{
  return(
      <div>
          <figure>
          <img src={img} alt={name} />
          <figcaption>{name}</figcaption>
          </figure>
          <h3>Habilidad : {abilities}</h3>
          <h3>Exp : {exp}</h3>
      </div>
  )
}
export default Card;
