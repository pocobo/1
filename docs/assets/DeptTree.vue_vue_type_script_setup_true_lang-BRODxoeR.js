var m = (i, n, t) =>
  new Promise((a, o) => {
    var c = (e) => {
        try {
          r(t.next(e));
        } catch (l) {
          o(l);
        }
      },
      s = (e) => {
        try {
          r(t.throw(e));
        } catch (l) {
          o(l);
        }
      },
      r = (e) => (e.done ? a(e.value) : Promise.resolve(e.value).then(c, s));
    r((t = t.apply(i, n)).next());
  });
import { _ as p } from './index-snPuAjGa.js';
import { a as f } from './system-DVoCCBj0.js';
import { d as _, f as d, o as u, Z as h, _ as D, k, u as v } from './vue-BjERyvPm.js';
const w = { class: 'm-4 mr-0 overflow-hidden bg-white' },
  g = _({
    name: 'DeptTree',
    __name: 'DeptTree',
    emits: ['select'],
    setup(i, { emit: n }) {
      const t = n,
        a = d([]);
      function o() {
        return m(this, null, function* () {
          a.value = yield f();
        });
      }
      function c(s) {
        t('select', s[0]);
      }
      return (
        u(() => {
          o();
        }),
        (s, r) => (
          h(),
          D('div', w, [
            k(
              v(p),
              {
                title: '部门列表',
                toolbar: '',
                search: '',
                treeWrapperClassName: 'h-[calc(100%-35px)] overflow-auto',
                clickRowToExpand: !1,
                treeData: a.value,
                fieldNames: { key: 'id', title: 'deptName' },
                onSelect: c,
              },
              null,
              8,
              ['treeData'],
            ),
          ])
        )
      );
    },
  });
export { g as _ };
