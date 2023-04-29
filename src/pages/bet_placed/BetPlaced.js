import React, { Component } from "react";
import styled from "styled-components";

export default class Main extends Component {
  render() {
    return (
      <ConfirmationPageRootRoot>
        <Group>
          <Clock>9:41</Clock>
          <NoNetworkIcon src="https://file.rendit.io/n/TCTJYbwaIMxb1GrXHmK9.svg" />
          <MobileSignalIcon src="https://file.rendit.io/n/PE16rafXXAqiiztnllx2.svg" />
          <WifiIcon src="https://file.rendit.io/n/cSZGQnEjH74Bh6hlJjs8.svg" />
          <SpeechBubble>
            <SpeechBubbleFill src="https://file.rendit.io/n/JlyVSZJQa8zTJxfkotB8.svg" />
          </SpeechBubble>
          <BatteryIcon src="https://file.rendit.io/n/h5FhUVgFjia28d4hpCSv.svg" />
        </Group>
        <BettingOptions>
          <BettingOption>
            <AccountLabel>Account</AccountLabel>
            <ChevronLeftIcon src="https://file.rendit.io/n/ZUE6cwhrBAxYzye8Ny0R.svg" />
            <ChevronRightIcon src="https://file.rendit.io/n/5EpJHGYUu53jlPKhbA2D.svg" />
          </BettingOption>
          <Divider />
          <BettingOption1>
            <MyBetsLabel>My bets</MyBetsLabel>
          </BettingOption1>
        </BettingOptions>
        <NotificationBar>
          <NotificationMessage>
            Félicitation ! Ton pari est bien placé !{" "}
          </NotificationMessage>
          <ConfirmationImage src="https://file.rendit.io/n/brUOjhkwDEWYZR5DqnB4.png" />
        </NotificationBar>
        <BetsHistory>
          <BetsHistoryTitle>See old bets</BetsHistoryTitle>
          <HorizontalLine src="https://file.rendit.io/n/ZZMmmDv6Pe4gbu5V8EQb.svg" />
          <VerticalLine src="https://file.rendit.io/n/RyNxDwRHYSGT1JC8RNtV.svg" />
        </BetsHistory>
        <ScoreBoard>
          <BetsHistoryTitle>Score on the board</BetsHistoryTitle>
          <HorizontalLine src="https://file.rendit.io/n/ZZMmmDv6Pe4gbu5V8EQb.svg" />
          <VerticalLine src="https://file.rendit.io/n/RyNxDwRHYSGT1JC8RNtV.svg" />
        </ScoreBoard>
        <BackgroundImage src="https://file.rendit.io/n/mhZQsK0QW6XVrMdBLc4P.png" />
        <NavigationBar>
          <NavigationBarContent>
            <LiveLabel>
              <LiveText>Live</LiveText>
            </LiveLabel>
            <LiveChevron>
              <Vector src="https://file.rendit.io/n/uRgFxAvwZaZTdpyfiWhh.svg" />
            </LiveChevron>
            <BlackVersionLabel>Black version</BlackVersionLabel>
            <BlackVersionIcon src="https://file.rendit.io/n/rpwsjWTZ27D8nvGnvhXm.svg" />
          </NavigationBarContent>
          <SportsLabel>
            <LiveText>Sports</LiveText>
          </SportsLabel>
        </NavigationBar>
      </ConfirmationPageRootRoot>
    );
  };
};

const BetsHistoryTitle = styled.div`
  position: relative;
  color: #ffffff;
  font-size: 28px;
  font-family: Harmattan;
  line-height: 34px;
  text-align: center;
  white-space: nowrap;
  letter-spacing: 0.36px;
  box-sizing: border-box;
`;
const HorizontalLine = styled.img`
  width: 2.63%;
  min-width: 0px;
  height: 7.6px;
  min-height: 0px;
  left: 275px;
  top: 28.481689453125px;
  position: absolute;
  box-sizing: border-box;
  transform: rotate(-39.81deg);
  transform-origin: 0px 0px;
`;
const VerticalLine = styled.img`
  width: 2.62%;
  min-width: 0px;
  height: 7.05px;
  min-height: 0px;
  left: 282px;
  top: 23px;
  position: absolute;
  box-sizing: border-box;
  transform: rotate(-143.13deg);
  transform-origin: 0px 0px;
`;
const LiveText = styled.div`
  width: 100%;
  height: 99.98%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  font-family: Harmattan;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.38px;
  box-sizing: border-box;
`;
const ConfirmationPageRootRoot = styled.div`
  gap: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  background-color: #d50000;
  overflow: hidden;
`;
const Group = styled.div`
  width: 86.15%;
  gap: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  align-items: flex-end;
  margin: -5px 26.6px 42px 0px;
  box-sizing: border-box;
`;
const Clock = styled.div`
  width: 16.29%;
  height: 54.05%;
  margin: 0px 31px 0px 0px;
  color: #ffffff;
  font-size: 17px;
  font-weight: 700;
  font-family: Advent Pro;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.41px;
  box-sizing: border-box;
`;
const NoNetworkIcon = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  margin: 0px 8px 5px 0px;
  box-sizing: border-box;
