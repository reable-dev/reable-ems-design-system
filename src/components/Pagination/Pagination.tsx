import React from 'react';
import * as S from './index.styles';
import theme from '../../styles/theme.styles';

import DoubleArrowSVG from '../Icons/DoubleArrow';
import ArrowSVG from '../Icons/Arrow';

export interface PaginationProps {
  total: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  total,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(total / itemsPerPage);
  const maxButtonsToShow = 5;

  // 현재 페이지가 속한 5단위 그룹의 첫 번째 페이지를 계산
  let groupStartPage = Math.floor((currentPage - 1) / maxButtonsToShow) * maxButtonsToShow + 1;
  const groupEndPage = Math.min(groupStartPage + maxButtonsToShow - 1, totalPages);

  // 5단위 앞으로 가기
  const handlePrevDoubleArrow = () => {
    onPageChange(Math.max(1, groupStartPage - maxButtonsToShow));
  };

  // 5단위 뒤로 가기
  const handleNextDoubleArrow = () => {
    onPageChange(Math.min(totalPages, groupEndPage + 1));
  };

  // 1단위 앞으로 가기
  const handlePrevPage = () => {
    onPageChange(Math.max(1, currentPage - 1));
  };

  // 1단위 뒤로 가기
  const handleNextPage = () => {
    onPageChange(Math.min(totalPages, currentPage + 1));
  };

  return (
    <S.Container>
      <S.PaginationWrapper>
        <S.PaginationLeftArrowWrapper>
          <DoubleArrowSVG
            width={16}
            height={16}
            color={groupStartPage > 1 ? theme.color.gray500 : theme.color.gray300}
            onClick={groupStartPage > 1 ? handlePrevDoubleArrow : undefined}
          />
          <ArrowSVG
            width={16}
            height={16}
            color={currentPage > 1 ? theme.color.gray500 : theme.color.gray300}
            onClick={currentPage > 1 ? handlePrevPage : undefined}
          />
        </S.PaginationLeftArrowWrapper>
        {total > 0
          ? [...Array(groupEndPage - groupStartPage + 1)].map((_, index) => {
              const pageNumber = groupStartPage + index;
              return (
                <S.PageButton
                  key={pageNumber}
                  onClick={() => onPageChange(pageNumber)}
                  $isCurrentPage={currentPage === pageNumber}
                >
                  {pageNumber}
                </S.PageButton>
              );
            })
          : // total이 0인 경우 빈 배열 반환
            []}
        <S.PaginationRightArrowWrapper>
          <ArrowSVG
            width={16}
            height={16}
            color={currentPage < totalPages ? theme.color.gray500 : theme.color.gray300}
            rotate={180}
            onClick={currentPage < totalPages ? handleNextPage : undefined}
          />
          <DoubleArrowSVG
            width={16}
            height={16}
            color={groupEndPage < totalPages ? theme.color.gray500 : theme.color.gray300}
            rotate={180}
            onClick={groupEndPage < totalPages ? handleNextDoubleArrow : undefined}
          />
        </S.PaginationRightArrowWrapper>
      </S.PaginationWrapper>
    </S.Container>
  );
}
