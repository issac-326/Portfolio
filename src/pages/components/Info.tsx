"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getLangFromUrl, useTranslations } from '../../i18n/util'
import { useState, useEffect } from 'react'

export default function Info() {
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
    <Tabs defaultValue="about" className="w-full max-w-3xl mx-auto">
      <TabsList className="grid w-full grid-cols-2 bg-gray-800">
        <TabsTrigger 
          value="about" 
          className="data-[state=active]:bg-gray-900 data-[state=active]:text-gray-100 text-gray-400"
        >
          {t('nav.aboutMe')}
        </TabsTrigger>
        <TabsTrigger 
          value="experience" 
          className="data-[state=active]:bg-gray-900 data-[state=active]:text-gray-100 text-gray-400"
        >
          Experiencia
        </TabsTrigger>
      </TabsList>
      <TabsContent value="about">
        <Card className="bg-gray-800 text-gray-100 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-400">{t('nav.aboutMe')}</CardTitle>
            <CardDescription className="text-gray-400">{t('info.text')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>{t('info.text2')}</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>{t('info.ubicacion')}</li>
              <li>{t('info.age')}</li>
              <li>{t('info.lenguaje')}</li>
              <li>{t('info.int')}</li>
            </ul>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="experience">
        <Card className="bg-gray-800 text-gray-100 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl text-green-400">{t('info.exp')}</CardTitle>
            <CardDescription className="text-gray-400">{t('info.exp1')}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-6">
              <li>
                <h3 className="text-xl font-semibold text-green-300">{t('info.work')}</h3>
                <p className="text-gray-400">DIVECO | 2019</p>
                <ul className="list-disc pl-5 mt-2 text-gray-300">
                  <li>{t('info.list1')}</li>
                  <li>{t('info.list2')}</li>
                  <li>{t('info.list3')}</li>
                </ul>
              </li>
            </ul>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}