// // 设置图表的默认字体和颜色，模仿 Bootstrap 的默认样式
//
// Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
// Chart.defaults.global.defaultFontColor = '#292b2c';
//
// // 柱状图示例
// var ctx = document.getElementById("myBarChart"); // 获取画布元素
// var myLineChart = new Chart(ctx, {
//   type: 'bar', // 图表类型为柱状图
//   data: {
//     labels: ["一月", "二月", "三月", "四月", "五月", "六月", '七月', '八月', '九月', '十月', '十一月', '十二月'], // X 轴标签，表示月份
//     datasets: [{
//       label: "健身房月总收入", // 数据集的标签，显示在图例中（但这里图例被隐藏了）
//       backgroundColor: "rgba(2,117,216,1)", // 柱状图的背景颜色，使用不透明的蓝色
//       borderColor: "rgba(2,117,216,1)", // 柱状图的边框颜色，使用不透明的蓝色
//       data: [4215, 5312, 6251, 7841, 9821, 14984, 16985, 16523, 8620, 6240, 4450, 1120], // 数据点的具体数值，表示每个月的总收入
//     }],
//   },
//   options: {
//     scales: {
//       xAxes: [{
//         time: {
//           unit: 'month' // 时间单位设置为月份
//         },
//         gridLines: {
//           display: true // 显示 X 轴的网格线
//         },
//         ticks: {
//           maxTicksLimit: 6 // X 轴标签的最大数量限制为 6
//         }
//       }],
//       yAxes: [{
//         ticks: {
//           min: 0, // Y 轴的最小值为 0
//           max: 20000, // Y 轴的最大值为 20000
//           maxTicksLimit: 5 // Y 轴标签的最大数量限制为 5
//         },
//         gridLines: {
//           display: true // 显示 Y 轴的网格线
//         }
//       }],
//     },
//     legend: {
//       display: true // 显示图例
//     }
//   }
// });