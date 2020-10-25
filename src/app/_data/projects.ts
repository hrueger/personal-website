export interface Project {
  githubUrl: string;
  name: string;
  prettyName: string;
  category: string;
  icon: string;
  status: 'development' | 'released' | 'deprecated' | 'noTime';
  description: string;
}

export const projects: Project[] = [
  {
    githubUrl: 'https://github.com/hrueger/hrueger.github.io',
    name: 'hrueger.github.io',
    prettyName: 'My personal Website',
    category: 'other',
    icon: 'fas fa-globe',
    status: 'development',
    description: 'The website you are viewing right now ;-)'
  },
  {
    githubUrl: 'https://github.com/hrueger/AGView',
    name: 'AGView',
    prettyName: 'AGView',
    category: 'AGSuite',
    icon: 'agview.png',
    status: 'released',
    description: 'The live on-the-fly event video player.',
  },
  {
    githubUrl: 'https://github.com/hrueger/AGRallye',
    name: 'AGRallye',
    prettyName: 'AGRallye',
    category: 'AGSuite',
    icon: 'agrallye.png',
    status: 'released',
    description: 'A simple app to display teams and their current\
    points in fullscreen on a second monitor in a school-chalkboard-like style',
  },
  {
    githubUrl: 'https://github.com/hrueger/playstore-assets',
    name: 'playstore-assets',
    prettyName: 'PlayStore Assets',
    category: 'misc',
    icon: 'fas fa-image',
    status: 'released',
    description: 'Assets for my apps on Google Play',
  },
  {
    githubUrl: 'https://github.com/hrueger/ya-mqtt-influx-bridge',
    name: 'ya-mqtt-influx-bridge',
    prettyName: 'ya-mqtt-influx-bridge',
    category: 'tool',
    icon: 'fas fa-database',
    status: 'development',
    description: 'Yet another MQTT to InfluxDB bridge ',
  },
  {
    githubUrl: 'https://github.com/hrueger/AGLight',
    name: 'AGLight',
    prettyName: 'AGLight',
    category: 'AGSuite',
    icon: 'aglight.png',
    status: 'development',
    description: 'An intuitive software for controlling DMX lights.',
  },
  {
    githubUrl: 'https://github.com/hrueger/diy-flightcase-calculator',
    name: 'diy-flightcase-calculator',
    prettyName: 'diy-flightcase-calculator',
    category: 'tool',
    icon: 'fas fa-boxes',
    status: 'released',
    description: 'A simple tool to calculate the costs for a DIY Flightcase ',
  },
  {
    githubUrl: 'https://github.com/hrueger/AGFree',
    name: 'AGFree',
    prettyName: 'AGFree',
    category: 'AGSuite',
    icon: 'agfree.png',
    status: 'released',
    description: 'A simple tool for students to check for common free periods. ',
  },
  {
    githubUrl: 'https://github.com/hrueger/AGTicket',
    name: 'AGTicket',
    prettyName: 'AGTicket',
    category: 'AGSuite',
    icon: 'agticket.png',
    status: 'development',
    description: 'A complete solution for event ticketing.',
  },
  {
    githubUrl: 'https://github.com/hrueger/AGSki',
    name: 'AGSki',
    prettyName: 'AGSki',
    category: 'AGSuite',
    icon: 'agski.png',
    status: 'development',
    description: 'The ski run license generator.',
  },
  {
    githubUrl: 'https://github.com/hrueger/ngx-onlyoffice',
    name: 'ngx-onlyoffice',
    prettyName: 'ngx-onlyoffice',
    category: 'library',
    icon: 'fas fa-wrench',
    status: 'released',
    description: 'An OnlyOffice wrapper library for Angular.',
  },
  {
    githubUrl: 'https://github.com/hrueger/ngx-advanced-image-editor',
    name: 'ngx-advanced-image-editor',
    prettyName: 'ngx-advanced-image-editor',
    category: 'library',
    icon: 'fas fa-wrench',
    status: 'released',
    description: 'An image editor for Angular based on the ToastUI Image Editor.',
  },
  {
    githubUrl: 'https://github.com/hrueger/nativescript-letter-avatar',
    name: 'nativescript-letter-avatar',
    prettyName: 'nativescript-letter-avatar',
    category: 'library',
    icon: 'fas fa-wrench',
    status: 'released',
    description: 'Generate beautiful letter avatars in your nativescript app!',
  },
  {
    githubUrl: 'https://github.com/hrueger/nativescript-emoji-picker',
    name: 'nativescript-emoji-picker',
    prettyName: 'nativescript-emoji-picker',
    category: 'library',
    icon: 'fas fa-wrench',
    status: 'released',
    description: 'The first and only emoji picker for nativescript ;-)',
  },
  {
    githubUrl: 'https://github.com/hrueger/nativescript-pure-emoji-picker',
    name: 'nativescript-pure-emoji-picker',
    prettyName: 'nativescript-pure-emoji-picker',
    category: 'library',
    icon: 'fas fa-wrench',
    status: 'deprecated',
    description: 'This is an emoji picker for nativescript purely out of nativescript components!',
  },
  {
    githubUrl: 'https://github.com/hrueger/repoman',
    name: 'repoman',
    prettyName: 'RepoMan',
    category: 'tool',
    icon: 'fas fa-toolbox',
    status: 'noTime',
    description: 'The manager app for your GitHub repositories.',
  },
  {
    githubUrl: 'https://github.com/hrueger/ng-static',
    name: 'ng-static',
    prettyName: 'ng-static',
    category: 'tool',
    icon: 'fas fa-toolbox',
    status: 'noTime',
    description: 'A generator for static html pages inspired by Angular.',
  },
  {
    githubUrl: 'https://github.com/hrueger/real-commits',
    name: 'real-commits',
    prettyName: 'real-commits',
    category: 'tool',
    icon: 'fas fa-toolbox',
    status: 'noTime',
    description: 'A badge generator to show the "real" commits of a repository.',
  },
  {
    githubUrl: 'https://github.com/hrueger/redundancyJS',
    name: 'redundancyJS',
    prettyName: 'RedundancyJS',
    category: 'tool',
    icon: 'fas fa-toolbox',
    status: 'released',
    description: 'A cli tool to copy code files programatically.',
  },
  {
    githubUrl: 'https://github.com/hrueger/containerizer',
    name: 'containerizer',
    prettyName: 'Containerizer',
    category: 'tool',
    icon: 'fas fa-toolbox',
    status: 'deprecated',
    description: 'A cli tool to pack an application made with Angular and Express into a docker container.',
  },
  {
    githubUrl: 'https://github.com/hrueger/container-env',
    name: 'container-env',
    prettyName: 'ContainerEnv',
    category: 'tool',
    icon: 'fas fa-toolbox',
    status: 'released',
    description: 'An environment variable management tool for Node.js apps running inside containers',
  },
  {
    githubUrl: 'https://github.com/hrueger/my-autohotkey-scripts',
    name: 'my-autohotkey-scripts',
    prettyName: 'My AutoHotkey Scripts',
    category: 'misc',
    icon: 'far fa-keyboard',
    status: 'released',
    description: 'My autohotkey scripts ',
  },
  {
    githubUrl: 'https://github.com/hrueger/changelogjs',
    name: 'changelogjs',
    prettyName: 'changelogjs',
    category: 'tool',
    icon: 'fas fa-toolbox',
    status: 'released',
    description: 'A small customizable changelog generator.',
  },
  {
    githubUrl: 'https://github.com/hrueger/setup-nativescript',
    name: 'setup-nativescript',
    prettyName: 'setup-nativescript',
    category: 'tool',
    icon: 'fas fa-toolbox',
    status: 'released',
    description: 'A GitHub Action to setup the NativeScript development environment on Windows, Linux and MacOSX.',
  },
  {
    githubUrl: 'https://github.com/hrueger/AGM-Tools',
    name: 'agmtools',
    prettyName: 'AGM-Tools',
    category: 'software',
    icon: 'agmtools.png',
    status: 'released',
    description: 'An open-source platform for all kinds of workgroups.',
  },
];
