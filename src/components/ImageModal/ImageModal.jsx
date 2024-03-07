import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { IoMdClose } from "react-icons/io";
import PropTypes from "prop-types";

Modal.setAppElement(document.getElementById("root"));

const ImageModal = ({ onClose, isOpen = false, imageModal }) => {
  const { src, descr, likes, author, authorPhoto, tags } = imageModal;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={css.content}
      overlayClassName={css.overlay}
    >
      <div className={css.modal}>
        <img src={src} alt={descr} className={css.image} />

        {/* Блок інформації про зображення */}
        <div className={css.imageData}>
          <button onClick={onClose} className={css.closeBtn}>
            <IoMdClose />
          </button>
          <div className={css.author}>
            <img src={authorPhoto} alt={author} className={css.authorPhoto} />
            <p>{author}</p>
          </div>
          <p>
            <b>Likes:</b> {likes}
          </p>
          <p className={css.description}>{descr}</p>
          <ul className={css.tagList}>
            {tags.map((tag, i) => (
              <li key={i} className={css.tag}>
                <p>#{tag.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
};

ImageModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  imageModal: PropTypes.object.isRequired,
};

export default ImageModal;
