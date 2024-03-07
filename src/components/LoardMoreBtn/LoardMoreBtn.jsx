import css from "./LoardMoreBtn.module.css";
import PropTypes from "prop-types";

const LoardMoreBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button" className={css.loardMoreBtn}>
      Loard more
    </button>
  );
};

LoardMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoardMoreBtn;
