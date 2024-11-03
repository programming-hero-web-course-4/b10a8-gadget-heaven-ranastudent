import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div  className="flex flex-col items-center  space-y-3 bg-white ">
      <button className="btn btn-outline btn-success bg-base-200">All Products</button>
      {categories.map(category => (
        <NavLink key={category.id} to={`/cards/${category.category}`}>
          <button className="btn btn-outline btn-success bg-base-200">{category.category}</button>
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
