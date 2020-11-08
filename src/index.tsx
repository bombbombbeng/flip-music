// import React from "react";
// import ReactDOM from 'react-dom';
// import App from './components/app'

// ReactDOM.render(
//     <App name="zoe" />,
//     document.getElementById('app')
// )

interface searchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: searchFunc

mySearch = function(src, subSrc) {
    return true
}

mySearch('23', '23')









