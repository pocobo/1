import { i, b as d } from './system-DVoCCBj0.js';
const c = (() => {
    const t = ['华东分部', '华南分部', '西北分部'],
      n = ['研发部', '市场部', '商务部', '财务部'];
    return t.reduce(
      (e, a, l) => ((e[l] = a), n.forEach((o, r) => (e[`${l}-${r}`] = `${a}-${o}`)), e),
      {},
    );
  })(),
  p = [
    { title: '用户名', dataIndex: 'account', width: 120 },
    { title: '昵称', dataIndex: 'nickname', width: 120 },
    { title: '邮箱', dataIndex: 'email', width: 120 },
    { title: '创建时间', dataIndex: 'createTime', width: 180 },
    { title: '角色', dataIndex: 'role', width: 200 },
    { title: '所属部门', dataIndex: 'dept', customRender: ({ value: t }) => c[t] },
    { title: '备注', dataIndex: 'remark' },
  ],
  s = [
    { field: 'account', label: '用户名', component: 'Input', colProps: { span: 8 } },
    { field: 'nickname', label: '昵称', component: 'Input', colProps: { span: 8 } },
  ],
  m = [
    {
      field: 'account',
      label: '用户名',
      component: 'Input',
      helpMessage: ['本字段演示异步验证', '不能输入带有admin的用户名'],
      rules: [
        { required: !0, message: '请输入用户名' },
        {
          trigger: 'blur',
          validator(t, n) {
            return new Promise((e, a) => {
              if (!n) return e();
              i(n)
                .then(e)
                .catch((l) => {
                  a(l.message || '验证失败');
                });
            });
          },
        },
      ],
    },
    { field: 'pwd', label: '密码', component: 'InputPassword', required: !0, ifShow: !1 },
    {
      label: '角色',
      field: 'role',
      component: 'ApiSelect',
      componentProps: { api: d, labelField: 'roleName', valueField: 'roleValue' },
      required: !0,
    },
    {
      field: 'dept',
      label: '所属部门',
      component: 'TreeSelect',
      componentProps: {
        fieldNames: { label: 'deptName', value: 'id' },
        getPopupContainer: () => document.body,
      },
      required: !0,
    },
    { field: 'nickname', label: '昵称', component: 'Input', required: !0 },
    { label: '邮箱', field: 'email', component: 'Input', required: !0 },
    { label: '备注', field: 'remark', component: 'InputTextArea' },
  ];
export { m as a, p as c, c as d, s };
