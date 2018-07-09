import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
// Import components
import LandingPageHeader from './LandingPageHeader';
import Hero from './Hero';
import PromoCards from '../components/PromoCards';
import { inject, observer } from 'mobx-react';

const Page = styled.div`
  .footer {
    background: ${props => props.theme.black};
    color: white;
    line-height: 75px;
    height: 75px;
    padding-left: 5vw;
  }
`;

@inject('UserStore')
@observer
class LandingPage extends Component {
  render() {
    return this.props.UserStore.isAuthorized ? (
      <Redirect to="dashboard" />
    ) : (
      <Page className="LandingPage">
        <LandingPageHeader />
        <Hero />
        <PromoCards />
        <div className="footer">Copyright 2018</div>
      </Page>
    );
  }
}

export default LandingPage;
