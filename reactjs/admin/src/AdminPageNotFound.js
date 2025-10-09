export default function AdminPageNotFound() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
                        <div className="text-center">
                            <h1 className="display-1 fw-bold text-danger">404</h1>
                            <h2 className="mb-3">Page Not Found</h2>
                            <p className="text-muted mb-4">
                                Sorry, the page you are looking for doesn’t exist or has been moved.
                            </p>
                            <a href="/" className="btn btn-primary">
                                Back to Home
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}