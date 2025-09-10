import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");

    const handleSubmit = () => {
        console.log("Email submitted:", email);
        // API call would go here
    };

    const handleOneTimeLink = () => {
        if (email) {
            console.log("Sending one-time link to:", email);
            // API call for one-time link
        }
    };

    const handleGoogleLogin = () => {
        console.log("Continue with Google");
        // Google OAuth logic
    };


   return (
  <div className="container-fluid vh-100 p-0">
    <div
      className="row h-100 g-0 mx-auto"
      style={{ maxWidth: "1000px" }}
    >
      {/* Left side - Welcome message */}
      <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center">
        <div style={{ maxWidth: "400px" }}>
          {/* Showex Logo */}
          <div className="d-flex align-items-center mb-5">
            <img
              src="https://zemez.io/html/wp-content/uploads/sites/9/2017/10/logo.png"
              style={{ height: "30px" }}
              alt=""
            />
            <span className="fs-3 fw-bold text-dark">Showex</span>
          </div>

          <h4 className="mainLoginFnt display-1 fw-light text-secondary mb-5">
            Welcome back
          </h4>

          <div className="small text-muted">
            <p className="mb-3 mainLoginFntp">
              By continuing with the sign in or registration, you agree to our{" "}
              <a
                href="#"
                className="text-primary text-decoration-underline"
              >
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-primary text-decoration-underline"
              >
                Privacy Statement
              </a>
            </p>

            <hr className="my-3" />

            <p className="mb-0 mainLoginFntp">
              Not signed up yet?{" "}
              <Link
                to="/register"
                className="text-primary text-decoration-underline fw-medium"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
        <div
          className="w-100 px-4 bg-white py-4"
          style={{ maxWidth: "400px", borderRadius: "10px" }}
        >
          {/* Mobile Showex Logo */}
          <div className="d-lg-none d-flex align-items-center justify-content-center mb-4">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center me-2"
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#f97316",
              }}
            >
              <div
                className="bg-white rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "24px", height: "24px" }}
              >
                <div
                  className="rounded-circle"
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: "#f97316",
                  }}
                ></div>
              </div>
            </div>
            <span className="fs-3 fw-bold text-dark">Showex</span>
          </div>

          <div className="text-center mb-4">
            <p className="text-muted mb-4 mainLoginFntp">
              Enter your email address and continue with your password or get a
              one-time sign in link.
            </p>
          </div>

          <div className="mb-4">
            <div className="mb-3">
              <label className="form-label fw-medium text-dark mainLoginFntp">
                Email address
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  border: "1px solid #dee2e6",
                  borderRadius: "6px",
                  fontSize: "12px",
                }}
              />
            </div>

            <button
              onClick={handleOneTimeLink}
              className="btn btn-outline-secondary w-100 mb-3 py-2 mainLoginFntp"
              style={{ borderRadius: "6px" }}
            >
              Email a one-time sign in link
            </button>

            <button
              onClick={handleSubmit}
              className="btn btn-dark w-100 py-2 fw-medium mb-4 mainLoginFntp"
              style={{ borderRadius: "6px" }}
            >
              Next
            </button>
          </div>

          <div className="position-relative mb-4">
            <hr className="my-3" />
            <span className="position-absolute top-50 start-50 translate-middle px-2 bg-light text-muted small">
              or
            </span>
          </div>

          <div className="text-center text-muted mb-3 mainLoginFntp">
            <small>Sign in or register with your Google or Apple account.</small>
          </div>

          <div className="d-grid gap-2">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline-secondary d-flex align-items-center justify-content-center py-2 mainLoginFntp"
              style={{ borderRadius: "6px" }}
            >
              <svg
                className="me-2"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#4285f4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34a853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#fbbc05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#ea4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="fw-medium">Continue with Google</span>
            </button>
          </div>

          {/* Mobile terms */}
          <div className="d-lg-none text-center mt-4">
            <div className="small text-muted">
              <p className="mb-2">
                By continuing with the sign in or registration, you agree to our{" "}
                <a href="#" className="text-primary text-decoration-underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary text-decoration-underline">
                  Privacy Statement
                </a>
              </p>
              <p className="mb-0">
                Not signed up yet?{" "}
                <a
                  href="#"
                  className="text-primary text-decoration-underline fw-medium"
                >
                  Register here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

}

export default Login;