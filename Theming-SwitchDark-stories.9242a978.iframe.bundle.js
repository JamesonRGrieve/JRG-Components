"use strict";(self.webpackChunkjrgcomponents=self.webpackChunkjrgcomponents||[]).push([[600],{"./src/Theming/SwitchDark.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SwitchDark:()=>SwitchDark,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_SwitchDark__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Theming/SwitchDark.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Theming/Dark Switch",component:_SwitchDark__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"],argTypes:{},parameters:{componentSubtitle:"A Sample Component",docs:{description:{component:"This component is meant to illustrate how to effectively document components."}},references:[]}};var SwitchDark=function SwitchDark(args){return __jsx(_SwitchDark__WEBPACK_IMPORTED_MODULE_1__.A,args)};SwitchDark.displayName="SwitchDark",SwitchDark.args={},SwitchDark.parameters={...SwitchDark.parameters,docs:{...SwitchDark.parameters?.docs,source:{originalSource:"(args: any) => <SwitchDarkComponent {...args} />",...SwitchDark.parameters?.docs?.source}}};const __namedExportsOrder=["SwitchDark"]},"./src/Theming/SwitchDark.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>StyledSwitch});var C_Users_Jameson_Source_GT_Umbrella_jrg_jrg_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Switch/Switch.js"),_mui_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),cookies_next__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/cookies-next/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_ThemeWrapper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Theming/ThemeWrapper.tsx"),process=__webpack_require__("./node_modules/process/browser.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,C_Users_Jameson_Source_GT_Umbrella_jrg_jrg_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var SwitchThemed=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.Ay)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.A)((function(_ref){var theme=_ref.theme;return{width:62,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>\')')},"& + .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===theme.palette.mode?"#8796A5":"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:theme.palette.colorblind?"dark"===theme.palette.mode?"#000":"#fff":"dark"===theme.palette.mode?"#003892":"#f0e70a",width:32,height:32,"&:before":{content:"''",position:"absolute",width:"100%",height:"100%",left:0,top:0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#000"),'" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>\')')}},"& .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===theme.palette.mode?"#8796A5":"#aab4be",borderRadius:10}}}));function StyledSwitch(){var themeState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ThemeWrapper__WEBPACK_IMPORTED_MODULE_3__.Dx);return __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.A,{title:themeState.dark?"Switch to Light Mode":"Switch to Dark Mode"},__jsx(SwitchThemed,{checked:themeState.dark,onClick:function onClick(){themeState.mutate(_objectSpread(_objectSpread({},themeState),{},{dark:!themeState.dark}));var expiryDate=new Date;expiryDate.setDate(expiryDate.getDate()+365),(0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.setCookie)("dark",themeState.dark?"false":"true",{expires:expiryDate,domain:process.env.NEXT_PUBLIC_COOKIE_DOMAIN})}}))}StyledSwitch.displayName="StyledSwitch"},"./src/Theming/ThemeWrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dx:()=>ThemeContext});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),ThemeProvider=__webpack_require__("./node_modules/@mui/material/styles/ThemeProvider.js"),CssBaseline=__webpack_require__("./node_modules/@mui/material/CssBaseline/CssBaseline.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),deepmerge=__webpack_require__("./node_modules/@mui/utils/deepmerge/deepmerge.js"),NextLinkInjector=__webpack_require__("./src/Theming/NextLinkInjector.tsx");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var __jsx=react.createElement;function ThemeWrapper_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function ThemeWrapper_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ThemeWrapper_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ThemeWrapper_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var ThemeContext=react.createContext({dark:!1,colorblind:!1,mutate:null});function ThemeWrapper(_ref){var children=_ref.children,themeInjection=_ref.themeInjection,_ref$defaultDark=_ref.defaultDark,defaultDark=void 0!==_ref$defaultDark&&_ref$defaultDark,_ref$defaultColorblin=_ref.defaultColorblind,defaultColorblind=void 0!==_ref$defaultColorblin&&_ref$defaultColorblin,_useState=(0,react.useState)({dark:defaultDark,colorblind:defaultColorblind,mutate:null}),themeState=_useState[0],setThemeState=_useState[1],themeSet=(0,react.useMemo)((function(){return function buildThemeSet(_ref){var theme=_ref.theme,_ref$darkPalette=_ref.darkPalette,darkPalette=void 0===_ref$darkPalette?{}:_ref$darkPalette,_ref$colorblindPalett=_ref.colorblindPalette,colorblindPalette=void 0===_ref$colorblindPalett?{primary:{light:"#CCC",main:"#999",dark:"#333"},secondary:{light:"#CCC",main:"#999",dark:"#333"}}:_ref$colorblindPalett,baseOptions=_objectSpread(_objectSpread({components:{MuiButton:{styleOverrides:{root:function root(props){return{fontWeight:"bold",fontSize:"14px",textTransform:"capitalize",color:props.theme.palette.text.primary,backgroundColor:props.theme.palette[props.ownerState.color][props.theme.palette.mode]}}}},MuiTypography:{styleOverrides:{h1:function h1(_ref2){return{color:_ref2.theme.palette.text.primary}},body1:{margin:"1rem 0"}}},MuiAppBar:{styleOverrides:{root:function root(_ref3){var theme=_ref3.theme,ownerState=_ref3.ownerState;return{backgroundColor:theme.palette[ownerState.color][theme.palette.mode],borderBottom:"2px solid "+theme.palette[ownerState.color]["dark"===theme.palette.mode?"light":"dark"]}}}},MuiOutlinedInput:{styleOverrides:{root:function root(_ref4){var _ownerState$color,_ownerState$color2,theme=_ref4.theme,ownerState=_ref4.ownerState;return{"&:hover .MuiOutlinedInput-notchedOutline":{borderColor:theme.palette[null!==(_ownerState$color=null==ownerState?void 0:ownerState.color)&&void 0!==_ownerState$color?_ownerState$color:"primary"]["dark"===theme.palette.mode?"light":"dark"]},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:theme.palette[null!==(_ownerState$color2=null==ownerState?void 0:ownerState.color)&&void 0!==_ownerState$color2?_ownerState$color2:"primary"]["dark"===theme.palette.mode?"light":"dark"]}}}}},MuiInputLabel:{styleOverrides:{root:function root(_ref5){var _ownerState$color3,theme=_ref5.theme,ownerState=_ref5.ownerState;return{"&.Mui-focused":{color:theme.palette[null!==(_ownerState$color3=null==ownerState?void 0:ownerState.color)&&void 0!==_ownerState$color3?_ownerState$color3:"primary"]["dark"===theme.palette.mode?"light":"dark"]}}}}},MuiLink:{defaultProps:{component:NextLinkInjector.A,href:"/"},styleOverrides:{root:function root(_ref6){var theme=_ref6.theme;return{color:theme.palette.primary["dark"===theme.palette.mode?"light":"dark"],textDecorationColor:theme.palette.primary["dark"===theme.palette.mode?"light":"dark"],"&:hover":{color:theme.palette.secondary["dark"===theme.palette.mode?"light":"dark"],textDecorationColor:theme.palette.secondary["dark"===theme.palette.mode?"light":"dark"]}}}}},MuiButtonBase:{defaultProps:{LinkComponent:NextLinkInjector.A}},MuiIconButton:{styleOverrides:{root:function root(_ref7){var _ownerState$color4,theme=_ref7.theme,ownerState=_ref7.ownerState;return{color:Object.keys(theme.palette).includes(null==ownerState?void 0:ownerState.color)?theme.palette[null!==(_ownerState$color4=null==ownerState?void 0:ownerState.color)&&void 0!==_ownerState$color4?_ownerState$color4:"primary"]["dark"===theme.palette.mode?"light":"dark"]:ownerState.color}}}},MuiList:{styleOverrides:{root:function root(_ref8){return _ref8.theme,{padding:0}}}},MuiListItem:{styleOverrides:{root:function root(_ref9){return _ref9.theme,{py:0,fontSize:"1.2rem"}}}}}},theme),{},{palette:_objectSpread(_objectSpread({},theme.palette),{},{colorblind:!1})}),darkOptions={palette:_objectSpread(_objectSpread({},darkPalette),{},{mode:"dark"})},colorblindOptions={palette:_objectSpread(_objectSpread({},colorblindPalette),{},{colorblind:!0})};return{light:(0,createTheme.A)(baseOptions),dark:(0,createTheme.A)((0,deepmerge.A)(baseOptions,darkOptions)),lightColorblind:(0,createTheme.A)((0,deepmerge.A)(baseOptions,colorblindOptions)),darkColorblind:(0,createTheme.A)((0,deepmerge.A)((0,deepmerge.A)(baseOptions,darkOptions),colorblindOptions))}}(themeInjection)}),[themeInjection]);return __jsx(ThemeContext.Provider,{value:ThemeWrapper_objectSpread(ThemeWrapper_objectSpread({},themeState),{},{mutate:setThemeState})},__jsx(ThemeProvider.A,{theme:themeState.dark?themeState.colorblind?themeSet.darkColorblind:themeSet.dark:themeState.colorblind?themeSet.lightColorblind:themeSet.light},__jsx(CssBaseline.Ay,null),children))}ThemeWrapper.displayName="ThemeWrapper";try{ThemeWrapper.displayName="ThemeWrapper",ThemeWrapper.__docgenInfo={description:"",displayName:"ThemeWrapper",props:{themeInjection:{defaultValue:null,description:"",name:"themeInjection",required:!0,type:{name:"ThemeInjection"}},defaultDark:{defaultValue:{value:"false"},description:"",name:"defaultDark",required:!1,type:{name:"boolean"}},defaultColorblind:{defaultValue:{value:"false"},description:"",name:"defaultColorblind",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Theming/ThemeWrapper.tsx#ThemeWrapper"]={docgenInfo:ThemeWrapper.__docgenInfo,name:"ThemeWrapper",path:"src/Theming/ThemeWrapper.tsx#ThemeWrapper"})}catch(__react_docgen_typescript_loader_error){}}}]);