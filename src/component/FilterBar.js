import React from "react";

function FilterBar(props) {
  return (
    <div id="search-bar">
      Filter: <input onChange={props.handleChange} />
    </div>
  );
}

export default FilterBar;
