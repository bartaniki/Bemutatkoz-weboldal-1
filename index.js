/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

document.addEventListener('DOMContentLoaded', () => {

    // --- KÖNNYEN SZERKESZTHETŐ BEÁLLÍTÁSOK ---

    // 1. KÖZÖSSÉGI MÉDIA LINKEK
    // Cserélje le az alábbi placeholder linkeket a saját oldalainak URL-címére.
    const socialLinks = {
        facebook: 'https://www.facebook.com/your-page-url',
        instagram: 'https://www.instagram.com/your-profile-url'
    };

    // 2. GALÉRIA KÉPEK
    // A képek cseréjéhez egyszerűen írja át az alábbi linkeket a saját képeinek URL-címére.
    const galleryImages = [
        { src: 'https://images.unsplash.com/photo-1599393344604-91b64b655b33?q=80&w=400&auto=format&fit=crop', alt: 'Modern női frizura' },
        { src: 'https://images.unsplash.com/photo-1597904307954-c7b3f2720d82?q=80&w=400&auto=format&fit=crop', alt: 'Férfi hajvágás' },
        { src: 'https://images.unsplash.com/photo-1560243419-134a6fb1a522?q=80&w=400&auto=format&fit=crop', alt: 'Hosszú, hullámos haj' },
        { src: 'https://images.unsplash.com/photo-1589354093245-56291b34e5a1?q=80&w=400&auto=format&fit=crop', alt: 'Elegáns konty' },
        { src: 'https://images.unsplash.com/photo-1580615645372-2731c3c33842?q=80&w=400&auto=format&fit=crop', alt: 'Balayage festés' },
        { src: 'https://images.unsplash.com/photo-1621602490184-59359640b54e?q=80&w=400&auto=format&fit=crop', alt: 'Rövid, szőke frizura' },
        { src: 'https://images.unsplash.com/photo-1616099592963-1e569945037a?q=80&w=400&auto=format&fit=crop', alt: 'Vörös hajfestés' },
        { src: 'https://images.unsplash.com/photo-1554512239-4054a3a30b80?q=80&w=400&auto=format&fit=crop', alt: 'Fonott alkalmi frizura' },
    ];

    // --- ALKALMAZÁS LOGIKA (ezt a részt ne módosítsa) ---

    // Galéria dinamikus feltöltése
    const galleryGrid = document.getElementById('gallery-grid');
    if (galleryGrid) {
        galleryImages.forEach(imageInfo => {
            const img = document.createElement('img');
            img.src = imageInfo.src;
            img.alt = imageInfo.alt;
            img.classList.add('gallery-image');
            galleryGrid.appendChild(img);
        });
    }

    // Közösségi média linkek dinamikus beállítása
    const facebookLink = document.getElementById('facebook-link');
    const instagramLink = document.getElementById('instagram-link');

    if (facebookLink) {
        facebookLink.href = socialLinks.facebook;
    }
    if (instagramLink) {
        instagramLink.href = socialLinks.instagram;
    }

    // Navigation smooth scroll logic
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href && href !== '#') { // Prevent scroll to top for brand link
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});