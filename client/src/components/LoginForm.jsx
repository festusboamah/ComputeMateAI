import { useState } from "react";
import { loginUser } from "../api/authApi";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await loginUser({
        email,
        password,
      });

      console.log(response.data);
      alert("Login successful!");
    } catch (error) {
      console.error(error);
      alert("Login failed.");
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-5">
        <div className="card shadow-lg border-0 rounded-4">
          <div className="card-body p-5">

            <h2 className="text-center fw-bold text-primary mb-2">
              ComputeMate AI
            </h2>

            <p className="text-center text-muted mb-4">
              Sign in to continue
            </p>

            <div className="mb-3">
              <label className="form-label">Email Address</label>

              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>

              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="remember"
              />

              <label
                className="form-check-label"
                htmlFor="remember"
              >
                Remember me
              </label>
            </div>

            <button
              className="btn btn-primary w-100 mb-3"
              onClick={handleLogin}
            >
              Login
            </button>

            <p className="text-center">
              <a href="#" className="text-decoration-none">
                Forgot Password?
              </a>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}