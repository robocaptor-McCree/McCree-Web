import React from "react";
import styled from "styled-components";
import {Container} from "semantic-ui-react";


function Modal(props) {
    const { onClose } = props;

    return (
        <Container
            onClick={() => {
                onClose(false);
            }}
            >

            팝업창
        </Container>
    );
}

const Container = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.6);

`;

export default Modal;