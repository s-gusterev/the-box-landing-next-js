import {
  hero, hero2, hero3, hero4, hero5,
  iconReputation1, iconReputation2,
  architecture, construction,
  consultation, electric, renovation, repair, clientsIllustration, awardIllustration, businessIllustration, projectsIllustration,
  project_1, project_2, project_3, project_4, project_5, project_6, project_7, project_8, project_9, project_10, project_11, project_12
} from '../public'

const menu = [{
  title: 'Home',
  url: '/'
}, {
  title: 'About Us',
  url: 'about'
},
{
  title: 'Projects',
  url: '#projects'
},
{
  title: 'Services',
  url: '#services'
},
{
  title: 'Contact Us',
  url: '#contact-us'
},
]

const heroSlider = [{
  title: 'The National University of Architecture',
  image: 'hero.jpg',
  id: '1'
},
{
  title: 'Massachusetts Institute of Technology',
  image: 'hero-2.jpg',
  id: '2'
},
{
  title: 'Delft University of Technology',
  image: 'hero-3.jpg',
  id: '3'
},
{
  title: 'University College London',
  image: 'hero-4.jpg',
  id: '4'
},
{
  title: 'Swiss Federal Institute of Technology',
  image: 'hero-5.jpeg',
  id: '5'
}
]

const reputationCards = [{
  image: '/icon-reputation-1.svg',
  title: 'Best Services',
  paragraph: 'Nullam senectus porttitor in eget. Eget rutrum leo interdum.'
},
{
  image: '/icon-reputation-1.svg',
  title: 'Best Teams',
  paragraph: 'Cursus semper tellus volutpat aliquet lacus. '
},
{
  image: '/icon-reputation-2.svg',
  title: 'Best Designs',
  paragraph: 'Ultricies at ipsum nunc, tristique nam lectus.'
}]

const services = [{
  title: 'Construction',
  image: '/construction-icon-dark.svg',
  theme: 'light',
  id: '1'
}, {
  title: 'Renovation',
  image: '/renovation-icon-light.svg',
  theme: 'dark',
  id: '2'
},
{
  title: 'Consultation',
  image: '/consultation-icon-dark.svg',
  theme: 'light',
  id: '3'
},
{
  title: 'Repair Services',
  image: '/repair-icon-light.svg',
  theme: 'dark',
  id: '4'
},
{
  title: 'Architecture',
  image: '/architecture-icon-dark.svg',
  theme: 'light',
  id: '5'
},
{
  title: 'Electric',
  image: '/electric-icon-light.svg',
  theme: 'dark',
  id: '6'
}
]

const experience = [
  {
    title: 'Happy Clients',
    number: '84',
    image: clientsIllustration
  },
  {
    title: 'Projects Completed',
    number: '123',
    image: projectsIllustration
  },
  {
    title: 'Awards Win',
    number: '37',
    image: awardIllustration
  },
  {
    title: 'Years in Business',
    number: '30',
    image: businessIllustration
  },

]

const projects = [{
  id: 'project_1',
  title: 'Wildstone Infra Hotel',
  address: '2715 Ash Dr. San Jose, South Dakota',
  category: 'Commercial',
  image: project_1
},
{
  id: 'project_2',
  title: 'Wish Stone Building',
  address: '2972 Westheimer Rd. Santa Ana, Illinois',
  category: 'Residential',
  image: project_2
},
{
  id: 'project_3',
  title: 'Mr. Parkinston’s House',
  address: '3517 W. Gray St. Utica, Pennsylvania',
  category: 'Other',
  image: project_3
},
{
  id: 'project_4',
  title: 'Oregano Height',
  address: '2464 Royal Ln. Mesa, New Jersey',
  category: 'Commercial',
  image: project_4
},
{
  id: 'project_5',
  title: 'Wildstone Infra Hotel',
  address: '2715 Ash Dr. San Jose, South Dakota',
  category: 'Commercial',
  image: project_5
},
{
  id: 'project_6',
  title: 'Wish Stone Building',
  address: '2972 Westheimer Rd. Santa Ana, Illinois',
  category: 'Residential',
  image: project_6
},
{
  id: 'project_7',
  title: 'Mr. Parkinston’s House',
  address: '3517 W. Gray St. Utica, Pennsylvania',
  category: 'Other',
  image: project_7
},
{
  id: 'project_8',
  title: 'Oregano Height',
  address: '2464 Royal Ln. Mesa, New Jersey',
  category: 'Commercial',
  image: project_8
},
{
  id: 'project_9',
  title: 'Wildstone Infra Hotel',
  address: '2715 Ash Dr. San Jose, South Dakota',
  category: 'Commercial',
  image: project_9
},
{
  id: 'project_10',
  title: 'Wish Stone Building',
  address: '3517 W. Gray St. Utica, Pennsylvania',
  category: 'Residential',
  image: project_11
},
{
  id: 'project_11',
  title: 'Mr. Parkinston’s House',
  address: '2972 Westheimer Rd. Santa Ana, Illinois',

  category: 'Other',
  image: project_10
},
{
  id: 'project_12',
  title: 'Oregano Height',
  address: '2464 Royal Ln. Mesa, New Jersey',
  category: 'Commercial',
  image: project_12
}]


const optionsSelectFeedback = [
  { value: 'kate', label: 'Ekaterina Gromova' },
  { value: 'andry', label: 'Andrey Smirnov' },
  { value: 'juli', label: 'Julia Egorova' },
];






export { menu, heroSlider, reputationCards, services, experience, projects, optionsSelectFeedback };