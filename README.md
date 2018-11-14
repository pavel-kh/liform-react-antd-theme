liform-react-antd-theme
============

[Antd Design](https://ant.design/) theme for [liform-react library](https://github.com/Limenius/liform-react)

# Installation

```
npm install liform-react-antd-theme --save
```

# Usage

```jsx
...
import AntdTheme from 'liform-react-antd-theme';
....


ReactDOM.render(
    <Provider store={store}>
        <Liform schema={schema} theme={AntdTheme} onSubmit={showResults}/>
    </Provider>,
    dest
)
```

# Supported Widgets

Currently not all the widgets are supported (you can view them in the src folder), so if you'll try to use a widget that isn't 
supported yet, the code will load the default Bootsrap 3 theme.
