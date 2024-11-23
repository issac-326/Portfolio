"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Info() {
  return (
    <Tabs defaultValue="about" className="w-full max-w-3xl mx-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="about">Sobre mí</TabsTrigger>
        <TabsTrigger value="experience">Experiencia</TabsTrigger>
      </TabsList>
      <TabsContent value="about">
        <Card className="bg-gray-800 text-gray-100 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-400">Sobre mí</CardTitle>
            <CardDescription className="text-gray-400">Un vistazo a quién soy y qué me apasiona.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Soy un desarrollador web creativo y orientado a soluciones, con una pasión por construir experiencias digitales intuitivas y atractivas.</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Ubicación: Francisco Morazan, HN</li>
              <li>Edad: 23 años</li>
              <li>Idiomas: Español (nativo), Inglés (B1)</li>
              <li>Intereses: Tecnología, viajes, aprendizaje continuo</li>
            </ul>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="experience">
        <Card className="bg-gray-800 text-gray-100 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl text-green-400">Experiencia Laboral</CardTitle>
            <CardDescription className="text-gray-400">Mi trayectoria profesional hasta la fecha.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-6">
              <li>
                <h3 className="text-xl font-semibold text-green-300">Desarrollador Full Stack Senior</h3>
                <p className="text-gray-400">TechCorp | 2020 - Presente</p>
                <ul className="list-disc pl-5 mt-2 text-gray-300">
                  <li>Lideré el desarrollo de una aplicación web de comercio electrónico que aumentó las ventas en un 30%.</li>
                  <li>Implementé una arquitectura de microservicios que mejoró el rendimiento del sistema en un 40%.</li>
                  <li>Mentoría a desarrolladores junior y coordinación de sprints de desarrollo.</li>
                </ul>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-green-300">Desarrollador Front-end</h3>
                <p className="text-gray-400">WebSolutions | 2018 - 2020</p>
                <ul className="list-disc pl-5 mt-2 text-gray-300">
                  <li>Desarrollé interfaces de usuario responsivas y accesibles para clientes de diversos sectores.</li>
                  <li>Colaboré en la creación de un framework de componentes interno que aceleró el desarrollo en un 25%.</li>
                </ul>
              </li>
            </ul>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}