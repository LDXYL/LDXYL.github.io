// // 设置图表的默认字体和颜色，模仿 Bootstrap 的默认样式
//
// Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
// Chart.defaults.global.defaultFontColor = '#292b2c';
//
// // 区域图示例
// var ctx = document.getElementById("myAreaChart"); // 获取画布元素
// var myLineChart = new Chart(ctx, {
//   type: 'line', // 图表类型为折线图（但由于设置了背景色，实际上是区域图）
//   data: {
//     labels: ["1日", "2日", "3日", "4日", "5日", "6日", "7日", "8日", "9日", "10日",
//       "11日", "12日", "13日", '14日', '15日', '16日', '17日', '18日', '19日', '20日',
//       '21日', '22日', '23日', '24日', '25日', '26日', '27日', '28日', '29日', '30日', '31日'], // X 轴标签，表示日期
//     datasets: [{
//       label: "客户咨询消息数量", // 数据集的标签，显示在图例中（但这里图例被隐藏了）
//       lineTension: 0.3, // 线条的平滑度，0.3 表示轻微的平滑
//       backgroundColor: "rgba(2,117,216,0.2)", // 填充区域的背景颜色，使用半透明的蓝色
//       borderColor: "rgba(2,117,216,1)", // 线条的颜色，使用不透明的蓝色
//       pointRadius: 5, // 数据点的半径
//       pointBackgroundColor: "rgba(2,117,216,1)", // 数据点的背景颜色，使用不透明的蓝色
//       pointBorderColor: "rgba(255,255,255,0.8)", // 数据点的边框颜色，使用白色
//       pointHoverRadius: 5, // 鼠标悬停时数据点的半径
//       pointHoverBackgroundColor: "rgba(2,117,216,1)", // 鼠标悬停时数据点的背景颜色，使用不透明的蓝色
//       pointHitRadius: 50, // 数据点的点击区域半径
//       pointBorderWidth: 2, // 数据点边框的宽度
//       data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159,
//         32651, 31984, 38451, 25432, 41526, 25136, 15236, 36521, 35987, 13985,
//         12040, 21503, 20145, 10365, 30261, 20154, 15025, 10002, 19584, 10362,
//         20310], // 数据点的具体数值，表示每天的会话数
//     }],
//   },
//   options: {
//     scales: {
//       xAxes: [{
//         time: {
//           unit: '日' // 时间单位设置为日期
//         },
//         gridLines: {
//           display: true // 不显示 X 轴的网格线
//         },
//         ticks: {
//           maxTicksLimit: 31 // X 轴标签的最大数量限制为 31
//         }
//       }],
//       yAxes: [{
//         ticks: {
//           min: 0, // Y 轴的最小值为 0
//           max: 50000, // Y 轴的最大值为 40000
//           maxTicksLimit: 6 // Y 轴标签的最大数量限制为 6
//         },
//         gridLines: {
//           color: "rgba(0, 0, 0, .125)", // Y 轴网格线的颜色，使用半透明的黑色
//         }
//       }],
//     },
//     legend: {
//       display: true // 显示图例
//     }
//   }
// });