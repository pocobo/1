import { dv as n } from './useECharts-m6DBXNkB.js';
import { R as o } from './antd-BmrhB3rb.js';
import {
  d as r,
  f as l,
  w as s,
  Z as d,
  a8 as f,
  a9 as m,
  $ as u,
  ag as c,
  u as h,
} from './vue-BjERyvPm.js';
const v = r({
  __name: 'VisitSource',
  props: {
    loading: Boolean,
    width: { type: String, default: '100%' },
    height: { type: String, default: '300px' },
  },
  setup(e) {
    const a = e,
      t = l(null),
      { setOptions: i } = n(t);
    return (
      s(
        () => a.loading,
        () => {
          a.loading ||
            i({
              tooltip: { trigger: 'item' },
              legend: { bottom: '1%', left: 'center' },
              series: [
                {
                  color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
                  name: '访问来源',
                  type: 'pie',
                  radius: ['40%', '70%'],
                  avoidLabelOverlap: !1,
                  itemStyle: { borderRadius: 10, borderColor: '#fff', borderWidth: 2 },
                  label: { show: !1, position: 'center' },
                  emphasis: { label: { show: !0, fontSize: '12', fontWeight: 'bold' } },
                  labelLine: { show: !1 },
                  data: [
                    { value: 1048, name: '搜索引擎' },
                    { value: 735, name: '直接访问' },
                    { value: 580, name: '邮件营销' },
                    { value: 484, name: '联盟广告' },
                  ],
                  animationType: 'scale',
                  animationEasing: 'exponentialInOut',
                  animationDelay: function () {
                    return Math.random() * 100;
                  },
                },
              ],
            });
        },
        { immediate: !0 },
      ),
      (g, p) => (
        d(),
        f(
          h(o),
          { title: '访问来源', loading: e.loading },
          {
            default: m(() => [
              u(
                'div',
                { ref_key: 'chartRef', ref: t, style: c({ width: e.width, height: e.height }) },
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
export { v as _ };
