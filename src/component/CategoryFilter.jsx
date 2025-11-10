

import Checkbox from "./Checkbox";
import { categoryTitle } from "../data/category";

function CategoryFilter({ selectedCategories, onChangeCategory }) {
  return (
    <div className="w-full max-w-xs bg-white border border-gray-200 shadow-md rounded-xl p-5 space-y-3 hover:shadow-lg transition-shadow duration-300">
      <h3 className="font-semibold text-lg text-gray-800 border-b border-gray-100 pb-2">
        Category Filter
      </h3>

      <div className="space-y-2 pt-1">
        {categoryTitle.map((category, index) => (
          <Checkbox
            key={index}
            text={category}
            checked={selectedCategories.includes(category)}
            onChange={(e) => onChangeCategory(category, e.target.checked)}
            className="hover:bg-gray-50 p-1 rounded-md transition"
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
