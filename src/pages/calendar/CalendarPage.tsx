import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import ExportButton from "../../components/ExportButton";
import "./CalendarPage.css";
import {
  FaCalendarAlt,
  FaFilter,
  FaChartLine,
  FaClock,
  FaInfoCircle,
} from "react-icons/fa";

interface EconomicEvent {
  id: string;
  date: string;
  time: string;
  currency: string;
  indicator: string;
  importance: "High" | "Medium" | "Low";
  forecast: string;
  previous: string;
  actual: string;
  impact: "Positive" | "Negative" | "Neutral" | "Pending";
  category: string;
}

type ViewFilter = "day" | "week";

function CalendarPage() {
  const { t } = useTranslation();
  const [viewFilter, setViewFilter] = useState<ViewFilter>("week");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedCurrency, setSelectedCurrency] = useState<string>("All");
  const [selectedImportance, setSelectedImportance] = useState<string>("All");

  // Generate sample economic calendar data
  const generateCalendarData = (): EconomicEvent[] => {
    const events: EconomicEvent[] = [];
    const indicators = [
      {
        name: "Non-Farm Payrolls",
        category: "Employment",
        importance: "High" as const,
      },
      { name: "GDP Growth Rate", category: "GDP", importance: "High" as const },
      { name: "CPI (YoY)", category: "Inflation", importance: "High" as const },
      {
        name: "Interest Rate Decision",
        category: "Interest Rate",
        importance: "High" as const,
      },
      {
        name: "Unemployment Rate",
        category: "Employment",
        importance: "High" as const,
      },
      {
        name: "Retail Sales (MoM)",
        category: "Sales",
        importance: "Medium" as const,
      },
      {
        name: "Consumer Confidence",
        category: "Confidence",
        importance: "Medium" as const,
      },
      {
        name: "Manufacturing PMI",
        category: "PMI",
        importance: "Medium" as const,
      },
      {
        name: "Trade Balance",
        category: "Trade",
        importance: "Medium" as const,
      },
      {
        name: "Housing Starts",
        category: "Housing",
        importance: "Low" as const,
      },
      {
        name: "Industrial Production",
        category: "Production",
        importance: "Medium" as const,
      },
      {
        name: "Building Permits",
        category: "Housing",
        importance: "Low" as const,
      },
    ];

    const currencies = ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF"];
    const times = ["08:30", "10:00", "12:00", "14:00", "15:30", "17:00"];

    // Generate events for the next 14 days
    for (let i = 0; i < 14; i++) {
      const eventDate = new Date();
      eventDate.setDate(eventDate.getDate() + i);

      // Generate 2-5 events per day
      const eventsPerDay = Math.floor(Math.random() * 4) + 2;

      for (let j = 0; j < eventsPerDay; j++) {
        const indicator =
          indicators[Math.floor(Math.random() * indicators.length)];
        const currency =
          currencies[Math.floor(Math.random() * currencies.length)];
        const time = times[Math.floor(Math.random() * times.length)];

        const forecastValue = (Math.random() * 10 - 2).toFixed(1);
        const previousValue = (Math.random() * 10 - 2).toFixed(1);
        const actualValue =
          Math.random() > 0.3 ? (Math.random() * 10 - 2).toFixed(1) : "-";

        let impact: "Positive" | "Negative" | "Neutral" | "Pending" = "Pending";
        if (actualValue !== "-") {
          const actual = parseFloat(actualValue);
          const forecast = parseFloat(forecastValue);
          if (actual > forecast) impact = "Positive";
          else if (actual < forecast) impact = "Negative";
          else impact = "Neutral";
        }

        events.push({
          id: `event-${i}-${j}`,
          date: eventDate.toISOString().split("T")[0],
          time: time,
          currency: currency,
          indicator: indicator.name,
          importance: indicator.importance,
          forecast: forecastValue + "%",
          previous: previousValue + "%",
          actual: actualValue === "-" ? "-" : actualValue + "%",
          impact: impact,
          category: indicator.category,
        });
      }
    }

    return events.sort((a, b) => {
      const dateCompare = a.date.localeCompare(b.date);
      if (dateCompare !== 0) return dateCompare;
      return a.time.localeCompare(b.time);
    });
  };

  const allEvents = useMemo(() => generateCalendarData(), []);

  // Filter events based on selected view and filters
  const filteredEvents = useMemo(() => {
    let filtered = [...allEvents];

    // Filter by date range
    if (viewFilter === "day") {
      const selectedDateStr = selectedDate.toISOString().split("T")[0];
      filtered = filtered.filter((event) => event.date === selectedDateStr);
    } else {
      // Week view - show 7 days from selected date
      const startDate = new Date(selectedDate);
      const endDate = new Date(selectedDate);
      endDate.setDate(endDate.getDate() + 6);

      filtered = filtered.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate >= startDate && eventDate <= endDate;
      });
    }

    // Filter by currency
    if (selectedCurrency !== "All") {
      filtered = filtered.filter(
        (event) => event.currency === selectedCurrency
      );
    }

    // Filter by importance
    if (selectedImportance !== "All") {
      filtered = filtered.filter(
        (event) => event.importance === selectedImportance
      );
    }

    return filtered;
  }, [
    allEvents,
    viewFilter,
    selectedDate,
    selectedCurrency,
    selectedImportance,
  ]);

  // Group events by date
  const groupedEvents = useMemo(() => {
    const grouped: { [key: string]: EconomicEvent[] } = {};
    filteredEvents.forEach((event) => {
      if (!grouped[event.date]) {
        grouped[event.date] = [];
      }
      grouped[event.date].push(event);
    });
    return grouped;
  }, [filteredEvents]);

  const handlePreviousDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() - 1);
    setSelectedDate(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 1);
    setSelectedDate(newDate);
  };

  const handlePreviousWeek = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() - 7);
    setSelectedDate(newDate);
  };

  const handleNextWeek = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 7);
    setSelectedDate(newDate);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getImportanceClass = (importance: string) => {
    switch (importance) {
      case "High":
        return "importance-high";
      case "Medium":
        return "importance-medium";
      case "Low":
        return "importance-low";
      default:
        return "";
    }
  };

  const getImpactClass = (impact: string) => {
    switch (impact) {
      case "Positive":
        return "impact-positive";
      case "Negative":
        return "impact-negative";
      case "Neutral":
        return "impact-neutral";
      default:
        return "impact-pending";
    }
  };

  // Statistics
  const stats = useMemo(() => {
    const total = filteredEvents.length;
    const highImportance = filteredEvents.filter(
      (e) => e.importance === "High"
    ).length;
    const completed = filteredEvents.filter((e) => e.actual !== "-").length;
    const pending = total - completed;

    return { total, highImportance, completed, pending };
  }, [filteredEvents]);

  return (
    <div className="calendar-page">
      <div className="calendar-container">
        {/* Header */}
        <div className="calendar-header">
          <div className="calendar-header-content">
            <div className="calendar-title">
              <FaCalendarAlt className="calendar-icon" />
              <h1>{t('calendar.title')}</h1>
            </div>
            <p className="calendar-subtitle">
              {t('calendar.subtitle')}
            </p>
          </div>

          <div className="calendar-header-actions">
            <ExportButton
              data={filteredEvents}
              filename="economic_calendar"
              sheetName="Calendar"
              variant="primary"
              buttonText={t('calendar.exportButton')}
            />
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="calendar-stats">
          <div className="stat-card">
            <div className="stat-icon-wrapper stat-icon-primary">
              <FaCalendarAlt />
            </div>
            <div className="stat-content">
              <div className="stat-value">{stats.total}</div>
              <div className="stat-label">{t('calendar.stats.total')}</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper stat-icon-danger">
              <FaChartLine />
            </div>
            <div className="stat-content">
              <div className="stat-value">{stats.highImportance}</div>
              <div className="stat-label">{t('calendar.stats.highImportance')}</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper stat-icon-success">
              <FaInfoCircle />
            </div>
            <div className="stat-content">
              <div className="stat-value">{stats.completed}</div>
              <div className="stat-label">{t('calendar.stats.completed')}</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper stat-icon-warning">
              <FaClock />
            </div>
            <div className="stat-content">
              <div className="stat-value">{stats.pending}</div>
              <div className="stat-label">{t('calendar.stats.pending')}</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="calendar-filters">
          <div className="filter-section">
            <div className="filter-group">
              <FaFilter className="filter-icon" />
              <label>{t('calendar.filter.view')}:</label>
              <div className="view-toggle">
                <button
                  className={viewFilter === "day" ? "active" : ""}
                  onClick={() => setViewFilter("day")}
                >
                  {t('calendar.view.day')}
                </button>
                <button
                  className={viewFilter === "week" ? "active" : ""}
                  onClick={() => setViewFilter("week")}
                >
                  {t('calendar.view.week')}
                </button>
              </div>
            </div>

            <div className="filter-group">
              <label>{t('calendar.filter.currency')}:</label>
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                className="filter-select"
              >
                <option value="All">{t('calendar.filter.allCurrencies')}</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
                <option value="AUD">AUD</option>
                <option value="CAD">CAD</option>
                <option value="CHF">CHF</option>
              </select>
            </div>

            <div className="filter-group">
              <label>{t('calendar.filter.importance')}:</label>
              <select
                value={selectedImportance}
                onChange={(e) => setSelectedImportance(e.target.value)}
                className="filter-select"
              >
                <option value="All">{t('calendar.filter.allLevels')}</option>
                <option value="High">{t('calendar.legend.importance.high')}</option>
                <option value="Medium">{t('calendar.legend.importance.medium')}</option>
                <option value="Low">{t('calendar.legend.importance.low')}</option>
              </select>
            </div>
          </div>

          {/* Date Navigation */}
          <div className="date-navigation">
            <button
              className="nav-button"
              onClick={
                viewFilter === "day" ? handlePreviousDay : handlePreviousWeek
              }
            >
              ← Previous {viewFilter === "day" ? "Day" : "Week"}
            </button>
            <div className="current-date">
              {viewFilter === "day"
                ? formatDate(selectedDate.toISOString().split("T")[0])
                : `Week of ${formatDate(
                    selectedDate.toISOString().split("T")[0]
                  )}`}
            </div>
            <button
              className="nav-button"
              onClick={viewFilter === "day" ? handleNextDay : handleNextWeek}
            >
              Next {viewFilter === "day" ? "Day" : "Week"} →
            </button>
          </div>
        </div>

        {/* Calendar Events */}
        <div className="calendar-content">
          {Object.keys(groupedEvents).length === 0 ? (
            <div className="no-events">
              <FaCalendarAlt className="no-events-icon" />
              <h3>No Events Found</h3>
              <p>
                Try adjusting your filters or selecting a different date range.
              </p>
            </div>
          ) : (
            Object.keys(groupedEvents)
              .sort()
              .map((date) => (
                <div key={date} className="calendar-day-section">
                  <div className="day-header">
                    <h2>{formatDate(date)}</h2>
                    <span className="event-count">
                      {groupedEvents[date].length} events
                    </span>
                  </div>

                  <div className="events-table-wrapper">
                    <table className="events-table">
                      <thead>
                        <tr>
                          <th>Time</th>
                          <th>Currency</th>
                          <th>Indicator</th>
                          <th>Importance</th>
                          <th>Forecast</th>
                          <th>Previous</th>
                          <th>Actual</th>
                          <th>Impact</th>
                        </tr>
                      </thead>
                      <tbody>
                        {groupedEvents[date].map((event) => (
                          <tr key={event.id} className="event-row">
                            <td className="event-time">
                              <FaClock className="time-icon" />
                              {event.time}
                            </td>
                            <td>
                              <span className="currency-badge">
                                {event.currency}
                              </span>
                            </td>
                            <td className="event-indicator">
                              <div className="indicator-name">
                                {event.indicator}
                              </div>
                              <div className="indicator-category">
                                {event.category}
                              </div>
                            </td>
                            <td>
                              <span
                                className={`importance-badge ${getImportanceClass(
                                  event.importance
                                )}`}
                              >
                                {event.importance}
                              </span>
                            </td>
                            <td className="data-value">{event.forecast}</td>
                            <td className="data-value">{event.previous}</td>
                            <td className="data-value actual-value">
                              {event.actual}
                            </td>
                            <td>
                              <span
                                className={`impact-badge ${getImpactClass(
                                  event.impact
                                )}`}
                              >
                                {event.impact}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))
          )}
        </div>

        {/* Legend */}
        <div className="calendar-legend">
          <h3>{t('calendar.legend.title')}</h3>
          <div className="legend-grid">
            <div className="legend-section">
              <h4>{t('calendar.legend.importance.title')}</h4>
              <div className="legend-items">
                <div className="legend-item">
                  <span className="importance-badge importance-high">{t('calendar.legend.importance.high')}</span>
                  <span>{t('calendar.legend.importance.highDesc')}</span>
                </div>
                <div className="legend-item">
                  <span className="importance-badge importance-medium">
                    {t('calendar.legend.importance.medium')}
                  </span>
                  <span>{t('calendar.legend.importance.mediumDesc')}</span>
                </div>
                <div className="legend-item">
                  <span className="importance-badge importance-low">{t('calendar.legend.importance.low')}</span>
                  <span>{t('calendar.legend.importance.lowDesc')}</span>
                </div>
              </div>
            </div>

            <div className="legend-section">
              <h4>{t('calendar.legend.impact.title')}</h4>
              <div className="legend-items">
                <div className="legend-item">
                  <span className="impact-badge impact-positive">{t('calendar.legend.impact.positive')}</span>
                  <span>{t('calendar.legend.impact.positiveDesc')}</span>
                </div>
                <div className="legend-item">
                  <span className="impact-badge impact-negative">{t('calendar.legend.impact.negative')}</span>
                  <span>{t('calendar.legend.impact.negativeDesc')}</span>
                </div>
                <div className="legend-item">
                  <span className="impact-badge impact-neutral">{t('calendar.legend.impact.neutral')}</span>
                  <span>{t('calendar.legend.impact.neutralDesc')}</span>
                </div>
                <div className="legend-item">
                  <span className="impact-badge impact-pending">{t('calendar.legend.impact.pending')}</span>
                  <span>{t('calendar.legend.impact.pendingDesc')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarPage;
