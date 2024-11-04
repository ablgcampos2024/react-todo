import styled from "styled-components";

export const ContainerList = styled.div `
     background-color: white;
     max-width: 600px;
     box-shadow: 5px 5px 10px #DDD;
     margin: 40px auto;
     pad: 30px;
     box-sizing: border-box;
     border-radius: 10px;
     
     form{
        display: flex;
        justify-content: space-between;
        column-gap: 10px;

        input{
            flex-grow: 1; //ocupa toda a largura disponivel
            height: 54px;
            box-sizing: border-box;
            padding:15px;
            border-radius: 5px;
            border: solid 1px #cccccc;
            font-size: 18px;
        }
        button{
            width: 105px;
            background-color: #001D29;
            color: #ffffff;
            border-radius: 5px;
            border: none;
            font-size: 18px;
            cursor: pointer;
            &:hover{
                background-color:black;
            }

            &:disabled{
                background-color: #ccc;
                cursor: not-allowed;
            }
        }
     }

`

