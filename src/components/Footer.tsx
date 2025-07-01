import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, PaintBucket, Hammer, Monitor } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Peinture intérieure/extérieure', href: '/services' },
        { name: 'Menuiserie & ébénisterie', href: '/services' },
        { name: 'Fixation d\'écrans TV', href: '/services' },
        { name: 'Carrelage & faïence', href: '/services' }
      ]
    },
    {
      title: 'Réalisations',
      links: [
        { name: 'Projets récents', href: '/portfolio' },
        { name: 'Rénovations complètes', href: '/portfolio' },
        { name: 'Installations TV', href: '/portfolio' },
        { name: 'Travaux de peinture', href: '/portfolio' }
      ]
    },
    {
      title: 'Contact',
      links: [
        { name: 'Devis gratuit', href: '/contact' },
        { name: 'Intervention urgente', href: '/contact' },
        { name: 'Zone d\'intervention', href: '/contact' },
        { name: 'Prendre RDV', href: '/contact' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ];

  const quickServices = [
    { icon: PaintBucket, name: 'Peinture' },
    { icon: Hammer, name: 'Menuiserie' },
    { icon: Monitor, name: 'Fixation TV' }
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-primary-600 rounded-lg">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Shap Shap Services</h3>
                  <p className="text-secondary-200 text-sm">Artisan Multi-Services</p>
                </div>
              </Link>
              <p className="text-secondary-200 mb-6 leading-relaxed">
                Votre partenaire de confiance pour tous vos travaux : peinture, menuiserie, 
                carrelage, vitrerie, fixation d'écrans et bien plus encore.
              </p>
              
              {/* Quick Services */}
              <div className="flex gap-3 mb-6">
                {quickServices.map((service, index) => (
                  <div key={index} className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                    <service.icon className="h-5 w-5 text-secondary-200" />
                  </div>
                ))}
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-secondary-400" />
                  <span className="text-secondary-200">+33 6 12 34 56 78</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-secondary-400" />
                  <span className="text-secondary-200">contact@shapshapservices.fr</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-secondary-400 mt-1" />
                  <span className="text-secondary-200">
                    Paris et Île-de-France<br />
                    Intervention rapide
                  </span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.href}
                        className="text-secondary-200 hover:text-white transition-colors duration-200 flex items-center group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-secondary-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-bold mb-2">Restez informé</h4>
              <p className="text-secondary-200">
                Recevez nos conseils et offres spéciales par email
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 bg-secondary-800 border border-secondary-700 rounded-lg text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-500 transition-colors font-semibold">
                S'abonner
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-secondary-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-secondary-200 text-sm">
              © {currentYear} Shap Shap Services. Tous droits réservés.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-secondary-200 text-sm mr-2">Suivez-nous :</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-secondary-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5 text-secondary-200 group-hover:text-white" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <Link to="#" className="text-secondary-200 hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link to="#" className="text-secondary-200 hover:text-white transition-colors">
                Confidentialité
              </Link>
              <Link to="#" className="text-secondary-200 hover:text-white transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;