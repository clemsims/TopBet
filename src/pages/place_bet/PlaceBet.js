import React, { Component } from "react";
import styled from "styled-components";

export default class Main extends Component {
    render() {
        return (
            <BetPageRootRoot>
                <Group>
                    <Clock>9:41</Clock>
                    <NotificationIcon src="https://file.rendit.io/n/cmMxA03HXJyjkYxvirnf.svg" />
                    <MobileSignalIcon src="https://file.rendit.io/n/N1ECnKmHB4kGYmaLJNjT.svg" />
                    <WifiIcon src="https://file.rendit.io/n/7tszPJD1hbJNOOKHB5k6.svg" />
                    <PhoneOutline>
                        <PhoneFill src="https://file.rendit.io/n/c0Mp1aMjOwbmeMkHg6BY.svg" />
                    </PhoneOutline>
                    <BatteryIcon src="https://file.rendit.io/n/5bubcXm9NJqofPC4oQmv.svg" />
                </Group>
                <BetTypesPicker>
                    <UserAccountGroup>
                        <AccountLabel>Account</AccountLabel>
                        <ArrowDownIcon src="https://file.rendit.io/n/B0Ky85vslkLhodNIfyBX.svg" />
                        <ArrowUpIcon src="https://file.rendit.io/n/h9SOoeXxirNh0xSQGUyl.svg" />
                    </UserAccountGroup>
                    <PickerSeparator />
                    <MyBetsOption>
                        <MyBetsLabel>My bets</MyBetsLabel>
                    </MyBetsOption>
                </BetTypesPicker>
                <BetCard>
                    <BetCardWidgets>
                        <BetCardTopWidgetGroup>
                            <TopLabel>
                                Top<Label1>Bet</Label1>
                            </TopLabel>
                            <BookmakerTextField>
                                <BookmakerLabel>Betclic</BookmakerLabel>
                                <TextFieldLine src="https://file.rendit.io/n/2D0vd9qdRXD5lrvG0Jh7.png" />
                                <TextFieldLineImage src="https://file.rendit.io/n/phlsRcmyRHVqZODZgo2G.svg" />
                            </BookmakerTextField>
                        </BetCardTopWidgetGroup>
                        <BetCardMiddleWidgetGroup>
                            <BetTitleLabel>Gane par soumission</BetTitleLabel>
                            <OddsWidget>
                                <OddsElement>2.2</OddsElement>
                            </OddsWidget>
                            <OddsWidget1>
                                <OddsElement>2.17</OddsElement>
                            </OddsWidget1>
                        </BetCardMiddleWidgetGroup>
                        <BetCardBottomWidgetGroup>
                            <AmountCaption>Montant</AmountCaption>
                            <AmountCaption>Gains potentiels</AmountCaption>
                        </BetCardBottomWidgetGroup>
                        <TextFieldGroup>
                            <BetAmountTextField>
                                <AmountLabel>20</AmountLabel>
                                <XCircleIcon src="https://file.rendit.io/n/WSpkRhmT2faMAYkXrkpQ.svg" />
                            </BetAmountTextField>
                            <PotentialGainTextField>
                                <PotentialGainLabel>44</PotentialGainLabel>
                                <EuroSymbol>€</EuroSymbol>
                            </PotentialGainTextField>
                        </TextFieldGroup>
                    </BetCardWidgets>
                    <PlaceBetWidgets>
                        <PlaceBetHeadline>Place this bet!</PlaceBetHeadline>
                        <PlaceBetLine src="https://file.rendit.io/n/GJQ0sBvQSEjP04aih05w.svg" />
                        <PlaceBetLine1 src="https://file.rendit.io/n/ysT95xvhYh6sM3EJ3RXc.svg" />
                    </PlaceBetWidgets>
                </BetCard>
                <SeeOldBetsWidgets>
                    <SeeOldBetsHeadline>See old bets</SeeOldBetsHeadline>
                    <SeeOldBetsLine src="https://file.rendit.io/n/nKZFEQeAjnfurPahHf0t.svg" />
                    <SeeOldBetsLine1 src="https://file.rendit.io/n/FMSjxjzme9yOE7qYCqq7.svg" />
                </SeeOldBetsWidgets>
                <ScoreBoardWidgets>
                    <SeeOldBetsHeadline>Score on the board</SeeOldBetsHeadline>
                    <SeeOldBetsLine src="https://file.rendit.io/n/aLH419WRQSeR4cCzTtvK.svg" />
                    <SeeOldBetsLine1 src="https://file.rendit.io/n/xNK3CMiumJ2StafwTmnE.svg" />
                </ScoreBoardWidgets>
                <BetPageWidgets>
                    <TopBetMenuGroup>
                        <TopBetLive>
                            <LiveLabel>Live</LiveLabel>
                        </TopBetLive>
                        <TopBetMenuIcon>
                            <TopBetMenuIconImage src="https://file.rendit.io/n/VtNHQ6Z3Co18P83krz76.svg" />
                        </TopBetMenuIcon>
                        <TopBetBlackVersion>Black version</TopBetBlackVersion>
                        <TopBetBlackVersionImage src="https://file.rendit.io/n/BoWKi76KRD6uyoscOEA0.svg" />
                    </TopBetMenuGroup>
                    <TopBetSports>
                        <LiveLabel>Sports</LiveLabel>
                    </TopBetSports>
                </BetPageWidgets>
            </BetPageRootRoot>
        );
    };
}

