// Correction de MainContent.jsx
// Modifier l'importation de AboutSection pour utiliser l'import par défaut
import AboutSection from './AboutSection'; // Suppression des accolades car c'est un export par défaut
import { useTheme } from './ThemeContext';
import { Typography } from '@material-tailwind/react';
import ContactForm from './ContactForm';
// Vérifiez également ces importations - si ce sont des exports par défaut, retirez les accolades
import { SkillsSection } from './SkillsSection'; // Modifié selon la probable structure
import { ParcoursSection } from './ParcoursSection'; // Modifié selon la probable structure
import { ProjectsSection } from './ProjectsSection'; // Modifié selon la probable structure
import HeroSection from './HeroSection';

const CV_URL = "/assets/documents/cv_ouattara_junior.pdf";

export default function MainContent() {
    const { darkMode } = useTheme();

    // Cette fonction pourrait être déplacée vers un utilitaire commun pour éviter la duplication
    const handleDownloadCV = (e) => {
        // Vérifiez si le fichier existe et gérez l'erreur si nécessaire
        const link = document.createElement('a');
        link.href = CV_URL;
        link.setAttribute('download', 'cv_ouattara_junior.pdf');
        link.setAttribute('target', '_blank');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        // Ajout d'un container pour centrer le contenu
        <div className={`flex-1 p-4 md:p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
            <div className="max-w-6xl mx-auto"> {/* Container pour centrer avec une largeur maximale */}
                {/* Utilisation du nouveau composant HeroSection */}
                <HeroSection />

                {/* Section À propos */}
                <AboutSection />

                {/* Utilisation du nouveau composant SkillsSection */}
                <SkillsSection />

                {/* Section Projets */}
                <ProjectsSection />

                {/* Section Parcours */}
                <ParcoursSection />

                {/* Section Contact */}
                <section id="contact" className="mb-16 min-h-screen">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div>
                            <ContactForm darkMode={darkMode} />
                        </div>
                    </div>
                </section>

                {/* Pied de page */}
                <footer className={`mt-12 py-6 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} text-center`}>
                    <Typography variant="small" className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                        © {new Date().getFullYear()} - Portfolio créé avec React, Tailwind CSS et Material Tailwind
                    </Typography>
                </footer>
            </div>
        </div>
    );
}