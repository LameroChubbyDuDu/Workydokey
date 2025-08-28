// const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRetmpP0-lnyYg0TpLuxRQVc8pc5QGUS7dyIRnoeD-ybF_oONKUjspK6Jh9yMjAmUNdzdk7B2-MoONA/pub?gid=0&single=true&output=csv";
export function getFormResponses() {
  // const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRetmpP0-lnyYg0TpLuxRQVc8pc5QGUS7dyIRnoeD-ybF_oONKUjspK6Jh9yMjAmUNdzdk7B2-MoONA/pub?gid=0&single=true&output=csv";
  // const response = await fetch(csvUrl);
  // const text = await response.text();
  
  //const rows = text.split("\n").map(r => r.split(","));
  console.log("表單回應：", rows);

  // WA.ui.displayActionMessage({
  //   message: `最新回覆：${rows[rows.length-1].join(" | ")}`
  // });
}

// getFormResponses();


// class SpreadsheetService {
//   constructor(spreadsheetUrl) {
//     this.csvUrl = spreadsheetUrl;
//   }

//   async getFormResponses() {
//     const response = await fetch(this.csvUrl);
//     const text = await response.text();
//     const rows = text.split("\n").map(r => r.split(","));
//     console.log("表單回應：", rows);

//     WA.ui.displayActionMessage({
//       message: `最新回覆：${rows[rows.length - 1].join(" | ")}`
//     });

//     return rows;
//   }
// }

// // 掛到全域，其他 js 才能用
// window.SpreadsheetService = SpreadsheetService;
