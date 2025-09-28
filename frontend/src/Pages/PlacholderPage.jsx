const PlaceholderPage = ({ route }) => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 capitalize">
          {route} Page
        </h1>
        <p className="text-xl text-gray-600">
          This page is coming soon. Stay tuned for updates!
        </p>
      </div>
    </div>
  );
};

export default PlaceholderPage;