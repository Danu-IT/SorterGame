import React, { FC } from 'react'
import styled from 'styled-components';
import { PropsModal, PropsModalContainer } from '../../types';

const Modal: FC<PropsModal> = ({ children, visibleModal, setVisibleModal }) => {

    return (
      <ModalContainer visibleModal={visibleModal} onClick={() => setVisibleModal(false)} >
        <ModalBorder>
            <ModalContent onClick={(e) => e.stopPropagation()} >{children}</ModalContent>
        </ModalBorder>
      </ModalContainer>
    );
};

const ModalContainer = styled.div<PropsModalContainer>`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: ${p => p.visibleModal ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.4);
`

const ModalBorder = styled.div`
    background: linear-gradient(180deg, #67DF89 0%, rgba(141, 103, 223, 0) 100%);
    border-radius: 40px;
`

const ModalContent = styled.div`
    position: relative;
    margin: 15px;
    padding: 15px;
    background: white;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    min-width: 250px;
    display: flex;
    align-items: center;
    flex-direction: column;
`



export default Modal;