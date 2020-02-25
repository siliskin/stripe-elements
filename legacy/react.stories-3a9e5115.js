System.register(["./lit-html-d4bb504d.js","./storybook-deb9934b.js","./lit-element-ba2ebbe8.js","./codesandbox-button-b2b98b59.js"],(function(e){"use strict";var t,n,r,o,s,a,c,u;return{setters:[function(e){t=e.l,n=e.p,r=e.k,o=e.s},function(e){s=e.f,a=e.u,c=e.t,u=e.Y},function(){},function(){}],execute:function(){function i(){var e=r(['<codesandbox-button sandbox-id="0kktv"> </codesandbox-button>']);return i=function(){return e},e}function p(){var e=r(['<codesandbox-button sandbox-id="23zw8"> </codesandbox-button>']);return p=function(){return e},e}function m(){var e=r(['<codesandbox-button sandbox-id="0kktv"> </codesandbox-button>']);return m=function(){return e},e}function l(){var e=r(['<codesandbox-button sandbox-id="23zw8"> </codesandbox-button>']);return l=function(){return e},e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f={};function b(e){var n=e.components,r=o(e,["components"]);return s("wrapper",d({},f,r,{components:n,mdxType:"MDXLayout"}),s(u,{title:"Framework Examples/React",parameters:{options:{selectedPanel:"storybookjs/docs/panel"}},mdxType:"Meta"}),s("h1",null,s("inlineCode",{parentName:"h1"},"<stripe-elements>")),s(c,{name:"stripe-elements",mdxType:"Story"},t(l())),s("pre",null,s("code",d({parentName:"pre"},{className:"language-jsx"}),'import React, { useState, useRef, useEffect } from "react";\nimport ReactDOM from "react-dom";\nimport { getPropOr, compose } from "crocks";\nimport { PUBLISHABLE_KEY } from \'./config\';\nimport "./styles.css";\n\nconst isDisabled = ({ complete, empty }) => !complete || empty;\nconst getTarget = getPropOr({}, "target");\nconst getDetail = getPropOr(null, "detail");\nconst getToken = getPropOr(null, "token");\n\nfunction App() {\n  const stripeRef = useRef(null);\n  const viewerRef = useRef(null);\n  const inputRef = useRef(null);\n  const buttonRef = useRef(null);\n  const [disabled, setDisabled] = useState(true);\n  const [token, setToken] = useState(null);\n  const [error, setError] = useState(null);\n\n  const onChange = compose(setDisabled, isDisabled, getTarget);\n  const onError = compose(setError, getDetail);\n  const onToken = compose(setToken, getToken);\n\n  const onClick = async () =>\n    stripeRef.current.createToken()\n      .then(getToken);\n      .then(setToken);\n\n  useEffect(() => {\n    stripeRef.current.addEventListener("change", onChange);\n    stripeRef.current.addEventListener("error", onError);\n    stripeRef.current.addEventListener("token", onToken);\n    buttonRef.current.addEventListener("click", onClick);\n    buttonRef.current.disabled = disabled;\n    if (token || error) viewerRef.current.object = token;\n  });\n\n  return (\n    <article className="App">\n      <stripe-elements ref={stripeRef} publishable-key={PUBLISHABLE_KEY} />\n      <mwc-button ref={buttonRef}>Submit</mwc-button>\n      <json-viewer ref={viewerRef} />\n    </article>\n  );\n}\n\nReactDOM.render(<App />, document.getElementById("root"));\n')),s("h1",null,s("inlineCode",{parentName:"h1"},"<stripe-payment-request>")),s(c,{name:"stripe-payment-request",mdxType:"Story"},t(m())),s("pre",null,s("code",d({parentName:"pre"},{className:"language-jsx"}),'import React, { useState, useRef, useEffect } from "react";\nimport ReactDOM from "react-dom";\nimport { getPropOr, compose } from "crocks";\nimport { PUBLISHABLE_KEY } from \'./config\';\nimport "./styles.css";\n\nconst getDetail = getPropOr(null, "detail");\nconst getPaymentMethod = getPropOr(null, "paymentMethod");\n\nfunction App() {\n  const stripeRef = useRef(null);\n  const viewerRef = useRef(null);\n  const [paymentMethod, setPaymentMethod] = useState(null);\n  const [error, setError] = useState(null);\n\n  const onError = compose(setError, getDetail);\n  const onPaymentMethod = compose(setPaymentMethod, getPaymentMethod);\n\n  useEffect(() => {\n    stripeRef.current.addEventListener("error", onError);\n    stripeRef.current.addEventListener("payment-method", onPaymentMethod);\n    if (paymentMethod || error) viewerRef.current.object = paymentMethod;\n  });\n\n  return (\n    <article className="App">\n      <stripe-payment-request ref={stripeRef} publishable-key={PUBLISHABLE_KEY}\n        generate="payment-method"\n        request-payer-name\n        request-payer-email\n        request-payer-phone\n        amount="326"\n        label="Double Double"\n        country="CA"\n        currency="cad"\n      />\n      <json-viewer ref={viewerRef} />\n    </article>\n  );\n}\n\nReactDOM.render(<App />, document.getElementById("root"));\n')))}b.isMDXComponent=!0;var y=e("stripeElements",(function(){return t(p())}));y.story={},y.story.name="stripe-elements",y.story.parameters={mdxSource:'html`<codesandbox-button sandbox-id="23zw8"> </codesandbox-button>`'};var R=e("stripePaymentRequest",(function(){return t(i())}));R.story={},R.story.name="stripe-payment-request",R.story.parameters={mdxSource:'html`<codesandbox-button sandbox-id="0kktv"> </codesandbox-button>`'};var g={title:"Framework Examples/React",parameters:{options:{selectedPanel:"storybookjs/docs/panel"}},includeStories:["stripeElements","stripePaymentRequest"]},E={"stripe-elements":"stripeElements","stripe-payment-request":"stripePaymentRequest"};g.parameters=g.parameters||{},g.parameters.docs=n({},g.parameters.docs||{},{page:function(){return s(a,{mdxStoryNameToKey:E,mdxComponentMeta:g},s(b,null))}}),e("default",g);e("__namedExportsOrder",["stripeElements","stripePaymentRequest"])}}}));
//# sourceMappingURL=react.stories-3a9e5115.js.map