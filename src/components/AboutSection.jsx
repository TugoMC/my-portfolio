import { useTheme } from './ThemeContext';
import { Typography, Button, Tooltip } from '@material-tailwind/react';
import { User, MapPin, Mail, GraduationCap, Calendar, Code, Globe } from 'lucide-react';


const AboutSection = () => {
    const { darkMode } = useTheme();

    const handleDownloadCV = () => {

        const CV_URL = "/cv_ouattara_junior.pdf";

        // Créer un lien temporaire pour le téléchargement
        const link = document.createElement('a');
        link.href = CV_URL;
        link.download = 'cv_ouattara_junior.pdf'; // Nom du fichier téléchargé
        link.style.display = 'none';

        // Ajouter le lien au DOM, cliquer dessus, puis le supprimer
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="about" className="min-h-screen pt-16 pb-20 relative">
            {/* Éléments décoratifs */}
            <div className={`absolute top-12 right-8 w-24 h-24 rounded-full ${darkMode ? 'bg-blue-500/10' : 'bg-blue-100'} blur-2xl`}></div>
            <div className={`absolute bottom-16 left-8 w-32 h-32 rounded-full ${darkMode ? 'bg-purple-500/10' : 'bg-purple-100'} blur-3xl`}></div>

            <div className="container mx-auto px-4">
                {/* Titre de section avec animation */}
                <div className="text-center mb-14">
                    <Typography variant="h2" className="text-3xl md:text-4xl font-bold">
                        <span className="relative inline-block">
                            À propos de moi
                            <span className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-blue-500 rounded-full"></span>
                        </span>
                    </Typography>
                    <Typography variant="paragraph" className="mt-6 text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                        Découvrez mon parcours, mes valeurs et ma passion pour le développement web et mobile
                    </Typography>
                </div>

                {/* Contenu principal en deux colonnes */}
                <div className="flex flex-col lg:flex-row gap-12 items-center">


                    {/* Colonne texte */}
                    <div>
                        <Typography variant="h3" className="text-2xl md:text-3xl font-bold mb-5">
                            Développeur Web & Mobile Full Stack
                        </Typography>

                        <Typography className="mb-8 text-lg leading-relaxed">
                            Passionné par le développement web depuis mes études à <span className="font-semibold text-blue-500">Pigier Côte d'Ivoire</span>,
                            j'ai cultivé une expertise dans la création d'applications web et mobiles performantes et accessibles.
                            Je combine créativité, rigueur technique et sens de l'écoute pour développer des solutions
                            numériques qui répondent parfaitement aux besoins des utilisateurs.
                        </Typography>

                        {/* Infos personnelles en grid responsive */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                            <InfoItem
                                icon={<User className="w-6 h-6 text-blue-500" />}
                                label="Nom"
                                value="Ouattara Kouakou Junior"
                                bgColor={darkMode ? "bg-blue-900/20" : "bg-blue-50"}
                            />
                            <InfoItem
                                icon={<MapPin className="w-6 h-6 text-green-500" />}
                                label="Localisation"
                                value="Côte d'Ivoire"
                                bgColor={darkMode ? "bg-green-900/20" : "bg-green-50"}
                            />
                            <InfoItem
                                icon={<Mail className="w-6 h-6 text-red-500" />}
                                label="Email"
                                value="ouattarajunior418@gmail.com"
                                bgColor={darkMode ? "bg-red-900/20" : "bg-red-50"}
                            />
                            <InfoItem
                                icon={<GraduationCap className="w-6 h-6 text-purple-500" />}
                                label="Formation"
                                value="Pigier Côte d'Ivoire"
                                bgColor={darkMode ? "bg-purple-900/20" : "bg-purple-50"}
                            />
                            <InfoItem
                                icon={<Calendar className="w-6 h-6 text-amber-500" />}
                                label="Disponibilité"
                                value="Temps plein / Freelance"
                                bgColor={darkMode ? "bg-amber-900/20" : "bg-amber-50"}
                            />
                            <InfoItem
                                icon={<Globe className="w-6 h-6 text-cyan-500" />}
                                label="Langues"
                                value="Français, Anglais (technique)"
                                bgColor={darkMode ? "bg-cyan-900/20" : "bg-cyan-50"}
                            />
                        </div>

                        <Typography className="mb-8 text-lg">
                            Mon objectif est de créer des expériences numériques qui combinent <span className="italic">esthétique visuelle</span> et
                            <span className="italic"> performances techniques</span>. En constante veille technologique, je m'efforce d'adopter les
                            meilleures pratiques pour développer des applications robustes, évolutives et accessibles à tous.
                        </Typography>

                        {/* Bouton avec effet au survol */}
                        <Button
                            variant="filled"
                            color="blue"
                            size="lg"
                            className="flex items-center gap-3 px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                            onClick={handleDownloadCV}
                        >
                            <i className="fa-solid fa-download"></i>
                            Télécharger mon CV
                        </Button>
                    </div>
                </div>

                {/* Section des statistiques avec animation au survol */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                    <StatCard
                        value="1+"
                        label="Années d'expérience"
                        darkMode={darkMode}
                    />
                    <StatCard
                        value="5+"
                        label="Projets réalisés"
                        darkMode={darkMode}
                    />
                    <StatCard
                        value="10+"
                        label="Technologies apprises"
                        darkMode={darkMode}
                    />
                </div>
            </div>
        </section>
    );
};

// Composant pour les informations personnelles
const InfoItem = ({ icon, label, value, bgColor }) => {
    const { darkMode } = useTheme();

    return (
        <div className={`flex items-center gap-3 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
            <Tooltip content={label}>
                <div className={`w-12 h-12 flex items-center justify-center rounded-full ${bgColor}`}>
                    {icon}
                </div>
            </Tooltip>
            <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
                <div className="font-medium">{value}</div>
            </div>
        </div>
    );
};

// Composant pour les cartes statistiques
const StatCard = ({ value, label, darkMode }) => {
    return (
        <div className={`p-8 rounded-2xl text-center ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}>
            <div className="text-blue-500 text-4xl font-bold mb-3">{value}</div>
            <div className="text-md font-medium">{label}</div>
        </div>
    );
};

export default AboutSection;