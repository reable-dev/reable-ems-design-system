import { useState, useEffect } from 'react';

/**
 * 스크롤 위치를 추적하는 커스텀 훅
 * dropdown 또는 download 버튼이 viewport 아래에 위치했을 때,
 * scroll 위치에 따라 위 또는 아래로 열리게 합니다.
 * @returns scrollY
 */
export default function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // 스크롤 이벤트 핸들러를 등록
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // 컴포넌트가 마운트될 때 이벤트 핸들러를 등록
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 핸들러를 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrollY };
}
