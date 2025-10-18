import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import './DashboardIndicators.css';
import { useTranslation } from 'react-i18next';

type Indicator = {
  seriesId: string;
  name: string;
  latest: {
    realtime_start: string;
    realtime_end: string;
    date: string;
    value: string;
  };
};


type Observation = {
  realtime_start: string;
  realtime_end: string;
  date: string;
  value: string;
};

type IndicatorWithObs = Indicator & { observations?: Observation[] };

const DashboardIndicators: React.FC = () => {
  const { t } = useTranslation();
  const [indicators, setIndicators] = useState<Indicator[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<IndicatorWithObs | null>(null);
  const [obsLoading, setObsLoading] = useState(false);
  const [obsError, setObsError] = useState<string | null>(null);
  const apiBase = import.meta.env.VITE_SHOXEZ_API_BACKEND_URL || '';
  const path = '/indicators/';

  useEffect(() => {
    const fetchIndicators = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${apiBase}${path}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setIndicators(data.indicators || []);
      } catch (err) {
        console.error('Error fetching indicators:', err);
        setError('Failed to load indicators');
      } finally {
        setLoading(false);
      }
    };
    fetchIndicators();
  }, [apiBase, path]);

  const handleCardClick = async (ind: Indicator) => {
    setSelected(null);
    setObsLoading(true);
    setObsError(null);
    try {
      const response = await fetch(`${apiBase}/indicators/history/${ind.seriesId}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setSelected({ ...ind, observations: data.observations || [] });
    } catch (err) {
      setObsError('Failed to load indicator details');
    } finally {
      setObsLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="ds-root">
        <div className="ds-header">
          <h1 className="ds-title">{t('dashboard.indicators.title')}</h1>
          <p className="ds-subtitle">
            {t('dashboard.indicators.subtitle')}
          </p>
        </div>

        <div className="dashboardindicators-grid">
          {loading ? (
            <div className="dashboardindicators-loading">{t('dashboard.indicators.loading')}</div>
          ) : error ? (
            <div className="dashboardindicators-error">{error}</div>
          ) : indicators.length === 0 ? (
            <div className="dashboardindicators-empty">{t('dashboard.indicators.noIndicators')}</div>
          ) : (
            indicators.map((ind) => (
              <div
                className="dashboardindicators-card dashboardindicators-clickable"
                key={ind.seriesId}
                onClick={() => handleCardClick(ind)}
                tabIndex={0}
                role="button"
                aria-pressed={selected?.seriesId === ind.seriesId}
              >
                <div className="dashboardindicators-title">{ind.name}</div>
                <div className="dashboardindicators-value">
                  {ind.latest.value !== '.' ? ind.latest.value : 'N/A'}
                </div>
                <div className="dashboardindicators-meta">
                  <span>ID: {ind.seriesId}</span>
                  <span>Date: {ind.latest.date}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {selected && (
          <div className="dashboardindicators-detail-card">
            <div className="dashboardindicators-detail-header">
              <span className="dashboardindicators-detail-title">{selected.name}</span>
              <span className="dashboardindicators-detail-id">ID: {selected.seriesId}</span>
            </div>
            {obsLoading ? (
              <div className="dashboardindicators-detail-loading">Loading details...</div>
            ) : obsError ? (
              <div className="dashboardindicators-detail-error">{obsError}</div>
            ) : (
              <div className="dashboardindicators-detail-table-wrap">
                <table className="dashboardindicators-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selected.observations && selected.observations.length > 0 ? (
                      selected.observations.map((obs, idx) => (
                        <tr key={obs.date + idx}>
                          <td>{new Date(obs.date).toLocaleDateString('en-US', { 
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}</td>
                          <td>{obs.value !== '.' ? Number(obs.value).toLocaleString() : 'N/A'}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={2} style={{ textAlign: 'center', color: '#888' }}>No data found.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default DashboardIndicators;
