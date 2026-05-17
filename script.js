const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_greeting: "Hello, I'm",
        hero_bio: "A passionate software developer creating interactive and dynamic web applications. I turn ideas into elegant digital solutions.",
        about_title: "About Me",
        about_p1: "I am a highly motivated software development student at Izmir University of Economics, with a strong passion for web technologies and software engineering. My journey began with an innate curiosity about how things work on the internet, leading me to dive deep into both frontend and backend development.",
        about_p2: "Over the years, I've honed my skills in building robust, interactive, and user-centric web applications. I constantly strive to write clean, maintainable code and keep up with the latest industry trends. I believe in the power of continuous learning and enjoy tackling complex problems head-on.",
        about_p3: "Beyond coding, I'm an avid team player who values clear communication and collaboration. Whether it's designing a dynamic UI or optimizing algorithms, I bring enthusiasm and dedication to every project I undertake.",
        projects_title: "My Projects",
        project1_desc: "A modern and interactive application designed to facilitate flight and travel management. Focuses on seamless user experience and modern UI patterns.",
        project2_desc: "A console-based simulator demonstrating core programming concepts, logical flows, and switch-case operations in an ATM environment.",
        project3_desc: "A dynamic web application calculating tiered discounts, managing cart state, and showcasing robust JavaScript DOM manipulation skills.",
        btn_goto_project: "Go to Project <i class='fas fa-arrow-right'></i>",
        contact_title: "Get In Touch",
        contact_info_title: "Contact Information",
        contact_info_desc: "Feel free to reach out to me via email or through my social media channels. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
        contact_uni: "Izmir University of Economics",
        form_fname: "First Name",
        form_lname: "Last Name",
        form_email: "Email",
        form_subject: "Subject",
        form_msg: "Message",
        form_submit: "Send Message",
        footer_text: "All rights reserved."
    },
    tr: {
        nav_home: "Ana Sayfa",
        nav_about: "Hakkımda",
        nav_projects: "Çalışmalarım",
        nav_contact: "İletişim",
        hero_greeting: "Merhaba, ben",
        hero_bio: "Etkileşimli ve dinamik web uygulamaları geliştiren tutkulu bir yazılım geliştiriciyim. Fikirleri şık dijital çözümlere dönüştürüyorum.",
        about_title: "Hakkımda",
        about_p1: "İzmir Ekonomi Üniversitesi'nde yazılım geliştirme alanında eğitim gören, web teknolojileri ve yazılım mühendisliğine büyük tutku duyan oldukça motivasyonlu bir öğrenciyim. Serüvenim, internetin nasıl çalıştığına dair içten gelen bir merakla başladı ve beni hem frontend hem de backend geliştirmede derinleşmeye yöneltti.",
        about_p2: "Yıllar içinde sağlam, etkileşimli ve kullanıcı odaklı web uygulamaları oluşturma konusundaki becerilerimi geliştirdim. Sürekli olarak temiz ve sürdürülebilir kod yazmaya, en son sektör trendlerini takip etmeye çalışıyorum. Sürekli öğrenmenin gücüne inanıyor ve karmaşık problemlerle başa çıkmaktan keyif alıyorum.",
        about_p3: "Kodlamanın ötesinde, net iletişime ve işbirliğine değer veren hevesli bir takım oyuncusuyum. İster dinamik bir kullanıcı arayüzü tasarlamak ister algoritmaları optimize etmek olsun, üstlendiğim her projeye aynı coşku ve adanmışlığı getiriyorum.",
        projects_title: "Çalışmalarım",
        project1_desc: "Uçuş ve seyahat yönetimini kolaylaştırmak için tasarlanmış modern ve etkileşimli bir uygulama. Sorunsuz bir kullanıcı deneyimi ve modern UI desenlerine odaklanır.",
        project2_desc: "ATM ortamında temel programlama kavramlarını, mantıksal akışları ve switch-case işlemlerini gösteren konsol tabanlı bir simülatör.",
        project3_desc: "Kademeli indirimleri hesaplayan, sepet durumunu yöneten ve sağlam JavaScript DOM manipülasyon yeteneklerini sergileyen dinamik bir web uygulaması.",
        btn_goto_project: "Çalışmaya Git <i class='fas fa-arrow-right'></i>",
        contact_title: "İletişim Kurun",
        contact_info_title: "İletişim Bilgileri",
        contact_info_desc: "Bana e-posta veya sosyal medya kanallarım aracılığıyla ulaşmaktan çekinmeyin. Yeni projeleri, yaratıcı fikirleri veya vizyonunuzun bir parçası olma fırsatlarını konuşmaya her zaman açığım.",
        contact_uni: "İzmir Ekonomi Üniversitesi",
        form_fname: "Ad",
        form_lname: "Soyad",
        form_email: "E-posta",
        form_subject: "Konu",
        form_msg: "Mesaj",
        form_submit: "Mesaj Gönder",
        footer_text: "Tüm hakları saklıdır."
    }
};

// Durum değişkenleri
let currentLang = localStorage.getItem('lang') || 'en';

// DOM Elemanları
const langBtn = document.getElementById('lang-btn');
const navbar = document.getElementById('navbar');
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const contactForm = document.getElementById('contact-form');

// Başlatma
function init() {
    applyLanguage(currentLang);
    setupEventListeners();
}

// Dil fonksiyonları
function applyLanguage(lang) {
    // Buton metni mantığını güncelle
    // Dil 'tr' ise, İngilizce'ye geçmek için buton 'ENG' gösterir
    // Dil 'en' ise, Türkçe'ye geçmek için buton 'TR' gösterir
    langBtn.textContent = lang === 'tr' ? 'ENG' : 'TR';
    
    // Tüm çevrilebilir elemanları güncelle
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'tr' : 'en';
    localStorage.setItem('lang', currentLang);
    applyLanguage(currentLang);
}

// Tüm olay dinleyicilerini (event listeners) ayarla
function setupEventListeners() {
    // Dil değiştirme
    langBtn.addEventListener('click', toggleLanguage);

    // Navigasyon kaydırma efekti
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobil menü açma/kapama
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuIcon.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Linke tıklandığında mobil menüyü kapat
    const links = document.querySelectorAll('.nav-links a:not(.lang-btn)');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuIcon.querySelector('i').classList.remove('fa-times');
            menuIcon.querySelector('i').classList.add('fa-bars');
        });
    });

    // Form gönderme mantığı (mailto)
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        const mailtoLink = `mailto:karaaykan8@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;

        window.location.href = mailtoLink;
    });
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener('DOMContentLoaded', init);
