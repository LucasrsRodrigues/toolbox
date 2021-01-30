import React, {
    useRef,
    useEffect,
    useCallback,
    Dispatch,
    SetStateAction,
    useState,
  } from 'react';
  
  import { useSpring, animated } from 'react-spring';
  
  import * as S from './styles';
  
  interface ModalProps {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
  }
  
  interface Axys {
    axiX: string;
    axiY: string;
  }
  
  const Modal: React.FC<ModalProps> = ({ showModal, setShowModal }) => {
    const modalRef = useRef(null);
    const animation = useSpring({
      config: {
        duration: 250,
      },
      opacity: showModal ? 1 : 0,
      transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
    });
  
    const closeModal = useCallback(
      e => {
        if (modalRef.current === e.target) {
          setShowModal(false);
        }
      },
      [setShowModal],
    );
  
    const keyPress = useCallback(
      e => {
        if (e.key === 'Escape' && showModal) {
          setShowModal(false);
        }
      },
      [setShowModal, showModal],
    );
    
    useEffect(() => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);
  
    return (
      <>
        {showModal && (
          <S.Background ref={modalRef} onClick={closeModal}>
            <animated.div style={animation}>
              <S.ModalWrapper showModal={showModal}>
                <S.ModalContent>
                 Conteudo do modal aqui!
                </S.ModalContent>
                <S.CloseModalButton
                  aria-label="Close modal"
                  onClick={() => setShowModal(prev => !prev)}
                />
              </S.ModalWrapper>
            </animated.div>
          </S.Background>
        )}
      </>
    );
  };
  
  export default Modal;
  