webpackJsonp([0],[,,function(e,t,n){var o,a;o=n(44);var r=n(62);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),"undefined"==typeof a.name&&(a.name="SubmitButton"),a.render=r.render,a.staticRenderFns=r.staticRenderFns,e.exports=o},function(e,t,n){var o,a;o=n(46);var r=n(74);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),"undefined"==typeof a.name&&(a.name="TextField"),a.render=r.render,a.staticRenderFns=r.staticRenderFns,e.exports=o},,,,,,,,function(e,t,n){"use strict";var o=n(1),a=n.n(o),r=n(47),s=n.n(r),i=n(32),l=n(29),c=n(6);n.n(c);n.d(t,"a",function(){return u});var d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};n.i(c.sync)(i.a,l.a);var u=new a.a(d({router:l.a,store:i.a},s.a))},,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";(function(e){var o=n(1),a=n.n(o),r=n(52),s=n.n(r),i=n(57),l=n.n(i),c=n(58),d=n.n(c),u=n(5),f=n.n(u);a.a.use(f.a);var p=new f.a({mode:"history",base:e,routes:[{path:"/",component:s.a},{path:"/register",component:l.a},{path:"/style-guide",component:d.a}]});t.a=p}).call(t,"/")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),a=n.n(o);n.d(t,"getTopics",function(){return r}),n.d(t,"increment",function(){return s}),n.d(t,"decrement",function(){return i}),a.a.defaults.baseURL="http://jsonplaceholder.typicode.com/";var r=function(e){var t=e.commit;e.state;return a.a.get("posts").then(function(e){"OK"===e.statusText&&t("TOPICS_LIST",e.data)}).catch(function(e){console.log(e)})},s=function(e){var t=e.commit;return t("INCREMENT")},i=function(e){var t=e.commit;return t("DECREMENT")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"getTopics",function(){return o}),n.d(t,"getCount",function(){return a});var o=function(e){return e.topics},a=function(e){return e.count}},function(e,t,n){"use strict";var o=n(1),a=n.n(o),r=n(7),s=n.n(r),i=n(30),l=n(31);a.a.use(s.a);var c={topics:[],count:0},d="undefined"!=typeof window,u=d&&window.__INITIAL_STATE__||c,f={TOPICS_LIST:function(e,t){e.topics=t},INCREMENT:function(e){e.count++},DECREMENT:function(e){e.count--}};t.a=new s.a.Store({state:u,actions:i,mutations:f,getters:l})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"checkbox-field",props:["id","label","type","placeholder","value"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"choice-list",props:["choices"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"dropdown-field",props:["id","label","options"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),a=n.n(o),r=n(2),s=n.n(r);t.default={name:"login-form",components:{TextField:a.a,SubmitButton:s.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(51),a=n.n(o);t.default={name:"login-page",components:{LoginForm:a.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"object-list",props:["objects"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"primary-button",props:["text"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"dropdown-field",props:["id","label","options"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),a=n.n(o),r=n(2),s=n.n(r);t.default={name:"register-form",components:{TextField:a.a,SubmitButton:s.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(56),a=n.n(o);t.default={name:"register-page",components:{RegisterForm:a.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(48),a=n.n(o),r=n(49),s=n.n(r),i=n(50),l=n.n(i),c=n(53),d=n.n(c),u=n(54),f=n.n(u),p=n(55),_=n.n(p),b=n(2),v=n.n(b),m=n(59),h=n.n(m),y=n(3),x=n.n(y);"undefined"!=typeof document&&document.addEventListener("DOMContentLoaded",function(e){var t,n=document.querySelectorAll(".component-js"),o={button:'<primary-button text="Button"></primary-button>',submit_button:'<submit-button text="Submit"></submit-button>',text_field:'<text-field id="example_text_field" label="Text Field" placeholder="Placeholder"></text-field>',textarea_field:'<textarea-field id="example_textarea_field" label="Text Area" placeholder="Placeholder"></textarea-field>',checkbox_field:'<checkbox-field id="example_checkbox" label="Checkbox" value="Checkbox"></checkbox-field>',radio_button_field:'<radio-button-field id="example_radio_button" label="Radio Buttons" options="radioButtonOptions"></radio-button-field>',dropdown_field:'<dropdown-field id="example_dropdown" label="Dropdown" options="dropdownOptions"></dropdown-field>',object_list:'<object-list objects="objectListObjects"></object-list>',choice_list:'<choice-list objects="choiceListObjects"></choice-list>'};for(t=0;t<n.length;t++)n[t].innerText=o[n[t].getAttribute("id")]}),t.default={name:"styleguide",data:function(){return{radioButtonOptions:[{label:"Option 1",value:"option_1"},{label:"Option 2",value:"option_2"}],dropdownOptions:[{value:"",label:"Select a value"},{value:"one",label:"A value"},{value:"two",label:"Another value"}],objectListObjects:[{link:"#",label:"One thing"},{link:"#",label:"Another thing"},{link:"#",label:"The best thing"}]}},components:{CheckboxField:a.a,ChoiceList:s.a,DropdownField:l.a,ObjectList:d.a,PrimaryButton:f.a,RadioButtonField:_.a,SubmitButton:v.a,TextAreaField:h.a,TextField:x.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"submit-button",props:["text"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"textarea-field",props:["id","label","type","placeholder","value"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"text-field",props:["id","label","type","placeholder","value"]}},function(e,t,n){var o,a,r=n(72);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),"undefined"==typeof a.name&&(a.name="App"),a.render=r.render,a.staticRenderFns=r.staticRenderFns,e.exports=o},function(e,t,n){var o,a;o=n(33);var r=n(65);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),"undefined"==typeof a.name&&(a.name="CheckboxField"),a.render=r.render,a.staticRenderFns=r.staticRenderFns,e.exports=o},function(e,t,n){var o,a;o=n(34);var r=n(63);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),"undefined"==typeof a.name&&(a.name="ChoiceList"),a.render=r.render,a.staticRenderFns=r.staticRenderFns,e.exports=o},function(e,t,n){var o,a;o=n(35);var r=n(68);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),"undefined"==typeof a.name&&(a.name="DropdownField"),a.render=r.render,a.staticRenderFns=r.staticRenderFns,e.exports=o},function(e,t,n){var o,a;o=n(36);var r=n(60);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),"undefined"==typeof a.name&&(a.name="LoginForm"),a.render=r.render,a.staticRenderFns=r.staticRenderFns,e.exports=o},function(e,t,n){var o,a;o=n(37);var r=n(61);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),"undefined"==typeof a.name&&(a.name="LoginPage"),a.render=r.render,a.staticRenderFns=r.staticRenderFns,e.exports=o},function(e,t,n){var o,a;o=n(38);var r=n(73);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),"undefined"==typeof a.name&&(a.name="ObjectList"),a.render=r.render,a.staticRenderFns=r.staticRenderFns,e.exports=o},function(e,t,n){var o,a;o=n(39);var r=n(66);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),"undefined"==typeof a.name&&(a.name="PrimaryButton"),a.render=r.render,a.staticRenderFns=r.staticRenderFns,e.exports=o},function(e,t,n){var o,a;o=n(40);var r=n(71);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),"undefined"==typeof a.name&&(a.name="RadioButtonField"),a.render=r.render,a.staticRenderFns=r.staticRenderFns,e.exports=o},function(e,t,n){var o,a;o=n(41);var r=n(70);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),"undefined"==typeof a.name&&(a.name="RegisterForm"),a.render=r.render,a.staticRenderFns=r.staticRenderFns,e.exports=o},function(e,t,n){var o,a;o=n(42);var r=n(67);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),"undefined"==typeof a.name&&(a.name="RegisterPage"),a.render=r.render,a.staticRenderFns=r.staticRenderFns,e.exports=o},function(e,t,n){var o,a;o=n(43);var r=n(69);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),"undefined"==typeof a.name&&(a.name="StyleGuide"),a.render=r.render,a.staticRenderFns=r.staticRenderFns,e.exports=o},function(e,t,n){var o,a;o=n(45);var r=n(64);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),"undefined"==typeof a.name&&(a.name="TextAreaField"),a.render=r.render,a.staticRenderFns=r.staticRenderFns,e.exports=o},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"hxb-form",attrs:{name:"login",method:"post",action:"/login"}},[n("text-field",{attrs:{id:"username",type:"text",placeholder:"username"}}),e._v(" "),n("text-field",{attrs:{id:"password",type:"password",placeholder:"password"}}),e._v(" "),n("submit-button",{attrs:{text:"Login"}}),e._v(" "),n("router-link",{attrs:{to:"/register",exact:""}},[e._v("or Register")])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("h1",{staticClass:"hxb-u-txt-center"},[e._v("Hexelberry Orchard")]),e._v(" "),n("login-form")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"hxb-button",attrs:{type:"submit"}},[e._v(e._s(e.text))])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"hxb-choice-list"},e._l(e.choices,function(t){return n("li",{staticClass:"hxb-choice-list-item"},[n("a",{staticClass:"hxb-choice-list-item__link",attrs:{href:t.link}},[n("span",[e._v(e._s(t.label))])])])}))},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hxb-form-field"},[n("label",{staticClass:"hxb-u-display-block",attrs:{for:e.id}},[e._v(e._s(e.label))]),e._v(" "),n("textarea",{staticClass:"hxb-input-field",attrs:{id:e.id,name:e.id,placeholder:e.placeholder,rows:"10",cols:"50"}},[e._v(e._s(e.value))])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hxb-form-field"},[n("input",{staticClass:"hxb-checkbox",attrs:{id:e.id,type:"checkbox",name:e.id},domProps:{value:e.value}}),e._v(" "),n("label",{staticClass:"hxb-checkbox-label",attrs:{for:e.id}},[e._v("\n    "+e._s(e.label)+"\n  ")])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"hxb-button",attrs:{type:"button"}},[e._v(e._s(e.text))])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("h1",{staticClass:"hxb-u-txt-center"},[e._v("Hexelberry Orchard")]),e._v(" "),n("register-form")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hxb-form-field"},[n("label",{staticClass:"hxb-u-display-block",attrs:{for:e.id}},[e._v(e._s(e.label))]),e._v(" "),n("select",{staticClass:"hxb-dropdown",attrs:{id:e.id}},e._l(e.options,function(t){return n("option",{domProps:{value:t.value}},[e._v("option.label")])}))])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Style Guide")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),n("article",[e._m(2),e._v(" "),n("section",{attrs:{id:"button_doc"}},[n("div",[n("primary-button",{attrs:{text:"Button"}})],1),e._v(" "),n("code",{staticClass:"component-js",attrs:{id:"button"}})]),e._v(" "),n("section",{attrs:{id:"submit_button_doc"}},[n("div",[n("submit-button",{attrs:{text:"Submit"}})],1),e._v(" "),n("code",{staticClass:"component-js",attrs:{id:"submit_button"}})])]),e._v(" "),n("article",[e._m(3),e._v(" "),n("section",{attrs:{id:"text_field_doc"}},[n("text-field",{attrs:{id:"example_text_field",label:"Text Field",placeholder:"Placeholder"}}),e._v(" "),n("p",[e._v("\n        The type argument allows you to use the text field template for emails, passwords, telephone numbers, etc.\n      ")]),e._v(" "),n("code",{staticClass:"component-js",attrs:{id:"text_field"}})],1),e._v(" "),n("section",{attrs:{id:"textarea_doc"}},[n("textarea-field",{attrs:{id:"example_textarea_field",label:"Text Area",placeholder:"Placeholder"}}),e._v(" "),n("code",{staticClass:"component-js",attrs:{id:"textarea_field"}})],1),e._v(" "),n("section",{attrs:{id:"checkbox_doc"}},[n("checkbox-field",{attrs:{id:"example_checkbox",label:"Checkbox",value:"Checkbox"}}),e._v(" "),n("code",{staticClass:"component-js",attrs:{id:"checkbox_field"}})],1),e._v(" "),n("section",{attrs:{id:"radio_button_doc"}},[n("radio-button-field",{attrs:{id:"example_radio_button",label:"Radio Buttons",options:"radioButtonOptions"}}),e._v(" "),n("code",{staticClass:"component-js",attrs:{id:"radio_button_field"}})],1)]),e._v(" "),n("article",[e._m(4),e._v(" "),n("section",{attrs:{id:"dropdown_field_doc"}},[n("dropdown-field",{attrs:{id:"example_dropdown",label:"Dropdown",options:"dropdownOptions"}}),e._v(" "),n("code",{staticClass:"component-js",attrs:{id:"dropdown_field"}})],1)]),e._v(" "),n("article",[e._m(5),e._v(" "),n("section",{attrs:{id:"object_list_doc"}},[n("div",[n("object-list",{attrs:{objects:"objectListObjects"}})],1),e._v(" "),n("code",{staticClass:"component-js",attrs:{id:"object_list"}})]),e._v(" "),n("section",{attrs:{id:"choice_list_doc"}},[n("div",[n("choice-list",{attrs:{objects:"objectListObjects"}})],1),e._v(" "),n("code",{staticClass:"component-js",attrs:{id:"choice_list"}})])]),e._v(" "),e._m(6)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("header",[n("h2",{attrs:{id:"colors"}},[e._v("Colors")])]),e._v(" "),n("section",[n("ul",{attrs:{id:"color-cards"}},[n("li",{attrs:{"aria-label":"The black color display, followed by the CSS classes that enable the use of the black color"}},[n("span",{staticStyle:{"background-color":"var(--black-color)"}}),e._v(" "),n("span",[e._v("var(--black-color)")])]),e._v(" "),n("li",{attrs:{"aria-label":"The dark color display, followed by the CSS classes that enable the use of the dark color"}},[n("span",{staticStyle:{"background-color":"var(--dark-color)"}}),e._v(" "),n("span",[e._v("var(--dark-color)")])]),e._v(" "),n("li",{attrs:{"aria-label":"The medium color display, followed by the CSS classes that enable the use of the medium color"}},[n("span",{staticStyle:{"background-color":"var(--med-color)"}}),e._v(" "),n("span",[e._v("var(--med-color)")])]),e._v(" "),n("li",{attrs:{"aria-label":"The gray color display, followed by the CSS classes that enable the use of the gray color"}},[n("span",{staticStyle:{"background-color":"var(--gray-color)"}}),e._v(" "),n("span",[e._v("var(--gray-color)")])]),e._v(" "),n("li",{attrs:{"aria-label":"The light color display, followed by the CSS classes that enable the use of the light color"}},[n("span",{staticStyle:{"background-color":"var(--light-color)"}}),e._v(" "),n("span",[e._v("var(--light-color)")])]),e._v(" "),n("li",{attrs:{"aria-label":"The very light color display, followed by the CSS classes that enable the use of the very light color"}},[n("span",{staticStyle:{"background-color":"var(--v-light-color)"}}),e._v(" "),n("span",[e._v("var(--v-light-color)")])])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("header",[n("h2",{attrs:{id:"typography"}},[e._v("Typography")])]),e._v(" "),n("section",[n("p",[e._v("Using default system fonts.")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h2",{attrs:{id:"buttons"}},[e._v("Buttons")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h2",{attrs:{id:"forms"}},[e._v("Forms")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h2",{attrs:{id:"dropdown_field"}},[e._v("Dropdowns")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h2",{attrs:{id:"lists"}},[e._v("Lists")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("header",[n("h2",{attrs:{id:""}})]),e._v(" "),n("section",{attrs:{id:""}},[n("div"),e._v(" "),n("code",{staticClass:"component-js",attrs:{id:""}})])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"hxb-form",attrs:{name:"register",method:"post",action:"/register"}},[n("text-field",{attrs:{id:"username",type:"text",placeholder:"username"}}),e._v(" "),n("text-field",{attrs:{id:"password",type:"password",placeholder:"password"}}),e._v(" "),n("submit-button",{attrs:{text:"Register"}})],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fieldset",{staticClass:"hxb-fieldset"},[n("legend",[e._v(e._s(e.label))]),e._v(" "),e._l(e.options,function(t,o){return n("input",{staticClass:"hxb-radio-button",attrs:{id:e.id+"_"+o,type:"radio",name:e.id},domProps:{value:t.value}})}),e._v(" "),e._l(e.options,function(t,o){return n("label",{staticClass:"hxb-radio-button-label",attrs:{for:e.id+"_"+o}},[e._v("\n    "+e._s(t.value)+"\n  ")])})],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{attrs:{id:"app"}},[n("router-view",{staticClass:"view"})],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"hxb-object-list"},e._l(e.objects,function(t){return n("li",{staticClass:"hxb-object-list-item"},[n("a",{staticClass:"hxb-object-list-item__link",attrs:{href:"object.link"}},[n("span",[e._v(e._s(t.label))]),e._v(" "),n("span",{staticClass:"hxb-object-list-item__arrow"},[e._v("⇢")])])])}))},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hxb-form-field"},[n("label",{staticClass:"hxb-u-display-block",attrs:{for:e.id}},[e._v(e._s(e.label))]),e._v(" "),n("input",{staticClass:"hxb-input-field hxb-u-border hxb-gray-border-color",attrs:{id:e.id,type:e.type,name:e.id,placeholder:e.placeholder},domProps:{value:e.value}})])},staticRenderFns:[]}},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(11);o.a.$mount("#app")}],[77]);