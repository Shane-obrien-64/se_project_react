import "../blocks/ModalWithForm.css";

const ModalWithForm = ({ name, children, title, onClose, onSubmit }) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__container">
        <button className="modal__form-close" type="button" onClick={onClose} />
        <h2 className="modal__title">{title}</h2>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
