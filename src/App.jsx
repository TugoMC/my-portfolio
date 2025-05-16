import SidebarWithSearch from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { useTheme } from './components/ThemeContext';

function App() {
  const { darkMode } = useTheme();

  return (
    <div className={`flex ${darkMode ? 'dark' : ''}`}>
      <SidebarWithSearch />
      {/* Ajouté un padding-left pour le contenu principal qui s'adapte selon la taille d'écran */}
      <div className="w-full md:pl-64">
        <MainContent />
      </div>
    </div>
  );
}

export default App;