import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import styled from 'styled-components';

import { MODAL_ID } from '../../constants/modalId';
import Modal from './Modal';
import Button from '../Button/Button';
import DeleteConfirmModal from './DeleteConfirmModal';
import useModalContext from '../../contexts/ModalContext/useModalContext';
import StorybookModal from './StorybookModal';

/**
 * Modal
 */
const meta: Meta<typeof Modal> = {
  title: 'common/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {},
};

export default meta;

export const Default = (args: any) => {
  const { openModal, closeModal, modalId, modals } = useModalContext();

  // one depth modal
  const openOneDepthModal = () => {
    openModal(MODAL_ID.STORYBOOK_ONE_DEPTH_MODAL);
  };
  const closeOneDepthModal = () => {
    closeModal(MODAL_ID.STORYBOOK_ONE_DEPTH_MODAL);
  };

  // two depth modal
  const openTwoDepthModal = () => {
    openModal(MODAL_ID.STORYBOOK_TWO_DEPTH_MODAL);
  };
  const closeTwoDepthModal = () => {
    closeModal(MODAL_ID.STORYBOOK_TWO_DEPTH_MODAL);
  };

  return (
    <Container>
      {/* one depth modal */}
      {modals[MODAL_ID.STORYBOOK_ONE_DEPTH_MODAL] && (
        <Modal onClose={closeOneDepthModal} modalId={MODAL_ID.STORYBOOK_ONE_DEPTH_MODAL}>
          <StorybookModal onClose={closeOneDepthModal} onCloseConfirm={openTwoDepthModal} />
        </Modal>
      )}

      {/* two depth modal */}
      {modals[MODAL_ID.STORYBOOK_TWO_DEPTH_MODAL] && (
        <Modal
          onClose={closeTwoDepthModal}
          modalId={MODAL_ID.STORYBOOK_TWO_DEPTH_MODAL}
          secondModal
        >
          <DeleteConfirmModal
            selectedRowsLength={13}
            onClose={closeTwoDepthModal}
            // 삭제 함수를 넣으면 됨.
            // 예) react-query delete
            onDelete={closeTwoDepthModal}
            secondModal
          />
        </Modal>
      )}

      <Button onClick={openOneDepthModal}>open 1 Depth Modal </Button>
    </Container>
  );
};

type Story = StoryObj<typeof Modal>;

const Container = styled.div`
  width: 800px;
  height: 600px;
`;
