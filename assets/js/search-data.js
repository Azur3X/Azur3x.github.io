// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-reading",
          title: "Reading",
          description: "A selection of my favorite books and other publications that inspire me, as I do not yet have formal publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/reading/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A selection of projects I have done, and are avalible on my GitHub. Visit GitHub for more techinal detail.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-photos",
          title: "Photos",
          description: "A curated collection of my photography",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photos/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-sudoku-solver",
          title: 'Sudoku Solver',
          description: "This is my Sudoku Solver, made using constraint programming and machine learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%6F%6E%74%61%63%74@%61%7A%75%72%33%78.%6F%72%67", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Azur3X", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mathias-bonde-jensen-2685572b7", "_blank");
        },
      },{
        id: 'social-mastodon',
        title: 'Mastodon',
        section: 'Socials',
        handler: () => {
          window.open("https://infosec.exchange/@azur3x", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
