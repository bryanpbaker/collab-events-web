import React, { Component } from 'react';
import styled from 'styled-components';
// Import components
import Header from './Header';
import Hero from './Hero';
import PromoCards from '../components/PromoCards';

const Page = styled.div`
  .footer {
    background: ${props => props.theme.black};
    color: white;
    line-height: 75px;
    height: 75px;
    padding-left: 5vw;
  }
`;

class LandingPage extends Component {
  render() {
    return (
      <Page className="LandingPage">
        <Header />
        <Hero />
        <PromoCards />
        <div className="footer">Copyright 2018</div>
      </Page>
    );
  }
}

export default LandingPage;
