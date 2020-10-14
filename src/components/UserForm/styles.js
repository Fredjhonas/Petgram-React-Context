import styled from 'styled-components';

export const Form = styled.form`
padding: 16px 0;
margin-top: -10px;
margin-left: 20px;
margin-right: 20px;
`;

export const Input = styled.input`
border: 1px solid #ccc;
border-radius: 3px;
margin-bottom: 8px;
padding: 8px 4px;
display: block;
width: 100%;
&[disabled]{
    opacity: .3;
}
`;

export const Title = styled.h2`
font-size: 16px;
font-weight: 500;
margin-left: 20px;
padding: 8px 0;
`;

export const Error = styled.span`
color: red;
font-size: 14px;
margin-left: 20px;
`;

export const Text = styled.p`
font-size: 16px;
font-weight: 500;
margin-left: 20px;
padding: 8px 0;
`;

export const Sign = styled.span`
font-weight: bold;
font-size: 20px;
margin-left: 5px;
color: #127B8B;
`;
