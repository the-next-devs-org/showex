import React, { useState } from "react";
import {
  FaFileExcel,
  FaFileCsv,
  FaFileDownload,
  FaChevronDown,
} from "react-icons/fa";
import {
  exportToExcel,
  exportToCSV,
  prepareDataForExport,
} from "../utils/exportUtils";
import "./ExportButton.css";

export interface ExportButtonProps {
  data: any[];
  filename?: string;
  sheetName?: string;
  excludeFields?: string[];
  buttonText?: string;
  variant?: "primary" | "secondary" | "compact";
  showIcon?: boolean;
  disabled?: boolean;
}

const ExportButton: React.FC<ExportButtonProps> = ({
  data,
  filename,
  sheetName = "Data",
  excludeFields = [],
  buttonText = "Export",
  variant = "primary",
  showIcon = true,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async (format: "excel" | "csv") => {
    if (!data || data.length === 0) {
      alert("No data available to export");
      return;
    }

    try {
      setIsExporting(true);

      // Prepare data for export
      const cleanedData = prepareDataForExport(data, excludeFields);

      // Generate default filename if not provided
      const defaultFilename =
        filename || `export_${new Date().toISOString().slice(0, 10)}`;

      // Export based on format
      if (format === "excel") {
        exportToExcel(cleanedData, {
          filename: defaultFilename,
          sheetName: sheetName,
        });
      } else if (format === "csv") {
        exportToCSV(cleanedData, {
          filename: defaultFilename,
        });
      }

      setIsOpen(false);
    } catch (error) {
      console.error("Export error:", error);
      alert("Failed to export data. Please try again.");
    } finally {
      setIsExporting(false);
    }
  };

  const toggleDropdown = () => {
    if (!disabled && !isExporting) {
      setIsOpen(!isOpen);
    }
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".export-button-container")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`export-button-container variant-${variant}`}>
      <button
        className={`export-button ${isOpen ? "active" : ""}`}
        onClick={toggleDropdown}
        disabled={disabled || isExporting}
        aria-label="Export data"
      >
        {showIcon && <FaFileDownload className="export-icon" />}
        <span className="export-text">{buttonText}</span>
        <FaChevronDown className={`dropdown-icon ${isOpen ? "open" : ""}`} />
      </button>

      {isOpen && (
        <div className="export-dropdown">
          <button
            className="export-option"
            onClick={() => handleExport("excel")}
            disabled={isExporting}
          >
            <FaFileExcel className="option-icon excel-icon" />
            <div className="option-content">
              <span className="option-title">Export to Excel</span>
              <span className="option-subtitle">.xlsx file</span>
            </div>
          </button>

          <button
            className="export-option"
            onClick={() => handleExport("csv")}
            disabled={isExporting}
          >
            <FaFileCsv className="option-icon csv-icon" />
            <div className="option-content">
              <span className="option-title">Export to CSV</span>
              <span className="option-subtitle">.csv file (UTF-8)</span>
            </div>
          </button>
        </div>
      )}

      {isExporting && (
        <div className="export-loading">
          <div className="export-spinner"></div>
          <span>Exporting...</span>
        </div>
      )}
    </div>
  );
};

export default ExportButton;
