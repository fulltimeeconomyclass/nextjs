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
      <div className="">
        <h2>{name}</h2>
        <Image src={image} alt={name} width={"100px"} height={"100px"}/>
        <div className="">
          <div className="">{quantity}</div>
        </div>
        <div className="">
          <div className="">{code}</div>
        </div>
        <div className="">
          <div>{description}</div>
        </div>
        <div className="">
          <div>{address}</div>
        </div>
      </div>
    );
};
  
export default ToolCard;
  