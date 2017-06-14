webpackJsonp([39],{1090:function(t,_,v){"use strict";Object.defineProperty(_,"__esModule",{value:!0}),_.default={data:function(){return{}}}},1338:function(t,_,v){t.exports={render:function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("div",{staticClass:"doc"},[v("h2",[t._v("AutoComplete 模糊匹配")]),t._v(" "),v("h3",[t._v("基本用法")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),v("example",{attrs:{demo:"dataplugins/autocomplete1"}}),t._v(" "),v("h3",[t._v("disabled")]),t._v(" "),v("example",{attrs:{demo:"dataplugins/autocomplete2"}}),t._v(" "),v("h3",[t._v("多选")]),t._v(" "),v("example",{attrs:{demo:"dataplugins/autocomplete3"}}),t._v(" "),v("h3",[t._v("远程")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),v("example",{attrs:{demo:"dataplugins/autocomplete4"}}),t._v(" "),v("h3",[t._v("远程多选")]),t._v(" "),v("example",{attrs:{demo:"dataplugins/autocomplete5"}}),t._v(" "),v("h3",[t._v("自定义数据结构")]),t._v(" "),v("example",{attrs:{demo:"dataplugins/autocomplete11"}}),t._v(" "),v("h3",[t._v("自定义列表展示内容")]),t._v(" "),v("example",{attrs:{demo:"dataplugins/autocomplete6"}}),t._v(" "),v("h3",[t._v("选择对象")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),v("example",{attrs:{demo:"dataplugins/autocomplete7"}}),t._v(" "),v("h3",[t._v("选择对象多选")]),t._v(" "),v("example",{attrs:{demo:"dataplugins/autocomplete8"}}),t._v(" "),v("h3",[t._v("可以任意输入")]),t._v(" "),v("example",{attrs:{demo:"dataplugins/autocomplete9"}}),t._v(" "),v("h3",[t._v("可以任意输入对象")]),t._v(" "),v("example",{attrs:{demo:"dataplugins/autocomplete10"}}),t._v(" "),v("h3",[t._v("可以任意输入对象多选")]),t._v(" "),v("example",{attrs:{demo:"dataplugins/autocomplete12"}}),t._v(" "),v("h3",[t._v("全局配置")]),t._v(" "),v("example",{attrs:{demo:"dataplugins/autocomplete13"}}),t._v(" "),v("h3",[t._v("AutoComplete 参数")]),t._v(" "),t._m(6),t._v(" "),v("h3",[t._v("option 配置")]),t._v(" "),t._m(7)],1)},staticRenderFns:[function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[t._v("可以使用"),v("code",[t._v("dict")]),t._v("调用系统全局配置的字典，或者通过"),v("code",[t._v("datas")]),t._v("传递数据。")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[t._v("可以通过全局配置"),v("code",[t._v("autocomplete.default")]),t._v("参数设置控件默认的参数值。")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[t._v("通过"),v("code",[t._v("options")]),t._v("的"),v("code",[t._v("loadData")]),t._v("方法执行远程数据查询，执行完毕后调用"),v("code",[t._v("callback")]),t._v("方法返回数据。")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[t._v("下面的用例"),v("code",[t._v("value")]),t._v("使用的是非对象的数据结构，这样的控件在初始化的时候请使用"),v("code",[t._v("show")]),t._v("属性来定义展示的内容。")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[t._v("在实际开发中，autocomplete常常用于选择有"),v("code",[t._v("id")]),t._v("的对象，我们可以使用"),v("code",[t._v("v-model")]),t._v("定义绑定的key，利用属性"),v("code",[t._v("show")]),t._v("来定义展示的内容，这是一种方式，但是我们更建议使用对象模式的"),v("code",[t._v("autocomplete")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[t._v("下面的用例是"),v("code",[t._v("value")]),t._v("使用的是对象的数据结构，这样的控件可以通过初始化的数据直接获得展示的内容。")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("table",{staticClass:"table"},[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("可选值")]),t._v(" "),v("th",[t._v("默认值")])]),t._v(" "),v("tr",[v("td",[t._v("disabled")]),t._v(" "),v("td",[t._v("是否禁用")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("type")]),t._v(" "),v("td",[t._v("类型")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("key, object, title")]),t._v(" "),v("td",[t._v("key")])]),t._v(" "),v("tr",[v("td",[t._v("option")]),t._v(" "),v("td",[t._v("配置项，详细参见下面的option说明")]),t._v(" "),v("td",[t._v("Object")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("multiple")]),t._v(" "),v("td",[t._v("多选")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("mustMatch")]),t._v(" "),v("td",[t._v("是否必须是选择的项")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("true")])]),t._v(" "),v("tr",[v("td",[t._v("datas")]),t._v(" "),v("td",[t._v("选择的数据")]),t._v(" "),v("td",[t._v("Array, Object")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("dict")]),t._v(" "),v("td",[t._v("调用全局定义的字典")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("placeholder")]),t._v(" "),v("td",[t._v("展示默认提示语")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("请选择")])]),t._v(" "),v("tr",[v("td",[t._v("show")]),t._v(" "),v("td",[t._v("默认展示的文字")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("emptyContent")]),t._v(" "),v("td",[t._v("默认没有搜索到值的时候的提示语")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("未搜索到相关数据")])]),t._v(" "),v("tr",[v("td",[t._v("config")]),t._v(" "),v("td",[t._v("使用全局配置的方法")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")])])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("table",{staticClass:"table"},[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("可选值")]),t._v(" "),v("th",[t._v("默认值")])]),t._v(" "),v("tr",[v("td",[t._v("key")]),t._v(" "),v("td",[t._v("数据的key对应字段")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("全局配置"),v("code",[t._v("autocomplete.default.key")])])]),t._v(" "),v("tr",[v("td",[t._v("title")]),t._v(" "),v("td",[t._v("数据的title对应字段")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("全局配置"),v("code",[t._v("autocomplete.default.title")])])]),t._v(" "),v("tr",[v("td",[t._v("getValue")]),t._v(" "),v("td",[t._v("通过数据定义出标准的输出格式")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("minWord")]),t._v(" "),v("td",[t._v("开始查询的最低单词数量")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("0")])]),t._v(" "),v("tr",[v("td",[t._v("loadData")]),t._v(" "),v("td",[t._v("异步获取数据的方法")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")])])])}]},t.exports.render._withStripped=!0},844:function(t,_,v){var e=v(1)(v(1090),v(1338),null,null);e.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/component/data/plugin/autocomplete.vue",e.esModule&&Object.keys(e.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),e.options.functional&&console.error("[vue-loader] autocomplete.vue: functional components are not supported with templates, they should use render functions."),t.exports=e.exports}});