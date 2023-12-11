export const MODAL_ID = {
  /**
   * *================
   *  * Storybook
   * *================
   */
  STORYBOOK_ONE_DEPTH_MODAL: 'STORYBOOK_ONE_DEPTH_MODAL',
  STORYBOOK_TWO_DEPTH_MODAL: 'STORYBOOK_TWO_DEPTH_MODAL',

  /**
   * *================
   *  * 건축물 초기설정
   * *================
   */
  /** 1. 건축물 초기설정 /default */
  DELETE_DETAIL_INFO_CONFIRM_MODAL: 'DELETE_DETAIL_INFO_CONFIRM_MODAL',

  /** 자료보관함 업로드 모달 */
  DATA_STORAGE_UPLOAD_MODAL: 'DATA_STORAGE_UPLOAD_MODAL',

  /** 자료보관함 삭제 확인 모달 */
  DATA_STORAGE_DELETE_CONFIRM_MODAL: 'DATA_STORAGE_DELETE_CONFIRM_MODAL',

  /** 자료보관함 파일 이름 수정 모달 */
  DATA_STORAGE_EDIT_FILE_NAME_MODAL: 'DATA_STORAGE_EDIT_FILE_NAME_MODAL',

  /**
   * *================
   *  * 층/실 정보
   * *================
   */
  /** 층/실 정보 - 층/실 관리 - 층 설정 모달 */
  FLOOR_ROOM_FLOOR_SETTING_MODAL: 'FLOOR_ROOM_FLOOR_SETTING_MODAL',
  /** 층/실 정보 - 층/실 관리 - 실 설정 모달 */
  FLOOR_ROOM_ROOM_SETTING_MODAL: 'FLOOR_ROOM_ROOM_SETTING_MODAL',

  /** 층/실 정보 - 층/실 관리 check 삭제 모달 */
  FLOOR_ROOM_FLOOR_ROOM_DELETE_MODAL: 'FLOOR_ROOM_FLOOR_ROOM_DELETE_MODAL',

  /** 층/실 정보 - 층 설정 check 삭제 모달 */
  FLOOR_SETTING_DELETE_MODAL: 'FLOOR_SETTING_DELETE_MODAL',
  /** 층/실 정보 - 실 설정 check 삭제 모달 */
  ROOM_SETTING_DELETE_MODAL: 'ROOM_SETTING_DELETE_MODAL',

  /**
   * *================
   *  * 데이터 수집점
   * *================
   */
  /** 데이터 수집점 - 데이터 수집점 추가 모달 */
  POINT_ADD_MODAL: 'POINT_ADD_MODAL',
  /** 데이터 수집점 - 데이터 수집점 추가 모달 */
  POINT_DETAIL_MODAL: 'POINT_DETAIL_MODAL',
  /** 데이터 수집점 - 데이터 수집점 추가 취소 확인 모달 */
  POINT_ADD_CANCEL_MODAL: 'POINT_ADD_CANCEL_MODAL',
  /** 데이터 수집점 - 데이터 수집점 목록 취소 확인 모달 */
  POINT_LIST_DELETE_CONFIRM_MODAL: 'POINT_LIST_DELETE_CONFIRM_MODAL',

  /**
   * *================
   *  * 개별 설비
   * *================
   */
  /** 개별 설비 목록 복귀 모달 */
  INDIVIDUAL_DEVICE_LIST_RETURN_MODAL: 'INDIVIDUAL_DEVICE_LIST_RETURN_MODAL',

  /** 개별 설비 설비목록 삭제 모달 */
  INDIVIDUAL_DEVICE_DELETE_CONFIRM_MODAL: 'INDIVIDUAL_DEVICE_DELETE_CONFIRM_MODAL',

  /**
   * *================
   *  * 설비 연결
   * *================
   */

  /** 설비 연결 목록 복귀 모달 */
  DEVICE_CONNECTION_LIST_RETURN_MODAL: 'DEVICE_CONNECTION_LIST_RETURN_MODAL',

  /**
   * *================
   *  * 설비 현황
   * *================
   */
  /** 설비 현황 및 제어 모달 */
  DEVICE_CONTROL_MODAL: 'DEVICE_CONTROL_MODAL',
  /** 설비 현황 및 제어 종료 모달 */
  DEVICE_CONTROL_CLOSE_MODAL: 'DEVICE_CONTROL_CLOSE_MODAL',

  /**
   * *================
   *  * 존
   * *================
   */
  /** 존 - 존 목록 삭제 확인 모달 */
  ZONE_LIST_DELETE_CONFIRM_MODAL: 'ZONE_LIST_DELETE_CONFIRM_MODAL',
  /** 존 - 존 이름 validation 모달 */
  ZONE_NAME_VALIDATION_MODAL: 'ZONE_NAME_VALIDATION_MODAL',
} as const;
