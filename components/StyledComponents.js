import styles from "styled-components";

const TituloPagina = styles.Text`
    font-size: 20;
`;
const TextDefault = styles.Text`
    font-size: 18;
`;
const BgTemperature = styles.Image`
width: 300px;
height: 190px;`;

const TxtTemperature = styles.Text`
display: flex;
font-size: 40;
color: #fff;
position: absolute;
height: 30%;
top: 35%;
font-weight: bold;
justify-content: center`;

export { TituloPagina, TextDefault, BgTemperature, TxtTemperature };
