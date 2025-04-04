
import profile from './profile.png';
import { faPagelines, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Personal",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    }
  ],
}
export const intro = {
  title: "Josh Wu",
  description: "EECS Student @ The University of Michigan",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://docs.google.com/document/d/1uasVjEY9KqQDk8JC4PMiadEfqnzcpb2McdmJTM3QzeA/edit?tab=t.0",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Introduction",
  description: [
    "I'm currently a student at the University of Michigan studying Computer Science and Electrical Engineering; my concentration in the EE side is Digital Signal Processing.",
    "My interests lie in programming, project building with Raspberry Pis and Arduinos, and sustainable energy.",
    "In my free time, I enjoy running, biking, playing piano.",
  ],
}

export const work = {
  title: "Work Experiences",
  cards: [
    {
      title: "Amazon Web Services",
      description: "Incoming Summer 2025",
      icons: null,
    },
    {
      title: "ENSCO, Inc",
      description: "Built an interactive GUI for NI-DAQ devices.",
      icons: null,
    },
    {
      title: "Institute of Water Research",
      description: "Assembly, troubleshooting, and repairment of solar water-sampling devices.",
      icons: null,
    },
  ],
}

export const projects = {
  title: "Projects & Research",
  cards: [
    {
      title: "YouTube Repeat Extension",
      description: "Chrome extension that allows timestamping and repeating sections of YouTube videos with keyboard shortcuts using JavaScript, html, css.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/umjoshwu/YT-Repeat-Extension/tree/main",
        },
      ]
    },
    {
      title: "Hidden Camera Detector",
      description: "Infared and ToF sensor system detecting hidden cameras via lens reflections and heat using signal processing algorithms.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/umjoshwu",
        },
      ]
    },
    {
      title: "High-Quality Image Restoration",
      description: "OpenAI and Hugging Face model usage for deblurring and super-resolution, denoising with multiple image filters.",
      icons: [
        {
          icon: faPagelines,
          link: "https://drive.google.com/file/d/1W-Xu4kVZJqD19d3tuc_ZvZkica7Qpr4l/view",
        },
        {
          icon: faGithub,
          link: "https://github.com/Ryankwon03/Reordered-Noise-Processing-in-Super-Resolution",
        }
      ]
    },
    {
      title: "Room Capacity Detector",
      description: "Room Capacity counting system using an Arduino, Time-of-Flight sensor, and Passive Infrared sensor to accurately track individuals walking through a door. ",
      icons: [
        {
          icon: faPagelines,
          link: "https://drive.google.com/file/d/1ELgQ4XeTCfD63KUMdJKm9Mbm9-hJwtUy/view",
        },
        {
          icon: faGithub,
          link: "https://github.com/umjoshwu/eecs300/tree/main",
        }
      ]
    },
    {
      title: "UM Space Physics Lab",
      description: "Lead the development of solar burst classification and detection; deloped and optimized a CNN using PyTorch and leveraged preprocessing techniques.",
      icons: [
        {
          icon: faPagelines,
          link: "https://drive.google.com/file/d/1rIMWpGbR1SCYHyEUELZQNEg8U6xpPaEs/view",
        }
      ]
    },
    {
      title: "Image Denoising",
      description: "Denoising manually noised models with ML pre-trained models and classical techniques such as Biliteral and Wavelet Denoising Filters.",
      icons: [
        {
          icon: faPagelines,
          link: "https://sites.google.com/umich.edu/eecs-351-presentation/home?authuser=1",
        },
        {
          icon: faGithub,
          link: "https://github.com/umjoshwu/Denoising2",
        }
      ]
    },
    
  ],
}

export const contact = {
  title: "Contact Info",
  description: "Feel free to reach me at joshwu8@gmail.com!",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:joshwu8@gmail.com",
      isPrimary: true,
    },

  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Josh Wu Portfolio",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@umjoshwu",
  cards: [
    {
      title: "GitHub",
      link: "https://github.com/umjoshwu/",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/joshua-wu-27b206258/",
    },
    {
      title: "Strava",
      link: "https://strava.app.link/LbknZjLs5Rb",
    },
  ]
}
