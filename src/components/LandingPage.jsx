import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { inject, observer } from 'mobx-react';
// Import components
import Header from './Header';
import Hero from './Hero';
import PromoCards from '../components/PromoCards';

const Page = styled.div`
  .footer {
    background: ${props => props.theme.black}
    color: white;
    line-height: 75px;
    height: 75px;
    padding-left: 5vw;
  }
`;

@inject('TestStore')
@observer
class LandingPage extends Component {
  render() {
    return (
      <Page className="LandingPage">
        <Header />
        <Hero />
        <PromoCards />
        <h1>{this.props.TestStore.testProp}</h1>
        <button onClick={this.props.TestStore.toggle}>Change</button>
        <div className="footer">Copyright 2018</div>
      </Page>
    );
  }
}

export default LandingPage;
