import React from "react";
import './ModalWindow.scss'

interface Props {
  setModalVisible: (arg: boolean) => void;
  deleteItem?: () => void;
  handleSubmit?: () => void;
  setPrevState?: () => void;
}

export const ModalWindow: React.FC<Props> = ({ setPrevState, handleSubmit, deleteItem, setModalVisible }) => {

  const handleYesClick = () => {
    if (deleteItem) {
      deleteItem();
    }
    if (handleSubmit) {
      handleSubmit()
    }
  }

  const handleNoClick = () => {
    if (setPrevState) {
      setPrevState()
    }
    setModalVisible(false)
  }

  return (
    <div className="modal">
      <div className="modal__content">
        <h3 className="modal__title">Are you shure?</h3>
        <div className="modal__buttons">
          <button
            className="button"
            type="button"
            onClick={handleYesClick}
          >
            Yes
          </button>
          <button
            className="button"
            type="button"
            onClick={handleNoClick}
          >
            No
          </button>
        </div>
      </div>
    </div>
  )
}