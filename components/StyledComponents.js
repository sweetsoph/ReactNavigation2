import styles from "styled-components";

const TituloPagina = styles.Text`
    font-size: 30px;
`;
const TextDefault = styles.Text`
    font-size: 20px;
`;
const BgTemperature = styles.Image`
width: 300px;
height: 190px;`;

const TxtTemperature = styles.Text`
display: flex;
font-size: 40px;
color: #fff;
position: absolute;
height: 30%;
top: 35%;
font-weight: bold;
justify-content: center`;

const CardDay = styles.View`
 width: 150px;
    height: 150px;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    border: 1px solid #fe6d69;
    alignItems: center;
`;

export { TituloPagina, TextDefault, BgTemperature, TxtTemperature, CardDay };
