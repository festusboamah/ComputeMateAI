import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            <i className="bi bi-cpu-fill me-2"></i>
            ComputeMate AI
          </a>

          <div>
            <Link to="/login" className="btn btn-light me-2">
              Student Login
            </Link>

            <Link to="/login" className="btn btn-warning">
              Teacher Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container text-center mt-5">
        <h1 className="display-2 fw-bold text-dark">
          AI-Powered Learning Assistant
        </h1>

        <p className="lead mt-3">
          Helping Ghanaian Junior High School teachers and students teach and
          learn Computing smarter.
        </p>

        <Link
          to="/login"
          className="btn btn-primary btn-lg mt-4 me-3"
        >
          Get Started
        </Link>

        <button className="btn btn-outline-primary btn-lg mt-4">
          Learn More
        </button>
      </div>
    </>
  );
}

export default Home;