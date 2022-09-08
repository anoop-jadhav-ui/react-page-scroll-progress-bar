# React Page Scroll Progress Bar

Scroll bar to show the scroll progress of the page at the top of the page.

<p>
  <img src='https://github.com/anoop-jadhav-ui/react-page-scroll-progress-bar/blob/44f9702e119c2b3ef5220f3f7e33a119e3c76152/src/assets/pageScroll.gif' alt='page-Scroll'/>
</p>

## Installation

npm users

```bash
  npm install react-page-scroll-progress-bar
```

yarn users

```bash
  yarn add react-page-scroll-progress-bar
```

## Usage

Import the component

```bash
import PageScrollProgressBar from "react-page-scroll-progress-bar";

```

Pass the reference of the parent most HTML element of your react app. for eg -

```bash

const App = () => {

  const AppRef = useRef(null); 

  return (
    <PageScrollProgressBar AppRef={AppRef} />
    <div className="App" ref={AppRef}>
      APP
    </div>
  )

}


```

[checkout the source code](https://github.com/anoop-jadhav-ui/react-page-scroll-progress-bar)

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://anoopjadhav.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/anoopjadhav/)
