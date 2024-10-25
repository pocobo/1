import { P as L } from './index-B24a6rfW.js';
import { aL as N, az as S } from '../index.js';
import { E as B, Q as E } from './antd-BmrhB3rb.js';
import {
  d as D,
  r as I,
  h as O,
  c as u,
  a7 as f,
  Z as m,
  a8 as P,
  a9 as r,
  $ as e,
  k as o,
  u as l,
  G as p,
  a0 as c,
  _ as h,
  F as W,
  aa as A,
} from './vue-BjERyvPm.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './onMountedOrActivated-DcvTUt7V.js';
const F = { class: 'flex' },
  M = { class: 'w-1/3 bg-white p-4' },
  U = { class: 'flex items-center' },
  z = e('span', { class: 'text-lg font-medium mr-4' }, ' 连接状态: ', -1),
  G = e('hr', { class: 'my-4' }, null, -1),
  J = { class: 'flex' },
  Q = e('p', { class: 'text-lg font-medium mt-4' }, '设置', -1),
  R = e('hr', { class: 'my-4' }, null, -1),
  Z = { class: 'w-2/3 bg-white ml-4 p-4' },
  $ = e('span', { class: 'text-lg font-medium mr-4' }, ' 消息记录: ', -1),
  j = e('hr', { class: 'my-4' }, null, -1),
  q = { class: 'max-h-80 overflow-auto' },
  H = { class: 'flex items-center' },
  K = e('span', { class: 'mr-2 text-primary font-medium' }, '收到消息:', -1),
  ne = D({
    __name: 'index',
    setup(X) {
      const g = B.TextArea,
        t = I({ server: 'ws://localhost:3300/test', sendValue: '', recordList: [] }),
        {
          status: _,
          data: i,
          send: x,
          close: b,
          open: y,
        } = N(t.server, { autoReconnect: !1, heartbeat: !0 });
      O(() => {
        if (i.value)
          try {
            const d = JSON.parse(i.value);
            t.recordList.push(d);
          } catch (d) {
            t.recordList.push({
              res: i.value,
              id: Math.ceil(Math.random() * 1e3),
              time: new Date().getTime(),
            });
          }
      });
      const a = u(() => _.value === 'OPEN'),
        k = u(() => (a.value ? 'success' : 'red')),
        w = u(() => [...t.recordList].reverse());
      function T() {
        x(t.sendValue), (t.sendValue = '');
      }
      function V() {
        a.value ? b() : y();
      }
      return (d, n) => {
        const C = f('a-input'),
          v = f('a-button');
        return (
          m(),
          P(
            l(L),
            { title: 'WebSocket 示例' },
            {
              default: r(() => [
                e('div', F, [
                  e('div', M, [
                    e('div', U, [
                      z,
                      o(l(E), { color: k.value }, { default: r(() => [p(c(l(_)), 1)]), _: 1 }, 8, [
                        'color',
                      ]),
                    ]),
                    G,
                    e('div', J, [
                      o(
                        C,
                        {
                          value: t.server,
                          'onUpdate:value': n[0] || (n[0] = (s) => (t.server = s)),
                          'addon-before': '服务地址',
                          disabled: '',
                        },
                        null,
                        8,
                        ['value'],
                      ),
                      o(
                        v,
                        { type: a.value ? 'danger' : 'primary', onClick: V },
                        { default: r(() => [p(c(a.value ? '关闭连接' : '开启连接'), 1)]), _: 1 },
                        8,
                        ['type'],
                      ),
                    ]),
                    Q,
                    R,
                    o(
                      l(g),
                      {
                        placeholder: '需要发送到服务器的内容',
                        disabled: !a.value,
                        value: t.sendValue,
                        'onUpdate:value': n[1] || (n[1] = (s) => (t.sendValue = s)),
                        allowClear: '',
                      },
                      null,
                      8,
                      ['disabled', 'value'],
                    ),
                    o(
                      v,
                      { type: 'primary', block: '', class: 'mt-4', disabled: !a.value, onClick: T },
                      { default: r(() => [p(' 发送 ')]), _: 1 },
                      8,
                      ['disabled'],
                    ),
                  ]),
                  e('div', Z, [
                    $,
                    j,
                    e('div', q, [
                      e('ul', null, [
                        (m(!0),
                        h(
                          W,
                          null,
                          A(
                            w.value,
                            (s) => (
                              m(),
                              h('li', { class: 'mt-2', key: s.time }, [
                                e('div', H, [K, e('span', null, c(l(S)(s.time)), 1)]),
                                e('div', null, c(s.res), 1),
                              ])
                            ),
                          ),
                          128,
                        )),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              _: 1,
            },
          )
        );
      };
    },
  });
export { ne as default };