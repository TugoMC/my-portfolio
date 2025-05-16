import { useTheme } from './ThemeContext';
import { Typography, Button } from '@material-tailwind/react';
import heroHeadshot from '../assets/images/ouattara_junior.jpg';
import { Code, Mail } from 'lucide-react';

const HeroSection = () => {
    const { darkMode } = useTheme();

    // Fonction pour faire défiler jusqu'à une section spécifique
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero-section min-h-screen">
            {/* Éléments décoratifs flottants */}
            <div className="floating-element float-1"></div>
            <div className="floating-element float-2"></div>

            <div className="hero-content">
                <div className="hero-text">
                    <Typography variant="small" className="hero-greeting">Bienvenue sur mon portfolio</Typography>
                    <Typography variant="h1" className="hero-title">Salut, je suis Ouattara Kouakou Junior</Typography>
                    <Typography variant="paragraph" className="hero-subtitle">
                        Développeur web polyvalent spécialisé en développement backend, frontend et mobile,
                        formé à Pigier Côte d'Ivoire. Je conçois des applications robustes et
                        intuitives pour répondre aux besoins des utilisateurs.
                    </Typography>

                    <div className="hero-buttons flex gap-4 mt-6">
                        <Button
                            variant="filled"
                            color="blue"
                            className="flex items-center gap-2"
                            onClick={() => scrollToSection('skills')}
                        >
                            <Code size={18} />
                            Mes compétences
                        </Button>
                        <Button
                            variant="outlined"
                            color="blue"
                            className="flex items-center gap-2"
                            onClick={() => scrollToSection('contact')}
                        >
                            <Mail size={18} />
                            Me contacter
                        </Button>
                    </div>
                </div>

                <div className="hero-image">
                    <img
                        src={heroHeadshot}
                        alt="Ouattara Junior headshot"
                        className="hero-headshot"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;