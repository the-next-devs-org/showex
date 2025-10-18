'use client'

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

type FormState = {
  firstName: string;
  lastName: string;
  country: string;
  email: string;
  confirmEmail: string;
  password: string;
  emailUpdates: boolean;
  agreeTerms: boolean;
};

function Register() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    country: "",
    email: "",
    confirmEmail: "",
    password: "",
    emailUpdates: false,
    agreeTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const API_BACKEND_URL = import.meta.env.VITE_SHOXEZ_API_BACKEND_URL;


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic validation
    if (form.email !== form.confirmEmail) {
      setError("Email and Confirm Email do not match.");
      return;
    }

    if (!form.agreeTerms) {
      setError("You must agree to the terms.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${API_BACKEND_URL}/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: form.firstName,
            firstname: form.firstName,
            lastname: form.lastName,
            country: form.country,
            emailaddress: form.email,
            password: form.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Registration failed. Please try again.");
      } else {
        console.log("Registered:", data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/profile");
      }
    } catch (err) {
      setError("Network error. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
      <form
        onSubmit={handleSubmit}
        className="w-100 px-5 py-4 shadow mainLoginRegtrCardColor"
        style={{ maxWidth: "700px", borderRadius: "12px" }}
      >
        <div className="mainLinkDiv d-flex align-items-center justify-content-center">
          <Link to="/" className="text-decoration-none d-flex align-items-center justify-content-center mb-4">
            <div className="d-flex align-items-center justify-content-center mb-4 fs-25 fw-bold">
              <span style={{ color: "#fff" }}>Shox</span>
              <span style={{ color: "#00E8CC" }}>EZ</span>
            </div>
          </Link>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <div className="row g-3">
          {/* First Name */}
          <div className="col-md-6">
            <label className="form-label text-white fw-medium mainLoginFntp">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              className="form-control mainLoginFntp"
              value={form.firstName}
              onChange={handleChange}
              style={{ borderRadius: "6px" }}
              required
            />
          </div>

          {/* Last Name */}
          <div className="col-md-6">
            <label className="form-label text-white fw-medium mainLoginFntp">
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              className="form-control mainLoginFntp"
              value={form.lastName}
              onChange={handleChange}
              style={{ borderRadius: "6px" }}
              required
            />
          </div>

          {/* Country */}
          <div className="col-md-6">
            <label className="form-label text-white fw-medium mainLoginFntp">
              Country / territory
            </label>
            <select
              name="country"
              className="form-select mainLoginFntp"
              value={form.country}
              onChange={handleChange}
              style={{ borderRadius: "6px" }}
            >
              <option value="Pakistan">Pakistan</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="India">India</option>
            </select>
          </div>

          {/* Email */}
          <div className="col-md-6">
            <label className="form-label text-white fw-medium mainLoginFntp">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control mainLoginFntp"
              value={form.email}
              onChange={handleChange}
              style={{ borderRadius: "6px" }}
              required
            />
          </div>

          {/* Confirm Email */}
          <div className="col-md-6">
            <label className="form-label text-white fw-medium mainLoginFntp">
              Confirm email address
            </label>
            <input
              type="email"
              name="confirmEmail"
              className="form-control mainLoginFntp"
              value={form.confirmEmail}
              onChange={handleChange}
              style={{ borderRadius: "6px" }}
              required
            />
          </div>

          {/* Password */}
          <div className="col-md-6">
            <label className="form-label text-white fw-medium mainLoginFntp">
              Password
            </label>
            <div className="position-relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="form-control"
                value={form.password}
                onChange={handleChange}
                style={{ borderRadius: "6px", paddingRight: "40px" }}
                required
              />
              <button
                type="button"
                className="btn position-absolute top-50 end-0 translate-middle-y pe-3 border-0 bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Checkboxes */}
        <div className="mt-3">
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="emailUpdates"
              id="emailUpdates"
              checked={form.emailUpdates}
              onChange={handleChange}
            />
            <label
              className="form-check-label text-white small mainLoginFntp"
              htmlFor="emailUpdates"
            >
              I agree to receive email updates about ShoxEz products, services,
              surveys, and events.
            </label>
          </div>

          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              name="agreeTerms"
              id="agreeTerms"
              checked={form.agreeTerms}
              onChange={handleChange}
            />
            <label
              className="form-check-label text-white small mainLoginFntp"
              htmlFor="agreeTerms"
            >
              I agree to the{" "}
              <a href="#" className="text-decoration-underline text-white">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-decoration-underline text-white">
                Privacy Statement
              </a>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-dark w-100 py-2 fw-medium mainSiteBgColor"
          style={{ borderRadius: "6px" }}
          disabled={!form.agreeTerms || loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <div className="text-center mt-3 small text-white">
          <span>Already have a ShoxEz account? </span>
          <Link
            to="/signin"
            className="text-decoration-none mainSiteColor fw-medium"
          >
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
