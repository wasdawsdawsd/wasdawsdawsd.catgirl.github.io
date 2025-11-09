# CatGirl Client 웹사이트

Minecraft Lunar Client 전용 DLL Injection Ghost Client를 소개하는 웹사이트입니다.

## 기능

- **반응형 디자인**: 모든 디바이스에서 완벽하게 작동
- **모던한 UI/UX**: 그라디언트, 애니메이션, 글래스모피즘 효과
- **부드러운 스크롤**: 섹션 간 자연스러운 이동
- **다운로드 기능**: 클라이언트 다운로드 버튼 포함

## 포함된 모듈

1. **AutoClick**
   - Left Click / Right Click 별개 모듈
   - AutoBlock 포함
   - 커스터마이징 가능한 CPS

2. **AimAssist**
   - 자연스러운 조준 보조
   - 거리 및 강도 조절

3. **Reach**
   - 공격 거리 확장
   - 안티치트 우회

4. **Hitbox**
   - 히트박스 확장
   - 정밀한 타격

5. **Velocity**
   - Jump 모드
   - Simple 모드
   - 넉백 감소

6. **ClickGUI**
   - 간편한 설정 인터페이스
   - 드래그 앤 드롭 지원

## 사용 방법

1. `index.html` 파일을 브라우저에서 엽니다.
2. 웹사이트를 탐색합니다.
3. 다운로드 섹션에서 클라이언트를 다운로드합니다.

## 다운로드 파일 추가 방법

`script.js` 파일의 다운로드 함수에서 실제 파일 경로를 설정하세요:

```javascript
// 주석 처리된 부분을 해제하고 파일 경로를 수정하세요
const link = document.createElement('a');
link.href = 'files/CatGirl-Client.dll'; // 실제 파일 경로
link.download = 'CatGirl-Client-v1.0.0.dll';
```

## 파일 구조

```
CatGirlweb/
│
├── index.html          # 메인 HTML 파일
├── style.css           # 스타일시트
├── script.js           # JavaScript 파일
└── README.md          # 이 파일
```

## 기술 스택

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (ES6+)
- Google Fonts (Poppins)

## 라이선스

교육 목적으로만 사용하세요.

## 주의사항

⚠️ 이 클라이언트는 교육 목적으로만 제공됩니다. 서버 규칙을 위반하여 발생하는 문제에 대해 책임지지 않습니다.