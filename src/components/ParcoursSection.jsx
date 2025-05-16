import React from 'react';
import { Typography } from '@material-tailwind/react';
import { useTheme } from './ThemeContext';
import { BriefcaseIcon, AcademicCapIcon, CalendarIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

export function ParcoursSection() {
    const { darkMode } = useTheme();

    const experiences = [
        {
            titre: "Stagiaire en Maintenance Informatique",
            entreprise: "Afriland First Bank",
            lieu: "Abidjan Plateau",
            periode: "05 Février au 03 Mai 2024",
            description: "Stage en maintenance informatique et support technique."
        },
        {
            titre: "Stagiaire en Maintenance Informatique",
            entreprise: "Afriland First Bank",
            lieu: "Abidjan Plateau",
            periode: "17 Octobre 2023 au 16 Janvier 2024",
            description: "Stage en maintenance informatique et support technique."
        },
        {
            titre: "Stagiaire en Electricité Automobile",
            entreprise: "TOP AUTO",
            lieu: "Abidjan",
            periode: "Juillet 2022 - Septembre 2022",
            description: "Stage pratique en électricité automobile."
        }
    ];

    const formations = [
        {
            diplome: "Licence en Réseau et Génie Logiciel (en cours)",
            ecole: "PIGIER",
            lieu: "Abidjan Plateau",
            annee: "2023 - 2024"
        },
        {
            diplome: "Licence en Mécatronique",
            ecole: "Institut Polytechnique International François",
            lieu: "Abidjan",
            annee: "2021 - 2022"
        },
        {
            diplome: "BTS en Systèmes Electronique et Informatique",
            ecole: "Institut Polytechnique International François",
            lieu: "Abidjan",
            annee: "2020 - 2021"
        },
        {
            diplome: "BAC Série D",
            ecole: "Collège Sainte Camille",
            lieu: "Abidjan",
            annee: "2018 - 2019"
        }
    ];

    return (
        <section id="experience" className="mb-12 min-h-screen pt-12 parcours-section">
            <Typography variant="h2" className="mb-6 text-2xl md:text-3xl font-bold text-center">
                <span className="relative">
                    Mon parcours

                </span>
            </Typography>

            <div className="mt-16 max-w-4xl mx-auto">
                {/* Expérience professionnelle */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className={`w-12 h-12 flex items-center justify-center rounded-full ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                            <BriefcaseIcon className="w-6 h-6 text-blue-500" />
                        </div>
                        <Typography variant="h3" className="text-xl md:text-2xl font-bold">
                            EXPÉRIENCES DE TRAVAIL
                        </Typography>
                    </div>

                    <div className="relative">
                        {/* Ligne verticale */}
                        <div className={`absolute left-6 top-0 bottom-0 w-0.5 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>

                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`relative pl-16 pb-10 ${index === experiences.length - 1 ? '' : 'mb-6'}`}
                            >
                                {/* Point sur la timeline */}
                                <div className="absolute left-[22px] top-1 w-3 h-3 rounded-full bg-blue-500 transform -translate-x-1/2 z-10"></div>

                                <div className={`p-6 rounded-xl shadow-md ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'}`}>
                                    <Typography variant="h4" className="text-lg md:text-xl font-semibold mb-1">
                                        {exp.titre}
                                    </Typography>

                                    <div className="flex flex-wrap gap-4 mb-3">
                                        <div className="flex items-center gap-1">
                                            <BuildingOfficeIcon className="w-4 h-4 text-blue-500" />
                                            <Typography variant="small" className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                                {exp.entreprise}
                                            </Typography>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <CalendarIcon className="w-4 h-4 text-blue-500" />
                                            <Typography variant="small" className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                                {exp.periode}
                                            </Typography>
                                        </div>
                                    </div>

                                    <div className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {exp.lieu}
                                    </div>

                                    <Typography className="mt-3">
                                        {exp.description}
                                    </Typography>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Formation */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className={`w-12 h-12 flex items-center justify-center rounded-full ${darkMode ? 'bg-green-900/30' : 'bg-green-100'}`}>
                            <AcademicCapIcon className="w-6 h-6 text-green-500" />
                        </div>
                        <Typography variant="h3" className="text-xl md:text-2xl font-bold">
                            FORMATIONS
                        </Typography>
                    </div>

                    <div className="relative">
                        {/* Ligne verticale */}
                        <div className={`absolute left-6 top-0 bottom-0 w-0.5 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>

                        {formations.map((formation, index) => (
                            <div
                                key={index}
                                className={`relative pl-16 pb-10 ${index === formations.length - 1 ? '' : 'mb-6'}`}
                            >
                                {/* Point sur la timeline */}
                                <div className="absolute left-[22px] top-1 w-3 h-3 rounded-full bg-green-500 transform -translate-x-1/2 z-10"></div>

                                <div className={`p-6 rounded-xl shadow-md ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'}`}>
                                    <Typography variant="h4" className="text-lg md:text-xl font-semibold mb-1">
                                        {formation.diplome}
                                    </Typography>

                                    <div className="flex flex-wrap gap-4 mb-3">
                                        <div className="flex items-center gap-1">
                                            <BuildingOfficeIcon className="w-4 h-4 text-green-500" />
                                            <Typography variant="small" className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                                {formation.ecole}
                                            </Typography>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <CalendarIcon className="w-4 h-4 text-green-500" />
                                            <Typography variant="small" className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                                {formation.annee}
                                            </Typography>
                                        </div>
                                    </div>

                                    <div className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {formation.lieu}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}