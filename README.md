
# React Page Scroll Progress Bar

Scroll bar to show the scroll progress of the page at the top of the page.

<p>
  <img src='https://i.postimg.cc/RZZXxTXK/page-Scroll.gif' border='0' alt='page-Scroll'/>
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