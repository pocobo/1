var m=(g,d,t)=>new Promise((f,c)=>{var b=e=>{try{i(t.next(e))}catch(n){c(n)}},_=e=>{try{i(t.throw(e))}catch(n){c(n)}},i=e=>e.done?f(e.value):Promise.resolve(e.value).then(b,_);i((t=t.apply(g,d)).next())});import{_ as q}from"./BasicForm.vue_vue_type_script_setup_true_lang-D9zBX_7o.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CbMCLsCL.js";import"./componentMap-C0n90BJh.js";import{u as F}from"./useForm-b1qEKHt-.js";import{C as V,a as Y}from"../index.js";import{P as D}from"./index-B24a6rfW.js";import{i as M}from"./system-DVoCCBj0.js";import{n as x}from"./antd-BmrhB3rb.js";import{d as I,a7 as N,Z as w,a8 as S,a9 as l,$ as R,k as a,G as p,u}from"./vue-BjERyvPm.js";import"./FormItem.vue_vue_type_script_lang-Cy9bZYGZ.js";import"./helper-BjbsUAHT.js";import"./index-RbNU_lzt.js";import"./useWindowSizeFn-B5LTQhvs.js";import"./useFormItem-B4KjxddK.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-D_aJ1Odl.js";import"./index-BpHr8pvE.js";import"./uuid-D0SLUWHI.js";import"./useSortable-D6mV6aGQ.js";import"./download-B80gEl-k.js";import"./base64Conver-bBv-IO2K.js";import"./index-vjZxMvXl.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-dXaxNvw-.js";import"./copyTextToClipboard-DUmgQPO1.js";import"./index-CziPtsqx.js";import"./index-IFKYG7IQ.js";import"./useContentViewHeight-mbS0GS8E.js";import"./onMountedOrActivated-DcvTUt7V.js";const j={class:"mb-4"},ce=I({__name:"RuleForm",setup(g){const d=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},required:!0},{field:"id",label:"id",required:!0,defaultValue:0,component:"InputNumber",show:!1},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},required:!0},{field:"field33",component:"DatePicker",label:"字段33",colProps:{span:8},componentProps:{valueFormat:"YYYY-MM-DD"},rules:[{required:!0,type:"string"}]},{field:"field44",component:"InputCountDown",label:"验证码",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{mode:"multiple",options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}],onChange:o=>{}},rules:[{required:!0,message:"请输入aa",type:"array"}]},{field:"field441",component:"Input",label:"自定义校验",colProps:{span:8},rules:[{required:!0,validator:(o,s)=>m(this,null,function*(){return s?s==="1"?Promise.reject("值不能为1"):Promise.resolve():Promise.reject("值不能为空")}),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"覆盖默认生成的校验信息"}]},{field:"field8",component:"Input",label:"后端异步验证",colProps:{span:8},helpMessage:["本字段演示异步验证","本地规则：必须填写","后端规则：不能包含admin"],rules:[{required:!0,message:"请输入数据"},{trigger:"blur",validator(o,s){return new Promise((r,v)=>{if(!s)return r();M(s).then(r).catch(y=>{v(y.message||"验证失败")})})}}]}],{createMessage:t}=Y(),[f,{validateFields:c,clearValidate:b,getFieldsValue:_,resetFields:i,setFieldsValue:e}]=F({labelWidth:120,schemas:d,actionColOptions:{span:24}});function n(){return m(this,null,function*(){try{const o=yield c()}catch(o){}})}function P(){return m(this,null,function*(){b()})}function C(){const o=_();t.success("values:"+JSON.stringify(o))}function h(){e({field1:1111,field4:["1"],field5:["1"],field7:"1",field33:"2020-12-12",field3:x("2020-12-12","YYYY-MM-DD")})}function k(o){t.success("click search,values:"+JSON.stringify(o))}return(o,s)=>{const r=N("a-button");return w(),S(u(D),{title:"表单校验示例"},{default:l(()=>[R("div",j,[a(r,{onClick:n,class:"mr-2"},{default:l(()=>[p(" 手动校验表单 ")]),_:1}),a(r,{onClick:P,class:"mr-2"},{default:l(()=>[p(" 清空校验信息 ")]),_:1}),a(r,{onClick:C,class:"mr-2"},{default:l(()=>[p(" 获取表单值 ")]),_:1}),a(r,{onClick:h,class:"mr-2"},{default:l(()=>[p(" 设置表单值 ")]),_:1}),a(r,{onClick:u(i),class:"mr-2"},{default:l(()=>[p(" 重置 ")]),_:1},8,["onClick"])]),a(u(V),{title:"表单校验"},{default:l(()=>[a(u(q),{onRegister:u(f),onSubmit:k},null,8,["onRegister"])]),_:1})]),_:1})}}});export{ce as default};
