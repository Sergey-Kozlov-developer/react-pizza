import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={480}
    viewBox="0 0 280 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="130" cy="133" r="131" />
    <rect x="-1" y="282" rx="15" ry="15" width="280" height="26" />
    <rect x="5" y="320" rx="0" ry="0" width="280" height="89" />
    <rect x="4" y="426" rx="9" ry="9" width="95" height="30" />
    <rect x="122" y="423" rx="20" ry="20" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
