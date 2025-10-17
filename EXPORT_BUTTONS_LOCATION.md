# 📥 Export Button Locations - Quick Guide

## Where to Find Export Buttons

The export buttons are **already live** on your Analytics page! Here's where to find them:

---

## 🔍 Analytics Page (`/analytics`)

### 1. **AI Predictions Section** (Top of page)

- **Location**: In the "AI-Powered Trend Forecasts" header, next to the "Generate New Predictions" button
- **Button Style**: Secondary (gray background)
- **What it exports**: All AI prediction data including:
  - Currency pair
  - Predicted trend (Bullish/Bearish/Neutral)
  - Confidence level
  - Timestamp
  - Economic indicators

### 2. **Most Transacted NFTs Table**

- **Location**: In the table header, right side next to "Most Transacted NFTs (Daily)"
- **Button Style**: Compact (small button)
- **What it exports**:
  - Rank
  - Token name
  - Items count
  - Holders count
  - Total transactions

### 3. **Most Transacted Tokens Table**

- **Location**: In the table header, right side next to "Most Transacted Tokens (Daily)"
- **Button Style**: Compact (small button)
- **What it exports**:
  - Rank
  - Token name
  - Market cap
  - Change percentage
  - Volume

---

## 🎯 How to Use Export Buttons

1. **Navigate to the page**: Go to `/analytics` in your browser
2. **Scroll to any table or AI section**
3. **Look for the "Export" button** in the header area
4. **Click the Export button** - a dropdown menu will appear
5. **Choose your format**:

   - 📊 **Export as Excel** (.xlsx) - Opens in Excel, Google Sheets, etc.
   - 📄 **Export as CSV** (.csv) - Plain text, works everywhere
   - 📋 **Export as JSON** (.json) - For developers/APIs

6. **File downloads automatically** to your Downloads folder

---

## 🎨 Visual Identification

The export buttons look like this:

```
┌─────────────┐
│   Export ▼  │  ← Click to see dropdown
└─────────────┘
```

When you click, you'll see:

```
┌─────────────────────┐
│ 📊 Export as Excel  │
│ 📄 Export as CSV    │
│ 📋 Export as JSON   │
└─────────────────────┘
```

---

## 🧪 Test the Export Feature

Visit: **`/export-demo`**

This demo page shows:

- Three working examples with different button styles
- Sample data in tables
- Instructions on how to use each export type

---

## 📱 Mobile Support

On mobile devices (screen width < 768px):

- Buttons stack vertically
- Touch-optimized tap targets
- Responsive dropdown menus

---

## 🚀 Quick Test Steps

1. Open your browser to: `http://localhost:5173/analytics`
2. Scroll to the AI Predictions section at the top
3. Look for the gray "Export" button next to "Generate New Predictions"
4. Click "Export" → Choose "Export as Excel"
5. Check your Downloads folder for `ai_predictions.xlsx`

---

## ❓ Troubleshooting

### "I don't see the Export button"

- **Check CSS**: The button may be hidden by overflow or layout issues
- **Browser zoom**: Try zooming out (Ctrl + Mouse wheel)
- **Clear cache**: Hard refresh the page (Ctrl + Shift + R)
- **Check console**: Open DevTools (F12) and look for errors

### "Export button doesn't work"

- **Check data**: Make sure there's data in the table
- **Generate predictions first**: For AI section, click "Generate New Predictions" first
- **Browser compatibility**: Use a modern browser (Chrome, Firefox, Edge)

### "File doesn't download"

- **Check downloads folder**: It may download without notification
- **Pop-up blocker**: Disable for localhost
- **Browser settings**: Allow file downloads from localhost

---

## 📍 Button Locations Summary

| Page Section   | Location             | Style     | Status  |
| -------------- | -------------------- | --------- | ------- |
| AI Predictions | Header (top right)   | Secondary | ✅ Live |
| NFTs Table     | Table header (right) | Compact   | ✅ Live |
| Tokens Table   | Table header (right) | Compact   | ✅ Live |

---

## 🔜 Coming Soon

Export buttons will be added to:

- News History page (`/news-history`)
- Calendar page (when implemented)
- Indicators page (when implemented)

---

## 📖 More Information

- Full documentation: See `DATA_EXPORT_GUIDE.md`
- Technical details: See `AI_ANALYTICS_README.md`
- Component code: `src/components/ExportButton.tsx`
- Export utilities: `src/services/exportUtils.ts`

---

## 💡 Pro Tips

1. **Excel format** is best for analysis and charts
2. **CSV format** is best for importing to other tools
3. **JSON format** is best for developers and APIs
4. Files include **timestamp** in the name for easy organization
5. Excel files have **auto-sized columns** for better readability
6. CSV files use **UTF-8 BOM** for proper encoding

---

**Last Updated**: 2025
**Version**: 1.0
