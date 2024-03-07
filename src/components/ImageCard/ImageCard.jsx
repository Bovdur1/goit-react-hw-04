import css from "./ImageCard.module.css";
import { FcLike } from "react-icons/fc";
import PropTypes from "prop-types";

const ImageCard = ({ image, openModal }) => {
  const handleClick = () =>
    openModal({
      src: image.urls.regular,
      descr: image.alt_description,
      likes: image.likes,
      author: image.user.name,
      authorPhoto: image.user.profile_image.medium,
      tags: image.tags,
    });

  return (
    <div onClick={handleClick} className={css.cardWrapper}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.image}
      />
      <div className={css.info}>
        <div className={css.author}>
          <img
            src={image.user.profile_image.small}
            alt={image.user.name}
            className={css.authorPhoto}
          />
          <p>{image.user.name !== null && image.user.name}</p>
        </div>
        <p>
          <FcLike /> {image.likes}
        </p>
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageCard;
