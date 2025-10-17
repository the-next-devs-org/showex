import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

/**
 * Export Utility for Excel and CSV files
 * Handles data export with proper encoding and formatting
 */

export interface ExportOptions {
  filename?: string;
  sheetName?: string;
  dateFormat?: string;
}

/**
 * Export data to Excel (.xlsx) format
 * @param data - Array of objects to export
 * @param options - Export configuration options
 */
export const exportToExcel = (
  data: any[],
  options: ExportOptions = {}
): void => {
  try {
    const {
      filename = `export_${new Date().toISOString().slice(0, 10)}`,
      sheetName = "Sheet1",
    } = options;

    // Convert data to worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Auto-size columns
    const columnWidths = autoSizeColumns(data);
    worksheet["!cols"] = columnWidths;

    // Create workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

    // Generate Excel file
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
      cellStyles: true,
    });

    // Save file
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, `${filename}.xlsx`);

    console.log(`✅ Excel file exported: ${filename}.xlsx`);
  } catch (error) {
    console.error("❌ Error exporting to Excel:", error);
    throw new Error("Failed to export to Excel");
  }
};

/**
 * Export data to CSV format
 * @param data - Array of objects to export
 * @param options - Export configuration options
 */
export const exportToCSV = (data: any[], options: ExportOptions = {}): void => {
  try {
    const { filename = `export_${new Date().toISOString().slice(0, 10)}` } =
      options;

    // Convert data to worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Generate CSV with UTF-8 BOM for proper encoding
    const csv = XLSX.utils.sheet_to_csv(worksheet, {
      FS: ",", // Field separator
      RS: "\n", // Record separator
    });

    // Add UTF-8 BOM for Excel compatibility
    const bom = "\uFEFF";
    const csvWithBom = bom + csv;

    // Save file
    const blob = new Blob([csvWithBom], {
      type: "text/csv;charset=utf-8",
    });
    saveAs(blob, `${filename}.csv`);

    console.log(`✅ CSV file exported: ${filename}.csv`);
  } catch (error) {
    console.error("❌ Error exporting to CSV:", error);
    throw new Error("Failed to export to CSV");
  }
};

/**
 * Export data to JSON format
 * @param data - Array of objects to export
 * @param options - Export configuration options
 */
export const exportToJSON = (
  data: any[],
  options: ExportOptions = {}
): void => {
  try {
    const { filename = `export_${new Date().toISOString().slice(0, 10)}` } =
      options;

    // Convert to formatted JSON
    const jsonString = JSON.stringify(data, null, 2);

    // Save file
    const blob = new Blob([jsonString], {
      type: "application/json;charset=utf-8",
    });
    saveAs(blob, `${filename}.json`);

    console.log(`✅ JSON file exported: ${filename}.json`);
  } catch (error) {
    console.error("❌ Error exporting to JSON:", error);
    throw new Error("Failed to export to JSON");
  }
};

/**
 * Auto-size columns based on content
 * @param data - Array of objects
 * @returns Array of column widths
 */
const autoSizeColumns = (data: any[]): { wch: number }[] => {
  if (!data || data.length === 0) return [];

  const keys = Object.keys(data[0]);
  const columnWidths: { wch: number }[] = [];

  keys.forEach((key) => {
    let maxLength = key.length; // Start with header length

    data.forEach((row) => {
      const value = row[key];
      const valueLength = value ? String(value).length : 0;
      maxLength = Math.max(maxLength, valueLength);
    });

    // Add some padding and limit max width
    const width = Math.min(maxLength + 2, 50);
    columnWidths.push({ wch: width });
  });

  return columnWidths;
};

/**
 * Format table data for export (clean up display-only fields)
 * @param data - Raw table data
 * @param excludeFields - Fields to exclude from export
 * @returns Cleaned data ready for export
 */
export const prepareDataForExport = (
  data: any[],
  excludeFields: string[] = []
): any[] => {
  return data.map((row) => {
    const cleanedRow: any = {};

    Object.keys(row).forEach((key) => {
      // Skip excluded fields
      if (excludeFields.includes(key)) return;

      // Skip internal React fields
      if (key.startsWith("_") || key === "key") return;

      // Clean up the value
      let value = row[key];

      // Convert dates to readable format
      if (value instanceof Date) {
        value = value.toLocaleString();
      }

      // Convert arrays to comma-separated strings
      if (Array.isArray(value)) {
        value = value.join(", ");
      }

      // Convert objects to JSON strings
      if (typeof value === "object" && value !== null) {
        value = JSON.stringify(value);
      }

      cleanedRow[key] = value;
    });

    return cleanedRow;
  });
};

/**
 * Export multiple sheets to single Excel file
 * @param sheets - Array of { name, data } objects
 * @param filename - Output filename
 */
export const exportMultipleSheets = (
  sheets: { name: string; data: any[] }[],
  filename: string = `multi_export_${new Date().toISOString().slice(0, 10)}`
): void => {
  try {
    const workbook = XLSX.utils.book_new();

    sheets.forEach(({ name, data }) => {
      const worksheet = XLSX.utils.json_to_sheet(data);
      const columnWidths = autoSizeColumns(data);
      worksheet["!cols"] = columnWidths;
      XLSX.utils.book_append_sheet(workbook, worksheet, name);
    });

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
      cellStyles: true,
    });

    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, `${filename}.xlsx`);

    console.log(`✅ Multi-sheet Excel file exported: ${filename}.xlsx`);
  } catch (error) {
    console.error("❌ Error exporting multiple sheets:", error);
    throw new Error("Failed to export multiple sheets");
  }
};

export default {
  exportToExcel,
  exportToCSV,
  exportToJSON,
  prepareDataForExport,
  exportMultipleSheets,
};
