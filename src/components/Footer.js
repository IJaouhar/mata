import React from 'react'
import styled from '@emotion/styled'
import logo from '../../static/images/logo.svg';

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.secondary};
  padding: 1em 0 2em;
  margin: 0 1.5em;
`

const Item = styled.li`
  display: inline-block;
  padding: 0.25em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: auto;
  }
  p {
    font-size: 1rem;
  }
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: ${props => props.theme.colors.text};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    &:visited {
      color: ${props => props.theme.colors.text};
    }
  }
`

const Footer = () => (
  <Wrapper>
    <List>
      <Item>
        <img
          src={logo}
          style={{ width: '50px' }}
          alt="Logo matacucarachas.com"
        />
      </Item>
      <Item>
        <p>matacucarachas.com participa en el Programa de Afiliados de Amazon EU, 
          un programa de publicidad para</p><p>afiliados diseñado para ofrecer a sitios 
          web un modo de obtener comisiones por publicidad. <a href='https://www.amazon.es'>Amazon.es</a></p>
      </Item>
      <Item>
        <p>matacucarachas.com</p>
      </Item>
    </List>
  </Wrapper>
)

export default Footer
