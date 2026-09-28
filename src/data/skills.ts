export interface SkillCategory {
  id: keyof typeof categoryKeys
  icon: string
  skills: string[]
}

const categoryKeys = {
  dev: true,
  ai: true,
  reverse: true,
  tools: true,
  legacy: true,
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'dev',
    icon: '⚡',
    skills: [
      'Java 8–17+',
      'Spring Boot',
      'Spring Data',
      'Spring Security',
      'Spring Batch',
      'Angular v6–v20',
      'TypeScript',
      'REST',
      'SOAP',
      'Microservices',
      'SOA',
      'Event-Driven Architecture',
      'Kafka Confluent',
      'IBM MQ',
      'Azure',
      'GitHub Actions',
      'TDD',
    ],
  },
  {
    id: 'ai',
    icon: '🤖',
    skills: [
      'Prompt Engineering',
      'LLM & Copilot',
      'MCP',
      'Token Optimization',
      'RTK',
      'Caveman',
      'Graphify',
      'Codebase Analysis',
      'AI-driven Testing',
      'Specs .md',
    ],
  },
  {
    id: 'reverse',
    icon: '🔍',
    skills: [
      'Reverse Documentation',
      'PlantUML',
      'Atlassian Rovo',
      'I/O Process Mapping',
      'Semantic Investigation',
    ],
  },
  {
    id: 'tools',
    icon: '🛠️',
    skills: [
      'PostgreSQL',
      'Oracle 11g/19',
      'Git',
      'GitHub',
      'Maven',
      'Nexus',
      'Jira',
      'Postman',
      'Bruno',
      'Grafana',
      'Kibana',
      'Dynatrace',
      'Conduktor',
    ],
  },
  {
    id: 'legacy',
    icon: '📦',
    skills: [
      'Struts',
      'GWT',
      'Vaadin',
      'GXT',
      'Tomcat',
      'IBM WebSphere',
      'Groovy',
      'Grails',
    ],
  },
]
