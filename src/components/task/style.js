import styled from "styled-components";


export const StyleTask = styled.div`

        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
        border-bottom: 1px  solid #ccc;
        color: #666666;
        font-size: 18px;

        button{

            background-color: transparent;
            border: none;
            color:  #FF5555;
            font-size: 30px;
            cursor: pointer;
            

            &:hover{
                color: red;
            }   

        }
`