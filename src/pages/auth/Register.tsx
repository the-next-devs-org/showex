import { useState } from "react";
import { Link } from "react-router-dom";

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
        // API call yahan karni hogi
    };

    return (
        <div className="container-fluid vh-100 p-0">
            <div
                className="row h-100 g-0 mx-auto"
                style={{ maxWidth: "1000px" }}
            >
                {/* Left side */}
                <div className="col-lg-6 p-5">
                    <div className="h-100 d-flex flex-column">
                        <div className="mb-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <div className="d-flex align-items-center">
                                    <img
                                        src="https://zemez.io/html/wp-content/uploads/sites/9/2017/10/logo.png"
                                        style={{ height: "30px" }}
                                        alt=""
                                    />
                                    <span className="fs-3 fw-bold text-dark ms-2">
                                        Showex
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-grow-1">
                            <div className="mb-5">
                                <h1 className="display-4 fw-normal text-dark mb-2 mainLoginFnt">
                                    Showex News
                                </h1>
                                <h4 className="text-muted mb-2 mainLoginFntp">
                                    Unlimited access to unbiased news
                                </h4>
                            </div>

                            <div className="mb-4">
                                <h6 className="text-dark mb-3 fontthirteensize">
                                    Free registration on Showex.com gives you:
                                </h6>

                                {[
                                    "Unlimited access to Showex.com",
                                    "Industry-focused newsletters, delivered to your inbox",
                                    "Access to My News, your personalized news feed",
                                    "News at your fingertips with the Showex App",
                                ].map((item, i) => (
                                    <div
                                        className="mb-1 d-flex align-items-start"
                                        key={i}
                                    >
                                        <div
                                            className="rounded-circle me-3 flex-shrink-0 mt-1"
                                            style={{
                                                width: "15px",
                                                height: "15px",
                                                backgroundColor: "#22c55e",
                                            }}
                                        >
                                            <div className="d-flex align-items-center justify-content-center h-100">
                                                <span
                                                    className="text-white"
                                                    style={{ fontSize: "10px" }}
                                                >
                                                    ✓
                                                </span>
                                            </div>
                                        </div>
                                        <span className="text-muted fontTwelveSize">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <hr className="mb-4" />

                            <div className="mb-4">
                                <p className="text-muted mb-2 mainLoginFntp">
                                    Are you a Thomson Showex legal customer?{" "}
                                    <a
                                        href="#"
                                        className="text-decoration-underline text-dark mainLoginFntp"
                                    >
                                        Learn more
                                    </a>
                                </p>

                                <div className="d-flex align-items-center">
                                    <img
                                        src="https://zemez.io/html/wp-content/uploads/sites/9/2017/10/logo.png"
                                        alt="LSEG Official Data Partner"
                                        className="me-2"
                                        style={{ height: "30px" }}
                                    />
                                </div>
                                <div className="text-muted fontTwelveSize">
                                    <span>Already have a Showex account? </span>
                                    <Link
                                        to="/signin"
                                        className="text-decoration-underline text-dark fw-medium fontTwelveSize"
                                    >
                                        Sign in
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side - Form */}
                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center p-4">
                    <form
                        onSubmit={handleSubmit}
                        className="w-100 px-4 bg-white py-4"
                        style={{ maxWidth: "400px", borderRadius: "10px" }}
                    >
                        <div className="mb-2">
                            <div className="row g-2">
                                <div className="col-6">
                                    <label className="form-label text-dark fw-medium mainLoginFntp">
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
                                <div className="col-6">
                                    <label className="form-label text-dark fw-medium mainLoginFntp" >
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
                            </div>
                        </div>

                        <div className="mb-2">
                            <label className="form-label text-dark fw-medium mainLoginFntp">
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
                                <option value="United States">
                                    United States
                                </option>
                                <option value="United Kingdom">
                                    United Kingdom
                                </option>
                                <option value="Canada">Canada</option>
                                <option value="India">India</option>
                            </select>
                        </div>

                        <div className="mb-2">
                            <label className="form-label text-dark fw-medium mainLoginFntp">
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

                        <div className="mb-2">
                            <label className="form-label text-dark fw-medium mainLoginFntp">
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

                        <div className="mb-2">
                            <label className="form-label text-dark fw-medium mainLoginFntp">
                                Password
                            </label>
                            <p className="small text-muted mb-2 fontTenSize">
                                Password must include at least:
                            </p>
                            <div className="row mb-2">
                                <div className="col-6">
                                    <small className="text-muted fontTenSize">
                                        • 8 characters
                                    </small>
                                    <br />
                                    <small className="text-muted fontTenSize">• 1 number</small>
                                </div>
                                <div className="col-6">
                                    <small className="text-muted fontTenSize">
                                        • Upper and lowercase letters
                                    </small>
                                    <br />
                                    <small className="text-muted fontTenSize">
                                        • 1 special character
                                    </small>
                                </div>
                            </div>
                            <div className="position-relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    className="form-control"
                                    value={form.password}
                                    onChange={handleChange}
                                    style={{
                                        borderRadius: "6px",
                                        paddingRight: "40px",
                                    }}
                                />
                                <button
                                    type="button"
                                    className="btn position-absolute top-50 end-0 translate-middle-y pe-3 border-0 bg-transparent"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                            <line
                                                x1="1"
                                                y1="1"
                                                x2="23"
                                                y2="23"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="mb-2">
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
                                    className="form-check-label text-muted small mainLoginFntp"
                                    htmlFor="emailUpdates"
                                >
                                    I agree to receive email updates about
                                    Showex products, services, surveys, and
                                    events.
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
                                    className="form-check-label text-muted small mainLoginFntp"
                                    htmlFor="agreeTerms"
                                >
                                    I agree to the{" "}
                                    <a
                                        href="#"
                                        className="text-decoration-underline text-dark mainLoginFntp"
                                    >
                                        Terms & Conditions
                                    </a>{" "}
                                    and{" "}
                                    <a
                                        href="#"
                                        className="text-decoration-underline text-dark mainLoginFntp"
                                    >
                                        Privacy Statement
                                    </a>
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-dark w-100 py-2 fw-medium"
                            style={{ borderRadius: "6px" }}
                            disabled={!form.agreeTerms}
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
