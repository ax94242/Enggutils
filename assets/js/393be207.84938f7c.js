(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7414],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4880:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O},frontMatter:function(){return v},metadata:function(){return y},toc:function(){return g}});var r=n(2122),a=n(9756),o=n(7294),l=n(3905),i=n(944),c=n(6010),u="tabItem_1uMI",s="tabItemActive_2DSg";var p=37,m=39;var f=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,a=e.values,l=e.groupId,f=e.className,d=(0,i.Z)(),b=d.tabGroupChoices,v=d.setTabGroupChoices,y=(0,o.useState)(r),g=y[0],h=y[1],O=o.Children.toArray(e.children),w=[];if(null!=l){var k=b[l];null!=k&&k!==g&&a.some((function(e){return e.value===k}))&&h(k)}var T=function(e){var t=e.currentTarget,n=w.indexOf(t),r=a[n].value;h(r),null!=l&&(v(l,r),setTimeout((function(){var e,n,r,a,o,l,i,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,l=window,i=l.innerHeight,c=l.innerWidth,n>=0&&o<=c&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case m:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case p:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":n},f)},a.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:T,onClick:T},n)}))),t?(0,o.cloneElement)(O.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))};var d=function(e){var t=e.children,n=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:r},t)},b=["components"],v={title:"Markdown page example"},y={type:"mdx",permalink:"/markdown-page",source:"@site/src/pages/markdown-page.md"},g=[],h={toc:g};function O(e){var t=e.components,n=(0,a.Z)(e,b);return(0,l.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"markdown-page-example"},"Markdown page example"),(0,l.kt)("p",null,"You don't need React to write simple standalone pages."),(0,l.kt)(f,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},(0,l.kt)(d,{value:"apple",mdxType:"TabItem"},"hello"),(0,l.kt)(d,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,l.kt)(d,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),";")}O.isMDXComponent=!0}}]);