System.register(["./_rollupPluginBabelHelpers-5ef4d902.js"],(function(){"use strict";var e,t,r,n,o;return{setters:[function(i){e=i.h,t=i.j,r=i.b,n=i.k,o=i.l}],execute:function(){function i(){var e=t([' <section id="show-errror"> <stripe-elements id="should-error" publishable-key="should-error-use-bad-key" show-error></stripe-elements> <mwc-button class="generate" outlined @click="','">Validate</mwc-button> </section> ']);return i=function(){return e},e}function l(){var e=t([' <style>stripe-elements{border-radius:4px}stripe-elements[is-empty]{border:1px solid #663399}stripe-elements[is-complete]{border:1px solid #00f}stripe-elements[has-error]{border:1px solid red}</style> <section id="states"> <stripe-elements publishable-key="dummy-key"></stripe-elements> <mwc-button class="generate" outlined @click="','">Validate</mwc-button> </section> ']);return l=function(){return e},e}function s(){var e=t([' <section id="source"> <stripe-elements id="source-element" publishable-key="dummy-key" @stripe-source="','"></stripe-elements> <mwc-textfield outlined label="Cardholder Name" data-owner-prop="name"></mwc-textfield> <mwc-textfield outlined label="Cardholder Email" data-owner-prop="email"></mwc-textfield> <mwc-textfield outlined label="Cardholder Phone" data-owner-prop="phone"></mwc-textfield> <mwc-button outlined @click="','">Generate Source</mwc-button> </section> ']);return s=function(){return e},e}function a(){var e=t([' <section id="token"> <stripe-elements publishable-key="dummy-key" @stripe-token="','"></stripe-elements> <mwc-button class="generate" outlined @click="','">Generate Token</mwc-button> </section> ']);return a=function(){return e},e}function u(){var e=t([' <mwc-textfield style="width: 100%" outlined label="Publishable Key" value="dummy-key" @change="','"></mwc-textfield> ']);return u=function(){return e},e}function m(){var e=t([' <section id="show-errror"> <stripe-elements id="should-error" publishable-key="should-error-use-bad-key" show-error></stripe-elements> <mwc-button class="generate" outlined @click="','">Validate</mwc-button> </section> ']);return m=function(){return e},e}function d(){var e=t([' <style>stripe-elements{border-radius:4px}stripe-elements[is-empty]{border:1px solid #663399}stripe-elements[is-complete]{border:1px solid #00f}stripe-elements[has-error]{border:1px solid red}</style> <section id="states"> <stripe-elements publishable-key="dummy-key"></stripe-elements> <mwc-button class="generate" outlined @click="','">Validate</mwc-button> </section> ']);return d=function(){return e},e}function p(){var e=t([' <section id="source"> <stripe-elements id="source-element" publishable-key="dummy-key" @stripe-source="','"></stripe-elements> <mwc-textfield outlined label="Cardholder Name" data-owner-prop="name"></mwc-textfield> <mwc-textfield outlined label="Cardholder Email" data-owner-prop="email"></mwc-textfield> <mwc-textfield outlined label="Cardholder Phone" data-owner-prop="phone"></mwc-textfield> <mwc-button outlined @click="','">Generate Source</mwc-button> </section> ']);return p=function(){return e},e}function c(){var e=t([' <section id="token"> <stripe-elements publishable-key="dummy-key" @stripe-token="','"></stripe-elements> <mwc-button class="generate" outlined @click="','">Generate Token</mwc-button> </section> ']);return c=function(){return e},e}function y(){var e=t([' <mwc-textfield style="width: 100%" outlined label="Publishable Key" value="dummy-key" @change="','"></mwc-textfield> ']);return y=function(){return e},e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.errorDisplay=exports.validationStates=exports.generateASource=exports.generateAToken=exports.enterAStripePublishableKey=void 0;var h=require("/home/runner/work/stripe-elements/stripe-elements/node_modules/@open-wc/storybook-prebuilt/dist/preview.js"),b=require("@open-wc/demoing-storybook"),x=require("lit-html");require("@material/mwc-textfield"),require("@material/mwc-button"),require("../src/stripe-elements.js"),require("@power-elements/json-viewer");var w=require("./helpers.js");function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f={},v="wrapper";function S(t){var i=t.components,l=o(t,["components"]);return(0,h.mdx)(v,k({},f,l,{components:i,mdxType:"MDXLayout"}),(0,h.mdx)(b.Meta,{title:"Stripe Elements",mdxType:"Meta"}),(0,h.mdx)("h1",null,"Stripe Elements Web Component"),(0,h.mdx)("p",null,"The ",(0,h.mdx)("inlineCode",{parentName:"p"},"<stripe-elements>")," custom element is an easy way to use stripe.js in your web app.\nTo get started, add the element to your page with the ",(0,h.mdx)("inlineCode",{parentName:"p"},"publishable-key")," attribute set to your\n",(0,h.mdx)("a",k({parentName:"p"},{href:"https://dashboard.stripe.com/account/apikeys"}),"Stripe publishable key"),". You can also set the ",(0,h.mdx)("inlineCode",{parentName:"p"},"publishableKey")," DOM property using JavaScript"),(0,h.mdx)("pre",null,(0,h.mdx)("code",k({parentName:"pre"},{className:"language-html"}),'<stripe-elements publishable-key="my-pk"></stripe-elements>\n')),(0,h.mdx)("pre",null,(0,h.mdx)("code",k({parentName:"pre"},{className:"language-html"}),"<stripe-elements></stripe-elements>\n<script>\n $('stripe-elements').publishableKey = 'my-pk';\n<\/script>\n")),(0,h.mdx)("p",null,(0,h.mdx)("strong",{parentName:"p"},"Careful!")," never add your ",(0,h.mdx)("strong",{parentName:"p"},"secret key")," to an HTML page, only publish your ",(0,h.mdx)("strong",{parentName:"p"},"publishable key"),"."),(0,h.mdx)("p",null,"Once you've set the ",(0,h.mdx)("inlineCode",{parentName:"p"},"publishable-key")," attribute (or the ",(0,h.mdx)("inlineCode",{parentName:"p"},"publishableKey")," DOM property), Stripe will create a Stripe Card Element on your page."),(0,h.mdx)("p",null,"Enter your publishable key here (use the test key, not the production key) to run the examples against your Stripe account."),(0,h.mdx)(b.Preview,{mdxType:"Preview"},(0,h.mdx)(b.Story,{name:"Enter a Stripe Publishable Key",mdxType:"Story"},x.html(y(),w.setPublishableKey))),(0,h.mdx)("h2",null,"Create a Token"),(0,h.mdx)("p",null,"Once you're set your publishable key and Stripe has instantiated (listen for the ",(0,h.mdx)("inlineCode",{parentName:"p"},"stripe-ready")," event if you need to know exactly when this happens),\nyou may generate a token from the filled-out form by calling the ",(0,h.mdx)("inlineCode",{parentName:"p"},"createToken()")," method."),(0,h.mdx)(b.Preview,{withToolbar:!0,mdxType:"Preview"},(0,h.mdx)(b.Story,{name:"Generate a Token",height:"60px",mdxType:"Story"},(function(){var e=(0,w.$)("#token-viewer");return x.html(c(),(function(t){var r=t.detail;return e.object=r}),(function(){return(0,w.$)("#token stripe-elements").createToken()}))}))),(0,h.mdx)("p",null,(0,h.mdx)("json-viewer",{id:"token-viewer"})),(0,h.mdx)("h2",null,"Create a Source"),(0,h.mdx)(b.Preview,{withToolbar:!0,mdxType:"Preview"},(0,h.mdx)(b.Story,{name:"Generate a Source",height:"500px",mdxType:"Story"},(function(){var t=function(){return r((0,w.$)("#source").querySelectorAll("mwc-textfield")).reduce((function(t,r){var o=r.value,i=r.dataset.ownerProp;return e({},t,n({},i,o))}),{})};return x.html(p(),(function(e){var t=e.detail;return(0,w.$)("#source-viewer").object=t}),(function(){return(0,w.$)("#source stripe-elements").createSource({type:"card",owner:t()})}))}))),(0,h.mdx)("p",null,(0,h.mdx)("json-viewer",{id:"source-viewer"})),(0,h.mdx)("h2",null,"Validation"),(0,h.mdx)("p",null,(0,h.mdx)("inlineCode",{parentName:"p"},"<stripe-elements>")," comes with several properties, events, and methods for validation.\nListen for the\n",(0,h.mdx)("inlineCode",{parentName:"p"},"is-complete-changed"),",\n",(0,h.mdx)("inlineCode",{parentName:"p"},"is-empty-changed"),", and\n",(0,h.mdx)("inlineCode",{parentName:"p"},"has-error-changed")," events\nand check the ",(0,h.mdx)("inlineCode",{parentName:"p"},"isComplete"),", ",(0,h.mdx)("inlineCode",{parentName:"p"},"isEmpty"),", and ",(0,h.mdx)("inlineCode",{parentName:"p"},"hasError")," properties to react to validation changes.\nThese properties ",(0,h.mdx)("a",k({parentName:"p"},{href:"https://dev.to/bennypowers/lets-build-web-components-part-5-litelement-906#reflecting-properties-to-attributes"}),"reflect")," to their dash-cased attributes,\nso you can use CSS to style your element in its various states."),(0,h.mdx)("pre",null,(0,h.mdx)("code",k({parentName:"pre"},{className:"language-css"}),"stripe-elements[is-empty] { border: 1px solid rebeccapurple; }\nstripe-elements[is-complete] { border: 1px solid blue; }\nstripe-elements[has-error] { border: 1px solid red; }\n")),(0,h.mdx)(b.Preview,{withToolbar:!0,mdxType:"Preview"},(0,h.mdx)(b.Story,{name:"Validation States",height:"60px",mdxType:"Story"},(function(){return x.html(d(),(function(){return(0,w.$)("#states stripe-elements").validate()}))}))),(0,h.mdx)("h2",null,"Simple Validation"),(0,h.mdx)("p",null,(0,h.mdx)("inlineCode",{parentName:"p"},"<stripe-elements>")," has a ",(0,h.mdx)("inlineCode",{parentName:"p"},"show-error")," boolean attribute which will display the error message for you.\nThis is useful for simple validation in cases where you don't need to build your own validation UI."),(0,h.mdx)(b.Preview,{withToolbar:!0,mdxType:"Preview"},(0,h.mdx)(b.Story,{name:"Error Display",height:"60px",mdxType:"Story"},(function(){return x.html(m(),(function(){return(0,w.$)("#should-error").validate()}))}))),(0,h.mdx)("p",null,"For more complex needs, you can listen for the ",(0,h.mdx)("inlineCode",{parentName:"p"},"stripe-error")," event."),(0,h.mdx)("h2",null,"API"),(0,h.mdx)(b.Props,{of:"stripe-elements",mdxType:"Props"}))}S.isMDXComponent=!0;var g=(0,h.makeStoryFn)(x.html(u(),w.setPublishableKey));exports.enterAStripePublishableKey=g,g.story={},g.story.name="Enter a Stripe Publishable Key",g.story.parameters={mdxSource:'html`\n      <mwc-textfield style="width: 100%" outlined label="Publishable Key" value="dummy-key" @change="${setPublishableKey}"></mwc-textfield>\n    `'};var C=(0,h.makeStoryFn)((function(){var e=(0,w.$)("#token-viewer");return x.html(a(),(function(t){var r=t.detail;return e.object=r}),(function(){return(0,w.$)("#token stripe-elements").createToken()}))}));exports.generateAToken=C,C.story={},C.story.name="Generate a Token",C.story.parameters={mdxSource:'() => {\n  const viewer = $(\'#token-viewer\');\n\n  const onStripeToken = ({\n    detail: token\n  }) => viewer.object = token;\n\n  const onClick = () => $(\'#token stripe-elements\').createToken();\n\n  return html`\n          <section id="token">\n            <stripe-elements publishable-key="dummy-key" @stripe-token="${onStripeToken}"></stripe-elements>\n            <mwc-button class="generate" outlined @click="${onClick}">Generate Token</mwc-button>\n          </section>\n        `;\n}'};var T=(0,h.makeStoryFn)((function(){var t=function(){return r((0,w.$)("#source").querySelectorAll("mwc-textfield")).reduce((function(t,r){var o=r.value,i=r.dataset.ownerProp;return e({},t,n({},i,o))}),{})};return x.html(s(),(function(e){var t=e.detail;return(0,w.$)("#source-viewer").object=t}),(function(){return(0,w.$)("#source stripe-elements").createSource({type:"card",owner:t()})}))}));exports.generateASource=T,T.story={},T.story.name="Generate a Source",T.story.parameters={mdxSource:'() => {\n  const onStripeSource = ({\n    detail: source\n  }) => $(\'#source-viewer\').object = source;\n\n  const getInputs = () => [...$(\'#source\').querySelectorAll(\'mwc-textfield\')];\n\n  const getCardData = () => getInputs().reduce((data, {\n    value,\n    dataset: {\n      ownerProp\n    }\n  }) => ({ ...data,\n    [ownerProp]: value\n  }), {});\n\n  const onClick = () => $(\'#source stripe-elements\').createSource({\n    type: \'card\',\n    owner: getCardData()\n  });\n\n  return html`\n        <section id="source">\n          <stripe-elements id="source-element" publishable-key="dummy-key" @stripe-source="${onStripeSource}"></stripe-elements>\n          <mwc-textfield outlined label="Cardholder Name" data-owner-prop="name"></mwc-textfield>\n          <mwc-textfield outlined label="Cardholder Email" data-owner-prop="email"></mwc-textfield>\n          <mwc-textfield outlined label="Cardholder Phone" data-owner-prop="phone"></mwc-textfield>\n          <mwc-button outlined @click="${onClick}">Generate Source</mwc-button>\n        </section>\n        `;\n}'};var P=(0,h.makeStoryFn)((function(){return x.html(l(),(function(){return(0,w.$)("#states stripe-elements").validate()}))}));exports.validationStates=P,P.story={},P.story.name="Validation States",P.story.parameters={mdxSource:'() => {\n  const onClick = () => $(\'#states stripe-elements\').validate();\n\n  return html`\n      <style>\n        stripe-elements { border-radius: 4px; }\n        stripe-elements[is-empty] { border: 1px solid rebeccapurple; }\n        stripe-elements[is-complete] { border: 1px solid blue; }\n        stripe-elements[has-error] { border: 1px solid red; }\n      </style>\n      <section id="states">\n        <stripe-elements publishable-key="dummy-key"></stripe-elements>\n        <mwc-button class="generate" outlined @click="${onClick}">Validate</mwc-button>\n      </section>\n      `;\n}'};var N=(0,h.makeStoryFn)((function(){return x.html(i(),(function(){return(0,w.$)("#should-error").validate()}))}));exports.errorDisplay=N,N.story={},N.story.name="Error Display",N.story.parameters={mdxSource:'() => {\n  const onClick = () => $(\'#should-error\').validate();\n\n  return html`\n        <section id="show-errror">\n          <stripe-elements id="should-error" publishable-key="should-error-use-bad-key" show-error></stripe-elements>\n          <mwc-button class="generate" outlined @click="${onClick}">Validate</mwc-button>\n        </section>\n        `;\n}'};var $={title:"Stripe Elements",includeStories:["enterAStripePublishableKey","generateAToken","generateASource","validationStates","errorDisplay"]},j={"Enter a Stripe Publishable Key":"stripe-elements--enter-a-stripe-publishable-key","Generate a Token":"stripe-elements--generate-a-token","Generate a Source":"stripe-elements--generate-a-source","Validation States":"stripe-elements--validation-states","Error Display":"stripe-elements--error-display"};$.parameters=$.parameters||{},$.parameters.docs=e({},$.parameters.docs||{},{page:function(){return(0,h.mdx)(h.AddContext,{mdxStoryNameToId:j},(0,h.mdx)(S,null))}});var E=$;exports.default=E}}}));
//# sourceMappingURL=stripe-elements.stories-a3978738.js.map
