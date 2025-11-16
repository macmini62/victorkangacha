import { Project } from '@/types/project';

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Portfolio',
    description: 'A modern portfolio website build using Nextjs',
    technologies: ['NextJs', 'React', 'TailwindCss', 'TypeScript', 'AWS'],
    image: '/projects/nice.jpeg',
    category: 'Web Development',
    links: {
      github: 'https://github.com/macmini62/victorkangacha-platform-io',
      live: 'https://victorkangacha-platform-io.vercel.app',
    },
    featured: true,
  },
  {
    id: '2',
    title: 'Uber Data EDA',
    description:
      'A visualization project that uncovers the different patterns and insights in the uber dataset',
    technologies: ['Python', 'Seaborn', 'Numpy', 'Matplotlib'],
    image: '/projects/uber.png',
    category: 'Data Science',
    links: {
      live: 'https://www.kaggle.com/code/macmini62/uber-eda',
    },
    featured: true,
  },
  {
    id: '3',
    title: 'Global_Security_Threats EDA',
    description:
      'Uncovering patterns and trends on global cybersecurity threats in years between 2015 - 2024',
    technologies: [
      'Python',
      'Seaborn',
      'Numpy',
      'Matplotlib',
      'Kagglehub',
      'Sklearn',
    ],
    image: '/projects/security.png',
    category: 'Data Science',
    links: {
      live: 'https://www.kaggle.com/code/macmini62/global-security-threats-eda/notebook',
    },
    featured: true,
  },
];
