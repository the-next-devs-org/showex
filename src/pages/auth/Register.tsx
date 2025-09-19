import { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";


function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    country: "Pakistan",
    email: "",
    confirmEmail: "",
    password: "",
    emailUpdates: false,
    agreeTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register with:", form);
};

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
      {/* Centered Register Card */}
      <form
        onSubmit={handleSubmit}
        className="w-100 px-5  py-4 shadow mainLoginRegtrCardColor"
        style={{ maxWidth: "700px", borderRadius: "12px" }}
      >
        {/* Logo */}
        <div className="mainLinkDiv d-flex align-items-center justify-content-center">
          <Link to="/" className="text-decoration-none d-flex align-items-center justify-content-center mb-4">
            <div className="d-flex align-items-center justify-content-center mb-4 fs-25 fw-bold">
              <span style={{ color: "#fff" }}>Show</span>
              <span style={{ color: "#00E8CC" }}>EX</span>
            </div>
          </Link>
        </div>

        {/* Inputs in Grid */}
        <div className="row g-3">
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
            />
          </div>
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
            />
          </div>

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
            />
          </div>

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
            />
          </div>

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
              I agree to receive email updates about Showex products, services,
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
          disabled={!form.agreeTerms}
        >
          Register
        </button>

        <div className="text-center mt-3 small text-white">
          <span>Already have a Showex account? </span>
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
