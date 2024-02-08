<img src="https://capsule-render.vercel.app/api?type=Rounded&color=346dff&height=150&text=맞춤%20AI%20영양사%20서비스,%20구그램&fontColor=ffffff&section=header" />



## 이 프로젝트에서 직접 구현한 기술 혹은 파일 정리 : 

- 초기 스켈레톤 코드 세팅  
- 공통 스타일 index.css, App.css등  
- Calendar(라이브러리 없이 구현, compound component 패턴)와 Album (infinite scroll 기능),   
- UI 폴더: 공통 및 재사용 컴포넌트   
   (useCachingApi : react query의 useMutation활용한 caching기능 있는 api훅,   
    useApi : axios Config파일의 API_FETCHER를 활용한 method별 재사용 가능한 axios 활용 api훅,   
    InputCommon : 디자인 재사용성을 고려 props에 따른 디자인 정의 및 개발 편의 제공 기능이 있는 공통 컴포넌트,  
    ButtonCommon : InputCommon과 동일, useButtonProps를 활용 link prop이 있는 경우 a태그로 변경  
    InputNumber : 상하 버튼 커스텀 디자인한 공통 컴포넌트    
    BackDrop : 모달이나 토스트 띄웠을 때 외부를 클릭시 닫히는 재사용 컴포넌트)   
- Compound Component 패턴 (Toast, Calendar)  
- 타 팀원의 스켈레톤 코드에 기능 추가 :   
    Onboarding : 상태관리 기능 추가, 기존의 데이터 비동기 렌더링,  
    마지막 onboarding시 비어있는 곳으로 navigate 기능 추가,  
    Login, Join : 비동기 처리 및 상태관리 기능 추가  
- 레이아웃 컴포넌트 :   
    TopBar : getNavProps를 활용, 현재 url에 따른 props를 전달하여 렌더링할 프롭 설정 재사용  
- utils 폴더 : AxiosConfig, checkValuesNullOrEmpty, getClassesArr, getDates, getMealNum, getNavProps  
- hooks 폴더 : useCachingApi, useApi, useButtonProps, useConfirm, useControlled, useMutationggu  
- Proxy 적용  
- Errorboundary적용  


## 1. 배포 링크 :  

https://kdt-ai-9-team02.elicecoding.com/


## 2. 프로젝트 설명:  

현대인의 건강관리는 중요한 화두입니다. 운동도 중요하지만, 식단은 더욱이 중요합니다.  
그러나 하루하루를 살아내기도 바쁜 현대인에게 식단관리까지 할 시간은 부족하기만 합니다.  
만일 우리가 사진을 찍어 식단을 올리면  
사진속 음식 이름과, 양과, 그에 따른 영양성분을 분석해준다면 얼마나 좋을까요? 
우리는 그래서 나의 맞춤 AI 영양사 서비스인 "구그램"을 만들게 되었습니다. 



## 3. 설치 및 사용법:   

```$ npm install   $ npm start```


## 4. 기술 스택:  


<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">   <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">   <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">   <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white">   <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">   <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">


## 5. 서비스 실제 사진 캡쳐본 및 정리 요약 :  

<img width="1221" alt="Screenshot 2024-02-08 at 9 26 59 PM" src="https://github.com/codingjamee/ai-nutrition-record-service/assets/99540667/4de2df79-8162-4ad2-afaf-f2bd5b413ede">
<img width="1186" alt="Screenshot 2024-02-08 at 9 26 22 PM" src="https://github.com/codingjamee/ai-nutrition-record-service/assets/99540667/f7f06958-c64a-4dee-8fc8-541efc5bc27d">
<img width="1227" alt="<img width="1231" alt="Screenshot 2024-02-08 at 9 26 48 PM" src="https://github.com/codingjamee/ai-nutrition-record-service/assets/99540667/dce9dfc6-2396-4002-b2dd-c68f29477dbe">
<img width="1227" alt="<img width="1231" alt=Screenshot 2024-02-08 at 9 26 38 PM" src="https://github.com/codingjamee/ai-nutrition-record-service/assets/99540667/96d6f902-2bed-4f2f-b9bb-ed7cb917a469">
<img width="1216" alt="Screenshot 2024-02-08 at 9 27 14 PM" src="https://github.com/codingjamee/ai-nutrition-record-service/assets/99540667/4fcb8b8f-ea44-4568-a56d-083c0e740980">
<img width="1019" alt="Screenshot 2024-02-08 at 9 28 07 PM" src="https://github.com/codingjamee/ai-nutrition-record-service/assets/99540667/3c1331a0-a7fb-4546-92c4-419faccae1d6">
<img width="1250" alt="Screenshot 2024-02-08 at 9 28 18 PM" src="https://github.com/codingjamee/ai-nutrition-record-service/assets/99540667/0e886a02-4ea4-4329-9981-b4205666d318">
<img width="1058" alt="Screenshot 2024-02-08 at 9 28 26 PM" src="https://github.com/codingjamee/ai-nutrition-record-service/assets/99540667/b71e8714-a44e-4761-8544-58ca33eb5261">
<img width="1166" alt="Screenshot 2024-02-08 at 9 28 34 PM" src="https://github.com/codingjamee/ai-nutrition-record-service/assets/99540667/17fb8847-ddfb-4f57-9279-d7b30a78c143">
<img width="1223" alt="Screenshot 2024-02-08 at 9 28 47 PM" src="https://github.com/codingjamee/ai-nutrition-record-service/assets/99540667/c995489c-8c2b-4f0c-896e-7d2a76feab2b">



