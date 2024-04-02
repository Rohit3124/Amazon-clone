import { IoReorderThreeOutline } from "react-icons/io5";
const array = [
  "Amazon miniTV",
  "Sell",
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
    <>
      <div className="category-container">
        <button className="category-items all">
          <IoReorderThreeOutline className="three-line-icon" />
          <p>All</p>
        </button>
        {array.map((item, index) => (
          <button className="category-items" key={index}>
            {item}
          </button>
        ))}
      </div>
    </>
  );
};
export default Categories;
