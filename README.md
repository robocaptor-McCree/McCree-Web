# McCree-Web

[![license](https://img.shields.io/github/license/robocaptor-McCree/McCree-Web.svg)](LICENSE)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

McCree의 Adversarial image 생성 프로그램 테스트 페이지

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Install

This module depends upon a knowledge of [Markdown]().
```
$ git clone https://github.com/robocaptor-McCree/McCree-Web
$ cd McCree-Web/mccree_front
$ npm install package.json
$ python manage.py runserver 
$ npm start
```

## Usage


  * DB설정
    API를 사용하기 위해서는 adversarial image와 image에 대한 Answer가 DB에 저장되어 있어야 사용가능하다
  
    때문에 MySQL환경의 DB를 Django와 이어주어야 한다. 
  
    개인의 DB또는 공개된 DB의 정보를 mccree_back/mccree_back/setting.py내의 DATABASES에 작성한다.
    ```
      DATABASES = { 
      'default': { 
          'ENGINE': 'django.db.backends.mysql', 
            'NAME': 'mccree', 
            'USER': 'root', 
            'PASSWORD': '!zxcv9930', 
            'HOST': 'localhost', 
            'PORT': '3306', 
         } 
       }
    ```
   * 이미지 저장 디렉터리 지정
     이미지의 저장공간을 지정 변경하기 위해서는 mccree_back/mccree_back/setting.py에 다음 코드를 작성하여 경로를 명시한다.
  
     ```
       # 각 media 파일에 대한 URL Prefix
      MEDIA_URL = '/photo/' # 항상 / 로 끝나도록 설정
      # MEDIA_URL = 'http://static.myservice.com/media/' 다른 서버로 media 파일 복사시

      # 업로드된 파일을 저장할 디렉토리 경로
      MEDIA_ROOT = os.path.join(BASE_DIR, 'photo')


      CORS_ORIGIN_ALLOW_ALL = True

      CORS_ALLOW_CREDENTIALS = True


## New Image Upload
새로운 이미지 추가는 다음과 같은 과정을 통해 진행한다.
```
http://127.0.0.1:8000/api/question/question/
```
해당 페이지에서 
![image](https://user-images.githubusercontent.com/24893215/132341373-77a0a4bd-64b4-43aa-9988-38cfcdeb3932.png)
파일과 정답 정보를 입력하고 POST한다.

Note: The `license` badge image link at the top of this file should be updated with the correct `:user` and `:repo`.



   * 사용방법
   image와 answer를 불러오기 위한 API는 mccree_front/api/QuesitonAPI.js 내부에 정의 되어 있다.
   이 API를 사용하여 다음과 같은 코드를 페이지에 작성하면 API를 불러올 수 있다.
   ```
       useEffect(() => {
        photoAPI.getQuestion(id)
            .then(res => {
                setQuestionPhoto(res.data.photo) //image data
                setQuestionAnswer(res.data.photo) //answer data
            })
    }, [])
   ```
   

## Dependencies
   * Django  
      API를 실행시키기 위한 rest framewok으로 Mccree는 django를 이용해 API를 작성하였다.
      ```
      'corsheaders', # CORS 관련 추가
      # rest-framework
      'rest_framework',
      # apps
      'question'
      ```
   * React  
     작성된 api를 axios를 사용하여 호출하기위해 React로 페이지를 작성
     
   * 예시페이지 실행을 위한 의존성  
   * 
      ```
      "dependencies": {
        "@testing-library/jest-dom": "^5.14.1",
        "@testing-library/react": "^11.2.7",
        "@testing-library/user-event": "^12.8.3",
        "axios": "^0.21.1",
        "react": "^17.0.2",
        "react-dom": "^17.0.2",
        "react-modal": "^3.14.3",
        "react-scripts": "^1.1.5",
        "semantic-ui-css": "^2.4.1",
        "semantic-ui-react": "^2.0.3",
        "styled-components": "^5.3.1",
        "web-vitals": "^1.1.2"
      }
      ```


## Contributing

This project exists thanks to all the people who contribute. 

![GitHub Contributors Image](https://contrib.rocks/image?repo=robocaptor-McCree/McCree-Web)


## License

[MIT © robocaptor-McCree.](../LICENSE)
