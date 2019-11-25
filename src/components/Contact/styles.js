import styled from 'styled-components';

export const ContactWrapper = styled.div`
    padding: 50px 0;
    text-align: center;
`

export const ContactTitle = styled.h2`
    font-size: 60px;
    margin-bottom: 30px;
    flex-basis: 100%;

    span {
        font-weight: normal;
    }

    @media (max-width:575px) {
        font-size: 40px;
    }
`
export const ContactForm = styled.form`
    width: 70%;
    margin: auto;

    @media (max-width:575px) {
        width: 90%;
    }
`

export const ContactInput = styled.input`
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px;
    width: 100%;
`

export const ContactFormInput = styled.div`
    display: flex;
    justify-content: space-between;

    input {
        flex-basis: 49%;
    }
`

export const ContactTextArea = styled.textarea`
    width: 100%;
    outline: 0;
    background-color: #ccc;
`

export const ContactSubmitBtn = styled.input`
    width: 60%;
    background-color: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer;
`