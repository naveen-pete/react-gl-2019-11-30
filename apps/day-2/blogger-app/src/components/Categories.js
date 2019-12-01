import React from 'react';

import { categories, categoryAll } from './store';

const Categories = (props) => {
  const categoriesWithAll = [categoryAll, ...categories];
  return <div>
    <h5>Categories</h5>

    <div className="list-group">
      {categoriesWithAll.map(
        c => <button
          type="button"
          key={c.id}
          className="list-group-item list-group-item-action"
          onClick={() => props.onCategorySelect(c)}
        >{c.name}</button>
      )}
    </div>
  </div>;
};

export default Categories;