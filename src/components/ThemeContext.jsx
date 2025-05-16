import React, { createContext, useContext, useState, useEffect } from 'react';

// Création du contexte pour le thème
export const ThemeContext = createContext();

// Hook personnalisé pour utiliser le contexte du thème
export const useTheme = () => useContext(ThemeContext);

// Fournisseur du contexte de thème
export function ThemeProvider({ children }) {
    // Vérifier si un thème est déjà enregistré dans le localStorage
    const savedTheme = localStorage.getItem('theme');
    const [darkMode, setDarkMode] = useState(savedTheme === 'dark');

    // Fonction pour basculer entre les modes clair et sombre
    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    // Effet pour appliquer le thème au document HTML et sauvegarder dans localStorage
    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    // Valeur fournie par le contexte
    const value = {
        darkMode,
        toggleDarkMode
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}