# v1.24 변경목표
## 기능변경
- (완료) 일부 카테고리 추가 및 이름변경
- (완료) 용돈 상계기능 추가(총합 삭제 , 용돈이면서 계좌이체 건이 아닌경우)
- (완료) 용돈 인경우, 상세내역 자동입력(식비 인경우만 제외)

----


# v1.2.1 변경목표
## 기능변경
- 정렬기능 : 태그별 정렬 + 금액오름내림 차순

## 업무환경 변경
- dist -> public 으로 이동시, minify 처리.
- dist -> public 으로 이동시 root폴더 하나로 (버전별이 아니라)



# v1.2 변경목표
## 기능변경
- <del>(정렬기능(작성시간, 결제시간, 금액 오름차순,내림차순) - 1순위 => 태그별 정렬로 기능변경</del>
- (완료) 용돈 분기처리
- <del>상계 처리기능 => 상계대상 표시 => 그냥 상계처리 대상은 안쓰는걸로</del>

## 업무환경 변경
- dist -> public 으로 이동시, minify 처리.


----
## TODO(나중)
- (완료) 결제 방식에 따른 메소드 분리법 추가
- 사용처에 따른 자동 분류
- (완료) json2excel -> 네이버가계부
- 수입 작성기능(?)
- 결제처 항목 신설
-- 결제처는 결제방식을 어떤 형식으로 사용했는가를 판단
-- 네이버페이 - 국민봉올림 일수 있음.
-- 네이버페이 - 현대네이버 도 가능함
-- 용돈항목이 많으므로, 차라리 용돈 통합코드를 삽입?