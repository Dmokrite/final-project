import Announce from '#models/announce'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Announce.createMany([
      {
        userId: 1,
        title: "Salut les trouduc",
        description: 'un Fistival de bonne chose',
        infidelityCard: false,
        private: true,
        escort: true,
        practices: [1, 2, 3, 4, 5],
        pricing: {
          '15min': 50,
          '30min': 80,
          '45min': 110,
          '60min': 120,
        },
      },
      {
        userId: 2,
        title: 'Mords mon cul métallique brillant !',
        description: 'Grosse clé usb cherche port approprié',
        infidelityCard: false,
        private: true,
        escort: true,
        practices: [1, 2, 3, 4, 5],
        pricing: {
          '15min': 50,
          '30min': 80,
          '45min': 110,
          '60min': 120,
        },
      },
      {
        userId: 3,
        title: 'Vive les Tchoutches',
        description:
          "Les tchoutches c'est fantastique, rejoignez moi au club Dorothée",
        infidelityCard: false,
        private: true,
        escort: true,
        practices: [1, 2, 3, 4, 5],
        pricing: {
          '15min': 50,
          '30min': 80,
          '45min': 110,
          '60min': 120,
        },
      },
      {
        userId: 4,
        title: 'Chercheuse de trésor',
        description:
          "Cherche femme aventureuse",
        infidelityCard: false,
        private: true,
        escort: true,
        practices: [1, 2, 3, 4, 5],
        pricing: {
          '15min': 50,
          '30min': 80,
          '45min': 110,
          '60min': 120,
        },
      },
      {
        userId: 5,
        title: 'Viens découvrir mon étoile noire',
        description:
          "Princesse intrépide cherche Jedi qui sait se servir de son sabre",
        infidelityCard: false,
        private: true,
        escort: true,
        practices: [1, 2, 3, 4, 5],
        pricing: {
          '15min': 50,
          '30min': 80,
          '45min': 110,
          '60min': 120,
        },
      },
      {
        userId: 6,
        title: 'Envolons nous au 7ieme ciel',
        description:
          "Milliardaire, beau gosse et séducteur cherche petite coquine lubrique",
        infidelityCard: false,
        private: true,
        escort: true,
        practices: [1, 2, 3, 4, 5],
        pricing: {
          '15min': 50,
          '30min': 80,
          '45min': 110,
          '60min': 120,
        },
      },
      {
        userId: 7,
        title: 'Tu vas adorer mes jouets',
        description:
          "Spécialiste du dildo et du gode-ceinture cherche sa chose",
        infidelityCard: false,
        private: true,
        escort: true,
        practices: [1, 2, 3, 4, 5],
        pricing: {
          '15min': 50,
          '30min': 80,
          '45min': 110,
          '60min': 120,
        },
      },
      {
        userId: 10,
        title: 'Viens voir mes gros boobs',
        description:
          "Petite cochonne dévergondée cherche desespérement grosse chauve-souris sans poils",
        infidelityCard: false,
        private: true,
        escort: true,
        practices: [1, 2, 3, 4, 5],
        pricing: {
          '15min': 50,
          '30min': 80,
          '45min': 110,
          '60min': 120,
        },
      },
      {
        userId: 11,
        title: 'Femme fontaine',
        description:
          "Il ne faut jamais dire femme fontaine je ne boirais pas de ton eau",
        infidelityCard: false,
        private: true,
        escort: true,
        practices: [1, 2, 3, 4, 5],
        pricing: {
          '15min': 50,
          '30min': 80,
          '45min': 110,
          '60min': 120,
        },
      },
      {
        userId: 12,
        title: 'Viens élargir tes orifist',
        description:
          "Des gants et pas de lubrifiant, promesse d'une soirée de délire assurée",
        infidelityCard: false,
        private: true,
        escort: true,
        practices: [1, 2, 3, 4, 5],
        pricing: {
          '15min': 50,
          '30min': 80,
          '45min': 110,
          '60min': 120,
        },
      },
      {
        userId: 15,
        title: 'Mon gros marteau est disponible pour toi',
        description:
          "Tu cherches un plan hors du commun, avec le contrôleur de Foutre tu vas prendre ton pied",
        infidelityCard: false,
        private: true,
        escort: true,
        practices: [1, 2, 3, 4, 5],
        pricing: {
          '15min': 50,
          '30min': 80,
          '45min': 110,
          '60min': 120,
        },
      },
    ])
  }
}
