import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, LinkStyle, ListContainer, ListStyle } from './OptionSection.styled';

export const OptionSection = () => {
    return(
        <div>
            <Container>
                <ListContainer>
                    <LinkStyle>
                        <ListStyle>TODOS OS PRODUTOS</ListStyle>
                    </LinkStyle>
                    <LinkStyle>
                        <ListStyle>CAMISETAS</ListStyle>
                    </LinkStyle>
                    <LinkStyle>
                        <ListStyle>CANECAS</ListStyle>
                    </LinkStyle>
                </ListContainer>
                <div>
                    <span>Organizado por</span>
                    <img src="../../../public/images/Group.svg" alt="" />
                </div>
            </Container>
        </div>
            
    )
}

OptionSection.propTypes = {
}