export default function LoginForm() {
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
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>

              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}