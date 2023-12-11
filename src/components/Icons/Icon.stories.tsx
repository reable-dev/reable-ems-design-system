import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import styled from 'styled-components';

import AccountSVG from './Account';
import AlarmSVG from './Alarm';
import AlarmNotificationSVG from './AlarmNoti';
import ArrowSVG from './Arrow';
import ArrowCheckSVG from './ArrowCheck';
import ArrowDownSVG from './ArrowDown';
import BigMinusSVG from './BigMinus';
import BigMinusDisableSVG from './BigMinusDisable';
import BigPlusSVG from './BigPlus';
import BigPlusDisableSVG from './BigPlusDisable';
import CalendarSVG from './Calendar';
import ChartSVG from './Chart';
import CheckBoxSVG from './CheckBox';
import CheckBoxFilledSVG from './CheckBoxFilled';
import CloseSVG from './Close';
import CloseRoundSVG from './CloseRound';
import DeleteSVG from './Delete';
import DoubleArrowSVG from './DoubleArrow';
import DownloadLoginSVG from './DownloadLogin';
import DropDownArrowSVG from './DropDownArrow';
import EditSVG from './Edit';
import FileSVG from './File';
import InfoSVG from './Info';
import LoadingSVG from './Loading';
import LoginSVG from './Login';
import MinusRoundSVG from './MinusRound';
import PlusSVG from './Plus';
import PlusRoundSVG from './PlusRound';
import PowerSVG from './Power';
import QuestionSVG from './Question';
import SearchSVG from './Search';
import SettingFeeSVG from './SettingFee';
import SettingSVG from './Setting';
import SpinButtonSVG from './SpinButton';
import SwitchSVG from './Switch';
import TempLogo from './TempLogo';
import TimeSVG from './Time';
import UploadLogoutSVG from './UploadLogout';
import WarningSVG from './Warning';

/**
 * Icons
 */
const meta: Meta<typeof AccountSVG> = {
  title: 'common/Icon',
  component: AccountSVG,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    $filled: false,
  },
  argTypes: {
    color: {
      control: 'color',
    },
  },
};

export default meta;

export const Default = (args: any) => {
  return (
    <Wrapper>
      <AccountSVG {...args} />
    </Wrapper>
  );
};

export const Icons = (args: any) => {
  return (
    <Container>
      <IconWrapper>
        <span>account</span>
        <AccountSVG />
      </IconWrapper>
      <IconWrapper>
        <span>Alarm</span>
        <AlarmSVG />
      </IconWrapper>
      <IconWrapper>
        <span>AlarmNotification</span>
        <AlarmNotificationSVG />
      </IconWrapper>
      <IconWrapper>
        <span>Arrow</span>
        <ArrowSVG />
      </IconWrapper>
      <IconWrapper>
        <span>ArrowCheck</span>
        <ArrowCheckSVG />
      </IconWrapper>
      <IconWrapper>
        <span>ArrowDown</span>
        <ArrowDownSVG />
      </IconWrapper>
      <IconWrapper>
        <span>BigMinus</span>
        <BigMinusSVG />
      </IconWrapper>
      <IconWrapper>
        <span>BigMinusDisable</span>
        <BigMinusDisableSVG />
      </IconWrapper>
      <IconWrapper>
        <span>BigPlus</span>
        <BigPlusSVG />
      </IconWrapper>
      <IconWrapper>
        <span>BigMinusDisable</span>
        <BigMinusDisableSVG />
      </IconWrapper>
      <IconWrapper>
        <span>BigPlus</span>
        <BigPlusSVG />
      </IconWrapper>
      <IconWrapper>
        <span>BigPlusDisable</span>
        <BigPlusDisableSVG />
      </IconWrapper>
      <IconWrapper>
        <span>Calendar</span>
        <CalendarSVG />
      </IconWrapper>
      <IconWrapper>
        <span>Chart</span>
        <ChartSVG />
      </IconWrapper>
      <IconWrapper>
        <span>CheckBox</span>
        <CheckBoxSVG />
      </IconWrapper>
      <IconWrapper>
        <span>CheckBoxFilled</span>
        <CheckBoxFilledSVG />
      </IconWrapper>
      <IconWrapper>
        <span>Close</span>
        <CloseSVG />
      </IconWrapper>
      <IconWrapper>
        <span>CloseRound</span>
        <CloseRoundSVG />
      </IconWrapper>
      <IconWrapper>
        <span>Delete</span>
        <DeleteSVG />
      </IconWrapper>
      <IconWrapper>
        <span>DoubleArrow</span>
        <DoubleArrowSVG />
      </IconWrapper>
      <IconWrapper>
        <span>DownloadLogin</span>
        <DownloadLoginSVG />
      </IconWrapper>
      <IconWrapper>
        <span>DropDownArrow</span>
        <DropDownArrowSVG />
      </IconWrapper>
      <IconWrapper>
        <span>Edit</span>
        <EditSVG />
      </IconWrapper>
      <IconWrapper>
        <span>File</span>
        <FileSVG />
      </IconWrapper>
      <IconWrapper>
        <span>Info</span>
        <InfoSVG />
      </IconWrapper>
      <IconWrapper>
        <span>Loading</span>
        <LoadingSVG />
      </IconWrapper>
      <IconWrapper>
        <span>Login</span>
        <LoginSVG />
      </IconWrapper>
      <IconWrapper>
        <span>MinusRound</span>
        <MinusRoundSVG />
      </IconWrapper>
      <IconWrapper>
        <span>Plus</span>
        <PlusSVG />
      </IconWrapper>
      <IconWrapper>
        <span>PlusRound</span>
        <PlusRoundSVG />
      </IconWrapper>
      <IconWrapper>
        <span>Power</span>
        <PowerSVG />
      </IconWrapper>
      <IconWrapper>
        <span>Question</span>
        <QuestionSVG />
      </IconWrapper>
      <IconWrapper>
        <span>Search</span>
        <SearchSVG />
      </IconWrapper>
      <IconWrapper>
        <span>Setting</span>
        <SettingSVG />
      </IconWrapper>
      <IconWrapper>
        <span>SettingFee</span>
        <SettingFeeSVG />
      </IconWrapper>
      <IconWrapper>
        <span>SpinButton</span>
        <SpinButtonSVG />
      </IconWrapper>
      <IconWrapper>
        <span>Switch</span>
        <SwitchSVG />
      </IconWrapper>
      <IconWrapper>
        <span>TempLogo</span>
        <TempLogo />
      </IconWrapper>
      <IconWrapper>
        <span>Time</span>
        <TimeSVG />
      </IconWrapper>
      <IconWrapper>
        <span>UploadLogout</span>
        <UploadLogoutSVG />
      </IconWrapper>
      <IconWrapper>
        <span>Warning</span>
        <WarningSVG />
      </IconWrapper>
    </Container>
  );
};

type Story = StoryObj<typeof AccountSVG>;

const Wrapper = styled.div`
  width: 500px;
  height: 300px;
`;

const Container = styled.div`
  width: 700px;
  height: 800px;
  display: grid;
  gap: 4px;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
`;
const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
