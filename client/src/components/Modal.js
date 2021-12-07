import { motion } from 'framer-motion';
import Backdrop from './Backdrop';
import { Html } from '@react-three/drei';
import { useTransition, a } from "@react-spring/three";
// State
import { useImmer } from "use-immer";
const Modal = ({ open, setOpen }) => {

// const [chestState, updateChestState] = useImmer(state);

const closeModal = () => {
  setOpen(!open);
  // closeChest.volume = 0.3;
  // closeChest.play();
};

  return (
    <>
        <a.div>
          <div onClick={closeModal} className='overlay' />
          <div className='modal-chest'>
            <div className='top'>
              <div className='header'>
                <h4>Chest</h4>
                <div onClick={closeModal} className='close'>
                  x
                </div>
              </div>
            </div>
          </div>
        </a.div>
        </>
      );
};

export default Modal;