export default function About(props) {
  return (
    <>
      <h3 className="text-5xl mb-6">Github Finder</h3>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details.
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Author:{" "}
        <span className="text-white">
          {" "}
          <a href="https://github.com/hyc0812">Yong</a>
        </span>
      </p>
    </>
  );
}
