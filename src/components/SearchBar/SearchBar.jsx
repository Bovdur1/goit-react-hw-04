import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";
import PropTypes from "prop-types";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.search.value;

    if (query.trim() === "") {
      return toast.error("Please, fill in the search field!");
    }

    onSubmit(query);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit}>
        <div className={css.wrapper}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
            className={css.search}
          />
          <button type="submit" className={css.submitBtn}>
            <IoSearch />
          </button>
        </div>
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
