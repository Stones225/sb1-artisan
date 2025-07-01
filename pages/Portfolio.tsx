import React, { useState } from 'react';
import { ExternalLink, Eye, Calendar } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'Toutes les réalisations' },
    { id: 'painting', name: 'Peinture' },
    { id: 'carpentry', name: 'Menuiserie' },
    { id: 'tiling', name: 'Carrelage' },
    { id: 'installation', name: 'Installations' },
    { id: 'renovation', name: 'Rénovations' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Rénovation appartement complet',
      category: 'renovation',
      image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg',
      description: 'Rénovation complète : peinture, carrelage, menuiserie',
      details: 'Rénovation totale d\'un appartement de 70m² incluant peinture de toutes les pièces, pose de carrelage dans la cuisine et salle de bain, création de rangements sur mesure.',
      duration: '3 semaines',
      client: 'Famille Dubois',
      year: '2024',
      services: ['Peinture', 'Carrelage', 'Menuiserie']
    },
    {
      id: 2,
      title: 'Installation TV murale salon',
      category: 'installation',
      image: 'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg',
      description: 'Fixation TV 65" avec câblage discret et meuble TV',
      details: 'Installation professionnelle d\'une TV 65 pouces avec support mural orientable, câblage encastré et création d\'un meuble TV sur mesure.',
      duration: '1 jour',
      client: 'M. Martin',
      year: '2024',
      services: ['Fixation écrans', 'Menuiserie']
    },
    {
      id: 3,
      title: 'Cuisine moderne - Peinture & Carrelage',
      category: 'tiling',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      description: 'Rénovation cuisine avec carrelage métro et peinture',
      details: 'Rénovation complète d\'une cuisine : pose de carrelage métro blanc, peinture des murs en gris anthracite, joints et finitions soignées.',
      duration: '1 semaine',
      client: 'Mme Leroy',
      year: '2024',
      services: ['Carrelage', 'Peinture']
    },
    {
      id: 4,
      title: 'Bibliothèque sur mesure',
      category: 'carpentry',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      description: 'Bibliothèque intégrée avec éclairage LED',
      details: 'Création d\'une bibliothèque sur mesure du sol au plafond avec éclairage LED intégré, finition laque blanche et système de rangement optimisé.',
      duration: '2 semaines',
      client: 'Cabinet Avocat',
      year: '2023',
      services: ['Menuiserie', 'Électricité']
    },
    {
      id: 5,
      title: 'Peinture façade maison',
      category: 'painting',
      image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg',
      description: 'Ravalement façade avec peinture haute qualité',
      details: 'Ravalement complet de façade : préparation des surfaces, traitement anti-mousse, application de peinture façade haute résistance.',
      duration: '1 semaine',
      client: 'Famille Bernard',
      year: '2023',
      services: ['Peinture extérieure']
    },
    {
      id: 6,
      title: 'Salle de bain complète',
      category: 'renovation',
      image: 'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg',
      description: 'Rénovation salle de bain : carrelage, peinture, mobilier',
      details: 'Rénovation totale salle de bain 6m² : carrelage sol et mur, peinture plafond, pose de mobilier et accessoires, étanchéité douche.',
      duration: '10 jours',
      client: 'M. et Mme Rousseau',
      year: '2024',
      services: ['Carrelage', 'Peinture', 'Mobilier']
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-8 pb-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
            Nos Réalisations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez la qualité de nos interventions à travers une sélection 
            de projets réalisés pour nos clients
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-primary-600 border-2 border-primary-200 hover:border-primary-400'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <Eye className="h-5 w-5" />
                    Voir détails
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.services.map((service, idx) => (
                    <span key={idx} className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                      {service}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-primary-600">
                  <span className="font-medium">{project.year}</span>
                  <span>{project.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-80 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-primary-900 mb-4">{selectedProject.title}</h2>
                <p className="text-gray-700 text-lg mb-6">{selectedProject.details}</p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary-900 mb-2">Client</h4>
                    <p className="text-primary-700">{selectedProject.client}</p>
                  </div>
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary-900 mb-2">Durée</h4>
                    <p className="text-primary-700">{selectedProject.duration}</p>
                  </div>
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary-900 mb-2">Année</h4>
                    <p className="text-primary-700">{selectedProject.year}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-primary-900 mb-3">Services réalisés</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.services.map((service: string, idx: number) => (
                      <span key={idx} className="bg-primary-100 text-primary-600 px-4 py-2 rounded-full font-medium">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Fermer
                  </button>
                  <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Projet similaire ?
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Inspiré par nos réalisations ?
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Contactez Shap Shap Services pour discuter de votre projet
          </p>
          <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-secondary-50 transition-colors flex items-center gap-2 mx-auto">
            <Calendar className="h-5 w-5" />
            Demander un devis gratuit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;