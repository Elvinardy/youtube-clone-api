import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  // prop in ()
  const [term, setTerm] = useState('');

  // props
  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui-form">
        <div className="field">
          <label>Search Video: </label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
/* class SearchBar extends React.Component {
  render() {
   
  }
} */

export default SearchBar;
