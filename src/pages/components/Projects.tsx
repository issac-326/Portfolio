'use client'

import { Card, CardHeader, CardFooter, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge'; 
import { Button } from '@/components/ui/button'; 
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import { useState, useEffect } from 'react';
import { getLangFromUrl, useTranslations } from '../../i18n/util';

export default function Projects() {

    const [lang, setLang] = useState<'en' | 'es'>('en'); // Idiomas soportados

    // Obtener el idioma de la URL
    useEffect(() => {
        const url = new URL(window.location.href);
        const detectedLang = getLangFromUrl(url);
        setLang(detectedLang);
    }, []);
      // Usar traducciones basadas en el idioma detectado
    const t = useTranslations(lang);

    return (
        <div className="grid grid-cols-3 gap-5">
            <Card className="overflow-hidden shadow-lg bg-slate-300 dark:bg-black-card">
                <img className="w-full" width={300} height={300} src="/portfolio.png" alt="" />
                <CardHeader>
                    <CardTitle>Portafolio</CardTitle>
                </CardHeader>
                <CardContent>
                    {t('project1')}
                </CardContent>
                <CardFooter className="flex flex-col gap-6 items-start">
                    <div className="flex flex-row gap-2 flex-wrap">
                        <Badge className="bg-[#8A2BE2] text-white" variant="default">React</Badge>
                        <Badge className="bg-[#8A2BE2] text-white" variant="default">Typescript</Badge>
                        <Badge className="bg-[#8A2BE2] text-white" variant="default">Astro</Badge>
                        <Badge className="bg-[#8A2BE2] text-white" variant="default">Tailwind</Badge>
                    </div>
                    <div className="flex gap-6">
                        <a href="https://github.com/issac-326/Portfolio" target="_blank">
                            <Button variant="default" aria-label="github repository"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-300 dark:text-gray-800 w-5 h-5"><title>GitHub</title><path className="highlight-on-hover" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></Button>
                        </a>
                        <a href={`/${lang}/#aboutMe`}>
                            <Button aria-label="internal a"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-300 dark:text-gray-800 w-5 h-5"><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg></Button>
                        </a>
                    </div>
                </CardFooter>
            </Card>
            <Card className="overflow-hidden shadow-lg bg-slate-300 dark:bg-black-card z-10">
                    <Carousel
                        opts={{
                            loop: true
                        }}
                        plugins={[
                            Autoplay({
                                delay: 2000,
                            }),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent>
                            <CarouselItem>
                                <img className="w-full" width={300} height={300} src="/petflix1.jpeg" alt="" />
                            </CarouselItem>
                            <CarouselItem>
                                <img className="w-full" width={300} height={300} src="/petflix2.jpeg" alt="" />
                            </CarouselItem>
                            <CarouselItem>
                                <img className="w-full" width={300} height={300} src="/petflix3.jpeg" alt="" />
                            </CarouselItem>
                            <CarouselItem>
                                <img className="w-full" width={300} height={300} src="/petflix4.jpeg" alt="" />
                            </CarouselItem>
                            <CarouselItem>
                                <img className="w-full" width={300} height={300} src="/petflix5.jpeg" alt="" />
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                    <CardHeader>
                        <CardTitle>Netflix</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {t('project2')}
                    </CardContent>
                    <CardFooter className="flex flex-col gap-6 items-start">
                        <div className="flex flex-row gap-2 flex-wrap">
                            <Badge className="bg-[#4A4A6A] text-white" variant="default">Larabel</Badge>
                            <Badge className="bg-[#4A4A6A] text-white" variant="default">springboot</Badge>
                            <Badge className="bg-[#4A4A6A] text-white" variant="default">Tailwind</Badge>
                        </div>
                        <div className="flex gap-6">
                            <a href="https://github.com/issac-326/Netflix_spring-boot" target="_blank">
                                <Button variant="default" aria-label="github repository"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-300 dark:text-gray-800 w-5 h-5"><title>GitHub</title><path className="highlight-on-hover" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></Button>
                            </a>
                            <a href="https://github.com/issac-326/Netflix_spring-boot" target="_blank">
                                <Button variant="default" aria-label="github repository"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-300 dark:text-gray-800 w-5 h-5"><title>GitHub</title><path className="highlight-on-hover" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></Button>
                            </a>
                        </div>
                    </CardFooter>
                </Card>
            <Card className="overflow-hidden shadow-lg bg-slate-300 dark:bg-black-card">
                <CardHeader>
                    <CardTitle>Billy bounce</CardTitle>
                </CardHeader>
                <CardContent>
                <video 
                width="640" 
                height="360" 
                controls 
                autoPlay // Cambiado de autoplay a autoPlay
                loop>
                <source src="" type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
                </video>

                </CardContent>
                <CardFooter className="flex flex-col gap-6 items-start">
                    <div className="flex flex-row gap-2 flex-wrap">
                        <Badge className="bg-blue-500 text-white" variant="default">React</Badge>
                        <Badge className="bg-blue-500 text-white" variant="default">Typescript</Badge>
                        <Badge className="bg-blue-500 text-white" variant="default">Astro</Badge>
                        <Badge className="bg-blue-500 text-white" variant="default">Tailwind</Badge>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}