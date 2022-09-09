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

#### `Required props:`

| Parameter | Description                                                                |
|:----------|:---------------------------------------------------------------------------|
| AppRef  | The reference (useRef) of the parent most HTML element of your react app. |the score from the classifier for each C position


#### `Optional props:`

| Parameter           |     Default      | Description   |
|:--------------------|:----------------:| :-------------|
| progressBarColor  |     #eb5757     |Color of the progress bar as a hex string
| progressBarBgColor  |     #f2f2f2      |Color of the progress bar background as a hex string 
| progressBarHeight | 0.25rem or 4px |Height of the progress bar

### `Example -`

```bash
const App = () => {

  const AppRef = useRef(null); 

  return (
    <PageScrollProgressBar AppRef={AppRef} progressBarColor="#00FFFF" progressBarBgColor="#f2f2f2" progressBarHeight="6px" />
    <div className="App" ref={AppRef}>
      APP
    </div>
  )

}
```

[Checkout the Example app](https://react-qmmsys.stackblitz.io)

[Checkout the Source code](https://github.com/anoop-jadhav-ui/react-page-scroll-progress-bar)

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://anoopjadhav.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/anoopjadhav/)
