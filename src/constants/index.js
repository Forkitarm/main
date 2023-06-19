import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Über",
    },
    {
      id: "work",
      title: "Arbeiten",
    },
    {
      id: "contact",
      title: "Kontakt",
    },
  ];
  
  const services = [
    {
      title: "Web Entwickler",
      icon: web,
    },
    {
      title: "React Entwickler",
      icon: mobile,
    },
    {
      title: "Wordpress Designer",
      icon: backend,
    },
    {
      title: "Web Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Frontend",
      company_name: "Freelance",
      icon: starbucks,
      iconBg: "#383E56",
      date: "März 2019 - April 2021",
      points: [
        "UI/UX-Design und Umsetzung.",
        "Entwicklung von React-Komponenten.",
        "Datenintegration und API-Anbindung.",
        "Three.js und React-three-fiber.",
      ],
    },
    {
      title: "Wordpress Design",
      company_name: "Freelance",
      icon: tesla,
      iconBg: "#383E56",
      date: "April 2021 - Feb 2022",
      points: [
        "Design und Anpassung von WordPress-Themes.",
        "Auswahl und Erstellung von WordPress-Themes, anpassung der Layouts, integration von Grafiken.",
        "Responsives Design und mobile Optimierung.",
        "Entwicklung von benutzerdefinierten WordPress-Plugins.",
        "Website-Wartung und Aktualisierung.",
      ],
    },
    {
      title: "Web Design Web Administrator",
      company_name: "Werbe-Druck-Atelier",
      icon: shopify,
      iconBg: "#383E56",
      date: "März 2022 - März 2023",
      points: [
        "Überprüfung der Website auf Fehler, Probleme oder inkorrekte Darstellung und Behebung dieser Probleme",
        "Installation von Software-Updates und Sicherheits-Patches, um die Website vor potenziellen Bedrohungen zu schützen",
        "Verwaltung und Aktualisierung der Website-Inhalte, einschließlich Texte, Bilder und Videos",
        "Durchführung von regelmäßigen Backups und Wiederherstellung bei Bedarf",
        "Überwachung der Website-Performance und Sicherstellung der störungsfreien Funktionalität",
      ],
    },
    {
      title: "Web Entwickler",
      company_name: "Gagl.io",
      icon: meta,
      iconBg: "#383E56",
      date: "März 2023 - Present",
      points: [
        "Entwurf und Gestaltung von Websites basierend auf den Anforderungen und dem Designkonzept des Kunden",
        "Entwicklung von responsiven Websites, die auf verschiedenen Geräten und Bildschirmgrößen gut funktionieren",
        "Programmierung und Implementierung von Funktionen und Interaktionen auf der Website, z. B. Kontaktformulare, Benutzerregistrierung oder Einkaufswagen",
        "Optimierung der Website für Suchmaschinen (SEO) und Gewährleistung einer guten Benutzererfahrung (UX)",
        "Zusammenarbeit mit dem Kunden, um Feedback zu erhalten, Anpassungen vorzunehmen und sicherzustellen, dass das Endprodukt den Erwartungen entspricht",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Da wir noch in der Erstellung stecken möchte ich trotzdem schonmal mein Kommentar abgeben, vielen Dank für deine Vorschläge und für deine Vorschau in so kurzer Zeit. Das Endprodukt wird super! Grüße aus dem Café.",
      name: "Karina Friedt",
      designation: "Ansprechpartner",
      company: "Café am Dom",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial: "Hola Dominik Vielen Dank für die tolle Netzseite. Schnelle Umsetzung unserer Ideen auf der einen Seite und auf der anderen Seite hat vor allem mal jemand zugehört und die Wünsche erfüllt, wie sie dargelegt wurden.  Auch im Nachhinein bei der Betreuung/Nachsorge/Veränderungen sind wir topp zufrieden. Danke Dir und gerne die nächsten Jahre weiter. Beste Grüße aus Bad Sassendorf",
      name: "Uwe Korb",
      designation: "Ansprechpartner",
      company: "Lentamente",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Du hast mich im Thema Webseiten/Internet aufklären können! Super auf meine Wünsche eingegangen und sehr viele Ideen vorgeschlagen, auf die ich niemals gekommen wäre. Vielen Dank für die wunderbare Zusammenarbeit und gerne weiter! Grüße!",
      name: "Dennis Bußmann",
      designation: "Ansprechpartner",
      company: "Garten und Landschaftsbau Bußmann",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Room 3D",
      description:
        "Ein 3D Raum-Portfolio erstellt in Blender und mithilfe von THREE-JS und Javascript in den Browser gebracht.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "Blender",
          color: "pink-text-gradient",
        },
      ],
      link: "https://gleeful-lily-ad0d35.netlify.app/",
      image: carrent,
    },
    {
      name: "T-Shirter",
      description:
        "Web-App die es Usern ermöglicht ein eigenes Logo auf ein 3D T-Shirt zu projizieren, oder mithilfe der DALLE API ein Logo zu kreieren.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Blender",
          color: "pink-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "R3F",
          color: "green-text-gradient",
        },
      ],
      link: "https://aquamarine-begonia-7fc635.netlify.app/",
      image: jobit,
    },
    {
      name: "Zolllager Shop",
      description:
        "Eine Webshop, Ecommerce Applikation zusammengesetzt mithilfe von Wordpress, Elementor und Woocommerce",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "Elementor",
          color: "green-text-gradient",
        },
        {
          name: "Woocommerce",
          color: "pink-text-gradient",
        },
      ],
      link: "https://zolllager.shop",
      image: tripguide,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };