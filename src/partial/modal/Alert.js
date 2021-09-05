import React from 'react'
import { Link } from 'react-router-dom'
import Modal from "react-responsive-modal"
import imgSvg from '../../assets/images/img-alert.svg'
import { Button } from 'antd';

const Alert = ({ main, actionsMain }) => {
  const { toggle_popup } = actionsMain	
	const type = main?.modal_msg
	const data = main?.modal_data  
	const closeIcon = (
		<div className="btn-close alert">
			<svg width="35" height="35" viewBox="0 0 36 36" data-testid="close-icon"><path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"></path></svg>
		</div>
	)	
	const handleClose = () => {	
		toggle_popup("modal_alert", false, type, data)		
	}  
	// const arr = [1,2,3,4,5,6,7,8,9,10]
  return (
    <Modal
			open={main.modal_alert}
			onClose={handleClose}
			center
			closeIcon={closeIcon}
			classNames={{
				modal: "modal-container",
			}}			
		>
			<div className="modal-message modal-alert" >
        <div className="info-text">
          <h2>Please login to get full access in this website</h2>
          <img className="illustration" src={imgSvg} alt="" />
          <Link to="/login" onClick={handleClose}>
            <div className="btn-ok">
              <Button shape="round" size="large">
                Login Now
              </Button>
            </div>
          </Link>
          <p>Don’t have an account? <Link to="/register" onClick={handleClose}>Register</Link></p>
        </div>
				
			</div>
		</Modal>
    )
}

export default Alert
