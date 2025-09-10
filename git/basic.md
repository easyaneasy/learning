# 깃 개념

![깃 이미지](<https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2aRJR6dWUGsjhkUzKkGp-3787npBEJcJblg&s>)

## 스냅샷
- 마치 폴라로이드 카메라로 풍경을 기록하듯이 파일의 상태를 기록하는 시스템
- 한 번 기록하면 변경할 수 없다.

## 3가지 영역
- 작업 트리 : 파일을 실제로 수정, 추가, 삭제하는 작업 공간
- 스테이징 영역 : 커밋할 파일을 준비하는 임시 공간
- 저장소 : 파일 변경 이력을 영구적으로 기록하는 공간
    - 지역 저장소 : 내 컴퓨터
    - 원격 저장소 : 깃허브

## 파일의 3가지 상태
- 수정 : 파일을 수정한 상태
- 스테이징 : 수정할 파일을 커밋할 대상으로 선택한 상태
- 커밋 : 파일 변경사항이 로컬 저장소에 영구적으로 기록된 상태

<br>

# 깃 명령어

## 변경된 파일을 스테이징 영역으로 이동하는 명령어
- `git add 파일명`
- `git add .` : 전체 파일을 이동

## 스테이징 영역에 있는 파일을 기록(커밋)하는 명령어
- `git commit`
- `git commit -m "커밋 메세지"` : 커밋 메세지와 함께 커밋

## 현재 파일 상태를 출력하는 명령어
- `git status`

<!-- 이전 커밋 메세지를 수정하고 싶으면
git rebase -i --root / pick->reword -->

# GUI를 사용해 commit 하는 방법
## SOURCE CONTROL 에서 할 수 있음

## git log 보다 git graph 다운받아서 source control에서 확인하는게 쉽다.

# .gitignore

## 어떤 파일인가? 역할이 무엇인가?
- git 프로젝트로 관리하지 않을 파일과 폴더를 기록

## .gitignore의 주의사항은 무엇인가?
- 한번 commit한 파일은 .gitignore에 추가해도 제외되지 않는다.

## gitignore.io 는 어떤 서비스인가?
- 사용하는 프로그래밍 언어, 기술에 적합한 .gitignore 파일을 자동으로 생성


# github

## 원격 저장소 생성, 연결, 동기화
1. 원격 저장소 생성
2. 지역 저장소 - 원격 저장소 연결
3. 지역 저장소 -> 원격 저장소 Push
4. 원격 저장소 파일 생성
5. 지역 저장소 <- 원격 저장소 Pull

## [실습] 혼자서 원격 저장소 생성, 연결, 동기화 해보기
원격 저장소 생성
- [x] 원격 저장소 생성
- [x] 지역 저장소 - 원격 저장소 연결
  `git remote add origin https://github.com/easyaneasy/eee.git`
- [x] 지역 저장소 -> 원격 저장소 Push
  `git push origin main`
- [x] 원격 저장소 파일 생성
- [ ] 지역 저장소 <- 원격 저장소 Pull