const OddsElement = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Harmattan;
  line-height: 16px;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
`;
const AmountCaption = styled.div`
  color: #ffffff;
  font-size: 11px;
  font-family: Harmattan;
  line-height: 13px;
  text-align: center;
  white-space: nowrap;
  letter-spacing: 0.07px;
  box-sizing: border-box;
`;
const SeeOldBetsHeadline = styled.div`
  position: relative;
  font-size: 28px;
  font-family: Harmattan;
  line-height: 34px;
  text-align: center;
  white-space: nowrap;
  letter-spacing: 0.36px;
  box-sizing: border-box;
`;
const SeeOldBetsLine = styled.img`
  width: 2.63%;
  min-width: 0px;
  height: 7.6px;
  min-height: 0px;
  left: 275px;
  top: 28.4814453125px;
  position: absolute;
  box-sizing: border-box;
  transform: rotate(-39.81deg);
  transform-origin: 0px 0px;
`;
const SeeOldBetsLine1 = styled.img`
  width: 2.62%;
  min-width: 0px;
  height: 7.05px;
  min-height: 0px;
  left: 282px;
  top: 22.99951171875px;
  position: absolute;
  box-sizing: border-box;
  transform: rotate(-143.13deg);
  transform-origin: 0px 0px;
`;
const LiveLabel = styled.div`
  width: 100%;
  height: 99.98%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  font-family: Harmattan;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.38px;
  box-sizing: border-box;
`;
const BetPageRootRoot = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  background-color: #252525;
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
  margin: -5px 26.6px 16px 0px;
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
const NotificationIcon = styled.img`
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
const PhoneOutline = styled.div`
  width: 7.54%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px 0px 3px 0px;
  padding: 2px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/5icvyXBg1p731fw8Wt2f.svg");
`;
const PhoneFill = styled.img`
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
const BetTypesPicker = styled.div`
  width: 84.1%;
  gap: 0.44px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 0px 0px 14px 0px;
  padding: 1.5px;
  border-radius: 8.91px;
  box-sizing: border-box;
  background-color: #c6c6c8;
  overflow: hidden;
`;
const UserAccountGroup = styled.div`
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
const ArrowDownIcon = styled.img`
  width: 6.38%;
  min-width: 0px;
  height: 9.38px;
  min-height: 0px;
  left: 16.3125px;
  top: 5.625px;
  position: absolute;
  box-sizing: border-box;
`;
const ArrowUpIcon = styled.img`
  width: 20.04%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  position: relative;
  box-sizing: border-box;
`;
const PickerSeparator = styled.div`
  width: 0.29%;
  height: 16px;
  margin: 6.5px 0px 0px 0px;
  border-radius: 0.5px;
  box-sizing: border-box;
  background-color: rgba(84, 84, 88, 0.65);
`;
const MyBetsOption = styled.div`
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
const BetCard = styled.div`
  width: 84.36%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-start;
  align-items: flex-start;
  margin: 0px 0px 12px 30px;
  padding: 249px 0px 0px 0px;
  box-sizing: border-box;
