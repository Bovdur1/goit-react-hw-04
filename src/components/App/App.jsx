import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import fetchImages from "../../gallery-api.js";
import toast, { Toaster } from "react-hot-toast";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import Loader from "../Loader/Loader.jsx";
import LoardMoreBtn from "../LoardMoreBtn/LoardMoreBtn.jsx";
import ImageModal from "../ImageModal/ImageModal.jsx";

const initialImageModalData = {
  src: "",
  descr: "",
  likes: "",
  author: "",
  authorPhoto: "",
  tags: [],
};

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imageModal, setImageModal] = useState(initialImageModalData);

  useEffect(() => {
    if (!query) return;

    const createRequest = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const response = await fetchImages(query, page);
        if (response.data.total === 0) {
          return toast.error(
            "Sorry, there no images matching your search query"
          );
        }
        setImages((prevImages) => {
          return [...prevImages, ...response.data.results];
        });
        setTotalPage(response.data.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    createRequest();
  }, [query, page]);

  const handleSubmit = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setTotalPage(0);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (modalImgData) => {
    setImageModal(modalImgData);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setImageModal(initialImageModalData);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {error && <ErrorMessage />}
      {images.length > 0 && !isLoading && totalPage > 1 && (
        <LoardMoreBtn onClick={handleLoadMore} />
      )}
      {isLoading && <Loader />}

      <ImageModal
        onClose={closeModal}
        isOpen={modalIsOpen}
        imageModal={imageModal}
      />

      <Toaster position="top-left" />
    </>
  );
}

export default App;
