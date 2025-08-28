/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

document.addEventListener('DOMContentLoaded', () => {

    // --- KÖNNYEN SZERKESZTHETŐ BEÁLLÍTÁSOK ---

    // 1. KÖZÖSSÉGI MÉDIA LINKEK
    // Cserélje le az alábbi placeholder linkeket a saját oldalainak URL-címére.
    const socialLinks = {
        facebook: 'https://www.facebook.com/luminadental',
        instagram: 'https://www.instagram.com/luminadental'
    };

    // --- ALKALMAZÁS LOGIKA (ezt a részt ne módosítsa) ---

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
    const navLinks = document.querySelectorAll('nav a[href^="#"], a.btn[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href && href !== '#') { 
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
