import { useState } from 'react';
import { Typography, Button, Dialog, DialogHeader, DialogBody, DialogFooter, Carousel } from '@material-tailwind/react';
import { useTheme } from './ThemeContext';
import { CodeBracketIcon, ArrowTopRightOnSquareIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import flutter_onboarding1 from '../assets/anabe_flutter/onboarding1.jpg';
import flutter_onboarding2 from '../assets/anabe_flutter/onboarding2.jpg';
import flutter_onboarding3 from '../assets/anabe_flutter/onboarding3.jpg';
import flutter_onboarding4 from '../assets/anabe_flutter/onboarding4.jpg';
import flutter_onboarding5 from '../assets/anabe_flutter/onboarding_permission.jpg';

import flutter_login1 from '../assets/anabe_flutter/login_firebase.jpg';
import flutter_login2 from '../assets/anabe_flutter/login_firebase_suite.jpg';

import flutter_acceuil1 from '../assets/anabe_flutter/section_acceuil.jpg';
import flutter_acceuil2 from '../assets/anabe_flutter/section_acceuil_proche.jpg';

import flutter_search1 from '../assets/anabe_flutter/section_search.jpg';
import flutter_search2 from '../assets/anabe_flutter/section_search_filtre.jpg';

import flutter_parametres1 from '../assets/anabe_flutter/section_parametre.jpg';
import flutter_parametres2 from '../assets/anabe_flutter/section_parametre_avis.jpg';
import flutter_parametres3 from '../assets/anabe_flutter/section_parametre_favoris.jpg';

import flutter_dashboard from '../assets/anabe_flutter/section_dashboard_crud.jpg';

import flutter_detail from '../assets/anabe_flutter/page_detail.jpg';

import flutter_communes from '../assets/anabe_flutter/section_toutes_les_communes.jpg';

import flutter_thumbnail from '../assets/anabe_flutter/project_1.png';



import flotte_login from '../assets/gestion_flotte/login.png';
import flotte_register from '../assets/gestion_flotte/register.png';
import flotte_dashboard from '../assets/gestion_flotte/tableau_de_bord.png';

import flotte_vehicules_form from '../assets/gestion_flotte/gestion_vehicule_formulaire.png';
import flotte_vehicules from '../assets/gestion_flotte/gestion_vehicules.png';
import flotte_vehicules_details from '../assets/gestion_flotte/vehicules_details.png';

import flotte_chauffeurs from '../assets/gestion_flotte/gestion_chauffeurs.png';
import flotte_chauffeurs_form from '../assets/gestion_flotte/gestion_chauffeurs_formulaire.png';
import flotte_chauffeurs_details from '../assets/gestion_flotte/chauffeur_details.png';

import flotte_plannings from '../assets/gestion_flotte/attribution_plannings.png';
import flotte_plannings_form from '../assets/gestion_flotte/plannings_formulaire.png';

import flotte_paiements from '../assets/gestion_flotte/gestion_paiements.png';
import flotte_paiements_form from '../assets/gestion_flotte/paiements_formulaire.png';
import flotte_paiements_details from '../assets/gestion_flotte/paiements_details.png';

import flotte_maintenances from '../assets/gestion_flotte/gestion_maintenances.png';
import flotte_maintenances_form from '../assets/gestion_flotte/maintenances_formulaire.png';
import flotte_maintenances_details from '../assets/gestion_flotte/maintenances_details.png';

import flotte_documents from '../assets/gestion_flotte/gestion_documents.png';
import flotte_documents_form from '../assets/gestion_flotte/documents_formulaire.png';
import flotte_documents_details from '../assets/gestion_flotte/documents_details.png';

import flotte_notifications from '../assets/gestion_flotte/notifications1.png';
import flotte_all_notifications from '../assets/gestion_flotte/toutes_les_notifications.png';

import flotte_profile from '../assets/gestion_flotte/profil.png';

import flotte_parametres from '../assets/gestion_flotte/parametres.png';

import flotte_sidebar_admin from '../assets/gestion_flotte/sidebar_admin.png';
import flotte_sidebar_manager from '../assets/gestion_flotte/sidebar_manager.png';
import flotte_sidebar_chauffeur from '../assets/gestion_flotte/sidebar_chauffeur.png';

import flotte_events from '../assets/gestion_flotte/tous_les_evenements.png';

import flotte_interface_chauffeur from '../assets/gestion_flotte/page_personnelle_chauffeur.png';

import flotte_logo from '../assets/gestion_flotte/flotte_logo.png';




export function ProjectsSection() {
    const { darkMode } = useTheme();
    const [open, setOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const handleOpen = (project) => {
        setCurrentProject(project);
        setOpen(true);
    };

    const openLightbox = (image, e) => {
        if (e) {
            e.stopPropagation();
        }
        setCurrentImage(image);
        setLightboxOpen(true);
    };

    const closeLightbox = (e) => {
        if (e) {
            e.stopPropagation();
        }
        setLightboxOpen(false);
    };

    const projects = [
        {
            id: 1,
            title: "Référencement d'Espaces Événementiels",
            description: "Application mobile développée avec Flutter permettant de référencer et découvrir des espaces évènementiels",
            technologies: ["Flutter", "Dart", "Firebase", "Firebase Firestore"],
            githubLink: "https://github.com/TugoMC/event_app",
            demoLink: "https://drive.google.com/file/d/1jvy3M_yWpwMwcNUMsj61nr0OqAmOct3e/view?usp=sharing",
            image: flutter_thumbnail,
            sections: [
                {
                    title: "Onboarding",
                    description: "Introduction des fonctionnalités principales de l'application.",
                    screenshots: [
                        flutter_onboarding1,
                        flutter_onboarding2,
                        flutter_onboarding3,
                        flutter_onboarding4,
                        flutter_onboarding5,
                    ]
                },
                {
                    title: "Login et Inscription",
                    description: "Fonctionnalité de connexion et d'inscription utilisateurs.",
                    screenshots: [
                        flutter_login1,
                        flutter_login2,
                    ]
                },
                {
                    title: "Écran d'accueil",
                    description: "Interface principale montrant la liste des espaces 'recommendés' et 'alléatoires'.",
                    screenshots: [
                        flutter_acceuil1,
                        flutter_acceuil2,
                    ]
                },
                {
                    title: "Recherche et filtres",
                    description: "Fonctionnalité de recherche avancée avec filtres par type d'espace, capacité, et localisation.",
                    screenshots: [
                        flutter_search1,
                        flutter_search2,
                    ]
                },
                {
                    title: "Paramètres, avis et favoris",
                    description: "Fonctionnalité de gestion des paramètres, avis et favoris de l'utilisateur.",
                    screenshots: [
                        flutter_parametres1,
                        flutter_parametres2,
                        flutter_parametres3,
                    ]
                },
                {
                    title: "Dashboard",
                    description: "Interface de gestion des espaces evénementiels",
                    screenshots: [
                        flutter_dashboard,
                    ]
                },
                {
                    title: "Page de details",
                    description: "Interface de gestion des espaces evénementiels",
                    screenshots: [
                        flutter_detail,
                    ]
                },
                {
                    title: "Toutes les communes",
                    description: "Affichage de toutes les communes (categorie 'Toutes les communes')",
                    screenshots: [
                        flutter_communes,
                    ]
                }
            ],
            features: [
                "Affichage des espaces événementiels proches (5km)",
                "Filtrage avancé selon différents critères",
                "Visualisation détaillée avec photos et informations",
                "Gestion des favoris et historique",
                "Intégration de cartes interactives",
                "Système d'avis et notation"
            ]
        },
        {
            id: 2,
            title: "Gestion de Flottes",
            description: "Application web développée avec React et Node.js permettant de gérer les flottes de véhicules.",
            technologies: ["React", "ViteJS", "Node.js", "Express", "MongoDB", "Shadcn UI", "Tailwind CSS"],
            githubLink: "https://github.com/TugoMC/flotte",
            demoLink: "https://flotte.onrender.com/",
            image: flotte_logo,
            sections: [
                {
                    title: "Authentification",
                    description: "Système d'authentification sécurisé",
                    screenshots: [
                        flotte_login,
                        flotte_register,
                    ]
                },

                {
                    title: "Tableau de bord",
                    description: "Vue d'ensemble des statistiques de la flotte",
                    screenshots: [
                        flotte_dashboard,
                    ]

                },

                {
                    title: "Gestion des véhicules",
                    description: "Gestion des données des véhicules",
                    screenshots: [
                        flotte_vehicules,
                        flotte_vehicules_form,
                        flotte_vehicules_details,
                    ]
                },

                {
                    title: "Gestion des chauffeurs",
                    description: "Gestion des données des chauffeurs",
                    screenshots: [
                        flotte_chauffeurs,
                        flotte_chauffeurs_form,
                        flotte_chauffeurs_details,

                    ]
                },

                {
                    title: "Gestion des plannings",
                    description: "Gestion des plannings des chauffeurs",
                    screenshots: [
                        flotte_plannings,
                        flotte_plannings_form,
                    ]
                },

                {
                    title: "Gestion des paiements",
                    description: "Gestion des paiements des chauffeurs",
                    screenshots: [
                        flotte_paiements,
                        flotte_paiements_form,
                        flotte_paiements_details,
                    ]
                },

                {
                    title: "Gestion des maintenances",
                    description: "Gestion des maintenances des véhicules",
                    screenshots: [
                        flotte_maintenances,
                        flotte_maintenances_form,
                        flotte_maintenances_details,
                    ]
                },

                {
                    title: "Gestion des documents et contrats",
                    description: "Gestion des documents et contrats des chauffeurs et véhicules",
                    screenshots: [
                        flotte_documents,
                        flotte_documents_form,
                        flotte_documents_details,
                    ]
                },

                {
                    title: "Notifications et alertes",
                    description: "Notifications et alertes pour les paiments en attente et les documents expirés",
                    screenshots: [
                        flotte_notifications,
                        flotte_all_notifications,
                    ]
                },

                {
                    title: "Page de profil",
                    description: "Page de profil utilisateur avec informations personnelles et options de gestion",
                    screenshots: [
                        flotte_profile,
                    ]
                }
                ,
                {
                    title: "Paramètres",
                    description: "Page de paramètres pour gérer les préférences de l'application",
                    screenshots: [
                        flotte_parametres,
                    ]
                },
                {
                    title: "Sidebars",
                    description: "Barres latérales en fonction des rôles (administrateur, manager, chauffeur)",
                    screenshots: [
                        flotte_sidebar_admin,
                        flotte_sidebar_manager,
                        flotte_sidebar_chauffeur,
                    ]
                },

                {
                    title: "Historique des actions",
                    description: "Historique des actions effectuées par l'utilisateur",
                    screenshots: [
                        flotte_events,
                    ]
                },

                {
                    title: "Interface pour les chauffeurs",
                    description: "Interface dédiée aux chauffeurs pour visualiser leurs informations personnelles, plannings et paiements",
                    screenshots: [
                        flotte_interface_chauffeur,
                    ]
                }
            ],
            features: [
                "Système d'authentification et gestion des utilisateurs",
                "Tableau de bord pour visualiser les statistiques",
                "Gestion des véhicules",
                "Gestion des chauffeurs",
                "Gestion des plannings",
                "Gestion des paiements",
                "Gestion des maintenances",
                "Gestion des documents et contrats",
                "Notifications et alertes pour les paiments en attente et les documents expirés",
            ]
        }

    ];

    return (
        <section id="projects" className="py-16 min-h-screen">
            <div className="container mx-auto px-4">
                <Typography variant="h2" className="mb-12 text-3xl md:text-4xl font-bold text-center relative">
                    Mes Projets
                    <span className={`absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></span>
                </Typography>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} border`}
                        >
                            <div className="relative h-56 overflow-hidden group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80"></div>
                                <div className="absolute bottom-4 left-4">
                                    <Typography variant="h3" className="text-xl font-bold text-white">
                                        {project.title}
                                    </Typography>
                                </div>
                            </div>

                            <div className="p-6">
                                <Typography className="mb-4 text-gray-600 dark:text-gray-300">
                                    {project.description}
                                </Typography>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className={`px-3 py-1 text-xs rounded-full ${darkMode ? 'bg-blue-900/40 text-blue-300' : 'bg-blue-100 text-blue-800'} font-medium`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-3 mt-6">
                                    {project.githubLink && (
                                        <Button
                                            variant="text"
                                            size="sm"
                                            color={darkMode ? "blue-gray" : "blue"}
                                            className={`flex items-center gap-2 ${darkMode ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'}`}
                                            onClick={() => window.open(project.githubLink, '_blank')}
                                        >
                                            <CodeBracketIcon className="h-4 w-4" />
                                            Code
                                        </Button>
                                    )}

                                    {project.demoLink && (
                                        <Button
                                            variant="text"
                                            size="sm"
                                            color={darkMode ? "blue-gray" : "blue"}
                                            className={`flex items-center gap-2 ${darkMode ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'}`}
                                            onClick={() => window.open(project.demoLink, '_blank')}
                                        >
                                            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                                            Démo
                                        </Button>
                                    )}

                                    {project.sections && project.sections.length > 0 && (
                                        <Button
                                            variant="filled"
                                            size="sm"
                                            color="blue"
                                            className="ml-auto"
                                            onClick={() => handleOpen(project)}
                                        >
                                            Détails
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal de lightbox - maintenant avec des boutons qui ne propagent pas les événements */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 p-4"
                    onClick={closeLightbox}
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white hover:text-gray-300"
                    >
                        <XMarkIcon className="h-8 w-8" />
                    </button>
                    <div className="max-w-4xl w-full max-h-[80vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={currentImage}
                            alt="Lightbox view"
                            className="max-w-full max-h-[80vh] object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}

            {/* Dialog modifié */}
            {currentProject && (
                <Dialog
                    open={open}
                    handler={() => setOpen(false)}
                    size="xl"
                    dismiss={{ enabled: false }}
                    className={`${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'} rounded-2xl overflow-hidden z-[9000]`}
                >
                    <DialogHeader className={`flex flex-col gap-1 p-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                        <Typography variant="h3" className="text-xl font-bold">
                            {currentProject.title}
                        </Typography>
                        <Typography variant="small" className={`font-normal ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                            {currentProject.technologies.join(' • ')}
                        </Typography>
                    </DialogHeader>

                    <DialogBody
                        divider
                        className={`p-6 h-[70vh] overflow-y-auto ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
                    >
                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Colonne de gauche pour les informations */}
                            <div className="lg:w-1/2">
                                <div className="mb-8">
                                    <Typography variant="paragraph" className="mb-6 text-lg">
                                        {currentProject.description}
                                    </Typography>

                                    <div className="mb-8">
                                        <Typography variant="h5" className="mb-4 font-semibold">
                                            Fonctionnalités principales
                                        </Typography>
                                        <ul className={`grid grid-cols-1 gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                            {currentProject.features.map((feature, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className={`mr-2 mt-1 h-2 w-2 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Colonne de droite pour les images */}
                            <div className="lg:w-1/2">
                                {currentProject.sections && currentProject.sections.map((section, index) => (
                                    <div key={index} className="mb-12">
                                        <Typography variant="h4" className="mb-4 text-xl font-semibold">
                                            {section.title}
                                        </Typography>
                                        <Typography variant="paragraph" className="mb-6">
                                            {section.description}
                                        </Typography>

                                        {section.screenshots.length > 0 && (
                                            <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                                                {section.screenshots.length === 1 ? (
                                                    <div className="flex justify-center">
                                                        <img
                                                            src={section.screenshots[0]}
                                                            alt={`${section.title} screenshot`}
                                                            className="rounded-lg max-h-96 object-contain shadow-md cursor-zoom-in"
                                                            onClick={(e) => openLightbox(section.screenshots[0], e)}
                                                        />
                                                    </div>
                                                ) : (
                                                    <Carousel
                                                        className="rounded-xl overflow-hidden"
                                                        prevArrow={({ handlePrev }) => (
                                                            <button
                                                                onClick={handlePrev}
                                                                className={`!absolute top-1/2 left-4 -translate-y-1/2 rounded-full p-2 ${darkMode ? 'bg-gray-700/80 hover:bg-gray-600' : 'bg-blue-600/70 hover:bg-blue-700'} shadow-md focus:outline-none`}
                                                            >
                                                                <ChevronLeftIcon className="h-6 w-6 text-white" />
                                                            </button>
                                                        )}
                                                        nextArrow={({ handleNext }) => (
                                                            <button
                                                                onClick={handleNext}
                                                                className={`!absolute top-1/2 right-4 -translate-y-1/2 rounded-full p-2 ${darkMode ? 'bg-gray-700/80 hover:bg-gray-600' : 'bg-blue-600/70 hover:bg-blue-700'} shadow-md focus:outline-none`}
                                                            >
                                                                <ChevronRightIcon className="h-6 w-6 text-white" />
                                                            </button>
                                                        )}
                                                        navigation={({ setActiveIndex, activeIndex, length }) => (
                                                            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                                                {new Array(length).fill("").map((_, i) => (
                                                                    <span
                                                                        key={i}
                                                                        className={`block h-1.5 cursor-pointer rounded-full transition-all ${activeIndex === i ? "w-8 bg-blue-500" : "w-4 bg-gray-500/50"}`}
                                                                        onClick={() => setActiveIndex(i)}
                                                                    />
                                                                ))}
                                                            </div>
                                                        )}
                                                    >
                                                        {section.screenshots.map((screenshot, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="flex h-96 items-center justify-center p-4"
                                                            >
                                                                <img
                                                                    src={screenshot}
                                                                    alt={`${section.title} screenshot ${idx + 1}`}
                                                                    className="max-h-full rounded-lg object-contain shadow-md cursor-zoom-in"
                                                                    onClick={(e) => openLightbox(screenshot, e)}
                                                                />
                                                            </div>
                                                        ))}
                                                    </Carousel>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </DialogBody>

                    <DialogFooter className={`flex flex-wrap justify-between p-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                        <div className="flex gap-2">
                            {currentProject.githubLink && (
                                <Button
                                    variant="outlined"
                                    color={darkMode ? "blue-gray" : "blue"}
                                    className="flex items-center gap-2"
                                    onClick={() => window.open(currentProject.githubLink, '_blank')}
                                >
                                    <CodeBracketIcon className="h-4 w-4" />
                                    Code source
                                </Button>
                            )}

                            {currentProject.demoLink && (
                                <Button
                                    variant="outlined"
                                    color={darkMode ? "blue-gray" : "blue"}
                                    className="flex items-center gap-2"
                                    onClick={() => window.open(currentProject.demoLink, '_blank')}
                                >
                                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                                    Live Demo
                                </Button>
                            )}
                        </div>

                        <Button
                            variant="filled"
                            color={darkMode ? "blue-gray" : "blue"}
                            onClick={() => setOpen(false)}
                            className="ml-2"
                        >
                            Fermer
                        </Button>
                    </DialogFooter>
                </Dialog>
            )}
        </section>
    );
}