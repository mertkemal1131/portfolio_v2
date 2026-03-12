const data = {
  en: {
    heroSection: {
      greeting: "Almila Su",
      intro: "Hi, I'm Almila. I'm a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let's shake hands with me.",
      profileImage: "/img/76b06993b04fd1fa29a883e2f4b8b8577a5c82eb.png",
      socials: [
        { logo: "linkedin", alt_text: "linkedin", link: "https://linkedin.com" },
        { logo: "github", alt_text: "github", link: "https://github.com" },
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
        { name: "React.Js", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { name: "Node.Js", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
      ],
    },
    profileSection: {
      title: "Profile",
      basicInfo: {
        label: "Profile",
        fields: [
          { key: "Doğum tarihi", value: "24.03.1996" },
          { key: "İkamet Şehri", value: "Ankara" },
          { key: "Eğitim Durumu", value: "Hacettepe Ünv.  Biyoloji Lisans, 2016" },
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
          description:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept of decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          tags: ["react", "redux", "axios"],
          github: "Github",
          live: "View Site",
          image: "/img/ad5081bf69bb4825e42350e768340fdbec09d78b.png",
        },
        {
          id: 2,
          title: "Random Jokes",
          description:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept of decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          tags: ["react", "redux", "axios"],
          github: "Github",
          live: "View Site",
          image: "/img/64b806122ad18b91bc83b5e0c2524ee319ac4a12.png",
        },
        {
          id: 3,
          title: "Journey",
          description:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept of decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          tags: ["react", "redux", "axios"],
          github: "Github",
          live: "View Site",
          image: "/img/600e630ba9370e031b441737654465d0f374af51.png",
        },
      ],
    },
    contactSection: {
      line1: "Let's work together on",
      line2: "your next product.",
      email: "almilasucode@gmail.com",
      links: [
        { label: "Personal Blog", href: "#" },
        { label: "Github", href: "https://github.com" },
        { label: "Linkedin", href: "https://linkedin.com" },
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
      profileImage: "/img/76b06993b04fd1fa29a883e2f4b8b8577a5c82eb.png",
      socials: [
        { logo: "linkedin", alt_text: "linkedin", link: "https://linkedin.com" },
        { logo: "github", alt_text: "github", link: "https://github.com" },
      ],
      ctaHTML: "Şu anda <strong>Amsterdam</strong>'da <strong>Frontend Developer</strong> olarak iş arıyorum.",
      line1: "Yaratıcı düşünür",
      line2: "Minimalizm aşığı",
      hireBtn: "İşe Al",
    },

    projectsSection: {
      title: "Projeler",
      projects: [
        {
          id: 1,
          title: "Workintech",
          description:
            "Kullanıcıların hangi çerezleri kabul edeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimal bir çerez eklentisi. Vanilla JS, SCSS ve Parcel Bundler ile oluşturuldu.",
          tags: ["react", "redux", "axios"],
          github: "Github",
          live: "Siteyi Gör",
          image: "/img/ad5081bf69bb4825e42350e768340fdbec09d78b.png",
        },
        {
          id: 2,
          title: "Rastgele Şakalar",
          description:
            "Kullanıcıların hangi çerezleri kabul edeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimal bir çerez eklentisi. Vanilla JS, SCSS ve Parcel Bundler ile oluşturuldu.",
          tags: ["react", "redux", "axios"],
          github: "Github",
          live: "Siteyi Gör",
          image: "/img/64b806122ad18b91bc83b5e0c2524ee319ac4a12.png",
        },
        {
          id: 3,
          title: "Journey",
          description:
            "Kullanıcıların hangi çerezleri kabul edeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimal bir çerez eklentisi. Vanilla JS, SCSS ve Parcel Bundler ile oluşturuldu.",
          tags: ["react", "redux", "axios"],
          github: "Github",
          live: "Siteyi Gör",
          image: "/img/600e630ba9370e031b441737654465d0f374af51.png",
        },
      ],
    },
    skillsSection: {
      title: "Yetenekler",
      skills: [
        { name: "Java Script", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { name: "React.Js", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { name: "Node.Js", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
      ],
    },
    profileSection: {
      title: "Profil",
      basicInfo: {
        label: "Profil",
        fields: [
          { key: "Doğum tarihi", value: "24.03.1996" },
          { key: "İkamet Şehri", value: "Ankara" },
          { key: "Eğitim Durumu", value: "Hacettepe Ünv.  Biyoloji Lisans, 2016" },
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
    contactSection: {
      line1: "Bir sonraki projenizde",
      line2: "birlikte çalışalım.",
      email: "almilasucode@gmail.com",
      links: [
        { label: "Kişisel Blog", href: "#" },
        { label: "Github", href: "https://github.com" },
        { label: "Linkedin", href: "https://linkedin.com" },
      ],
      namePlaceholder: "Adınız",
      emailPlaceholder: "E-posta Adresiniz",
      messagePlaceholder: "Mesajınız",
      submit: "Mesaj Gönder",
      sending: "Gönderiliyor...",
      successToast: "Mesaj gönderildi! 🎉",
      errorToast: "Bir hata oluştu. Lütfen tekrar deneyin.",
    },
    nav: {
      skills: "Yetenekler",
      projects: "Projeler",
      hire: "İşe Al",
      langToggle: "SWITCH TO ENGLISH",
    },
  },
};

export default data;