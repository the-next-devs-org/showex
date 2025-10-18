import React, { useState, useEffect } from 'react';
import './DashboardSettings.css';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

const DashboardSettings: React.FC = () => {
  const { t } = useTranslation();
  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    emailaddress: '',
    country: '',
  });

  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);
  const apiBase = import.meta.env.VITE_SHOXEZ_API_BACKEND_URL || '';

  useEffect(() => {
    // Load user data from localStorage
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user) {
      setUserData({
        firstname: user.firstname || '',
        lastname: user.lastname || '',
        username: user.username || '',
        emailaddress: user.emailaddress || '',
        country: user.country || '',
      });
    }
  }, []);

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const token = user?.token;

      const response = await fetch(`${apiBase}/updateProfile/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const updatedUser = await response.json();
      // Update localStorage with new user data
      localStorage.setItem('user', JSON.stringify({
        ...user,
        ...updatedUser.user
      }));

      toast.success('Profile updated successfully!');
    } catch (error) {
      toast.error('Failed to update profile');
      console.error('Update error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      toast.error('New passwords do not match!');
      return;
    }

    try {
      setLoading(true);
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const token = user?.token;

      const response = await fetch(`${apiBase}/changePassword/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          currentPassword: passwords.currentPassword,
          newPassword: passwords.newPassword,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update password');
      }

      toast.success('Password updated successfully!');
      setPasswords({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    } catch (error) {
      toast.error('Failed to update password');
      console.error('Password update error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="ds-root">
        <ToastContainer />
        <div className="ds-header">
          <h1 className="ds-title">{t('dashboard.settings.title')}</h1>
          <p className="ds-subtitle">{t('dashboard.settings.subtitle')}</p>
        </div>

        <div className="ds-grid">
          <div className="ds-card">
            <h2 className="ds-card-title">{t('dashboard.settings.profile.title')}</h2>
            <form className="ds-form" onSubmit={handleProfileUpdate}>
              <div className="ds-field">
                <label className="ds-label">{t('dashboard.settings.profile.firstName')}</label>
                <input 
                  className="ds-input" 
                  type="text" 
                  value={userData.firstname}
                  onChange={(e) => setUserData({...userData, firstname: e.target.value})}
                />
              </div>
              <div className="ds-field">
                <label className="ds-label">{t('dashboard.settings.profile.lastName')}</label>
                <input 
                  className="ds-input" 
                  type="text" 
                  value={userData.lastname}
                  onChange={(e) => setUserData({...userData, lastname: e.target.value})}
                />
              </div>
              <div className="ds-field">
                <label className="ds-label">{t('dashboard.settings.profile.username')}</label>
                <input 
                  className="ds-input" 
                  type="text" 
                  value={userData.username}
                  onChange={(e) => setUserData({...userData, username: e.target.value})}
                />
              </div>
              <div className="ds-field">
                <label className="ds-label">{t('dashboard.settings.profile.email')}</label>
                <input 
                  className="ds-input" 
                  type="email" 
                  value={userData.emailaddress}
                  onChange={(e) => setUserData({...userData, emailaddress: e.target.value})}
                />
              </div>
              <div className="ds-field">
                <label className='ds-label'>{t('dashboard.settings.profile.country')}</label>
                <select
                  name="country"
                  className="form-select mainLoginFntp"
                  style={{ borderRadius: '6px' }}
                  value={userData.country}
                  required
                  onChange={e => setUserData({ ...userData, country: e.target.value })}
                >
                  <option value="">{t('dashboard.settings.profile.selectCountry')}</option>
                  <option value="Pakistan">{t('dashboard.settings.profile.countries.pakistan')}</option>
                  <option value="United States">{t('dashboard.settings.profile.countries.us')}</option>
                  <option value="United Kingdom">{t('dashboard.settings.profile.countries.uk')}</option>
                  <option value="Canada">{t('dashboard.settings.profile.countries.canada')}</option>
                  <option value="India">{t('dashboard.settings.profile.countries.india')}</option>
                </select>
              </div>
              <button className="ds-btn" type="submit" disabled={loading}>
                {loading ? t('dashboard.settings.buttons.saving') : t('dashboard.settings.buttons.saveChanges')}
              </button>
            </form>
          </div>

          <div className="ds-card">
            <h2 className="ds-card-title">{t('dashboard.settings.security.title')}</h2>
            <form className="ds-form" onSubmit={handlePasswordUpdate}>
              <div className="ds-field">
                <label className="ds-label">{t('dashboard.settings.security.currentPassword')}</label>
                <input 
                  className="ds-input" 
                  type="password"
                  value={passwords.currentPassword}
                  onChange={(e) => setPasswords({...passwords, currentPassword: e.target.value})}
                />
              </div>
              <div className="ds-field">
                <label className="ds-label">{t('dashboard.settings.security.newPassword')}</label>
                <input 
                  className="ds-input" 
                  type="password"
                  value={passwords.newPassword}
                  onChange={(e) => setPasswords({...passwords, newPassword: e.target.value})}
                />
              </div>
              <div className="ds-field">
                <label className="ds-label">{t('dashboard.settings.security.confirmPassword')}</label>
                <input 
                  className="ds-input" 
                  type="password"
                  value={passwords.confirmPassword}
                  onChange={(e) => setPasswords({...passwords, confirmPassword: e.target.value})}
                />
              </div>
              <button className="ds-btn" type="submit" disabled={loading}>
                {loading ? t('dashboard.settings.buttons.updating') : t('dashboard.settings.buttons.updatePassword')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardSettings;
