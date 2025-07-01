import React from 'react';
import { Check, Clock, Euro, Users, Calendar, PaintBucket, Hammer, Monitor, Grid3X3, Eye, Wrench, Zap, Home } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Peinture Intérieure & Extérieure',
      description: 'Travaux de peinture pour tous types de surfaces',
      icon: PaintBucket,
      features: [
        'Préparation des surfaces',
        'Peinture murs et plafonds',
        'Finitions décoratives',
        'Peinture façades',
        'Conseils couleurs'
      ],
      price: 'À partir de 25€/m²',
      duration: '1-3 jours',
      image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg'
    },
    {
      title: 'Menuiserie & Ébénisterie',
      description: 'Créations et réparations en bois sur mesure',
      icon: Hammer,
      features: [
        'Meubles sur mesure',
        'Réparation mobilier',
        'Pose de parquets',
        'Aménagements placards',
        'Restauration bois'
      ],
      price: 'À partir de 150€',
      duration: '1-5 jours',
      image: 'https://images.pexels.com/photos/5974393/pexels-photo-5974393.jpeg'
    },
    {
      title: 'Fixation d\'Écrans & Supports',
      description: 'Installation professionnelle de TV et écrans muraux',
      icon: Monitor,
      features: [
        'Fixation TV murale',
        'Installation supports',
        'Câblage discret',
        'Réglage optimal',
        'Test fonctionnement'
      ],
      price: 'À partir de 80€',
      duration: '2-4 heures',
      image: 'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg'
    },
    {
      title: 'Carrelage & Faïence',
      description: 'Pose et rénovation de carrelages tous formats',
      icon: Grid3X3,
      features: [
        'Pose carrelage sol/mur',
        'Joints et finitions',
        'Réparation carreaux',
        'Étanchéité douches',
        'Conseils matériaux'
      ],
      price: 'À partir de 35€/m²',
      duration: '2-5 jours',
      image: 'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg'
    },
    {
      title: 'Vitrerie & Miroiterie',
      description: 'Remplacement et réparation de vitres',
      icon: Eye,
      features: [
        'Remplacement vitres',
        'Pose de miroirs',
        'Vitrage sécurisé',
        'Dépannage urgence',
        'Sur-mesure'
      ],
      price: 'À partir de 60€',
      duration: '1-2 heures',
      image: 'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg'
    },
    {
      title: 'Montage & Réparation Mobilier',
      description: 'Assemblage et réparation de tous types de meubles',
      icon: Wrench,
      features: [
        'Montage meubles kit',
        'Réparation chaises',
        'Ajustement portes',
        'Remplacement pièces',
        'Optimisation rangements'
      ],
      price: 'À partir de 40€',
      duration: '1-3 heures',
      image: 'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg'
    }
  ];

  const additionalServices = [
    {
      icon: Zap,
      title: 'Petite Électricité',
      description: 'Installation prises, interrupteurs, luminaires'
    },
    {
      icon: Home,
      title: 'Rénovation Complète',
      description: 'Coordination de tous corps d\'état'
    },
    {
      icon: Users,
      title: 'Conseil & Expertise',
      description: 'Accompagnement projet et devis détaillé'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Contact & Diagnostic',
      description: 'Échange téléphonique et visite sur site si nécessaire',
      duration: 'Gratuit'
    },
    {
      step: '02',
      title: 'Devis Personnalisé',
      description: 'Établissement d\'un devis détaillé sous 24h',
      duration: '24h'
    },
    {
      step: '03',
      title: 'Planification',
      description: 'Organisation de l\'intervention selon vos disponibilités',
      duration: '48h'
    },
    {
      step: '04',
      title: 'Réalisation',
      description: 'Intervention professionnelle avec matériel adapté',
      duration: 'Selon devis'
    }
  ];

  const garantees = [
    {
      icon: Check,
      title: 'Satisfaction Garantie',
      description: 'Reprise gratuite si non-conformité'
    },
    {
      icon: Users,
      title: 'Équipe Qualifiée',
      description: 'Artisans expérimentés et assurés'
    },
    {
      icon: Clock,
      title: 'Ponctualité',
      description: 'Respect des horaires convenus'
    },
    {
      icon: Euro,
      title: 'Tarifs Transparents',
      description: 'Devis détaillé sans surprise'
    }
  ];

  return (
    <div className="pt-8 pb-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
            Nos Services Multi-Techniques
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une équipe polyvalente pour tous vos travaux de rénovation, 
            d'aménagement et de réparation
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary-600 text-white p-3 rounded-full">
                  <service.icon className="h-6 w-6" />
                </div>
                <div className="absolute top-4 right-4 bg-white text-primary-600 px-4 py-2 rounded-full text-sm font-semibold">
                  {service.price}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center">
                        <Check className="h-3 w-3 text-primary-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t">
                  <div className="flex items-center gap-2 text-primary-600">
                    <Clock className="h-5 w-5" />
                    <span className="font-medium">{service.duration}</span>
                  </div>
                  <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                    Demander un devis
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Services Complémentaires
            </h2>
            <p className="text-gray-600">
              D'autres prestations pour compléter vos projets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-secondary-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-bold text-primary-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gradient-to-b from-primary-50 to-white rounded-3xl mb-20">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                Notre Méthode de Travail
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Un processus rodé pour la réussite de votre projet
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                  <span className="text-primary-600 font-medium text-sm">{step.duration}</span>
                  
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-primary-200 transform -translate-x-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantees Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Nos Engagements Qualité
            </h2>
            <p className="text-gray-600">
              Votre satisfaction est notre priorité
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {garantees.map((guarantee, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <guarantee.icon className="h-6 w-6 text-accent-600" />
                </div>
                <h3 className="font-bold text-primary-900 mb-2">{guarantee.title}</h3>
                <p className="text-gray-600 text-sm">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Contactez Shap Shap Services pour un devis gratuit et personnalisé sous 24h
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-secondary-50 transition-colors flex items-center gap-2 mx-auto sm:mx-0">
              <Calendar className="h-5 w-5" />
              Demander un devis
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Appeler maintenant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;