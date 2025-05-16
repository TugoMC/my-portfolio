import { useState, useEffect } from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Switch,
    IconButton,
} from "@material-tailwind/react";
import {
    HomeIcon,
    UserCircleIcon,
    CodeBracketIcon,
    BriefcaseIcon,
    AcademicCapIcon,
    EnvelopeIcon,
    MoonIcon,
    SunIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/solid";
import { useTheme } from './ThemeContext';
import { Github, Linkedin } from "lucide-react";

export function SidebarWithSearch() {
    const { darkMode, toggleDarkMode } = useTheme();
    const [isOpen, setIsOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Gestion du redimensionnement pour la responsivité
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsMobile(true);
                setIsOpen(false);
            } else {
                setIsMobile(false);
                setIsOpen(true);
            }
        };

        // Appel initial pour définir l'état correct lors du chargement
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Détecter la section active lors du défilement
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

            // Trouver la section visible actuellement
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Si la section est visible dans la fenêtre
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
        // Ferme automatiquement le menu sur mobile après un clic
        if (isMobile) {
            setIsOpen(false);
        }
    };

    // Style pour l'élément actif
    const getListItemClass = (section) => {
        const baseClass = darkMode
            ? 'transition-all duration-200 text-white '
            : 'transition-all duration-200 ';

        const activeClass = darkMode
            ? 'bg-blue-900/30 text-blue-300 font-medium border-l-4 border-blue-400'
            : 'bg-blue-50 text-blue-700 font-medium border-l-4 border-blue-500';

        const hoverClass = darkMode
            ? 'hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white'
            : 'hover:bg-blue-50/50 focus:bg-blue-50/50';

        return `${baseClass} ${section === activeSection ? activeClass : hoverClass}`;
    };

    return (
        <>
            {/* Bouton du menu hamburger pour mobile */}
            <div className={`fixed top-4 left-4 z-50 md:hidden`}>
                <IconButton
                    variant="text"
                    size="lg"
                    onClick={toggleSidebar}
                    className={`rounded-full ${darkMode ? 'text-white bg-gray-800' : 'text-blue-gray-900 bg-white'} shadow-md`}
                >
                    {isOpen ? (
                        <XMarkIcon className="h-6 w-6" />
                    ) : (
                        <Bars3Icon className="h-6 w-6" />
                    )}
                </IconButton>
            </div>

            {/* Overlay pour fermer le menu en cliquant en dehors sur mobile */}
            {isMobile && isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed h-screen z-40 transition-all duration-300 ease-in-out 
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                    ${isMobile ? 'w-64' : 'w-64 md:translate-x-0'} 
                    shadow-xl shadow-blue-gray-900/5`}
            >
                <Card className={`h-full rounded-none ${darkMode ? 'bg-gray-900 text-white' : 'bg-white'}`}>


                    {/* Dark Mode Toggle */}
                    <div className="px-4 pb-4 flex items-center justify-between mt-16">
                        <div className="flex items-center gap-2">
                            {darkMode ?
                                <MoonIcon className="h-5 w-5 text-blue-500" /> :
                                <SunIcon className="h-5 w-5 text-amber-500" />
                            }
                            <Typography color={darkMode ? "white" : "blue-gray"} className="font-medium">
                                {darkMode ? "Mode Sombre" : "Mode Clair"}
                            </Typography>
                        </div>
                        <Switch
                            checked={darkMode}
                            onChange={toggleDarkMode}
                            color="blue"
                        />
                    </div>

                    <List className={`overflow-y-auto ${darkMode ? 'text-white' : ''}`}>
                        <ListItem
                            onClick={() => scrollToSection('home')}
                            className={getListItemClass('home')}
                        >
                            <ListItemPrefix>
                                <HomeIcon className={`h-5 w-5 ${activeSection === 'home' ? (darkMode ? 'text-blue-300' : 'text-blue-700') : darkMode ? 'text-white' : ''}`} />
                            </ListItemPrefix>
                            Accueil
                        </ListItem>

                        <ListItem
                            onClick={() => scrollToSection('about')}
                            className={getListItemClass('about')}
                        >
                            <ListItemPrefix>
                                <UserCircleIcon className={`h-5 w-5 ${activeSection === 'about' ? (darkMode ? 'text-blue-300' : 'text-blue-700') : darkMode ? 'text-white' : ''}`} />
                            </ListItemPrefix>
                            À propos
                        </ListItem>

                        <ListItem
                            onClick={() => scrollToSection('skills')}
                            className={getListItemClass('skills')}
                        >
                            <ListItemPrefix>
                                <CodeBracketIcon className={`h-5 w-5 ${activeSection === 'skills' ? (darkMode ? 'text-blue-300' : 'text-blue-700') : darkMode ? 'text-white' : ''}`} />
                            </ListItemPrefix>
                            Compétences
                        </ListItem>

                        <ListItem
                            onClick={() => scrollToSection('projects')}
                            className={getListItemClass('projects')}
                        >
                            <ListItemPrefix>
                                <BriefcaseIcon className={`h-5 w-5 ${activeSection === 'projects' ? (darkMode ? 'text-blue-300' : 'text-blue-700') : darkMode ? 'text-white' : ''}`} />
                            </ListItemPrefix>
                            Projets
                        </ListItem>

                        <ListItem
                            onClick={() => scrollToSection('experience')}
                            className={getListItemClass('experience')}
                        >
                            <ListItemPrefix>
                                <AcademicCapIcon className={`h-5 w-5 ${activeSection === 'experience' ? (darkMode ? 'text-blue-300' : 'text-blue-700') : darkMode ? 'text-white' : ''}`} />
                            </ListItemPrefix>
                            Parcours
                        </ListItem>

                        <ListItem
                            onClick={() => scrollToSection('contact')}
                            className={getListItemClass('contact')}
                        >
                            <ListItemPrefix>
                                <EnvelopeIcon className={`h-5 w-5 ${activeSection === 'contact' ? (darkMode ? 'text-blue-300' : 'text-blue-700') : darkMode ? 'text-white' : ''}`} />
                            </ListItemPrefix>
                            Contact
                        </ListItem>

                        <hr className={`my-2 ${darkMode ? 'border-gray-700' : 'border-blue-gray-50'}`} />

                        <ListItem className={darkMode ? 'hover:bg-gray-800 hover:text-white text-white' : ''}>
                            <ListItemPrefix>
                                <Github className={`h-5 w-5 ${darkMode ? 'text-white' : ''}`} />

                            </ListItemPrefix>
                            <a href="https://github.com/TugoMC" target="_blank" rel="noopener noreferrer" className="w-full">
                                GitHub
                            </a>
                        </ListItem>

                        <ListItem className={darkMode ? 'hover:bg-gray-800 hover:text-white text-white' : ''}>
                            <ListItemPrefix>
                                <Linkedin className={`h-5 w-5 ${darkMode ? 'text-white' : ''}`} />


                            </ListItemPrefix>
                            <a href="https://www.linkedin.com/in/kouakou-junior-ouattara-aa9b36322/?trk=opento_sprofile_goalscard" target="_blank" rel="noopener noreferrer" className="w-full">
                                LinkedIn
                            </a>
                        </ListItem>
                    </List>
                </Card>
            </div>
        </>
    );
}

export default SidebarWithSearch;