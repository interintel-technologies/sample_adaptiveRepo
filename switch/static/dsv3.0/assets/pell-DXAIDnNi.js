const f="defaultParagraphSeparator",r="formatBlock",p=(e,i,a)=>e.addEventListener(i,a),b=(e,i)=>e.appendChild(i),h=e=>document.createElement(e),c=e=>document.queryCommandState(e),k=e=>document.queryCommandValue(e),n=(e,i=null)=>document.execCommand(e,!1,i),s={bold:{icon:"<b>B</b>",title:"Bold",state:()=>c("bold"),result:()=>n("bold")},italic:{icon:"<i>I</i>",title:"Italic",state:()=>c("italic"),result:()=>n("italic")},underline:{icon:"<u>U</u>",title:"Underline",state:()=>c("underline"),result:()=>n("underline")},strikethrough:{icon:"<strike>S</strike>",title:"Strike-through",state:()=>c("strikeThrough"),result:()=>n("strikeThrough")},heading1:{icon:"<b>H<sub>1</sub></b>",title:"Heading 1",result:()=>n(r,"<h1>")},heading2:{icon:"<b>H<sub>2</sub></b>",title:"Heading 2",result:()=>n(r,"<h2>")},paragraph:{icon:"&#182;",title:"Paragraph",result:()=>n(r,"<p>")},quote:{icon:"&#8220; &#8221;",title:"Quote",result:()=>n(r,"<blockquote>")},olist:{icon:"&#35;",title:"Ordered List",result:()=>n("insertOrderedList")},ulist:{icon:"&#8226;",title:"Unordered List",result:()=>n("insertUnorderedList")},code:{icon:"&lt;/&gt;",title:"Code",result:()=>n(r,"<pre>")},line:{icon:"&#8213;",title:"Horizontal Line",result:()=>n("insertHorizontalRule")},link:{icon:"&#128279;",title:"Link",result:()=>{const e=window.prompt("Enter the link URL");e&&n("createLink",e)}},image:{icon:"&#128247;",title:"Image",result:()=>{const e=window.prompt("Enter the image URL");e&&n("insertImage",e)}}},L={actionbar:"pell-actionbar",button:"pell-button",content:"pell-content",selected:"pell-button-selected"},g=e=>{const i=e.actions?e.actions.map(t=>typeof t=="string"?s[t]:s[t.name]?{...s[t.name],...t}:t):Object.keys(s).map(t=>s[t]),a={...L,...e.classes},u=e[f]||"div",d=h("div");d.className=a.actionbar,b(e.element,d);const l=e.element.content=h("div");return l.contentEditable=!0,l.className=a.content,l.oninput=({target:{firstChild:t}})=>{t&&t.nodeType===3?n(r,`<${u}>`):l.innerHTML==="<br>"&&(l.innerHTML=""),e.onChange(l.innerHTML)},l.onkeydown=t=>{t.key==="Enter"&&k(r)==="blockquote"&&setTimeout(()=>n(r,`<${u}>`),0)},b(e.element,l),i.forEach(t=>{const o=h("button");if(o.className=a.button,o.innerHTML=t.icon,o.title=t.title,o.setAttribute("type","button"),o.onclick=()=>t.result()&&l.focus(),t.state){const m=()=>o.classList[t.state()?"add":"remove"](a.selected);p(l,"keyup",m),p(l,"mouseup",m),p(o,"click",m)}b(d,o)}),e.styleWithCSS&&n("styleWithCSS"),n(f,u),e.element},y={exec:n,init:g};export{y as default,n as exec,g as init};