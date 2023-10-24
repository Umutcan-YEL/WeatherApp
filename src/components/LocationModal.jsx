import Modal from "react-bootstrap/Modal";

function LocationModal() {
  return (
    <>
      <Modal show="true" backdrop="static" keyboard={false}>
        <Modal.Body>Lütfen Konum Erişimine İzin Veriniz</Modal.Body>
      </Modal>
    </>
  );
}

export default LocationModal;