`;
const MobileSignalIcon = styled.img`
  width: 5.43%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  margin: 0px 7px 3px 0px;
  box-sizing: border-box;
`;
const WifiIcon = styled.img`
  width: 5.13%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  margin: 0px 6px 3px 0px;
  box-sizing: border-box;
`;
const SpeechBubble = styled.div`
  width: 7.54%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px 0px 3px 0px;
  padding: 2px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/Vg85PLef4jeOJpMYv7HO.svg");
`;
const SpeechBubbleFill = styled.img`
  width: 100%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  box-sizing: border-box;
`;
const BatteryIcon = styled.img`
  width: 0.42%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  margin: 0px 0px 6.78px 0px;
  box-sizing: border-box;
`;
const BettingOptions = styled.div`
  width: 84.1%;
  gap: 0.44px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 0px 0px 40px 0px;
  padding: 1.5px;
  border-radius: 8.91px;
  box-sizing: border-box;
  background-color: #1c1c1e;
  overflow: hidden;
`;
const BettingOption = styled.div`
  width: 45.35%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 1.38px 4.69px 0px 0px;
  padding: 0px 7.88px;
  box-sizing: border-box;
`;
const AccountLabel = styled.div`
  width: 100%;
  height: 60.95%;
  left: 0px;
  top: 5.125px;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  font-family: Harmattan;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.08px;
  box-sizing: border-box;
`;
const ChevronLeftIcon = styled.img`
  width: 6.38%;
  min-width: 0px;
  height: 9.38px;
  min-height: 0px;
  left: 16.3125px;
  top: 5.625px;
  position: absolute;
  box-sizing: border-box;
`;
const ChevronRightIcon = styled.img`
  width: 20.04%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  position: relative;
  box-sizing: border-box;
`;
const Divider = styled.div`
  width: 0.29%;
  height: 16px;
  margin: 6.5px 0px 0px 0px;
  border-radius: 0.5px;
  box-sizing: border-box;
  background-color: #ffffff;
`;
const BettingOption1 = styled.div`
  width: 50.29%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 6px 8px;
  border-width: 0.5px;
  border-radius: 6.93px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 3px 1px 0px rgba(0, 0, 0, 0.04),
    0px 3px 8px 0px rgba(0, 0, 0, 0.12);
`;
const MyBetsLabel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 700;
  font-family: Advent Pro;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.08px;
  box-sizing: border-box;
`;
const NotificationBar = styled.div`
  width: 84.1%;
  gap: 22px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 0px 0px 40px 0px;
  padding: 2px;
  border-radius: 22px;
  box-sizing: border-box;
  background-color: #570202;
`;
const NotificationMessage = styled.div`
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  font-family: Advent Pro;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.5px;
  box-sizing: border-box;
`;
const ConfirmationImage = styled.img`
  width: 13.25%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  align-self: flex-start;
  box-sizing: border-box;
`;
const BetsHistory = styled.div`
  width: 84.1%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin: 0px 0px 26px 0px;
  padding: 13px 102px;
  border-radius: 22px;
  box-sizing: border-box;
  background-color: rgba(2, 0, 0, 0.6);
`;
const ScoreBoard = styled.div`
  width: 84.1%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 13px 68px;
  border-radius: 22px;
  box-sizing: border-box;
  background-color: rgba(2, 0, 0, 0.6);
`;
const BackgroundImage = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  margin: 0px 0px 1px -1px;
  box-sizing: border-box;
`;
const NavigationBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-start;
  margin: 0px 0px -70px 0px;
  box-sizing: border-box;
`;
const NavigationBarContent = styled.div`
  width: 66.67%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 5.79px 53px 133px 53px;
  box-sizing: border-box;
`;
const LiveLabel = styled.div`
  width: 130px;
  height: 163px;
  left: 0px;
  top: 0px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 25.1px 0px 111px 0px;
  border-radius: 22px;
  box-sizing: border-box;
  background-color: rgba(2, 0, 0, 0.6);
`;
const LiveChevron = styled.div`
  width: 130px;
  height: 163px;
  left: 130px;
  top: 0px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10.2px 60.1px 139px 60.1px;
  border-radius: 22px;
  box-sizing: border-box;
  background-color: rgba(2, 0, 0, 0.6);
`;
const Vector = styled.img`
  width: 87.27%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  box-sizing: border-box;
`;
const BlackVersionLabel = styled.div`
  width: 50%;
  height: 16.56%;
  left: 129px;
  top: 25.076904296875px;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  font-family: Harmattan;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.38px;
  box-sizing: border-box;
`;
const BlackVersionIcon = styled.img`
  width: 16.23%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  position: relative;
  box-sizing: border-box;
`;
const SportsLabel = styled.div`
  width: 33.33%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 25.1px 0px 111px 0px;
  border-radius: 22px;
  box-sizing: border-box;
  background-color: rgba(2, 0, 0, 0.6);
`;
