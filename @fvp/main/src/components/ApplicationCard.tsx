interface ApplicationCardProps {
  name: string;
  description: string;
  urls: {
    app: string;
    docs: string;
    website: string;
  };
  imgUrl: string;
}

export function ApplicationCard({ name, description, urls, imgUrl }: ApplicationCardProps) {
  return (
    <div className='card'>
      <div className='card-content'>
        <div className='media'>
          <div className='media-left'>
            <figure className="image is-48x48">
              <img src={imgUrl} alt={name} />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{name}</p>
          </div>
        </div>
        <div className="content">
          {description}
          <br />
        </div>
      </div>
      <footer className="card-footer">
        <a href={urls.app} className="card-footer-item">Go</a>
        <a href={urls.website} className="card-footer-item">Official website</a>
        <a href={urls.docs} className="card-footer-item">See docs</a>
      </footer>
    </div>
  );
}