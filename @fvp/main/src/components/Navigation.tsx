interface NavigationProps {
  githubUrl: string;
}

export function Navigation({ githubUrl }: NavigationProps ) {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-dark" href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}