`;
const BetCardWidgets = styled.div`
  width: 99.7%;
  height: 291px;
  left: 1px;
  top: 0px;
  position: absolute;
  gap: 1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20.1px 24px 68px 24px;
  border-radius: 22px;
  box-sizing: border-box;
  background-color: #570202;
`;
const BetCardTopWidgetGroup = styled.div`
  width: 119px;
  gap: 17px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  align-items: flex-start;
  margin: 0px 0px 42.7px 0px;
  box-sizing: border-box;
`;
const TopLabel = styled.div`
  margin: 5px 0px 0px 0px;
  color: #ffffff;
  font-size: 17px;
  font-weight: 700;
  font-family: Advent Pro;
  line-height: 22px;
  text-align: center;
  white-space: nowrap;
  letter-spacing: -0.41px;
  box-sizing: border-box;
`;
const Label1 = styled.div`
  display: contents;
  color: #d50000;
  font-size: 17px;
  font-weight: 700;
  font-family: Advent Pro;
  line-height: 22px;
  letter-spacing: -0.41px;
`;
const BookmakerTextField = styled.div`
  width: 57.84%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2.91px 5px 7.1px 5px;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #1c1c1e;
`;
const BookmakerLabel = styled.div`
  position: relative;
  color: rgba(235, 235, 245, 0.6);
  font-size: 16px;
  font-family: Harmattan;
  line-height: 22px;
  white-space: nowrap;
  letter-spacing: -0.41px;
  box-sizing: border-box;
`;
const TextFieldLine = styled.img`
  width: 15.42%;
  min-width: 0px;
  height: 0px;
  min-height: 0px;
  left: 45px;
  top: 12.2314453125px;
  position: absolute;
  box-sizing: border-box;
  transform: rotate(57.7deg);
  transform-origin: 0px 0px;
`;
const TextFieldLineImage = styled.img`
  width: 9.32%;
  min-width: 0px;
  height: 9.23px;
  min-height: 0px;
  left: 44.8486328125px;
  top: 11.22412109375px;
  position: absolute;
  box-sizing: border-box;
  transform: rotate(119deg);
  transform-origin: 0px 0px;
`;
const BetCardMiddleWidgetGroup = styled.div`
  width: 93.93%;
  gap: 27px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  align-items: flex-start;
  margin: 0px 7px 28.5px 0px;
  box-sizing: border-box;
`;
const BetTitleLabel = styled.div`
  margin: 9.9px 7px 0px 0px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  font-family: Advent Pro;
  line-height: 20px;
  text-align: center;
  white-space: nowrap;
  letter-spacing: -0.5px;
  box-sizing: border-box;
`;
const OddsWidget = styled.div`
  width: 20.57%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 13.2px 12px 11.6px 12px;
  border-radius: 22px;
  box-sizing: border-box;
  background-color: #ffb340;
`;
const OddsWidget1 = styled.div`
  width: 20.57%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 13.2px 8px 11.6px 8px;
  border-radius: 22px;
  box-sizing: border-box;
  background-color: #ffb340;
`;
const BetCardBottomWidgetGroup = styled.div`
  width: 196px;
  gap: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 0px 40px;
  box-sizing: border-box;
`;
const TextFieldGroup = styled.div`
  width: 222px;
  gap: 74px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 0px 20px;
  box-sizing: border-box;
`;
const BetAmountTextField = styled.div`
  width: 50%;
  gap: 17.1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 15px 10px 17.1px;
  border-radius: 22px;
  box-sizing: border-box;
  background-color: #ffffff;
