import { BagImg, CabecalhoContainer, Container, InputSyle, SpanStyle } from "./Cabecalho.styled"

export const Cabecalho = () => {
    return(
        <CabecalhoContainer>
            <div>
                <img src="../../../public/images/capputeeno.png"></img>
            </div>
            <Container>
                <InputSyle>
                    <SpanStyle>Procurando por algo específico?</SpanStyle>
                    <img src="../../../public/images/Group.png"></img>
                </InputSyle>
                <BagImg src="../../../public/images/shopping-bag.svg"></BagImg>
            </Container>
        </CabecalhoContainer>
    )
}


