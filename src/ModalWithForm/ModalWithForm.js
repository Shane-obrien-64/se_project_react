import "./ModalWithForm.css";

const ModalWithForm = ({
  name,
  children,
  title,
  buttonText = "Add garment",
  onClose,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__container">
        <button type="button" onClick={onClose}></button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form">{children}</form>
        <button type="submit">{buttonText}</button>
      </div>
    </div>
  );
};

export default ModalWithForm;
