document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const languageToggleBtn = document.getElementById('language-toggle');
    const bodyElement = document.body;

    const translations = {
        id: {
            pageTitle: 'Portofolio Langit - PPLG', homeLabel: 'Beranda', menuOpen: 'Buka menu navigasi', menuClose: 'Tutup menu navigasi',
            navAbout: 'Tentang', navSkills: 'Keahlian', navProjects: 'Proyek', navContact: 'Kontak',
            themeTitle: 'Ganti tema langit', nightMode: 'Mode Malam', dayMode: 'Mode Siang',
            heroTag: 'Selamat datang di portofolio saya', heroTitle: 'Pelajar', heroSubtitle: 'Pengembangan Perangkat Lunak dan Gim (PPLG)',
            viewWork: 'Lihat Karya Saya', contactMe: 'Hubungi Saya', aboutTitle: 'Tentang Saya', profileAlt: 'Foto profil',
            available: 'Terbuka untuk Proyek', aboutGreeting: 'Halo! Saya Fransiska, siswi kelas 10 PPLG',
            aboutDescription: 'Saya Fransiska Kirana D, siswi kelas 10 di kelas X RPL 3 SMK Krian 1 Sidoarjo, tempat saya belajar Rekayasa Perangkat Lunak. Mendengarkan musik adalah salah satu hobi favorit saya. Musik membantu saya merasa lebih tenang, mengurangi stres, dan memperbaiki suasana hati. Saya biasanya mendengarkan musik sambil belajar atau bersantai. Setiap genre musik memiliki daya tarik tersendiri, jadi saya senang menemukan lagu-lagu baru.',
            skillsTitle: 'Keahlian Saya', projectsTitle: 'Proyek Kelas 10', pythonAlt: 'Kalkulator Python',
            pythonProject: 'KALKULATOR PYTHON', pythonDescription: 'Aplikasi konsol Python interaktif untuk melakukan operasi aritmetika dan berlatih logika pemrograman dasar.',
            responsiveAlt: 'Proyek web responsif', responsiveProject: 'Desain Tata Letak Responsif',
            responsiveDescription: 'Proyek latihan menggunakan media query CSS agar situs web dapat menyesuaikan tampilan secara otomatis di layar ponsel maupun komputer.',
            interactiveAlt: 'Aplikasi JavaScript interaktif', interactiveProject: 'Kalkulator & Formulir Interaktif',
            interactiveDescription: 'Proyek sederhana manipulasi DOM JavaScript yang memproses masukan pengguna dan menampilkan hasil secara dinamis.',
            viewDetails: 'Lihat Detail', backToTop: 'Kembali ke atas', footerTitle: 'Hubungi Saya',
            footerDescription: 'Ingin berbincang atau berkolaborasi? Silakan hubungi saya melalui media sosial di bawah ini.',
            emailLabel: 'Email', copyright: '© 2026 - Portofolio PPLG.'
        },
        en: {
            pageTitle: 'Sky Theme Portfolio - PPLG', homeLabel: 'Home', menuOpen: 'Open navigation menu', menuClose: 'Close navigation menu',
            navAbout: 'About', navSkills: 'Skills', navProjects: 'Projects', navContact: 'Contact',
            themeTitle: 'Toggle sky theme', nightMode: 'Night Mode', dayMode: 'Day Mode',
            heroTag: 'Welcome to my portfolio', heroTitle: 'Student', heroSubtitle: 'Software and Game Development (PPLG)',
            viewWork: 'View My Work', contactMe: 'Contact Me', aboutTitle: 'About Me', profileAlt: 'Profile photo',
            available: 'Available for Projects', aboutGreeting: "Hello! I'm Fransiska, a Grade 10 PPLG student",
            aboutDescription: "I'm Fransiska Kirana D, a Grade 10 student in class X RPL 3 at SMK Krian 1 Sidoarjo, where I study Software Engineering. Listening to music is one of my favorite hobbies. Music helps me feel calmer, reduce stress, and improve my mood. I usually listen to music while studying or relaxing. Different music genres each have their own appeal, so I enjoy discovering new songs.",
            skillsTitle: 'My Skills', projectsTitle: 'Grade 10 Projects', pythonAlt: 'Python calculator',
            pythonProject: 'PYTHON CALCULATOR', pythonDescription: 'An interactive Python console application for performing arithmetic operations and practicing basic programming logic.',
            responsiveAlt: 'Responsive web project', responsiveProject: 'Responsive Layout Design',
            responsiveDescription: 'A practice project using CSS media queries to make a website automatically adapt to mobile and desktop screens.',
            interactiveAlt: 'Interactive JavaScript application', interactiveProject: 'Interactive Calculator & Form',
            interactiveDescription: 'A simple JavaScript DOM manipulation project that processes user input and displays results dynamically.',
            viewDetails: 'View Details', backToTop: 'Back to top', footerTitle: 'Contact Me',
            footerDescription: 'Interested in chatting or collaborating? Feel free to reach out through my social media below.',
            emailLabel: 'Email', copyright: '© 2026 - PPLG Portfolio.'
        }
    };

    let currentLanguage = 'id';

    function updateTranslations() {
        const text = translations[currentLanguage];
        document.documentElement.lang = currentLanguage;
        document.title = text.pageTitle;

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.dataset.i18n;
            if (text[key]) element.textContent = text[key];
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(element => {
            const key = element.dataset.i18nAria;
            if (text[key]) element.setAttribute('aria-label', text[key]);
        });
        document.querySelectorAll('[data-i18n-alt]').forEach(element => {
            const key = element.dataset.i18nAlt;
            if (text[key]) element.alt = text[key];
        });
        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.dataset.i18nTitle;
            if (text[key]) element.title = text[key];
        });

        languageToggleBtn.textContent = currentLanguage === 'id' ? 'English' : 'Bahasa Indonesia';
        languageToggleBtn.setAttribute('aria-label', currentLanguage === 'id' ? 'Switch language to English' : 'Ganti bahasa ke Bahasa Indonesia');
        if (themeToggleBtn) {
            const modeKey = bodyElement.classList.contains('day-theme') ? 'nightMode' : 'dayMode';
            themeToggleBtn.querySelector('.theme-text').textContent = text[modeKey];
            themeToggleBtn.title = text.themeTitle;
        }
    }

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const isOpen = navMenu.classList.contains('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars', !isOpen);
            icon.classList.toggle('fa-xmark', isOpen);
            menuToggle.setAttribute('aria-label', translations[currentLanguage][isOpen ? 'menuClose' : 'menuOpen']);
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
                menuToggle.setAttribute('aria-label', translations[currentLanguage].menuOpen);
            });
        });
    }

    if (languageToggleBtn) {
        languageToggleBtn.addEventListener('click', () => {
            currentLanguage = currentLanguage === 'id' ? 'en' : 'id';
            updateTranslations();
        });
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            bodyElement.classList.toggle('day-theme');
            bodyElement.classList.toggle('night-theme');
            updateTranslations();
        });
    }

    const scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            scrollTopBtn.classList.toggle('show', window.scrollY > 300);
        });
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    updateTranslations();
});
