import EpisodeRecommendations from './components/EpisodeRecommendations';

const App = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <h1 className="text-xl font-bold text-center">🚀 Rick and Morty Episodes!</h1>
      </div>
      <EpisodeRecommendations />
    </div>
  );
};

export default App;
