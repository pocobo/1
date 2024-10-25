import { dv as o } from './useECharts-m6DBXNkB.js';
import { R as l } from './antd-BmrhB3rb.js';
import {
  d as s,
  f as u,
  w as d,
  Z as c,
  a8 as m,
  a9 as f,
  $ as h,
  ag as g,
  u as p,
} from './vue-BjERyvPm.js';
const x = s({
  __name: 'SalesProductPie',
  props: {
    loading: Boolean,
    width: { type: String, default: '100%' },
    height: { type: String, default: '300px' },
  },
  setup(e) {
    const a = e,
      t = u(null),
      { setOptions: r } = o(t);
    return (
      d(
        () => a.loading,
        () => {
          a.loading ||
            r({
              tooltip: { trigger: 'item' },
              series: [
                {
                  name: '成交占比',
                  type: 'pie',
                  radius: '80%',
                  center: ['50%', '50%'],
                  color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
                  data: [
                    { value: 500, name: '电子产品' },
                    { value: 310, name: '服装' },
                    { value: 274, name: '化妆品' },
                    { value: 400, name: '家居' },
                  ].sort(function (n, i) {
                    return n.value - i.value;
                  }),
                  roseType: 'radius',
                  animationType: 'scale',
                  animationEasing: 'exponentialInOut',
                  animationDelay: function () {
                    return Math.random() * 400;
                  },
                },
              ],
            });
        },
        { immediate: !0 },
      ),
      (n, i) => (
        c(),
        m(
          p(l),
          { title: '成交占比', loading: e.loading },
          {
            default: f(() => [
              h(
                'div',
                { ref_key: 'chartRef', ref: t, style: g({ width: e.width, height: e.height }) },
                null,
                4,
              ),
            ]),
            _: 1,
          },
          8,
          ['loading'],
        )
      )
    );
  },
});
export { x as _ };
