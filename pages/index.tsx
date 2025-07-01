import React from 'react';
import Link from 'next/link';
import { Star, Award, Users, Calendar, ArrowRight, Wrench, PaintBucket, Hammer, Monitor, Grid3X3, Eye } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: PaintBucket,
      title: 'Peinture',
      description: 'Intérieure et extérieure, finitions soignées'
    },
    {
      icon: Hammer,
      title: 'Menuiserie',
      description: 'Créations et réparations sur mesure'
    },
    {
      icon: Monitor,
      title: 'Fixation d\'écrans',
      description: 'Installation TV et supports muraux'
    },
    {
      icon: Grid3X3,
      title: 'Carrelage',
      description: 'Pose et rénovation de carrelages'
    },
    {
      icon: Eye,
      title: 'Vitrerie',
      description: 'Remplacement et réparation de vitres'
    },
    {
      icon: Wrench,
      title: 'Mobilier',
      description: 'Montage et réparation de meubles'
    }
  ];

  const testimonials = [
    {
      name: 'Marie Leblanc',
      text: 'Service impeccable ! L\'équipe de Shap Shap a rénové ma salle de bain avec un professionnalisme remarquable.',
      rating: 5,
      project: 'Rénovation salle de bain'
    },
    {
      name: 'Jean Moreau',
      text: 'Installation de ma TV murale parfaite. Travail soigné et conseils précieux. Je recommande !',
      rating: 5,
      project: 'Fixation écran TV'
    },
    {
      name: 'Sophie Martin',
      text: 'Peinture de mon appartement réalisée dans les temps. Finitions impeccables et prix correct.',
      rating: 5,
      project: 'Peinture appartement'
    }
  ];

  const stats = [
    { number: '10+', label: 'Années d\'expérience' },
    { number: '500+', label: 'Interventions réalisées' },
    { number: '98%', label: 'Clients satisfaits' },
    { number: '24h', label: 'Délai de réponse' }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-900 mb-6 leading-tight">
                <span className="text-accent-500">Shap Shap</span> Services
                <span className="block text-primary-600 text-3xl lg:text-4xl">Artisan Multi-Services</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Votre partenaire de confiance pour tous vos travaux : peinture, menuiserie, 
                carrelage, vitrerie, fixation d'écrans et bien plus encore. 
                Intervention rapide et qualité garantie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300"
                >
                  Nos services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary-200 rounded-3xl transform rotate-3 animate-float"></div>
              <img
                src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg"
                alt="Artisan au travail"
                className="relative w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-secondary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Nos Services Multi-Techniques
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une équipe polyvalente pour tous vos besoins en rénovation et aménagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                  <service.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-6">
                Pourquoi choisir Shap Shap Services ?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-2">Expertise Multi-Services</h3>
                    <p className="text-gray-600">Une seule équipe pour tous vos travaux, évitant la coordination de multiples artisans.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-2">Intervention Rapide</h3>
                    <p className="text-gray-600">Réactivité garantie avec des délais d'intervention courts pour vos urgences.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-2">Qualité Garantie</h3>
                    <p className="text-gray-600">Matériaux de qualité et finitions soignées avec garantie sur tous nos travaux.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5691658/pexels-photo-5691658.jpeg"
                alt="Équipe Shap Shap Services"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Avis de nos clients
            </h2>
            <p className="text-xl text-gray-600">
              La satisfaction client au cœur de notre métier
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-secondary-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-primary-900">{testimonial.name}</p>
                  <p className="text-sm text-primary-600">{testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Besoin d'un artisan polyvalent ?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour un devis gratuit et personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-secondary-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Demander un devis
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;