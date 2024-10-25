import { P as x } from './index-B24a6rfW.js';
import { l as w, C as d, c as A } from '../index.js';
import { C as B, a as v } from './index-IFKYG7IQ.js';
import { u as N } from './upload-vaW6y1fb.js';
import { h } from './header-BHmVmQ6a.js';
import {
  d as S,
  f as t,
  Z as o,
  a8 as V,
  a9 as l,
  k as r,
  u as e,
  $ as p,
  _ as i,
  ab as u,
  a0 as C,
} from './vue-BjERyvPm.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './antd-BmrhB3rb.js';
import './onMountedOrActivated-DcvTUt7V.js';
import './index-RbNU_lzt.js';
import './base64Conver-bBv-IO2K.js';
const b = { class: 'container p-4' },
  P = { class: 'cropper-container mr-10' },
  U = ['src'],
  D = { key: 0 },
  E = { class: 'container p-4' },
  W = { class: 'cropper-container mr-10' },
  Z = ['src'],
  $ = { key: 0 },
  j = S({
    __name: 'index',
    setup(q) {
      var f;
      const m = t(''),
        a = t(''),
        _ = t(''),
        s = t(''),
        g = w(),
        k = t(((f = g.getUserInfo) == null ? void 0 : f.avatar) || '');
      function y({ imgBase64: c, imgInfo: n }) {
        (m.value = n), (a.value = c);
      }
      function I({ imgBase64: c, imgInfo: n }) {
        (_.value = n), (s.value = c);
      }
      return (c, n) => (
        o(),
        V(
          e(x),
          { title: '图片裁剪示例', content: '需要开启测试接口服务才能进行上传测试！' },
          {
            default: l(() => [
              r(
                e(d),
                { title: '头像裁剪' },
                {
                  default: l(() => [
                    r(e(B), { uploadApi: e(N), value: k.value }, null, 8, ['uploadApi', 'value']),
                  ]),
                  _: 1,
                },
              ),
              r(
                e(d),
                { title: '矩形裁剪', class: 'my-4' },
                {
                  default: l(() => [
                    p('div', b, [
                      p('div', P, [
                        r(
                          e(v),
                          { ref: 'refCropper', src: e(h), onCropend: y, style: { width: '40vw' } },
                          null,
                          8,
                          ['src'],
                        ),
                      ]),
                      a.value
                        ? (o(),
                          i(
                            'img',
                            { key: 0, src: a.value, class: 'croppered', alt: '' },
                            null,
                            8,
                            U,
                          ))
                        : u('', !0),
                    ]),
                    a.value ? (o(), i('p', D, '裁剪后图片信息：' + C(m.value), 1)) : u('', !0),
                  ]),
                  _: 1,
                },
              ),
              r(
                e(d),
                { title: '圆形裁剪' },
                {
                  default: l(() => [
                    p('div', E, [
                      p('div', W, [
                        r(
                          e(v),
                          {
                            ref: 'refCropper',
                            src: e(h),
                            onCropend: I,
                            style: { width: '40vw' },
                            circled: '',
                          },
                          null,
                          8,
                          ['src'],
                        ),
                      ]),
                      s.value
                        ? (o(), i('img', { key: 0, src: s.value, class: 'croppered' }, null, 8, Z))
                        : u('', !0),
                    ]),
                    s.value ? (o(), i('p', $, '裁剪后图片信息：' + C(_.value), 1)) : u('', !0),
                  ]),
                  _: 1,
                },
              ),
            ]),
            _: 1,
          },
        )
      );
    },
  }),
  X = A(j, [['__scopeId', 'data-v-e3b8e362']]);
export { X as default };
