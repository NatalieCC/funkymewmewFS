import React from 'react';
import { openModal,closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

import CreateBoardContainer from '../boards/create_board_container';
import EditBoardContainer from '../boards/edit_board_container';
import EditPinFormContainer from "../pins/edit_pin_form_container";
import SavePinOnBoardFormContainer from '../pins/save_pin_on_board_form_container';

function Modal({ modal,openModal,closeModal }) {
    //debugger
    if (!modal) {
        return null;
    }
    
    let component;
    //debugger
    switch (modal) {
        case 'createBoard':
            component = <CreateBoardContainer />;
            break;
        case 'editBoard':
            component = <EditBoardContainer />;
            break;    
        case 'editPin':
            component = <EditPinFormContainer />
            break;
        case 'savePinOnBoard':
            debugger
            component = <SavePinOnBoardFormContainer />
            break;
        default:
            return null;
    }


    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
