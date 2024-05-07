import React, { Fragment } from "react";
import "./image.css";
import "react-responsive-modal/styles.css";
import CropOutlinedIcon from "@mui/icons-material/CropOutlined";
import ImageSearchOutlinedIcon from "@mui/icons-material/ImageSearchOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Modal } from "react-responsive-modal";
import Field from "./simpleField";

const IMAGES = [
  {
    name: "Image01",
    value:
      "data:image/png;base64,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"
  },
  
];

function Image(props) {
  const [open, setOpen] = React.useState(false);
  const { name, fieldContent, onChangeImage } = props
  const { value, child, config } = fieldContent
  const { label } = config.props
  const map = fieldContent?.config?.map

  const ImageModal = ({ onClose, open }) => (
    <Modal open={open} onClose={onClose} center>
      <header>Select an image from Unsplash.com</header>
      <section>
        {IMAGES.map((i, index) => (
          <img
            key={name + index}
            alt={i.name}
            loading="lazy"
            src={i.value}
            onClick={() => {
              onChangeImage({ src: i.value, name: props.name },map);
              onClose();
            }}
          />
        ))}
      </section>
    </Modal>
  );
  return (
    <Fragment>
      <ImageModal open={open} onClose={() => setOpen(false)} />
      <div className="image-container">
        <div className="title">
          <label>{label}</label>
        </div>
        <div className="preview">
          {
            value && <img
            onClick={() => setOpen(true)}
            className="image-preview"
            alt="imagze"
            src={value}
          />
          }
        </div>
        <div className="actions">
          <div className="buttons">
            <button className="secondary small" disabled>
              <CropOutlinedIcon /> Crop & Resize
            </button>
            <button className="secondary small" onClick={() => setOpen(true)}>
              <ImageSearchOutlinedIcon /> Replace image
            </button>
            <button className="secondary small" onClick={()=>{onChangeImage({ src: "", name: props.name }, map);}}>
              <DeleteOutlineOutlinedIcon /> Clear
            </button>
          </div>
        </div>
        <Field
          placeholder={child.alt.config.label}
          label={child.alt.config.label}
        />
      </div>
    </Fragment>
  );
}

const ImageField = React.memo(Image);
export default ImageField;
