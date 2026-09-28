export interface Experience {
  id: number
  company: string
  companyColor: string
  role: { fr: string; en: string }
  period: { fr: string; en: string }
  context: { fr: string; en: string }
  bullets: { fr: string[]; en: string[] }
  tech: string[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Air France',
    companyColor: '#1A56DB',
    role: {
      fr: 'Ingénieur Fullstack Senior',
      en: 'Senior Fullstack Engineer',
    },
    period: {
      fr: 'Mars 2024 — Aujourd\'hui',
      en: 'March 2024 — Present',
    },
    context: {
      fr: 'Équipe Ticketing/Billetterie — modernisation d\'un écosystème critique gérant la comptabilité des ventes d\'Air France KLM.',
      en: 'Ticketing team — modernization of a critical ecosystem managing Air France KLM sales accounting.',
    },
    bullets: {
      fr: [
        'Cloud & Migration Legacy : migration Java 8/Tomcat vers Azure (SpringBoot 3.5, PostgreSQL)',
        'Architecture Événementielle : IBM MQ (600K événements/jour) → Kafka Confluent (17M événements historisés)',
        'API Management : migration SOAP → REST, Azure APIM avec authentification Azure AD',
        'UI/Frontend : montée Angular 16 → 20, refonte ergonomique de l\'application Billet',
        'Leadership offshore : encadrement de 3 développeurs TCS en mode Scrum',
      ],
      en: [
        'Cloud Replatforming: Java 8/Tomcat on-premise migration to Azure (SpringBoot 3.5, PostgreSQL)',
        'Event Architecture: IBM MQ (600K events/day) → Kafka Confluent (17M event history)',
        'API Management: SOAP → REST migration, Azure APIM with Azure AD authentication',
        'UI/Frontend: Angular 16 → 20 upgrade, UX redesign of the Billet application',
        'Offshore Leadership: lead of 3 TCS developers in Scrum',
      ],
    },
    tech: ['Java 17', 'Spring Boot 3.5', 'Angular 20', 'Azure APIM', 'Kafka Confluent', 'IBM MQ', 'PostgreSQL', 'GitHub Actions', 'Grafana', 'Kibana', 'Dynatrace'],
  },
  {
    id: 2,
    company: 'Air France',
    companyColor: '#1A56DB',
    role: {
      fr: 'Ingénieur Fullstack',
      en: 'Fullstack Engineer',
    },
    period: {
      fr: 'Sept. 2022 — Mars 2024',
      en: 'Sep. 2022 — Mar. 2024',
    },
    context: {
      fr: 'DVPI (Direction des Ventes pour le Personnel Interne) — évolution de l\'écosystème applicatif dédié au personnel et aux partenaires.',
      en: 'DVPI (Internal Sales Division) — evolution of the application ecosystem for staff and partners.',
    },
    bullets: {
      fr: [
        'Migration Struts → Angular : refonte des fonctionnalités critiques (remboursements, APIs REST)',
        'Frontend : montée Angular 8 → 15, création de nouveaux composants',
        'Design System : customisation Angular Material (thèmes, palettes)',
        'Agile Delivery : gestion des releases et support production en Scrum',
      ],
      en: [
        'Struts → Angular Migration: rewrite of critical features (refunds, REST APIs)',
        'Frontend: Angular 8 → 15 upgrade, new component development',
        'Design System: Angular Material customization (themes, color palettes)',
        'Agile Delivery: release management and production support in Scrum',
      ],
    },
    tech: ['Java 8', 'Spring Boot', 'Angular 15', 'Angular Material', 'Oracle 19', 'Grafana', 'Kibana'],
  },
  {
    id: 3,
    company: 'Docaposte',
    companyColor: '#DC2626',
    role: {
      fr: 'Ingénieur Fullstack',
      en: 'Fullstack Engineer',
    },
    period: {
      fr: 'Mars — Sept. 2022',
      en: 'Mar. — Sep. 2022',
    },
    context: {
      fr: 'Application de paiement au compte de tiers : interfaces frontend et architecture backend REST.',
      en: 'Third-party payment application: frontend interfaces and REST backend architecture.',
    },
    bullets: { fr: [], en: [] },
    tech: ['Java 8', 'Angular', 'Spring Boot', 'PostgreSQL 10', 'GitLab', 'Jenkins'],
  },
  {
    id: 4,
    company: 'Docaposte',
    companyColor: '#DC2626',
    role: {
      fr: 'Ingénieur Backend',
      en: 'Backend Engineer',
    },
    period: {
      fr: 'Déc. 2021 — Mars 2022',
      en: 'Dec. 2021 — Mar. 2022',
    },
    context: {
      fr: 'Projets d\'assurance mutuelle (MAAF, GGVIE, ACTIL). Scripts Groovy pour configuration d\'environnements et purge de bases de données.',
      en: 'Mutual insurance projects (MAAF, GGVIE, ACTIL). Groovy scripts for environment configuration and database purging.',
    },
    bullets: { fr: [], en: [] },
    tech: ['Groovy', 'Grails 2.5', 'Spring Boot', 'PostgreSQL 10'],
  },
  {
    id: 5,
    company: 'Thales DIS',
    companyColor: '#0066CC',
    role: {
      fr: 'Ingénieur Java',
      en: 'Java Engineer',
    },
    period: {
      fr: 'Mai — Nov. 2021',
      en: 'May — Nov. 2021',
    },
    context: {
      fr: 'Solutions de Mock API (REST/SOAP) pour la digitalisation de la carte bancaire. Tests de performance avec JMeter et simulateurs d\'API.',
      en: 'API Mock solutions (REST/SOAP) for bank card digitization. Performance testing with JMeter and API simulators.',
    },
    bullets: { fr: [], en: [] },
    tech: ['Java 11', 'Spring Boot', 'Node.js', 'Swagger', 'JMeter'],
  },
  {
    id: 6,
    company: 'ADSN',
    companyColor: '#059669',
    role: {
      fr: 'Ingénieur Java',
      en: 'Java Engineer',
    },
    period: {
      fr: 'Janv. — Avr. 2021',
      en: 'Jan. — Apr. 2021',
    },
    context: {
      fr: 'Développement d\'une API REST pour le réseau européen des registres testamentaires.',
      en: 'Development of a REST API for the European network of testamentary registries.',
    },
    bullets: { fr: [], en: [] },
    tech: ['Java 11', 'Spring Boot', 'Oracle', 'Angular 8'],
  },
  {
    id: 7,
    company: 'ACOSS / URSSAF',
    companyColor: '#0369A1',
    role: {
      fr: 'Ingénieur Java',
      en: 'Java Engineer',
    },
    period: {
      fr: 'Avr. 2019 — Juin 2020',
      en: 'Apr. 2019 — Jun. 2020',
    },
    context: {
      fr: 'Maintenance et développement de nouveaux écrans pour le portail web des agents de l\'URSSAF.',
      en: 'Maintenance and development of new screens for the URSSAF agents\' web portal.',
    },
    bullets: {
      fr: [
        'Développement de nouveaux écrans GWT (module pièces justificatives du débit)',
        'Gestion de la delivery et de la release avec Jenkins',
        'Développement de nouveaux web services dans le socle technique',
      ],
      en: [
        'New GWT screens development (supporting documents module)',
        'Delivery and release management with Jenkins',
        'New web services development in the technical foundation',
      ],
    },
    tech: ['Java 8', 'GWT 2.8.1', 'Spring 4', 'Jenkins'],
  },
  {
    id: 8,
    company: 'INRA',
    companyColor: '#7C3AED',
    role: {
      fr: 'Ingénieur Java',
      en: 'Java Engineer',
    },
    period: {
      fr: 'Oct. — Déc. 2018',
      en: 'Oct. — Dec. 2018',
    },
    context: {
      fr: 'Installation et configuration de WSO2 API Manager pour le référentiel de l\'INRA en mode agile.',
      en: 'Installation and configuration of WSO2 API Manager for the INRA repository in agile mode.',
    },
    bullets: { fr: [], en: [] },
    tech: ['Java 8', 'WSO2', 'Bonita', 'Spring', 'Hibernate'],
  },
  {
    id: 9,
    company: 'Orange Labs',
    companyColor: '#EA580C',
    role: {
      fr: 'Ingénieur Java',
      en: 'Java Engineer',
    },
    period: {
      fr: '2015 — 2018 & 2019',
      en: '2015 — 2018 & 2019',
    },
    context: {
      fr: 'Développement et maintenance de l\'interface Web de la LiveBox professionnelle d\'Orange.',
      en: 'Development and maintenance of the web interface for Orange\'s professional LiveBox.',
    },
    bullets: {
      fr: [
        'Développement de nouvelles interfaces web',
        'Intégration de données Sagem via une API JavaScript',
        'Gestion des releases et du delivery avec Jenkins',
      ],
      en: [
        'New web interface development',
        'Sagem data integration via JavaScript API',
        'Release and delivery management with Jenkins',
      ],
    },
    tech: ['Java 7', 'GWT 2.7.0', 'Jenkins', 'HP Quality Center'],
  },
  {
    id: 10,
    company: 'ESI Integration',
    companyColor: '#9333EA',
    role: {
      fr: 'Ingénieur (Apprenti)',
      en: 'Software Engineer (Apprentice)',
    },
    period: {
      fr: 'Sept. 2012 — Sept. 2015',
      en: 'Sep. 2012 — Sep. 2015',
    },
    context: {
      fr: 'Refonte de l\'application de supervision en télésurveillance "Global Manager" — tableau de bord supervisant l\'ensemble des logiciels vendus par ESI.',
      en: 'Redesign of the "Global Manager" remote monitoring application — dashboard supervising ESI\'s software suite.',
    },
    bullets: {
      fr: [
        'Définition des indicateurs systèmes et fonctionnels',
        'Création de widgets et système d\'édition de board personnalisé',
        'Développement de l\'interface web et des composants graphiques',
      ],
      en: [
        'Definition of system and functional indicators',
        'Widget creation and custom board editing system',
        'Web interface and graphical component development',
      ],
    },
    tech: ['Java 7', 'GWT 2.4.0', 'GXT 3', 'Sencha', 'Spring', 'Hibernate'],
  },
]
