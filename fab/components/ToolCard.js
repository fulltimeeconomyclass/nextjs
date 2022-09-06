import Image from 'next/image';

const ToolCard = ({
    name,
    image,
    quantity,
    code,
    description,
    address
}) => {
    return (
      <div className="pokemon-card-large">
        <h2>{name}</h2>
        <Image src={image} alt={name} width={"100px"} height={"100px"}/>
        <div className="card-section">
          <div className="card-section-content">{quantity}</div>
        </div>
        <div className="card-section">
          <div className="card-section-content">{code}</div>
        </div>
        <div className="card-section">
          <div>{description}</div>
        </div>
        <div className="card-section">
          <div>{address}</div>
        </div>
      </div>
    );
};
  
export default ToolCard;
  