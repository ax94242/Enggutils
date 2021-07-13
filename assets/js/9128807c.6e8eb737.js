(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8374],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9408:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),l=["components"],i={sidebar_position:1,title:"How to install BoltzTrap Software?",description:"Installing BoltzTrap helps you calculate electronic properties for your engineered materials for your desired applications such as thermoelectric, high entropy alloy etc.",hide_table_of_contents:!0,tags:["Thermoelectrics","Electronic properties","BoltzTrap","CASTEP"]},c={type:"mdx",permalink:"/Software/BoltzTrap",source:"@site/src/pages/Software/BoltzTrap.md"},p=[{value:"Pre-Requisites",id:"pre-requisites",children:[{value:"Dependency Installation",id:"dependency-installation",children:[]}]},{value:"Getting Started",id:"getting-started",children:[{value:"Setting up",id:"setting-up",children:[]}]},{value:"Build your first document.",id:"build-your-first-document",children:[]}],s={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-set-up-boltztrap"},"How to set up BoltzTrap?"),(0,a.kt)("p",null,"Install BoltzTrap to calculate electronic and thermal properties based on the K-path points and the band gap solution for a material."),(0,a.kt)("h2",{id:"pre-requisites"},"Pre-Requisites"),(0,a.kt)("h3",{id:"dependency-installation"},"Dependency Installation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Download Boltztrap")," click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"http://gestyy.com/eot7DW"},"here")),'. Click under "Windows" => "Installer" => Click on Download and run the file.'),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Install Virtual Box")," click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"http://gestyy.com/eot8ui"},"here")),". Download and run the file for Windows."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Download Linux Image")," click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://quantum-mobile.readthedocs.io/en/latest/releases/index.html"},"here")),".")),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("h3",{id:"setting-up"},"Setting up"),(0,a.kt)("p",null,"Open Virtual Box software and load the downloaded Linux Image. Once loaded open the command line in the Linux system and execute below command. Follow the tutorial to execute below configuration properly : ",(0,a.kt)("a",{parentName:"p",href:"http://gestyy.com/eot8dy"},"http://gestyy.com/eot8dy"),"."),(0,a.kt)("h2",{id:"build-your-first-document"},"Build your first document."),(0,a.kt)("p",null,"Copy-paste below code to see your configuration works."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"1) tar xvf $HOME/Downloads/BoltzTraP.tar.bz2\n2) cd boltz*\n3) cd src\n4) gedit Makefile\n---------\nFC=ifort\nFOPT = -FR -mp1 -w -prec_div -pc80 -pad -align -DINTEL_VML -traceback -O2\nLDFLAGS = $(FOPT) -L$(MKLROOT)/lib/$(MKL_TARGET_ARCH) -pthread\nLIBS = -lmkl_lapack95_lp64 -lmkl_intel_lp64 -lmkl_intel_thread -lmkl_core -openmp -lpthread\n----------\n5) make clean\n6) make\n")),(0,a.kt)("p",null,"If you are a beginner in Material simulation, I highly recommend to use conventional software such as Material studio as it comes with the assistance; Click ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/Software/MaterialStudio/matstud"},"here"))," to install."))}u.isMDXComponent=!0}}]);