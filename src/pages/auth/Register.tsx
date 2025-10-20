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
  const API_BACKEND_URL = import.meta.env.VITE_SHOXEZ_API_BACKEND_URL || 'https://shoxez.com/api';


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
        navigate("/dashboard");
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
              <option value="">Select Country</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
              <option value="Botswana">Botswana</option>
              <option value="Brazil">Brazil</option>
              <option value="Brunei">Brunei</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cabo Verde">Cabo Verde</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Central African Republic">Central African Republic</option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option>
              <option value="Congo, Republic of the">Congo, Republic of the</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Eswatini">Eswatini</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Greece">Greece</option>
              <option value="Grenada">Grenada</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea-Bissau">Guinea-Bissau</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Honduras">Honduras</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran">Iran</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Korea, North">Korea, North</option>
              <option value="Korea, South">Korea, South</option>
              <option value="Kosovo">Kosovo</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Laos">Laos</option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libya">Libya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mexico">Mexico</option>
              <option value="Micronesia">Micronesia</option>
              <option value="Moldova">Moldova</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="North Macedonia">North Macedonia</option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau">Palau</option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Qatar">Qatar</option>
              <option value="Romania">Romania</option>
              <option value="Russia">Russia</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
              <option value="Saint Lucia">Saint Lucia</option>
              <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome and Principe">Sao Tome and Principe</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Serbia">Serbia</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syria">Syria</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Thailand">Thailand</option>
              <option value="Timor-Leste">Timor-Leste</option>
              <option value="Togo">Togo</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad and Tobago">Trinidad and Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Vatican City">Vatican City</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Yemen">Yemen</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
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
