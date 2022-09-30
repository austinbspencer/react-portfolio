import React from "react";
import Lightbox from "react-image-lightbox";

const LightboxHandler = ({ images, isOpen, handleClose }) => {
  return (
    <React.Fragment>
      {isOpen && (
        <Lightbox
          mainSrc={images[0] || ""}
          nextSrc={null}
          prevSrc={null}
          onCloseRequest={handleClose}
          imagePadding={30}
          enableZoom={false}
        />
      )}
    </React.Fragment>
  );
};

export default LightboxHandler;
