import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Calendar, MessageCircle, Wrench } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
    urgency: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Merci pour votre demande ! Nous vous recontacterons dans les plus brefs délais.');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+33 6 12 34 56 78',
      action: 'Appelez-nous'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@shapshapservices.fr',
      action: 'Écrivez-nous'
    },
    {
      icon: MapPin,
      title: 'Zone d\'intervention',
      content: 'Paris et Île-de-France\nDéplacements possibles',
      action: 'Voir la zone'
    },
    {
      icon: Clock,
      title: 'Disponibilités',
      content: 'Lun-Sam: 8h-19h\nUrgences: 24h/24',
      action: 'Planning'
    }
  ];

  const serviceTypes = [
    'Peinture intérieure/extérieure',
    'Menuiserie & ébénisterie',
    'Fixation d\'écrans TV',
    'Carrelage & faïence',
    'Vitrerie & miroiterie',
    'Montage/réparation mobilier',
    'Rénovation complète',
    'Autre (préciser)'
  ];

  const urgencyLevels = [
    'Pas urgent (dans la semaine)',
    'Modéré (sous 3 jours)',
    'Urgent (sous 24h)',
    'Très urgent (même jour)'
  ];

  return (
    <div className="pt-8 pb-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
            Contactez Shap Shap Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Besoin d'un artisan polyvalent ? Décrivez-nous votre projet et 
            recevez un devis gratuit sous 24h !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-10">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-900 mb-3">
                Demande de devis gratuit
              </h2>
              <p className="text-gray-600">
                Décrivez votre besoin, nous vous recontactons rapidement
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary-900 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-primary-900 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-primary-900 mb-2">
                    Type de service *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Sélectionnez...</option>
                    {serviceTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="urgency" className="block text-sm font-semibold text-primary-900 mb-2">
                  Niveau d'urgence
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                >
                  <option value="">Sélectionnez...</option>
                  {urgencyLevels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-primary-900 mb-2">
                  Description du projet *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                  placeholder="Décrivez votre projet : nature des travaux, surface, contraintes particulières, délais souhaités..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 transform hover:scale-105"
              >
                <Send className="h-5 w-5" />
                Envoyer ma demande
              </button>
            </form>
          </div>

          {/* Contact Info & Services */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-primary-50 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">
                Informations de contact
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary-900 mb-1">{info.title}</h3>
                      <p className="text-gray-700 whitespace-pre-line mb-2">{info.content}</p>
                      <button className="text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors">
                        {info.action} →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Rapides */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">
                Services Express
              </h2>
              <p className="text-gray-600 mb-6">
                Certains travaux peuvent être réalisés en urgence
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-accent-50 rounded-lg">
                  <Wrench className="h-5 w-5 text-accent-600" />
                  <span className="text-gray-700">Fixation écran TV - 2h</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-accent-50 rounded-lg">
                  <Wrench className="h-5 w-5 text-accent-600" />
                  <span className="text-gray-700">Réparation vitre - 1h</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-accent-50 rounded-lg">
                  <Wrench className="h-5 w-5 text-accent-600" />
                  <span className="text-gray-700">Montage meuble - 3h</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-accent-50 rounded-lg">
                  <Wrench className="h-5 w-5 text-accent-600" />
                  <span className="text-gray-700">Petite peinture - 1 jour</span>
                </div>
              </div>
            </div>

            {/* Contact Rapide */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">
                Besoin d'une intervention rapide ?
              </h2>
              <p className="text-primary-100 mb-6">
                Pour les urgences ou questions simples, contactez-nous directement
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-secondary-50 transition-colors flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Appeler maintenant
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Zone d'intervention */}
        <div className="mt-16 bg-secondary-100 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-primary-900 mb-4">Zone d'intervention</h3>
          <p className="text-gray-600 mb-4">
            Nous intervenons principalement en Île-de-France avec possibilité de déplacement selon le projet
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white px-4 py-2 rounded-full text-primary-600 font-medium">Paris</span>
            <span className="bg-white px-4 py-2 rounded-full text-primary-600 font-medium">Hauts-de-Seine</span>
            <span className="bg-white px-4 py-2 rounded-full text-primary-600 font-medium">Seine-Saint-Denis</span>
            <span className="bg-white px-4 py-2 rounded-full text-primary-600 font-medium">Val-de-Marne</span>
            <span className="bg-white px-4 py-2 rounded-full text-primary-600 font-medium">+ sur demande</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;