const data = {
  en: {
    heroSection: {
      greeting: "Almila Su",
      intro: "Hi, I'm Almila. I'm a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let's shake hands with me.",
      profileImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
      socials: [
        { logo: "linkedin", alt_text: "linkedin", link: "https://linkedin.com" },
        { logo: "github",   alt_text: "github",   link: "https://github.com" },
      ],
      ctaHTML: "Currently looking for a job as a <strong>Frontend Developer</strong> in your company.",
      line1: "Creative thinker",
      line2: "Minimalism lover",
      hireBtn: "Hire me",
    },
    skillsSection: {
      title: "Skills",
      skills: [
        { name: "Java Script", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { name: "React.Js",    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { name: "Node.Js",     description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
      ],
    },
    profileSection: {
      title: "Profile",
      basicInfo: {
        label: "Profile",
        fields: [
          { key: "Doğum tarihi",   value: "24.03.1996" },
          { key: "İkamet Şehri",   value: "Ankara" },
          { key: "Eğitim Durumu",  value: "Hacettepe Ünv.  Biyoloji Lisans, 2016" },
          { key: "Tercih Ettiği Rol", value: "Frontend, UI" },
        ],
      },
      aboutMe: {
        label: "About Me",
        paragraphs: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniarn sunt in culpa aliquam voluptatum nisi mollitia.",
          "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
        ],
      },
    },
    projectsSection: {
      title: "Projects",
      projects: [
        {
          id: 1,
          title: "Workintech",
          description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept of decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          tags: ["react", "redux", "axios"],
          github: "Github",
          live: "View Site",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
        },
        {
          id: 2,
          title: "Random Jokes",
          description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept of decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          tags: ["react", "redux", "axios"],
          github: "Github",
          live: "View Site",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
        },
        {
          id: 3,
          title: "Journey",
          description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept of decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          tags: ["react", "redux", "axios"],
          github: "Github",
          live: "View Site",
          image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=80",
        },
      ],
    },
    contactSection: {
      line1: "Let's work together on",
      line2: "your next product.",
      email: "almilasucode@gmail.com",
      links: [
        { label: "Personal Blog", href: "#" },
        { label: "Github",        href: "https://github.com" },
        { label: "Linkedin",      href: "https://linkedin.com" },
      ],
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      submit: "Send Message",
      sending: "Sending...",
      successToast: "Message sent! 🎉",
      errorToast: "Something went wrong. Please try again.",
    },
    nav: {
      skills: "Skills",
      projects: "Projects",
      hire: "Hire me",
      langToggle: "TÜRKÇE'YE GEÇ",
    },
  },
  tr: {
    heroSection: {
      greeting: "Almila Su",
      intro: "Merhaba, ben Almila. Bir full-stack geliştiriciyim. Sağlam ve ölçeklenebilir frontend ürünleri geliştirmek için biriyle çalışmak istiyorsanız, seçim benim. Hadi el sıkışalım.",
      profileImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
      socials: [
        { logo: "linkedin", alt_text: "linkedin", link: "https://linkedin.com" },
        { logo: "github",   alt_text: "github",   link: "https://github.com" },
      ],
      ctaHTML: "Şu anda <strong>Amsterdam</strong>'da <strong>Frontend Developer</strong> olarak iş arıyorum.",
      line1: "Yaratıcı düşünür",
      line2: "Minimalizm aşığı",
      hireBtn: "İşe Al",
    },
    skillsSection: {
      title: "Yetenekler",
      skills: [
        { name: "Java Script", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { name: "React.Js",    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { name: "Node.Js",     description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
      ],
    },
    profileSection: {
      title: "Profil",
      basicInfo: {
        label: "Profil",
        fields: [
          { key: "Doğum tarihi",      value: "24.03.1996" },
          { key: "İkamet Şehri",      value: "Ankara" },
          { key: "Eğitim Durumu",     value: "Hacettepe Ünv.  Biyoloji Lisans, 2016" },
          { key: "Tercih Ettiği Rol", value: "Frontend, UI" },
        ],
      },
      aboutMe: {
        label: "Hakkımda",
        paragraphs: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniarn sunt in culpa aliquam voluptatum nisi mollitia.",
          "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
        ],
      },
    },
    projectsSection: {
      title: "Projeler",
      projects: [
        {
          id: 1,
          title: "Workintech",
          description: "Kullanıcıların hangi çerezleri kabul edeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimal bir çerez eklentisi. Vanilla JS, SCSS ve Parcel Bundler ile oluşturuldu.",
          tags: ["react", "redux", "axios"],
          github: "Github",
          live: "Siteyi Gör",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
        },
        {
          id: 2,
          title: "Rastgele Şakalar",
          description: "Kullanıcıların hangi çerezleri kabul edeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimal bir çerez eklentisi. Vanilla JS, SCSS ve Parcel Bundler ile oluşturuldu.",
          tags: ["react", "redux", "axios"],
          github: "Github",
          live: "Siteyi Gör",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
        },
        {
          id: 3,
          title: "Journey",
          description: "Kullanıcıların hangi çerezleri kabul edeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimal bir çerez eklentisi. Vanilla JS, SCSS ve Parcel Bundler ile oluşturuldu.",
          tags: ["react", "redux", "axios"],
          github: "Github",
          live: "Siteyi Gör",
          image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=80",
        },
      ],
    },
    contactSection: {
      line1: "Birlikte çalışalım",
      line2: "bir sonraki ürününüzde.",
      email: "almilasucode@gmail.com",
      links: [
        { label: "Kişisel Blog", href: "#" },
        { label: "Github",       href: "https://github.com" },
        { label: "Linkedin",     href: "https://linkedin.com" },
      ],
      namePlaceholder: "Adınız",
      emailPlaceholder: "E-posta Adresiniz",
      messagePlaceholder: "Mesajınız",
      submit: "Gönder",
      sending: "Gönderiliyor...",
      successToast: "Mesaj gönderildi! 🎉",
      errorToast: "Bir hata oluştu. Tekrar deneyin.",
    },
    nav: {
      skills: "Beceriler",
      projects: "Projeler",
      hire: "İşe Al",
      langToggle: "SWITCH TO EN",
    },
  },
};

export default data;
