import React, { useEffect, useMemo, useState } from 'react';
import './DashboardUsers.css';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import MiniLoader from '../../../components/MiniLoader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type User = {
  id: number;
  firstname?: string;
  lastname?: string;
  username?: string;
  emailaddress?: string;
  country?: string;
  createdAt?: string;
  updatedAt?: string;
};

const PAGE_SIZE = 10;

const DashboardUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const apiBase = import.meta.env.VITE_SHOXEZ_API_BACKEND_URL || '';

  const apiGet = async (path: string) => {
    const res = await fetch(`${apiBase}${path}`);
    if (!res.ok) {
      const txt = await res.text();
      throw new Error(txt || res.statusText || 'API GET failed');
    }
    const contentType = res.headers.get('content-type') || '';
    if (contentType.includes('application/json')) return res.json();
    return (await res.text()) as any;
  };

  const apiDelete = async (path: string) => {
    const res = await fetch(`${apiBase}${path}`, { method: 'DELETE' });
    if (!res.ok) {
      const txt = await res.text();
      throw new Error(txt || res.statusText || 'API DELETE failed');
    }
    return true;
  };

  const apiPost = async (path: string, body: any) => {
    const res = await fetch(`${apiBase}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const txt = await res.text();
      throw new Error(txt || res.statusText || 'API POST failed');
    }
    const contentType = res.headers.get('content-type') || '';
    if (contentType.includes('application/json')) return res.json();
    return (await res.text()) as any;
  };

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
  const data = await apiGet('/users');
  if (!mounted) return;
  const list: User[] = Array.isArray(data) ? data : data?.users || [];
        setUsers(list);
      } catch (err: any) {
    setError(err?.message || 'Failed to load users');
      } finally {
        if (mounted) setLoading(false);
      }
    };

    load();
    return () => {
      mounted = false;
    };
  }, [apiBase]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return users;
    return users.filter((u) => {
      const full = [u.firstname, u.lastname, u.username, u.emailaddress]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return full.includes(q);
    });
  }, [users, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [totalPages]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  const handleDelete = async (id?: number) => {
    if (!id) return;
    if (!confirm('Are you sure you want to delete this user?')) return;
    try {
      setLoading(true);
      await apiDelete(`/userdelete/${id}`);
      setUsers((prev) => prev.filter((u) => u.id !== id));
      toast.success('User deleted successfully!');
    } catch (err: any) {
      setError(err?.message || 'Delete failed');
    } finally {
      setLoading(false);
    }
  };

  // Create user form state
  const [showCreate, setShowCreate] = useState(false);
  const [creating, setCreating] = useState(false);
  const [newUser, setNewUser] = useState({ firstname: '', lastname: '', username: '', emailaddress: '', country: '', password: '' });
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [updating, setUpdating] = useState(false);

  const handleCreate = async (e?: React.FormEvent) => {
    e?.preventDefault();
    // basic validation
    if (!newUser.firstname || !newUser.emailaddress || !newUser.password) {
      setError('Firstname, email, and password are required');
      return;
    }
    try {
      setCreating(true);
      setError(null);
      const created = await apiPost('/register', newUser);
      // Assume API returns created user object
      const createdUser: User = created && created.id ? created : created?.user || created;
      setUsers((prev) => [createdUser, ...prev]);
      toast.success('User created successfully!');
      setNewUser({ firstname: '', lastname: '', username: '', emailaddress: '', country: '', password: '' });
      setShowCreate(false);
    } catch (err: any) {
      setError(err?.message || 'Create failed');
    } finally {
      setCreating(false);
    }
  };

  const apiPut = async (path: string, body: any) => {
    const res = await fetch(`${apiBase}${path}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const txt = await res.text();
      throw new Error(txt || res.statusText || 'API PUT failed');
    }
    const contentType = res.headers.get('content-type') || '';
    if (contentType.includes('application/json')) return res.json();
    return (await res.text()) as any;
  };

  return (
    <DashboardLayout>
      <div className="dashboard-users">
        <ToastContainer />
        <div className="users-header">
          <h1>Users Management</h1>
          <p>Manage and monitor user accounts</p>
        </div>

        <div className="users-actions">
          <div className="search-users">
            <input
              type="text"
              placeholder="Search users..."
              className="search-input"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />
          </div>

          <button className="add-user-button" onClick={() => setShowCreate((s) => !s)}>
            {showCreate ? 'Cancel' : 'Add New User'}
          </button>
        </div>

        {showCreate && (
          <div style={{ margin: '16px 0', padding: 16, background: '#fff', borderRadius: 8 }}>
            <form onSubmit={handleCreate}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="ds-field">
                  <label className='ds-label'>First Name</label>
                  <input type="text" className="ds-input" required value={newUser.firstname} onChange={e => setNewUser({ ...newUser, firstname: e.target.value })} />
                </div>
                <div className="ds-field">
                  <label className='ds-label'>Last Name</label>
                  <input type="text" className="ds-input" required value={newUser.lastname} onChange={e => setNewUser({ ...newUser, lastname: e.target.value })} />
                </div>
                <div className="ds-field">
                  <label className='ds-label'>Username</label>
                  <input type="text" className="ds-input" required value={newUser.username} onChange={e => setNewUser({ ...newUser, username: e.target.value })} />
                </div>
                <div className="ds-field">
                  <label className='ds-label'>Email</label>
                  <input type="email" className="ds-input" required value={newUser.emailaddress} onChange={e => setNewUser({ ...newUser, emailaddress: e.target.value })} />
                </div>
                <div className="ds-field">
                  <label className='ds-label'>Password</label>
                  <input type="password" className="ds-input" required value={newUser.password} onChange={e => setNewUser({ ...newUser, password: e.target.value })} />
                </div>
                <div className="ds-field">
                  <label className='ds-label'>Country</label>
                  <select
                    name="country"
                    className="form-select mainLoginFntp"
                    style={{ borderRadius: '6px' }}
                    value={newUser.country}
                    required
                    onChange={e => setNewUser({ ...newUser, country: e.target.value })}
                  >
                    <option value="">Select Country</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="India">India</option>
                  </select>
                </div>
              </div>
              <div style={{ marginTop: 16 }}>
                <button type="submit" className="add-user-button" disabled={creating}>
                  {creating ? 'Creating...' : 'Create User'}
                </button>
              </div>
            </form>
          </div>
        )}

        {editingUser && (
          <div style={{ margin: '16px 0', padding: 16, background: '#fff', borderRadius: 8 }}>
            {/* <h3>Edit User</h3> */}
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  setUpdating(true);
                  const updated = await apiPut(`/profileUpdate/${editingUser.id}`, editingUser);
                  setUsers((prev) =>
                    prev.map((u) => (u.id === editingUser.id ? { ...u, ...updated.user } : u))
                  );
                  toast.success('User updated successfully!');
                  setEditingUser(null);
                } catch (err: any) {
                  setError(err?.message || 'Update failed');
                } finally {
                  setUpdating(false);
                }
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="ds-field">
                  <label className='ds-label'>First Name</label>
                  <input
                    type="text"
                    className="ds-input"
                    value={editingUser.firstname || ''}
                    onChange={(e) => setEditingUser({ ...editingUser, firstname: e.target.value })}
                  />
                </div>
                <div className="ds-field">
                  <label className='ds-label'>Last Name</label>
                  <input
                    type="text"
                    className="ds-input"
                    value={editingUser.lastname || ''}
                    onChange={(e) => setEditingUser({ ...editingUser, lastname: e.target.value })}
                  />
                </div>
                <div className="ds-field">
                  <label className='ds-label'>Username</label>
                  <input
                    type="text"
                    className="ds-input"
                    value={editingUser.username || ''}
                    onChange={(e) => setEditingUser({ ...editingUser, username: e.target.value })}
                  />
                </div>
                <div className="ds-field">
                  <label className='ds-label'>Email</label>
                  <input
                    type="email"
                    className="ds-input"
                    value={editingUser.emailaddress || ''}
                    onChange={(e) => setEditingUser({ ...editingUser, emailaddress: e.target.value })}
                  />
                </div>
                <div className="ds-field">
                  <label className='ds-label'>Password (leave blank to keep same)</label>
                  <input
                    type="password"
                    className="ds-input"
                    onChange={() => {}}
                  />
                </div>
                <div className="ds-field">
                  <label className='ds-label'>Country</label>
                  <select
                    name="country"
                    className="form-select"
                    value={editingUser.country || ''}
                    onChange={(e) => setEditingUser({ ...editingUser, country: e.target.value })}
                  >
                    <option value="">Select Country</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="India">India</option>
                  </select>
                </div>
              </div>
              <div style={{ marginTop: 16 }}>
                <button type="submit" className="add-user-button" disabled={updating}>
                  {updating ? 'Updating...' : 'Update User'}
                </button>
                <button
                  type="button"
                  className="add-user-button"
                  style={{ marginLeft: 8, background: '#999' }}
                  onClick={() => setEditingUser(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="users-grid">
          <div className="users-table">
            {loading ? (
              <MiniLoader />
            ) : error ? (
              <div style={{ padding: 20, color: 'red' }}>{error}</div>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th className='dashboarduserssth'>Name</th>
                    <th className='dashboarduserssth'>Email</th>
                    <th className='dashboarduserssth'>Username</th>
                    <th className='dashboarduserssth'>Country</th>
                    <th className='dashboarduserssth'>Created</th>
                    <th className='dashboarduserssth'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pageItems.map((user) => (
                    <tr key={user.id}>
                      <td className='dashboardusersstd'>
                        <div className="user-info">
                          <div className="user-avatar">
                            {(user.firstname || user.lastname || user.username || 'U').charAt(0)}
                          </div>
                          <span>{`${user.firstname || ''} ${user.lastname || ''}`.trim() || user.username}</span>
                        </div>
                      </td>
                      <td className='dashboardusersstd'>{user.emailaddress}</td>
                      <td className='dashboardusersstd'>{user.username}</td>
                      <td className='dashboardusersstd'>{user.country}</td>
                      <td className='dashboardusersstd'>{user.createdAt ? new Date(user.createdAt).toLocaleString() : ''}</td>
                      <td className='dashboardusersstd'>
                        <div className="user-actions">
                          <button className="action-button edit" onClick={() => setEditingUser(user)}>Edit</button>
                          <button className="action-button delete" onClick={() => handleDelete(user.id)}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        <div className="users-pagination">
          <button className="pagination-button" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
            Previous
          </button>
          <div className="pagination-numbers">
            {Array.from({ length: totalPages }, (_, i) => i + 1).slice(0, 10).map((p) => (
              <button key={p} className={p === page ? 'active' : ''} onClick={() => setPage(p)}>
                {p}
              </button>
            ))}
            {totalPages > 10 && <span>...</span>}
            {totalPages > 10 && (
              <button onClick={() => setPage(totalPages)}>{totalPages}</button>
            )}
          </div>
          <button className="pagination-button" onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
            Next
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardUsers;