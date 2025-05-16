import React from 'react';
import ContactForm from './ContactForm';
import { useTheme } from './ThemeContext';
import { Typography, Button } from '@material-tailwind/react';
import heroHeadshot from '../assets/images/ouattara_junior.jpg';
import { User, MapPin, Mail, GraduationCap } from 'lucide-react';
import { SkillsSection } from './SkillsSection';
import { ParcoursSection } from './ParcoursSection';
import { ProjectsSection } from './ProjectsSection';

const CV_URL = "/assets/documents/cv_ouattara_junior.pdf";

export default function MainContent() {
    const { darkMode } = useTheme();

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
                {/* Section Accueil - Nouveau design Hero */}
                <section id="home" className="mb-12 min-h-screen pt-12 hero-section">
                    <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
                        <div className="text md:w-2/3">
                            <Typography variant="h2" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                                Salut, je suis Ouattara Kouakou Junior 👋
                            </Typography>
                            <Typography className="mb-6">
                                Développeur web polyvalent spécialisé en développement backend, frontend et mobile, formé à Pigier Côte d'Ivoire. J'ai affiné mes compétences techniques à travers divers projets personnels.
                            </Typography>
                            <div className="links flex flex-wrap gap-4">
                                <a href="#skills" className="flex items-center gap-2 px-4 py-2 rounded-md transition-colors bg-white border-2 border-blue-500 text-gray-800 hover:bg-blue-50">
                                    {/* Utilisation des icônes Lucide déjà importées dans le projet au lieu de Font Awesome */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                                        <polyline points="16 18 22 12 16 6"></polyline>
                                        <polyline points="8 6 2 12 8 18"></polyline>
                                    </svg>
                                    <span>Compétences</span>
                                </a>

                                <a href="#contact" className="flex items-center gap-2 px-4 py-2 rounded-md transition-colors bg-white border-2 border-blue-500 text-gray-800 hover:bg-blue-50">
                                    {/* Utilisation des icônes Lucide déjà importées dans le projet au lieu de Font Awesome */}
                                    <Mail className="w-4 h-4 text-blue-500" strokeWidth={2} />
                                    <span>Contact</span>
                                </a>
                            </div>
                        </div>
                        <div className="headshot md:w-1/3 flex justify-center">
                            <img
                                src={heroHeadshot}
                                alt="John Doe headshot"
                                className="rounded-[20px] w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg border-2 border-black"
                            />
                        </div>
                    </div>
                </section>


                {/* Section À propos */}
                <section id="about" className="mb-12 min-h-screen pt-12">
                    <Typography variant="h2" className="mb-6 text-2xl md:text-3xl font-bold text-center">
                        <span className="relative">
                            À propos de moi
                            <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></span>
                        </span>
                    </Typography>

                    <div className="flex flex-col md:flex-row gap-8 items-center mt-12">


                        <div>
                            <Typography variant="h4" className="mb-4 text-xl font-semibold">
                                Développeur Web & Mobile Full Stack
                            </Typography>

                            <Typography className="mb-6 text-lg">
                                Passionné par le développement web depuis mes études à Pigier Côte d'Ivoire, j'ai cultivé une expertise dans la création d'applications web et mobiles performantes et accessibles.
                            </Typography>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className={`flex items-center gap-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/20">
                                        <User className="w-6 h-6 text-blue-500" strokeWidth={2} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Nom</div>
                                        <div className="font-medium">Ouattara Kouakou Junior</div>
                                    </div>
                                </div>
                                <div className={`flex items-center gap-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-50 dark:bg-green-900/20">
                                        <MapPin className="w-6 h-6 text-green-500" strokeWidth={2} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Localisation</div>
                                        <div className="font-medium">Côte d'Ivoire</div>
                                    </div>
                                </div>
                                <div className={`flex items-center gap-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-50 dark:bg-red-900/20">
                                        <Mail className="w-6 h-6 text-red-500" strokeWidth={2} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
                                        <div className="font-medium">ouattarajunior418@gmail.com</div>
                                    </div>
                                </div>
                                <div className={`flex items-center gap-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-50 dark:bg-purple-900/20">
                                        <GraduationCap className="w-6 h-6 text-purple-500" strokeWidth={2} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Formation</div>
                                        <div className="font-medium">Pigier Côte d'Ivoire</div>
                                    </div>
                                </div>
                            </div>

                            <Typography className="mb-6">
                                Je m'efforce de créer des solutions numériques innovantes qui répondent aux besoins réels des utilisateurs. Mon approche allie créativité et rigueur technique pour développer des applications robustes et intuitives.
                            </Typography>

                            <div className="flex flex-wrap gap-4">
                                <Button
                                    variant="filled"
                                    color="blue"
                                    className="flex items-center gap-2 px-6"
                                    onClick={handleDownloadCV}
                                >
                                    <i className="fa-solid fa-download"></i>
                                    Télécharger mon CV
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Section des statistiques */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
                        <div className={`p-6 rounded-lg text-center ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                            <div className="text-blue-500 text-3xl font-bold mb-2">1+</div>
                            <div className="text-sm">Années d'expérience</div>
                        </div>
                        <div className={`p-6 rounded-lg text-center ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                            <div className="text-blue-500 text-3xl font-bold mb-2">5+</div>
                            <div className="text-sm">Projets terminés</div>
                        </div>
                        <div className={`p-6 rounded-lg text-center ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                            <div className="text-blue-500 text-3xl font-bold mb-2">12</div>
                            <div className="text-sm">Technologies apprises</div>
                        </div>
                    </div>
                </section>

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