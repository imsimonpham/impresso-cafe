import React from "react";
import styled, { css } from "styled-components/macro";
import { Colors } from "../data/Variables";
import JumbotronBg from "../images/bg/bg-lg-1.jpg";
import JumbotronBgTwo from "../images/bg/bg-lg-8.jpg";
import {
  HotDrinksData,
  ColdDrinksData,
  SnacksData,
  DessertsData,
} from "../data/DrinksAndFoodData";

const Page = styled.div`
  width: 100%;
  height: 100%;
  background: ${Colors.milk};
`;
const Jumbotrons = css`
  height: 700px;
  max-width: 1800px;
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 4rem 2rem;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  h1 {
    color: ${Colors.white};
    text-shadow: 0 10px 10px rgba(0, 0, 0, 1);
    font-weight: 900;
    z-index: 1;
  }
  h5 {
    color: ${Colors.gold};
    z-index: 1;
    text-shadow: 0 10px 10px rgba(0, 0, 0, 1);
    font-style: italic;
  }
`;

const JumbotronTop = styled.section`
  ${Jumbotrons}
  background: url(${JumbotronBg});
`;

const Line = styled.span`
  height: 1px;
  width: clamp(40px, 13vw, 200px);
  background: ${Colors.gold};
`;

const Strip = styled.div`
  width: 100%;
  height: 150px;
  background: ${Colors.dark};
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: ${Colors.white};
    text-align: center;
    /* border: 1px solid white; */
    margin: 0 2rem;
    font-weight: 900;
  }
`;

const Menus = css`
  max-width: 1300px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  padding: 1rem 3rem;
  column-gap: 1rem;
  margin: auto;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    row-gap: 4rem;
    column-gap: 0rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;
const DrinksMenu = styled.section`
  ${Menus}
  min-height: 100vh;
`;

const Categories = css`
  h2 {
    font-weight: 900;
    padding: 1rem 0rem;
  }
`;
const HotDrinks = styled.div`
  ${Categories}
`;
const ColdDrinks = styled.div`
  ${Categories}
`;

const Separator = styled.div`
  width: 150px;
  border-bottom: 3px solid ${Colors.gold};
  margin-bottom: 3rem;
`;

const ItemsWrapper = styled.div``;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem;
  height: 120px;

  @media screen and (max-width: 480px) {
    height: auto;
    padding: 0;
    margin-bottom: 1.2rem;
  }
`;
const TopWrapper = styled.div`
  flex-basis: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 480px) {
    flex-basis: auto;
  }
`;
const BottomWrapper = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 480px) {
    flex-basis: auto;
  }
`;
const TitleHolder = styled.div`
  margin-right: 5px;
  h4 {
    margin: 0;
    font-weight: 900;
    text-transform: uppercase;

    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;
const LineHolder = styled.div`
  flex-grow: 1;
  border-bottom: 1px dashed ${Colors.grey};
  height: 20px;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
const PriceHolder = styled.div`
  text-align: right;
  margin-left: 5px;

  h4 {
    margin: 0;
    font-weight: 900;
    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;
const Description = styled.div`
  flex-basis: 70%;

  p {
    margin: 0;
    font-size: 0.9rem;
    color: ${Colors.gold};
    font-weight: 600;
    @media screen and (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;
const Tag = styled.div`
  text-align: right;
  border: none;
  background: ${Colors.gold};
  padding: 0.3rem 1rem;

  p {
    margin: 0;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 480px) {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 0.2rem;
  }
`;

const Jumbotron = styled.section`
  ${Jumbotrons}
  background: url(${JumbotronBgTwo});
`;
const FoodMenu = styled.section`
  ${Menus}
  min-height: 90vh;
`;

const Snacks = styled.div`
  ${Categories}
`;
const Desserts = styled.div`
  ${Categories}
`;

const Menu = () => {
  return (
    <Page>
      <JumbotronTop>
        <h1>EVERY DAY IS A COFFEE DAY</h1>
        <h5>We make the mornings better. We make the nights longer</h5>
      </JumbotronTop>
      <Strip>
        <Line />
        <h2>Coffee & Drinks Menu</h2>
        <Line />
      </Strip>
      <DrinksMenu>
        <HotDrinks>
          <h2>HOT DRINKS -12 OZ / 20 OZ</h2>
          <Separator />
          <ItemsWrapper>
            {HotDrinksData.map((item, index) => {
              return (
                <Item key={index}>
                  <TopWrapper>
                    <TitleHolder>
                      <h4>{item.name}</h4>
                    </TitleHolder>
                    <LineHolder />
                    <PriceHolder>
                      <h4>{item.price}</h4>
                    </PriceHolder>
                  </TopWrapper>
                  <BottomWrapper>
                    <Description>
                      <p>{item.description}</p>
                    </Description>
                    <Tag>
                      <p>{item.tag}</p>
                    </Tag>
                  </BottomWrapper>
                </Item>
              );
            })}
          </ItemsWrapper>
        </HotDrinks>
        <ColdDrinks>
          <h2>COLD DRINKS - 20 OZ</h2>
          <Separator />
          <ItemsWrapper>
            {ColdDrinksData.map((item, index) => {
              return (
                <Item key={index}>
                  <TopWrapper>
                    <TitleHolder>
                      <h4>{item.name}</h4>
                    </TitleHolder>
                    <LineHolder />
                    <PriceHolder>
                      <h4>{item.price}</h4>
                    </PriceHolder>
                  </TopWrapper>
                  <BottomWrapper>
                    <Description>
                      <p>{item.description}</p>
                    </Description>
                    <Tag>
                      <p>{item.tag}</p>
                    </Tag>
                  </BottomWrapper>
                </Item>
              );
            })}
          </ItemsWrapper>
        </ColdDrinks>
      </DrinksMenu>
      <Jumbotron>
        <h1>WHAT CAN WE GET YOU?</h1>
        <h5>We saved you a seat!</h5>
      </Jumbotron>
      <Strip>
        <Line />
        <h2>Food Menu</h2>
        <Line />
      </Strip>
      <FoodMenu>
        <Snacks>
          <h2>SNACKS</h2>
          <Separator />
          <ItemsWrapper>
            {SnacksData.map((item, index) => {
              return (
                <Item key={index}>
                  <TopWrapper>
                    <TitleHolder>
                      <h4>{item.name}</h4>
                    </TitleHolder>
                    <LineHolder />
                    <PriceHolder>
                      <h4>{item.price}</h4>
                    </PriceHolder>
                  </TopWrapper>
                  <BottomWrapper>
                    <Description>
                      <p>{item.description}</p>
                    </Description>
                    <Tag>
                      <p>{item.tag}</p>
                    </Tag>
                  </BottomWrapper>
                </Item>
              );
            })}
          </ItemsWrapper>
        </Snacks>
        <Desserts>
          <h2>DESSERTS</h2>
          <Separator />
          <ItemsWrapper>
            {DessertsData.map((item, index) => {
              return (
                <Item key={index}>
                  <TopWrapper>
                    <TitleHolder>
                      <h4>{item.name}</h4>
                    </TitleHolder>
                    <LineHolder />
                    <PriceHolder>
                      <h4>{item.price}</h4>
                    </PriceHolder>
                  </TopWrapper>
                  <BottomWrapper>
                    <Description>
                      <p>{item.description}</p>
                    </Description>
                    <Tag>
                      <p>{item.tag}</p>
                    </Tag>
                  </BottomWrapper>
                </Item>
              );
            })}
          </ItemsWrapper>
        </Desserts>
      </FoodMenu>
    </Page>
  );
};

export default Menu;
