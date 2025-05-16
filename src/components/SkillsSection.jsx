import { Typography } from '@material-tailwind/react';
import { useTheme } from './ThemeContext';
import skill1 from '../assets/images/html-logo.webp';
import skill2 from '../assets/images/css-logo.webp';
import skill3 from '../assets/images/javascript-logo.webp';
import skill4 from '../assets/images/node-logo.webp';
import skill5 from '../assets/images/react-logo.webp';
import skill6 from '../assets/images/django-svgrepo-com.svg';
import skill7 from '../assets/images/spring-icon.svg';
import skill8 from '../assets/images/angular-svgrepo-com.svg';
import skill9 from '../assets/images/flutter-svgrepo-com.svg';
import skill10 from '../assets/images/kotlin-svgrepo-com.svg';
import skill11 from '../assets/images/nextjs-svgrepo-com.svg';
import skill12 from '../assets/images/vitejs-svgrepo-com.svg';
import skill13 from '../assets/images/python-svgrepo-com.svg';
import skill14 from '../assets/images/java-4-logo-svgrepo-com.svg';
import skill15 from '../assets/images/typescript-official-svgrepo-com.svg';
import skill16 from '../assets/images/dart-svgrepo-com.svg';

// Données divisées en langages et frameworks/bibliothèques
const skillsData = {
    languages: [
        { img: skill1, name: "HTML" },
        { img: skill2, name: "CSS" },
        { img: skill3, name: "JavaScript" },
        { img: skill10, name: "Kotlin" },
        { img: skill13, name: "Python" },
        { img: skill14, name: "Java" },
        { img: skill15, name: "TypeScript" },
        { img: skill16, name: "Dart" }
    ],
    frameworks: [
        { img: skill4, name: "Node.js" },
        { img: skill5, name: "React.js" },
        { img: skill6, name: "Django" },
        { img: skill7, name: "Spring Boot" },
        { img: skill8, name: "Angular" },
        { img: skill9, name: "Flutter" },
        { img: skill11, name: "Next.js" },
        { img: skill12, name: "Vite.js" }
    ]
};

export function SkillsSection() {
    const { darkMode } = useTheme();

    return (
        <section id="skills" className="mb-12 min-h-screen pt-12 skills-section">
            <Typography variant="h2" className="mb-8 text-2xl md:text-3xl text-center font-bold">
                Mes compétences
            </Typography>

            {/* Section Langages */}
            <div className="mb-10">
                <Typography variant="h3" className="mb-4 text-xl md:text-2xl text-center font-semibold">
                    Langages
                </Typography>
                <div className="cells">
                    {skillsData.languages.map((skill, index) => (
                        <div
                            key={index}
                            className={`cell ${darkMode ? 'text-white' : 'text-gray-800'}`}
                        >
                            <img src={skill.img} alt={`${skill.name} logo`} />
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section Frameworks et Bibliothèques */}
            <div>
                <Typography variant="h3" className="mb-4 text-xl md:text-2xl text-center font-semibold">
                    Frameworks et Bibliothèques
                </Typography>
                <div className="cells">
                    {skillsData.frameworks.map((skill, index) => (
                        <div
                            key={index}
                            className={`cell ${darkMode ? 'text-white' : 'text-gray-800'}`}
                        >
                            <img src={skill.img} alt={`${skill.name} logo`} />
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}