`;
const AmountLabel = styled.div`
  width: 59.68%;
  align-self: flex-end;
  margin: 1px 0px 0px 0px;
  color: rgba(60, 60, 67, 0.6);
  font-size: 17px;
  font-family: Harmattan;
  line-height: 22px;
  letter-spacing: -0.41px;
  box-sizing: border-box;
`;
const XCircleIcon = styled.img`
  width: 40.32%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  margin: 6px 0px 0px 0px;
  box-sizing: border-box;
`;
const PotentialGainTextField = styled.div`
  width: 50%;
  gap: 11.1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 10px 24px 10px 17.1px;
  border-radius: 22px;
  box-sizing: border-box;
  background-color: #ffffff;
`;
const PotentialGainLabel = styled.div`
  width: 67.89%;
  margin: 1px 0px 0px 0px;
  color: rgba(60, 60, 67, 0.6);
  font-size: 17px;
  font-family: Harmattan;
  line-height: 22px;
  letter-spacing: -0.41px;
  box-sizing: border-box;
`;
const EuroSymbol = styled.div`
  color: #8a8a8e;
  font-size: 15px;
  font-family: Harmattan;
  line-height: 22px;
  white-space: nowrap;
  letter-spacing: -0.41px;
  box-sizing: border-box;
`;
const PlaceBetWidgets = styled.div`
  width: 99.7%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 9.3px 119px 10.7px 119px;
  border-radius: 22px;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: normal;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.27) 0%,
    rgba(255, 255, 255, 0.17) 100%,
    rgba(255, 255, 255, 0) 100%
  );
`;
const PlaceBetHeadline = styled.div`
  position: relative;
  color: #ffffff;
  font-size: 17px;
  font-weight: 700;
  font-family: Advent Pro;
  line-height: 22px;
  text-align: center;
  white-space: nowrap;
  letter-spacing: -0.41px;
  box-sizing: border-box;
`;
const PlaceBetLine = styled.img`
  width: 2.63%;
  min-width: 0px;
  height: 7.6px;
  min-height: 0px;
  left: 240px;
  top: 17.95849609375px;
  position: absolute;
  box-sizing: border-box;
  transform: rotate(-39.8deg);
  transform-origin: 0px 0px;
`;
const PlaceBetLine1 = styled.img`
  width: 2.62%;
  min-width: 0px;
  height: 7.05px;
  min-height: 0px;
  left: 247px;
  top: 12.47802734375px;
  position: absolute;
  box-sizing: border-box;
  transform: rotate(-143.14deg);
  transform-origin: 0px 0px;
`;
const SeeOldBetsWidgets = styled.div`
  width: 84.1%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 13px 102px;
  border-radius: 22px;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: normal;
  background-image: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(255, 255, 255, 0.56) 100%,
    rgba(255, 255, 255, 0) 100%
  );
`;
const ScoreBoardWidgets = styled.div`
  width: 84.1%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 0px 84px 0px;
  padding: 13px 68px;
  border-radius: 22px;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: normal;
  background-image: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(255, 255, 255, 0.56) 100%,
    rgba(255, 255, 255, 0) 100%
  );
`;
const BetPageWidgets = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-start;
  margin: 0px 0px -70px 0px;
  box-sizing: border-box;
`;
const TopBetMenuGroup = styled.div`
  width: 66.67%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 5.79px 53px 133px 53px;
  box-sizing: border-box;
`;
const TopBetLive = styled.div`
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
  background-color: rgba(255, 255, 255, 0.6);
`;
const TopBetMenuIcon = styled.div`
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
  background-color: rgba(255, 255, 255, 0.6);
`;
const TopBetMenuIconImage = styled.img`
  width: 87.27%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  box-sizing: border-box;
`;
const TopBetBlackVersion = styled.div`
  width: 50%;
  height: 16.56%;
  left: 129px;
  top: 25.0771484375px;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  font-family: Harmattan;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.38px;
  box-sizing: border-box;
`;
const TopBetBlackVersionImage = styled.img`
  width: 16.23%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  position: relative;
  box-sizing: border-box;
`;
const TopBetSports = styled.div`
  width: 33.33%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 25.1px 0px 111px 0px;
  border-radius: 22px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.6);
`;
