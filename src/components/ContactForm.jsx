import React from 'react';
import { Input, Textarea, Button } from '@material-tailwind/react';
import { Typography } from '@material-tailwind/react';
import { EnvelopeIcon as MailIcon, PhoneIcon, MapIcon as MapPinIcon } from '@heroicons/react/24/outline';
import { Linkedin, Github } from 'lucide-react';


export default function ContactForm({ darkMode }) {
    return (
        <section id="contact" className="contact-section mb-12 min-h-screen pt-12">
            <Typography variant="h2" className="mb-12 text-2xl md:text-3xl font-bold text-center relative">
                Contactez-moi
                <span className={`absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></span>
            </Typography>

            <div className={`p-6 md:p-8 rounded-2xl shadow-xl mb-8 ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-100'}`}>
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Informations de contact */}
                    <div className="md:w-1/2">
                        <Typography variant="h4" className="mb-6 text-xl font-semibold">
                            Discutons de votre projet
                        </Typography>

                        <Typography className="mb-6">
                            Vous avez un projet en tête ou souhaitez discuter d'une collaboration potentielle ?
                            N'hésitez pas à me contacter via ce formulaire. Je serai ravi d'échanger avec vous
                            et de voir comment je peux vous aider dans la réalisation de vos projets web.
                        </Typography>

                        <div className={`p-6 rounded-xl mb-6 ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                            <Typography className="mb-6">
                                Vous pouvez également me retrouver sur les réseaux sociaux ou m'envoyer
                                directement un email. Je m'engage à vous répondre dans les meilleurs délais.
                            </Typography>

                            <div className="space-y-4">
                                {/* Carte de contact - Email */}
                                <div className={`flex items-center gap-4 p-4 rounded-lg transition-all ${darkMode ? 'bg-gray-800 hover:bg-gray-900' : 'bg-white hover:bg-gray-50 border border-gray-100'}`}>
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                                        <MailIcon className="h-6 w-6 text-blue-500" />
                                    </div>
                                    <div>
                                        <Typography variant="small" className={`font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            Email
                                        </Typography>
                                        <Typography variant="paragraph" className="font-medium">
                                            <a href="mailto:ouattarajunior418@gmail.com" className="hover:underline">
                                                ouattarajunior418@gmail.com
                                            </a>
                                        </Typography>
                                    </div>
                                </div>

                                {/* LinkedIn */}
                                <div className={`flex items-center gap-4 p-4 rounded-lg transition-all ${darkMode ? 'bg-gray-800 hover:bg-gray-900' : 'bg-white hover:bg-gray-50 border border-gray-100'}`}>
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                                        <Linkedin className={`h-5 w-5 ${darkMode ? 'text-white' : ''}`} />
                                    </div>
                                    <div>
                                        <Typography variant="small" className={`font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            LinkedIn
                                        </Typography>
                                        <Typography variant="paragraph" className="font-medium">
                                            <a
                                                href="https://www.linkedin.com/in/kouakou-junior-ouattara-aa9b36322/?trk=opento_sprofile_goalscard"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:underline"
                                            >
                                                Kouakou Junior Ouattara
                                            </a>
                                        </Typography>
                                    </div>
                                </div>

                                {/* GitHub */}
                                <div className={`flex items-center gap-4 p-4 rounded-lg transition-all ${darkMode ? 'bg-gray-800 hover:bg-gray-900' : 'bg-white hover:bg-gray-50 border border-gray-100'}`}>
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-900/60' : 'bg-gray-100'}`}>
                                        <i className="fa-brands fa-github text-xl text-gray-700 dark:text-gray-300"></i>
                                        <Github className={`h-5 w-5 ${darkMode ? 'text-white' : ''}`} />

                                    </div>
                                    <div>
                                        <Typography variant="small" className={`font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            GitHub
                                        </Typography>
                                        <Typography variant="paragraph" className="font-medium">
                                            <a
                                                href="https://github.com/TugoMC"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:underline"
                                            >
                                                TugoMC
                                            </a>
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulaire de contact */}
                    <div className="md:w-1/2">
                        <form
                            action="https://formspree.io/f/myyyzzzz" // Remplacez par votre vrai endpoint Formspree
                            method="POST"
                            className={`space-y-6 p-6 rounded-xl border-2 ${darkMode
                                ? 'bg-gray-700 border-gray-600'
                                : 'bg-white border-blue-100 shadow-blue-100/20 shadow-lg'
                                }`}
                        >
                            <Typography variant="h5" className="mb-4 font-semibold">
                                Envoyez-moi un message
                            </Typography>

                            <div>
                                <Typography variant="small" className={`font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Votre nom
                                </Typography>
                                <Input
                                    type="text"
                                    name="name"
                                    required
                                    variant="outlined"
                                    color="blue"
                                    size="lg"
                                    placeholder="John Doe"
                                    className={`${darkMode ? 'text-white' : ''} w-full`}
                                    labelProps={{
                                        className: darkMode ? "text-white" : "",
                                    }}
                                    containerProps={{
                                        className: "min-w-[100px]",
                                    }}
                                />
                            </div>

                            <div>
                                <Typography variant="small" className={`font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Votre email
                                </Typography>
                                <Input
                                    type="email"
                                    name="email"
                                    required
                                    variant="outlined"
                                    color="blue"
                                    size="lg"
                                    placeholder="exemple@email.com"
                                    className={`${darkMode ? 'text-white' : ''} w-full`}
                                    labelProps={{
                                        className: darkMode ? "text-white" : "",
                                    }}
                                    containerProps={{
                                        className: "min-w-[100px]",
                                    }}
                                />
                            </div>

                            <div>
                                <Typography variant="small" className={`font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Message
                                </Typography>
                                <Textarea
                                    name="message"
                                    required
                                    variant="outlined"
                                    color="blue"
                                    size="lg"
                                    rows={6}
                                    placeholder="Parlez-moi de votre projet..."
                                    className={`${darkMode ? 'text-white' : ''} w-full`}
                                    labelProps={{
                                        className: darkMode ? "text-white" : "",
                                    }}
                                    containerProps={{
                                        className: "min-w-[100px]",
                                    }}
                                />
                            </div>

                            {/* Anti-spam */}
                            <input type="text" name="_honey" style={{ display: 'none' }} />
                            <input type="hidden" name="_captcha" value="false" />

                            <Button
                                type="submit"
                                variant="filled"
                                color="blue"
                                fullWidth
                                size="lg"
                                className={`flex items-center justify-center gap-2 py-3 ${darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                </svg>
                                Envoyer mon message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}