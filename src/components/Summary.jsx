import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
// import components
import Loader from './Loader';
import TitleSection from './TitleSection';
import SummaryCardList from './SummaryCardList';
import SummaryCard from './SummaryCard';

const fakeUpcomingEvents = [
  {
    id: 1,
    title: 'Event One',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse officia eius accusamus ratione!'
  },
  {
    id: 2,
    title: 'Event Two',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quia odit dolorem vel neque.'
  },
  {
    id: 3,
    title: 'Event Three',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae consectetur aut cupiditate mollitia!'
  }
];

const StyledSummary = styled.div`
  .title-section {
    margin-bottom: 75px;
  }

  .upcoming-events {
    margin-top
  }
`;

@inject('UserStore')
@observer
class Summary extends Component {
  renderUpcomingEvents = () =>
    fakeUpcomingEvents.map(event => <SummaryCard key={event.id} />);

  render() {
    if (this.props.UserStore.userProfile) {
      const { userProfile } = this.props.UserStore;

      return (
        <StyledSummary>
          <div className="upcoming-events">
            <TitleSection userProfile={userProfile} />
            <SummaryCardList
              headline="Upcoming Events"
              render={summaryCardList => (
                <React.Fragment>{this.renderUpcomingEvents()}</React.Fragment>
              )}
            />
          </div>
        </StyledSummary>
      );
    }

    return (
      <div>
        <Loader />
      </div>
    );
  }
}

export default Summary;
