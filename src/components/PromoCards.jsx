import React from 'react';
import styled from 'styled-components';
// import components
import PromoCard from './PromoCard';

const StyledPromoCards = styled.div`
  display: grid;
  grid-row-gap: 25px;
  padding: 3vh 4vw;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 25px;
  }
`;

const PromoCards = () => (
  <StyledPromoCards className="PromoCards">{renderCards()}</StyledPromoCards>
);

function renderCards() {
  const data = [
    {
      title: 'Title 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id temporibus obcaecati nihil corporis animi, impedit quae modi dolorum nam saepe hic? Molestias, quam!',
      image: 'https://picsum.photos/300/300'
    },
    {
      title: 'Title 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum aliquid autem unde quae quibusdam, accusantium fugiat et ipsa.',
      image: 'https://picsum.photos/301/201'
    },
    {
      title: 'Title 3',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, porro? Eaque veniam ipsa quas illum, error adipisci sit, tenetur rerum molestias dolor magni maiores.',
      image: 'https://picsum.photos/299/199'
    }
  ];

  return data.map(item => (
    <PromoCard
      key={item.title}
      title={item.title}
      description={item.description}
      image={item.image}
    />
  ));
}

export default PromoCards;
