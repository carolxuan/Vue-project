(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50215691"],{dc0d:function(t,e,c){"use strict";c.r(e);var o=c("7a23"),i=Object(o["i"])("h3",{class:"fw-bold"},[Object(o["i"])("i",{class:"bi bi-list-ul"}),Object(o["h"])(" 商品列表")],-1),l={class:"text-end"},a={class:"overflow-wrap mb-6"},n={class:"table-css mt-4"},r=Object(o["i"])("thead",null,[Object(o["i"])("tr",null,[Object(o["i"])("th",null,"分類"),Object(o["i"])("th",null,"產品名稱"),Object(o["i"])("th",null,"原價"),Object(o["i"])("th",null,"售價"),Object(o["i"])("th",null,"是否啟用"),Object(o["i"])("th",null,"編輯")])],-1),s={class:"text-right"},d={class:"text-right"},u={key:0,class:"text-primary"},p={key:1,class:"text-muted"},b={class:"btn-group"};function m(t,e,c,m,j,O){var f=Object(o["D"])("Pagination"),h=Object(o["D"])("ProductModal"),v=Object(o["D"])("DelModal");return Object(o["w"])(),Object(o["e"])(o["a"],null,[i,Object(o["i"])("div",l,[Object(o["i"])("button",{class:"l-btn btn--primary btn--md",type:"button",onClick:e[1]||(e[1]=function(t){return O.openModal(!0)})},"增加一個產品")]),Object(o["i"])("div",a,[Object(o["i"])("table",n,[r,Object(o["i"])("tbody",null,[(Object(o["w"])(!0),Object(o["e"])(o["a"],null,Object(o["B"])(j.products,(function(e){return Object(o["w"])(),Object(o["e"])("tr",{key:e.id},[Object(o["i"])("td",null,Object(o["G"])(e.category),1),Object(o["i"])("td",null,Object(o["G"])(e.title),1),Object(o["i"])("td",s,Object(o["G"])(t.$filters.currency(e.origin_price)),1),Object(o["i"])("td",d,Object(o["G"])(t.$filters.currency(e.price)),1),Object(o["i"])("td",null,[e.is_enabled?(Object(o["w"])(),Object(o["e"])("span",u,"啟用")):(Object(o["w"])(),Object(o["e"])("span",p,"未啟用"))]),Object(o["i"])("td",null,[Object(o["i"])("div",b,[Object(o["i"])("button",{class:"l-btn btn--primary btn-sm",onClick:function(t){return O.openModal(!1,e)}},"編輯",8,["onClick"]),Object(o["i"])("button",{class:"l-btn btn--secondary btn-sm",onClick:function(t){return O.openDelModal(e)}},"刪除",8,["onClick"])])])])})),128))])])]),Object(o["i"])(f,{pages:j.pagination,onEmitPage:O.getProducts},null,8,["pages","onEmitPage"]),Object(o["i"])(h,{ref:"productModal",product:j.tempProduct,onUpdateProduct:O.updateProduct},null,8,["product","onUpdateProduct"]),Object(o["i"])(v,{ref:"delModal",item:j.tempProduct,onDelItem:O.delProduct},null,8,["item","onDelItem"])],64)}var j=c("5530"),O=(c("99af"),c("a4d3"),c("e01a"),{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),f={class:"modal-dialog modal-xl",role:"document"},h={class:"modal-content border-0"},v=Object(o["i"])("div",{class:"modal-header bg-primary text-white"},[Object(o["i"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(o["i"])("span",null,"新增產品")]),Object(o["i"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),g={class:"modal-body"},P={class:"row"},y={class:"col-sm-4"},x={class:"mb-3"},w=Object(o["i"])("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),M={class:"mb-3"},$=Object(o["i"])("label",{for:"customFile",class:"form-label"},[Object(o["h"])("或 上傳圖片 "),Object(o["i"])("i",{class:"fas fa-spinner fa-spin"})],-1),k={class:"col-sm-8"},U={class:"mb-3"},L=Object(o["i"])("label",{for:"title",class:"form-label"},"標題",-1),_={class:"row gx-2"},D={class:"mb-3 col-md-6"},S=Object(o["i"])("label",{for:"category",class:"form-label"},"分類",-1),Q={class:"mb-3 col-md-6"},V=Object(o["i"])("label",{for:"price",class:"form-label"},"單位",-1),C={class:"row gx-2"},F={class:"mb-3 col-md-6"},I=Object(o["i"])("label",{for:"origin_price",class:"form-label"},"原價",-1),G={class:"mb-3 col-md-6"},J=Object(o["i"])("label",{for:"price",class:"form-label"},"售價",-1),N=Object(o["i"])("hr",null,null,-1),E={class:"mb-3"},B=Object(o["i"])("label",{for:"description",class:"form-label"},"產品描述",-1),q={class:"mb-3"},z=Object(o["i"])("label",{for:"content",class:"form-label"},"說明內容",-1),A={class:"mb-3"},H={class:"form-check"},K=Object(o["i"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),R={class:"modal-footer"},T=Object(o["i"])("button",{type:"button",class:"l-btn btn--secondary btn--md me-3","data-bs-dismiss":"modal"},"取消 ",-1);function W(t,e,c,i,l,a){return Object(o["w"])(),Object(o["e"])("div",O,[Object(o["i"])("div",f,[Object(o["i"])("div",h,[v,Object(o["i"])("div",g,[Object(o["i"])("div",P,[Object(o["i"])("div",y,[Object(o["i"])("div",x,[w,Object(o["Q"])(Object(o["i"])("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":e[1]||(e[1]=function(t){return l.tempProduct.imageUrl=t}),placeholder:"請輸入圖片連結"},null,512),[[o["L"],l.tempProduct.imageUrl]])]),Object(o["i"])("div",M,[$,Object(o["i"])("input",{type:"file",id:"customFile",class:"form-control",onChange:e[2]||(e[2]=function(){return a.uploadFile&&a.uploadFile.apply(a,arguments)}),ref:"fileInput"},null,544)]),Object(o["i"])("img",{src:l.tempProduct.imageUrl,class:"img-fluid",alt:""},null,8,["src"])]),Object(o["i"])("div",k,[Object(o["i"])("div",U,[L,Object(o["Q"])(Object(o["i"])("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":e[3]||(e[3]=function(t){return l.tempProduct.title=t})},null,512),[[o["L"],l.tempProduct.title]])]),Object(o["i"])("div",_,[Object(o["i"])("div",D,[S,Object(o["Q"])(Object(o["i"])("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":e[4]||(e[4]=function(t){return l.tempProduct.category=t})},null,512),[[o["L"],l.tempProduct.category]])]),Object(o["i"])("div",Q,[V,Object(o["Q"])(Object(o["i"])("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":e[5]||(e[5]=function(t){return l.tempProduct.unit=t})},null,512),[[o["L"],l.tempProduct.unit]])])]),Object(o["i"])("div",C,[Object(o["i"])("div",F,[I,Object(o["Q"])(Object(o["i"])("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":e[6]||(e[6]=function(t){return l.tempProduct.origin_price=t})},null,512),[[o["L"],l.tempProduct.origin_price]])]),Object(o["i"])("div",G,[J,Object(o["Q"])(Object(o["i"])("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":e[7]||(e[7]=function(t){return l.tempProduct.price=t})},null,512),[[o["L"],l.tempProduct.price]])])]),N,Object(o["i"])("div",E,[B,Object(o["Q"])(Object(o["i"])("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":e[8]||(e[8]=function(t){return l.tempProduct.description=t})},null,512),[[o["L"],l.tempProduct.description]])]),Object(o["i"])("div",q,[z,Object(o["Q"])(Object(o["i"])("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[9]||(e[9]=function(t){return l.tempProduct.content=t})},null,512),[[o["L"],l.tempProduct.content]])]),Object(o["i"])("div",A,[Object(o["i"])("div",H,[Object(o["Q"])(Object(o["i"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[10]||(e[10]=function(t){return l.tempProduct.is_enabled=t}),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[o["J"],l.tempProduct.is_enabled]]),K])])])])]),Object(o["i"])("div",R,[T,Object(o["i"])("button",{type:"button",class:"l-btn btn--primary btn--md",onClick:e[11]||(e[11]=function(e){return t.$emit("update-product",l.tempProduct)})},"確認")])])])],512)}var X=c("e0ae"),Y={props:{product:{type:Object,default:function(){return{}}}},watch:{product:function(){this.tempProduct=this.product}},data:function(){return{modal:{},tempProduct:{}}},methods:{uploadFile:function(){var t=this,e=this.$refs.fileInput.files[0],c=new FormData;c.append("file-to-upload",e);var o="".concat("https://vue3-course-api.hexschool.io","/api/").concat("best777","/admin/upload");this.$http.post(o,c).then((function(e){e.data.success&&(t.tempProduct.imageUrl=e.data.imageUrl)}))}},emits:["update-product"],mixins:[X["a"]]};Y.render=W;var Z=Y,tt=c("6ff1"),et=c("1799"),ct={data:function(){return{products:[],pagination:{},tempProduct:{},isNew:!1}},components:{ProductModal:Z,DelModal:tt["a"],Pagination:et["a"]},inject:["emitter"],methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("best777","/admin/products/?page=").concat(e);this.$store.dispatch("updateLoading",!0),this.$http.get(c).then((function(e){e.data.success&&(t.products=e.data.products,t.pagination=e.data.pagination),t.$store.dispatch("updateLoading",!1)}))},openModal:function(t,e){this.tempProduct=t?{}:Object(j["a"])({},e),this.isNew=t;var c=this.$refs.productModal;c.showModal()},updateProduct:function(t){var e=this;this.tempProduct=t,this.tempProduct.origin_price=parseInt(this.tempProduct.origin_price),this.tempProduct.price=parseInt(this.tempProduct.price);var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("best777","/admin/product"),o="post";this.isNew||(c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("best777","/admin/product/").concat(t.id),o="put");var i=this.$refs.productModal;this.$http[o](c,{data:this.tempProduct}).then((function(t){i.hideModal(),t.data.success?(e.getProducts(),e.$httpMsgState(t,"更新產品")):e.$httpMsgState(t,"更新產品")}))},openDelModal:function(t){this.tempProduct=t;var e=this.$refs.delModal;e.showModal()},delProduct:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("best777","/admin/product/").concat(this.tempProduct.id);this.$store.dispatch("updateLoading",!0),this.$http.delete(e).then((function(e){var c=t.$refs.delModal;c.hideModal(),t.getProducts(),t.$store.dispatch("updateLoading",!1),t.$httpMsgState(e,"刪除產品")}))}},created:function(){this.getProducts()}};ct.render=m;e["default"]=ct},e01a:function(t,e,c){"use strict";var o=c("23e7"),i=c("83ab"),l=c("da84"),a=c("5135"),n=c("861d"),r=c("9bf2").f,s=c("e893"),d=l.Symbol;if(i&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new d(t):void 0===t?d():d(t);return""===t&&(u[e]=!0),e};s(p,d);var b=p.prototype=d.prototype;b.constructor=p;var m=b.toString,j="Symbol(test)"==String(d("test")),O=/^Symbol\((.*)\)[^)]+$/;r(b,"description",{configurable:!0,get:function(){var t=n(this)?this.valueOf():this,e=m.call(t);if(a(u,t))return"";var c=j?e.slice(7,-1):e.replace(O,"$1");return""===c?void 0:c}}),o({global:!0,forced:!0},{Symbol:p})}}}]);
//# sourceMappingURL=chunk-50215691.90226519.js.map