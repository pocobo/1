import { d as c, Y as _, u as i, Z as m, _ as u } from './vue-BjERyvPm.js';
const y = c({
  __name: 'index',
  setup(l) {
    var n;
    const { currentRoute: p, replace: a } = _(),
      { params: e, query: s } = i(p),
      { path: r, _redirect_type: o = 'path' } = e;
    Reflect.deleteProperty(e, '_redirect_type'), Reflect.deleteProperty(e, 'path');
    const t = Array.isArray(r) ? r.join('/') : r;
    return (
      a(
        o === 'name'
          ? { name: t, query: s, params: JSON.parse((n = e._origin_params) != null ? n : '{}') }
          : { path: t.startsWith('/') ? t : '/' + t, query: s },
      ),
      (d, f) => (m(), u('div'))
    );
  },
});
export { y as default };
