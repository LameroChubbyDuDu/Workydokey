import * as XLSX from "xlsx";
export async function readExcelFile(url) {
  try {
    // 下載 xlsx 檔
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();

    // 解析 Excel
    const workbook = XLSX.read(arrayBuffer, { type: "array" });

    // 假設讀第一個工作表
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // 轉 JSON
    const data = XLSX.utils.sheet_to_json(worksheet);
    console.log("Excel data:", data);

    return data;
  } catch (err) {
    console.error("讀取 Excel 發生錯誤:", err);
  }
}
