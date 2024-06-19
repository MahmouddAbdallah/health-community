import { useState } from 'react';

const useImageHandler = () => {
  const [imageURL, setImageURL] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const handleOnChangeInputFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const createImgURL = URL.createObjectURL(file);
      setImageURL(createImgURL);
      setSelectedImage(file);
    }
  };

  const clearImage = () => {
    URL.revokeObjectURL(imageURL);
    setImageURL("");
    setSelectedImage("");
  };

  return { imageURL, selectedImage, handleOnChangeInputFile, clearImage };
};

export default useImageHandler;