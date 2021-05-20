import React from "react";
import styled, { css } from "styled-components/macro";
import JumbotronBg from "../images/bg/bg-lg-8.jpg";
import { Colors } from "../data/Variables";
import { Button } from "../components/Button";
import { MdLocationOn } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { BiEnvelope } from "react-icons/bi";

const Page = styled.div`
  width: 100%;
  height: 100%;
  background: ${Colors.milk};
`;
const Jumbotron = styled.section`
  height: 700px;
  max-width: 1800px;
  background: url(${JumbotronBg});
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

const Wrapper = styled.div`
  max-width: 1300px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  padding: 1rem 3rem;
  column-gap: 3rem;
  margin: auto;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;
const ContactWrapper = styled.div`
  h2 {
    font-weight: 900;
    padding: 1rem 0rem;
  }
  p {
    color: ${Colors.dark};
    margin-bottom: 2rem;
  }
  form {
    /* border: 1px solid black; */

    > div {
      margin-bottom: 2rem;
    }
  }
`;
const FormElementContainer = styled.div`
  width: 100%;
  height: 50px;
  border: none;
  input {
    width: 100%;
    height: 100%;
    outline: none;
    border: 1px solid ${Colors.gold};
    padding: 0rem 1rem;
    color: ${Colors.brown};
    &::placeholder {
      color: ${Colors.brown};
      font-style: italic;
    }
  }
`;

const TextAreaContainer = styled.div`
  width: 100%;
  height: 150px;
  textarea {
        width: 100%;
        height: 100%;
        outline: none;
        border: 1px solid ${Colors.gold};
        padding: 1rem 1rem;
        color: ${Colors.brown};

        &::placeholder {
        color: ${Colors.brown};
        font-style: italic;
        }
        
  }
  }
`;

const Separator = styled.div`
  width: 150px;
  border-bottom: 3px solid ${Colors.gold};
  margin-bottom: 3rem;
`;
const LocationWrapper = styled.div`
  h2 {
    font-weight: 900;
    padding: 1rem 0rem;
  }
  > p {
    color: ${Colors.dark};
    margin-bottom: 5rem;
    @media screen and (max-width: 992px) {
      margin-bottom: 2rem;
    }
  }
`;
const InfoWrapper = styled.div``;
const ContactInfo = styled.div`
  p {
    margin-left: 2rem;
  }
`;

const Icons = css`
  color: ${Colors.gold};
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;
const Location = styled(MdLocationOn)`
  ${Icons}
`;
const Telephone = styled(AiOutlinePhone)`
  ${Icons}
`;
const Title = styled.div`
  margin-bottom: 1rem;
`;
const Envelope = styled(BiEnvelope)`
  ${Icons}
`;
const Map = styled.div``;

const Contact = () => {
  return (
    <Page>
      <Jumbotron>
        <h1>CONTTACT US </h1>
        <h5>Heal the world with Coffee.</h5>
      </Jumbotron>
      <Wrapper>
        <ContactWrapper>
          <h2>CONTACT US</h2>
          <Separator />
          <p>
            Please use the form below to send us a message and we will replay
            within one business day. You can also drop us an email anytime or
            feel free to give us a call, We’d love to hear from you!
          </p>
          <form action="">
            <FormElementContainer>
              <input type="text" placeholder="Your Name" />
            </FormElementContainer>
            <FormElementContainer>
              <input type="email" placeholder="Your Email" />
            </FormElementContainer>
            <TextAreaContainer>
              <textarea placeholder="Your Message or Comments"></textarea>
            </TextAreaContainer>
            <FormElementContainer>
              <Button>SEND</Button>
            </FormElementContainer>
          </form>
        </ContactWrapper>
        <LocationWrapper>
          <h2>LOCATION</h2>
          <Separator />
          <p>Come join us to experience love at first sip!</p>

          <InfoWrapper>
            <ContactInfo>
              <Title>
                <Location />
                <b>ADDRESS</b>
              </Title>
              <p>836 Park Ct, Drayton Valley, Alberta.</p>
            </ContactInfo>

            <ContactInfo>
              <Title>
                <Telephone />
                <b>PHONE</b>
              </Title>
              <p>1-780-621-2214</p>
            </ContactInfo>
            <ContactInfo>
              <Title>
                <Envelope /> <b>EMAIL</b>
              </Title>
              <p>contact@impresso.com</p>
            </ContactInfo>
          </InfoWrapper>
          <Map></Map>
        </LocationWrapper>
      </Wrapper>
    </Page>
  );
};

export default Contact;
