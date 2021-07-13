(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9671],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},426:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},l={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"How to build your website with Docusaurus?",description:"Easy to make website without any coding or programming background. Highly recommended to Academicians. Just see the syntax pattern and get started with Docusaurus in less than 5 minutes. I am going demonstrate using Windows Platform. For other operating version, you may follow new.docusaurus.io.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/ax94242/docs/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Create a Page",permalink:"/docs/tutorial-basics/create-a-page"}},u=[{value:"Pre-Requisites",id:"pre-requisites",children:[]},{value:"Dependency Installation",id:"dependency-installation",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Generate a new site",id:"generate-a-new-site",children:[]},{value:"Start your site",id:"start-your-site",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Easy to make website without any coding or programming background. Highly recommended to Academicians. Just see the syntax pattern and get started with ",(0,o.kt)("strong",{parentName:"p"},"Docusaurus in less than 5 minutes"),". I am going demonstrate using Windows Platform. For other operating version, you may follow ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://new.docusaurus.io"},"new.docusaurus.io")),"."),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-Requisites"),(0,o.kt)("p",null,"We are going to use Git, Node.js, yarn and github for hosting website. This may look complicated but trust me, in the end it will worth it."),(0,o.kt)("h2",{id:"dependency-installation"},"Dependency Installation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Install Git")," click ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"here")),". Follow the instruction for windows operating system."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Install Node.js")," click ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://nodejs.org/en/download/"},"here")),". Follow the instruction for windows operating system."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Install Yarn"),'. This was an optional before but with the new release of docusaurus, Yarn became necessity. Simply search "Git" in your windows search bar and open it. Run below command to install it:')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --global yarn\n")),(0,o.kt)("p",null,"Congrats! You made this far. It was not that complicated afterall."),(0,o.kt)("p",null,"At last, we will set up Github Page for your Website:\n4. Go to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/"},"Github")),' and sign up for an account.\na. Go to your profile section, can be found at the right upper corner. Next to the profile picture on right corner, Click on plus icon and select "New repository".\nb. You may have to create public repository for the free acount.'),(0,o.kt)("p",null,"Great! All dependencies installed."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Time to set up website locally in your computer. So, that you can work offline and deploy the website, when it's finalized."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Open your "Git" again.'),(0,o.kt)("li",{parentName:"ol"},"Change your directory where you want to save the website files locally. For an instance, Run command something like below:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd ~/docs/github/enggutils\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Clone the github repository to your local computer. Change USERNAME with your Github user name")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/USERNAME/docusaurus-tutorial.git\n")),(0,o.kt)("p",null,"Get started by ",(0,o.kt)("strong",{parentName:"p"},"creating a new site"),"."),(0,o.kt)("p",null,"Or ",(0,o.kt)("strong",{parentName:"p"},"try Docusaurus immediately")," with ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://new.docusaurus.io"},"new.docusaurus.io")),"."),(0,o.kt)("h2",{id:"generate-a-new-site"},"Generate a new site"),(0,o.kt)("p",null,"Generate a new Docusaurus site using the ",(0,o.kt)("strong",{parentName:"p"},"classic template"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx @docusaurus/init@latest init my-website classic\n")),(0,o.kt)("h2",{id:"start-your-site"},"Start your site"),(0,o.kt)("p",null,"Run the development server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd my-website\n\nnpx docusaurus start\n")),(0,o.kt)("p",null,"Your site starts at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),"."),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," and edit some lines: the site ",(0,o.kt)("strong",{parentName:"p"},"reloads automatically")," and display your changes."))}p.isMDXComponent=!0}}]);