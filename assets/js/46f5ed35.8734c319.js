"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6292],{15009:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/demo-0e309a1a631b58ebe6d5f2d8014351e8.png"},79466:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var i=s(24246),r=s(71670);const t={sidebar_position:2,slug:"/api/misc/@docusaurus/logger"},o="\ud83d\udce6 logger",l={id:"api/misc/logger/logger",title:"\ud83d\udce6 logger",description:"An encapsulated logger for semantically formatting console messages.",source:"@site/docs/api/misc/logger/logger.mdx",sourceDirName:"api/misc/logger",slug:"/api/misc/@docusaurus/logger",permalink:"/docs/api/misc/@docusaurus/logger",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/misc/logger/logger.mdx",tags:[],version:"current",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1718971347e3,sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/api/misc/@docusaurus/logger"},sidebar:"api",previous:{title:"string-literal-i18n-messages",permalink:"/docs/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages"}},d={},c=[{value:"APIs",id:"apis",level:2},{value:"Using the template literal tag",id:"using-the-template-literal-tag",level:3}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"-logger",children:"\ud83d\udce6 logger"}),"\n",(0,i.jsx)(n.p,{children:"An encapsulated logger for semantically formatting console messages."}),"\n",(0,i.jsx)(n.p,{children:"Authors of packages in the Docusaurus ecosystem are encouraged to use this package to provide unified log formats."}),"\n",(0,i.jsx)(n.h2,{id:"apis",children:"APIs"}),"\n",(0,i.jsxs)(n.p,{children:["It exports a single object as default export: ",(0,i.jsx)(n.code,{children:"logger"}),". ",(0,i.jsx)(n.code,{children:"logger"})," has the following properties:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Some useful colors.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"red"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"yellow"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"green"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"bold"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"dim"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Formatters. These functions all have the signature ",(0,i.jsx)(n.code,{children:"(msg: unknown) => string"}),". Note that their implementations are not guaranteed. You should only care about their semantics.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"path"}),": formats a file path."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"url"}),": formats a URL."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"}),": formats an identifier."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"code"}),": formats a code snippet."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"subdue"}),": subdues the text."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"num"}),": formats a number."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"interpolate"})," function. It is a template literal tag. The syntax can be found below."]}),"\n",(0,i.jsxs)(n.li,{children:["Logging functions. All logging functions can both be used as normal functions (similar to the ",(0,i.jsx)(n.code,{children:"console.log"})," family, but only accepts one parameter) or template literal tags.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"info"}),": prints information."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"warn"}),": prints a warning that should be paid attention to."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"error"}),": prints an error (not necessarily halting the program) that signals significant problems."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"success"}),": prints a success message."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"report"})," function. It takes a ",(0,i.jsx)(n.code,{children:"ReportingSeverity"})," value (",(0,i.jsx)(n.code,{children:"ignore"}),", ",(0,i.jsx)(n.code,{children:"log"}),", ",(0,i.jsx)(n.code,{children:"warn"}),", ",(0,i.jsx)(n.code,{children:"throw"}),") and reports a message according to the severity."]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.mdxAdmonitionTitle,{children:["A word on the ",(0,i.jsx)(n.code,{children:"error"})," formatter"]}),(0,i.jsxs)(n.p,{children:["Beware that an ",(0,i.jsx)(n.code,{children:"error"})," message, even when it doesn't hang the program, is likely going to cause confusion. When users inspect logs and find an ",(0,i.jsx)(n.code,{children:"[ERROR]"}),", even when the build succeeds, they will assume something is going wrong. Use it sparingly."]}),(0,i.jsxs)(n.p,{children:["Docusaurus only uses ",(0,i.jsx)(n.code,{children:"logger.error"})," when printing messages immediately before throwing an error, or when user has set the reporting severity of ",(0,i.jsx)(n.code,{children:"onBrokenLink"}),", etc. to ",(0,i.jsx)(n.code,{children:'"error"'}),"."]}),(0,i.jsxs)(n.p,{children:["In addition, ",(0,i.jsx)(n.code,{children:"warn"})," and ",(0,i.jsx)(n.code,{children:"error"})," will color the ",(0,i.jsx)(n.strong,{children:"entire"})," message for better attention. If you are printing large blocks of help text about an error, better use ",(0,i.jsx)(n.code,{children:"logger.info"}),"."]})]}),"\n",(0,i.jsx)(n.h3,{id:"using-the-template-literal-tag",children:"Using the template literal tag"}),"\n",(0,i.jsxs)(n.p,{children:["The template literal tag evaluates the template and expressions embedded. ",(0,i.jsx)(n.code,{children:"interpolate"})," returns a new string, while other logging functions prints it. Below is a typical usage:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import logger from '@docusaurus/logger';\n\nlogger.info`Hello name=${name}! You have number=${money} dollars. Here are the ${\n  items.length > 1 ? 'items' : 'item'\n} on the shelf: ${items}\nTo buy anything, enter code=${'buy x'} where code=${'x'} is the item's name; to quit, press code=${'Ctrl + C'}.`;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["An embedded expression is optionally preceded by a flag in the form ",(0,i.jsx)(n.code,{children:"[a-z]+="})," (a few lowercase letters, followed by an equals sign, directly preceding the embedded expression). If the expression is not preceded by any flag, it's printed out as-is. Otherwise, it's formatted with one of the formatters:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"path="}),": ",(0,i.jsx)(n.code,{children:"path"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"url="}),": ",(0,i.jsx)(n.code,{children:"url"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name="}),": ",(0,i.jsx)(n.code,{children:"name"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"code="}),": ",(0,i.jsx)(n.code,{children:"code"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"subdue="}),": ",(0,i.jsx)(n.code,{children:"subdue"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"number="}),": ",(0,i.jsx)(n.code,{children:"num"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If the expression is an array, it's formatted by ",(0,i.jsx)(n.code,{children:"`\\n- ${array.join('\\n- ')}\\n`"})," (note it automatically gets a leading line end). Each member is formatted by itself and the bullet is not formatted. So you would see the above message printed as:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Some text output in the terminal, containing array, code, name, and number formatting",src:s(15009).Z+"",width:"1234",height:"150"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>o});var i=s(27378);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);