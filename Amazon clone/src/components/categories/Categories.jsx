const array = [
  "All",
  "Amazon miniTV",
  "sell",
  "Best Seller",
  "Mobiles",
  "Today's Deals",
  "Prime",
  "Customer Service",
  "Electronics",
  "New Releases",
  "Home & Kitchen",
  "Amazon Pay",
  "Gift Ideas",
  "Fashion",
  "Computers",
  "Books",
  "Toys & Games",
];
const Categories = () => {
  return (
    <div className="category-container">
      {array.map((item, index) => (
        <button className="category-items" key={index}>
          {item}
        </button>
      ))}
    </div>
  );
};
export default Categories;
