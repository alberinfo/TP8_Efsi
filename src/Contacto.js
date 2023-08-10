import React, { Component } from 'react'
//import all child components
import Container from './components/Container'
import Title from './components/Title'
import CompanyInfo from './Form/CompanyInfo'
import ContactForm from './Form/ContactForm'

function Contacto(){
    return(

            <Container>
                <Title text="Taitel" />
                <Container wrapper>
                    <CompanyInfo />
                    <ContactForm />
                </Container>
            </Container>
    );

}

export default Contacto;