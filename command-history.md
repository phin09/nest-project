```
npm install -g @nestjs/cli
nest new [nest-project]

git init
git branch -M main
git add .
git commit -m "init"
git remote add origin https://github.com/phin09/nest-project.git
git push -u origin main
```
패키지 매니저는 npm을 사용합니다.  
[ ] 기호는 이름이 들어가는 위치를 가리키고, 터미널에 실제로 입력하진 않습니다.

```
nest g resource [users]
```
users로 명명한 기능 덩어리를 위해 기본 골조를 생성합니다.
이 때 REST API, GraphQL 등 원하는 스타일의 설계 구조를 지정할 수 있고, CRUD 요청을 받을 입구까지 자동으로 만들어 둘 수도 있습니다.

프로젝트 루트에서 실행할 경우, users 폴더가 nest-cli.json 파일의 `sourceRoot`에 지정된 위치 아래에 생성됩니다.
그 외의 위치에서 실행하면 해당 위치에 폴더를 만듭니다.  
