import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'

//import components
import Form from '../components/Form'
import Label from '../components/Label'
import StyledButton from '../components/Button'
import Input from '../components/Input'
import Textarea from '../components/Textarea'

const WrapperGrid = styled.div`
    ${props => props.full && css`
        grid-column: 1 / 3;
    `}
`;



const ContactForm = () => (
    <div>
        <h3>Mandano mail blothel</h3>
        <Form>
            <WrapperGrid>
                <Label>Nombre</Label>
                <Input type="text" name="name" />
            </WrapperGrid>
            <WrapperGrid>
                <Label>tu compa</Label>
                <Input type="text" name="company" />
            </WrapperGrid>
            <WrapperGrid>
                <Label>tu mail</Label>
                <Input type="email" name="email" />
            </WrapperGrid>
            <WrapperGrid>
                <Label>tu tel bro</Label>
                <Input type="text" name="phone" />
            </WrapperGrid>
            <WrapperGrid full>
                <Label>el mensajle</Label>
                <Textarea name="message" rows="5"></Textarea>
            </WrapperGrid>
            <WrapperGrid full>
                <StyledButton>dale mecha</StyledButton>
            </WrapperGrid>
        </Form>
    </div>
)

export default ContactForm