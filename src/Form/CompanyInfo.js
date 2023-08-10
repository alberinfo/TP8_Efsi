import React from 'react'
import styled from 'styled-components'


const WrapperCompanyInfo=styled.div`
    background: #E6343B;
`; 

const CompanyName = styled.h3`
    margin: 0 0 1rem 0;
    text-align: center;
    color: #fff; 
    @media (min-width: 700px) {
        text-align: left; 
    }
`;

const WrapperList = styled.ul`
    list-style: none;
    margin:0 0 1rem 0;
    padding:0;
    text-align: center;
    @media (min-width: 700px) {
        text-align: left; 
    }
`;


const CompanyInfo = () => (
    <WrapperCompanyInfo>
        <CompanyName>Bazar Chino</CompanyName>
        <WrapperList>
            <li>Long Quan Xin Jie 85hao </li>
            <li>+8613092662637</li>
            <li>elblazalchino@gmail.xn</li>
        </WrapperList>
    </WrapperCompanyInfo>
)

export default CompanyInfo