import React from 'react';
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

// Structure des données de compétences avec niveau
const skillsData = [
    { img: skill1, name: "HTML", level: 90 },
    { img: skill2, name: "CSS", level: 85 },
    { img: skill3, name: "JavaScript", level: 80 },
    { img: skill4, name: "Node.js", level: 75 },
    { img: skill5, name: "React.js", level: 85 },
    { img: skill6, name: "Django", level: 70 },
    { img: skill7, name: "Spring Boot", level: 65 },
    { img: skill8, name: "Angular", level: 60 },
    { img: skill9, name: "Flutter", level: 70 },
    { img: skill10, name: "Kotlin", level: 60 },
    { img: skill11, name: "Next.js", level: 75 },
    { img: skill12, name: "Vite.js", level: 80 }
];

export function SkillsSection() {
    const { darkMode } = useTheme();

    return (
        <section id="skills" className="mb-12 min-h-screen pt-12 skills-section">
            <Typography variant="h2" className="mb-4 text-2xl md:text-3xl text-center font-bold">
                Mes compétences
            </Typography>

            <div className="cells">
                {skillsData.map((skill, index) => (
                    <div
                        key={index}
                        className={`cell ${darkMode ? 'text-white' : 'text-gray-800'}`}
                    >
                        <img src={skill.img} alt={`${skill.name} logo`} />
                        <span>{skill.name}</span>
                        <div className="skill-level">
                            <div
                                className="skill-progress"
                                style={{ width: `${skill.level}%` }}
                                aria-valuenow={skill.level}
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}