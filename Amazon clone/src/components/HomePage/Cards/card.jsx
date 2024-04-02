const cardData = [
  {
    title: "Appliances for your home | Up to 55% off",
    items: [
      {
        image: "./src/assets/cardAC.jpg",
        text: "Air Conditioners",
      },
      {
        image: "./src/assets/cardRefrigerator.jpg",
        text: "Refrigerators",
      },
      {
        image: "./src/assets/cardMicrowave.jpg",
        text: "Microwaves",
      },
      {
        image: "./src/assets/cardWM.jpg",
        text: "Washing Machines",
      },
    ],
    btn: "See more",
  },
  {
    title: "Up to 60% off | Styles for men",
    items: [
      {
        image: "./src/assets/cardFootwear.jpg",
        text: "Footwear",
      },
      {
        image: "./src/assets/cardClothing.jpg",
        text: "Clothing",
      },
      {
        image: "./src/assets/cardBags.jpg",
        text: "Bags & wallets",
      },
      {
        image: "./src/assets/cardWatches.jpg",
        text: "Watches",
      },
    ],
    btn: "End of season sale",
  },
  {
    title: "Revamp your home in style",
    items: [
      {
        image: "./src/assets/cardCushion.jpg",
        text: "Cushion covers,bedsheets & more",
      },
      {
        image: "./src/assets/cardFigurines.jpg",
        text: "Figurines, vases and more",
      },
      {
        image: "./src/assets/cardHomeStorage.jpg",
        text: "Home storage",
      },
      {
        image: "./src/assets/cardLighting.jpg",
        text: "Lighting solutions",
      },
    ],
    btn: "Explore all",
  },
  {
    title: "Starting ₹99 | All your home improvement needs",
    items: [
      {
        image: "./src/assets/cardWips.jpg",
        text: "Spin mops, wipes & more",
      },
      {
        image: "./src/assets/cardBathroomHardware.jpg",
        text: "Bathroom hardware & accessories",
      },
      {
        image: "./src/assets/cardHammers.jpg",
        text: "Hammers, screwdrivers & more",
      },
      {
        image: "./src/assets/cardExtension.jpg",
        text: "Extension board, plugs & more",
      },
    ],
    btn: "Explore all",
  },
];

const Card = () => {
  return (
    <div className="cards">
      {cardData.map((card, index) => (
        <div key={index} className="card">
          <h2 className="card-title">{card.title}</h2>
          <div className="boxes">
            {card.items.map((item, i) => (
              <div key={i} className="box">
                <img className="item-img" src={item.image} alt={item.text} />
                <p className="item-name">{item.text}</p>
              </div>
            ))}
          </div>
          <button className="card-btn">{card.btn}</button>
        </div>
      ))}
    </div>
  );
};

export default Card;
