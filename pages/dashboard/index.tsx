import React, { useState } from 'react';
import { 
  Calendar, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Phone, 
  Mail, 
  MapPin,
  Eye,
  Edit,
  Trash2,
  Plus,
  Filter,
  Download,
  Wrench
} from 'lucide-react';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [selectedReservation, setSelectedReservation] = useState<any>(null);

  const stats = [
    {
      title: 'Interventions ce mois',
      value: '42',
      change: '+18%',
      icon: Calendar,
      color: 'bg-blue-500'
    },
    {
      title: 'Nouveaux clients',
      value: '28',
      change: '+12%',
      icon: Users,
      color: 'bg-green-500'
    },
    {
      title: 'Chiffre d\'affaires',
      value: '12 450€',
      change: '+22%',
      icon: DollarSign,
      color: 'bg-primary-500'
    },
    {
      title: 'Projets en cours',
      value: '9',
      change: '+3',
      icon: TrendingUp,
      color: 'bg-purple-500'
    }
  ];

  const recentReservations = [
    {
      id: 1,
      client: 'Marie Leblanc',
      email: 'marie.leblanc@email.com',
      phone: '+33 6 12 34 56 78',
      service: 'Peinture salon',
      date: '2024-01-15',
      time: '14:00',
      status: 'confirmé',
      budget: '800€',
      notes: 'Peinture salon 25m², couleur à définir'
    },
    {
      id: 2,
      client: 'Jean Moreau',
      email: 'j.moreau@email.com',
      phone: '+33 6 87 65 43 21',
      service: 'Fixation TV murale',
      date: '2024-01-16',
      time: '10:30',
      status: 'en attente',
      budget: '120€',
      notes: 'TV 55" salon, support orientable'
    },
    {
      id: 3,
      client: 'Sophie Martin',
      email: 'sophie.martin@email.com',
      phone: '+33 6 11 22 33 44',
      service: 'Carrelage salle de bain',
      date: '2024-01-18',
      time: '16:00',
      status: 'confirmé',
      budget: '1200€',
      notes: 'Carrelage mural 15m², format 30x60'
    },
    {
      id: 4,
      client: 'Pierre Durand',
      email: 'p.durand@email.com',
      phone: '+33 6 99 88 77 66',
      service: 'Montage cuisine',
      date: '2024-01-20',
      time: '09:00',
      status: 'annulé',
      budget: '350€',
      notes: 'Montage cuisine IKEA'
    },
    {
      id: 5,
      client: 'Lucie Rousseau',
      email: 'l.rousseau@email.com',
      phone: '+33 6 55 44 33 22',
      service: 'Réparation vitre',
      date: '2024-01-22',
      time: '11:00',
      status: 'urgent',
      budget: '80€',
      notes: 'Remplacement vitre cassée urgence'
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Vue d\'ensemble', icon: TrendingUp },
    { id: 'reservations', name: 'Interventions', icon: Calendar },
    { id: 'clients', name: 'Clients', icon: Users },
    { id: 'services', name: 'Services', icon: Wrench }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmé':
        return 'bg-green-100 text-green-800';
      case 'en attente':
        return 'bg-yellow-100 text-yellow-800';
      case 'annulé':
        return 'bg-red-100 text-red-800';
      case 'urgent':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmé':
        return '✓';
      case 'en attente':
        return '⏳';
      case 'annulé':
        return '✕';
      case 'urgent':
        return '🚨';
      default:
        return '?';
    }
  };

  return (
    <div className="pt-8 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary-900 mb-2">
            Dashboard Shap Shap Services
          </h1>
          <p className="text-gray-600">
            Gérez vos interventions et suivez votre activité
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    selectedTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Overview Tab */}
        {selectedTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                      <p className="text-sm text-green-600 font-medium">
                        {stat.change} vs mois dernier
                      </p>
                    </div>
                    <div className={`p-3 rounded-xl ${stat.color}`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-primary-900 mb-6">
                Interventions récentes
              </h2>
              <div className="space-y-4">
                {recentReservations.slice(0, 5).map((reservation) => (
                  <div
                    key={reservation.id}
                    className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${getStatusColor(reservation.status)}`}>
                        {getStatusIcon(reservation.status)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{reservation.client}</p>
                        <p className="text-sm text-gray-600">{reservation.service}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">
                        {reservation.date} à {reservation.time}
                      </p>
                      <p className="text-sm text-primary-600">{reservation.budget}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Reservations Tab */}
        {selectedTab === 'reservations' && (
          <div className="space-y-6">
            {/* Actions Bar */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <div className="flex gap-3">
                <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Nouvelle intervention
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filtrer
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Exporter
                </button>
              </div>
            </div>

            {/* Reservations Table */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Client</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Service</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Date & Heure</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Budget</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Statut</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentReservations.map((reservation) => (
                      <tr key={reservation.id} className="border-b hover:bg-gray-50">
                        <td className="py-4 px-6">
                          <div>
                            <p className="font-semibold text-gray-900">{reservation.client}</p>
                            <p className="text-sm text-gray-600">{reservation.email}</p>
                            <p className="text-sm text-gray-600">{reservation.phone}</p>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <p className="text-gray-900">{reservation.service}</p>
                        </td>
                        <td className="py-4 px-6">
                          <div>
                            <p className="font-medium text-gray-900">{reservation.date}</p>
                            <p className="text-sm text-gray-600">{reservation.time}</p>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <p className="font-semibold text-primary-600">{reservation.budget}</p>
                        </td>
                        <td className="py-4 px-6">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(reservation.status)}`}>
                            {reservation.status}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex gap-2">
                            <button 
                              onClick={() => setSelectedReservation(reservation)}
                              className="text-blue-600 hover:text-blue-800 p-1"
                            >
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="text-primary-600 hover:text-primary-800 p-1">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-800 p-1">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Other tabs content placeholder */}
        {(selectedTab === 'clients' || selectedTab === 'services') && (
          <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Section en développement
            </h2>
            <p className="text-gray-600">
              Cette section sera développée dans une prochaine version
            </p>
          </div>
        )}

        {/* Reservation Detail Modal */}
        {selectedReservation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-primary-900">
                    Détails de l'intervention
                  </h2>
                  <button
                    onClick={() => setSelectedReservation(null)}
                    className="text-gray-500 hover:text-gray-700 text-xl"
                  >
                    ✕
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-primary-900 mb-3">Informations client</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span>{selectedReservation.client}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-gray-500" />
                          <span>{selectedReservation.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-gray-500" />
                          <span>{selectedReservation.phone}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary-900 mb-3">Détails de l'intervention</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span>{selectedReservation.date} à {selectedReservation.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-gray-500" />
                          <span>{selectedReservation.budget}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(selectedReservation.status)}`}>
                            {selectedReservation.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary-900 mb-3">Service demandé</h3>
                    <p className="text-lg text-primary-600">{selectedReservation.service}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary-900 mb-3">Notes</h3>
                    <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">
                      {selectedReservation.notes}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 mt-8 pt-6 border-t">
                  <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
                    Modifier
                  </button>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                    Confirmer
                  </button>
                  <button 
                    onClick={() => setSelectedReservation(null)}
                    className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;