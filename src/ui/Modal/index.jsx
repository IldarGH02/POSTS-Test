import CommentsList from "components/CommentsList"
import { Modal, Button } from "react-bootstrap"

const ModalComments = ({show, handleClose, commentsList}) => {
    return (
        <div className="modal show">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Комментарии</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <CommentsList
                        commentsList={commentsList}
                    />
                </Modal.Body>

                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalComments