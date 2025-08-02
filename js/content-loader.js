document.addEventListener('DOMContentLoaded', function() {
    // Load SEO Meta Tags
    document.title = siteConfig.seo.title;
    document.querySelector('meta[name="description"]').content = siteConfig.seo.description;
    document.querySelector('meta[property="og:title"]').content = siteConfig.seo.ogTitle;
    document.querySelector('meta[property="og:description"]').content = siteConfig.seo.description;
    document.querySelector('meta[property="og:image"]').content = siteConfig.seo.ogImage;
    document.querySelector('meta[property="og:url"]').content = siteConfig.seo.ogUrl;
    document.querySelector('meta[property="og:site_name"]').content = siteConfig.seo.siteName;

    // Load Header Content
    document.querySelectorAll('.logo img').forEach(img => img.src = siteConfig.header.logo);
    
    // Load Navigation Menu
    const navMenu = document.querySelector('.navmenu ul');
    navMenu.innerHTML = siteConfig.header.menuItems.map(item => 
        `<li><a href="${item.link}" ${item.active ? 'class="active"' : ''}>${item.text}</a></li>`
    ).join('');
    
    // Initialize scroll spy for navigation
    const navMenuLinks = document.querySelectorAll('.navmenu a');
    
    function navMenuScrollSpy() {
        navMenuLinks.forEach(navLink => {
            if (!navLink.hash) return;
            let section = document.querySelector(navLink.hash);
            if (!section) return;
            let position = window.scrollY + 200;
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        });
    }

    // Add scroll event listener for navigation highlighting
    window.addEventListener('load', navMenuScrollSpy);
    document.addEventListener('scroll', navMenuScrollSpy);

    // Update CTA Buttons
    document.querySelectorAll('.cta-btn').forEach(btn => {
        btn.href = siteConfig.header.ctaButton.link;
        btn.textContent = siteConfig.header.ctaButton.text;
    });

    // Load Hero Section
    const heroSection = document.querySelector('#hero');
    heroSection.querySelector('img').src = siteConfig.hero.backgroundImage;
    heroSection.querySelector('h2').textContent = siteConfig.hero.heading;
    heroSection.querySelector('p').textContent = siteConfig.hero.description;
    heroSection.querySelector('.btn-get-started').href = siteConfig.hero.ctaButton.link;
    heroSection.querySelector('.btn-get-started').textContent = siteConfig.hero.ctaButton.text;

    // Load Vision & Mission Section
    document.querySelector('#about .text-center h2').textContent = siteConfig.visionMission.sectionTitle;
    document.querySelector('#about .text-center p').textContent = siteConfig.visionMission.subTitle;
    
    // Vision Box
    const visionBox = document.querySelector('#about .col-md-6:first-child');
    visionBox.querySelector('h4').textContent = siteConfig.visionMission.vision.title;
    visionBox.querySelector('p').textContent = siteConfig.visionMission.vision.text;
    
    // Mission Box
    const missionBox = document.querySelector('#about .col-md-6:last-child');
    missionBox.querySelector('h4').textContent = siteConfig.visionMission.mission.title;
    missionBox.querySelector('p').textContent = siteConfig.visionMission.mission.text;

    // Load About Section
    const aboutSection = document.querySelector('#about .col-lg-6:first-child');
    aboutSection.querySelector('h3').textContent = siteConfig.about.title;
    aboutSection.querySelector('img').src = siteConfig.about.mainImage;
    
    // Update paragraphs
    const paragraphsContainer = aboutSection.querySelectorAll('p');
    siteConfig.about.paragraphs.forEach((text, index) => {
        if (paragraphsContainer[index]) {
            paragraphsContainer[index].textContent = text;
        }
    });

    // Update specialties
    const specialtiesSection = document.querySelector('#about .content');
    specialtiesSection.querySelector('.fw-bold').textContent = siteConfig.about.specialties.title;
    const specialtiesList = specialtiesSection.querySelector('ul');
    specialtiesList.innerHTML = siteConfig.about.specialties.items.map(item => `
        <li><i class="bi bi-check-circle-fill"></i><span>${item}</span></li>
    `).join('');
    
    // Update additional text and image
    specialtiesSection.querySelector('p:not(.fst-italic):not(.fw-bold)').textContent = siteConfig.about.additionalText;
    specialtiesSection.querySelector('.position-relative img').src = siteConfig.about.secondaryImage;

    // Load Stats Section with direct number display as fallback
    const statsContainer = document.querySelector('#stats .row');
    statsContainer.innerHTML = siteConfig.stats.items.map(item => `
        <div class="col-lg-3 col-md-6">
            <div class="stats-item d-flex align-items-center w-100 h-100">
                <i class="${item.icon} flex-shrink-0"></i>
                <div>
                    <span
                        data-purecounter-start="0"
                        data-purecounter-end="${item.count}"
                        data-purecounter-duration="1"
                        class="purecounter"
                    >${item.count}</span>
                    <p>${item.label}</p>
                </div>
            </div>
        </div>
    `).join('');

    // Initialize PureCounter with a slight delay to ensure DOM is ready
    setTimeout(() => {
        if (typeof PureCounter === 'function') {
            const pure = new PureCounter({
                selector: '.purecounter',    
                start: 0,                    
                end: 100,                    
                duration: 2,                 
                delay: 10,                   
                once: true,                  
                repeat: false,               
                decimals: 0,                 
                legacy: true,                
                filesizing: false,           
                currency: false,             
                separator: false,            
            });
        }
    }, 100);

    // Add scroll-based navigation highlighting
    const navLinks = document.querySelectorAll('.navmenu a');
    const sections = document.querySelectorAll('section[id]');

    function activateNavByScroll() {
        const scrollY = window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', activateNavByScroll);
    // Activate nav on initial load
    activateNavByScroll();

    // Load Services Section
    document.querySelector('#services .section-title h2').textContent = siteConfig.services.title;
    document.querySelector('#services .section-title p').textContent = siteConfig.services.subtitle;
    
    const servicesContainer = document.querySelector('#services .row');
    servicesContainer.innerHTML = siteConfig.services.items.map(item => `
        <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="service-item">
                <div class="img">
                    <img src="${item.image}" class="img-fluid" alt="">
                </div>
                <div class="details position-relative">
                    <div class="icon">
                        <i class="${item.icon}"></i>
                    </div>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
        </div>
    `).join('');

    // Load Clients Section
    const clientsContainer = document.querySelector('#clients .row');
    clientsContainer.innerHTML = siteConfig.clients.logos.map(logo => `
        <div class="col-xl-2 col-md-3 col-6 client-logo">
            <img src="${logo}" class="img-fluid" alt="">
        </div>
    `).join('');

    // Load Features Section
    const featuresTabs = document.querySelector('#features .nav-tabs');
    const featuresContent = document.querySelector('#features .tab-content');
    
    featuresTabs.innerHTML = siteConfig.features.tabs.map((tab, index) => `
        <li class="nav-item col-3">
            <a class="nav-link ${index === 0 ? 'active show' : ''}" data-bs-toggle="tab" data-bs-target="#${tab.id}">
                <i class="${tab.icon}"></i>
                <h4 class="d-none d-lg-block">${tab.title}</h4>
            </a>
        </li>
    `).join('');

    featuresContent.innerHTML = siteConfig.features.tabs.map((tab, index) => `
        <div class="tab-pane fade ${index === 0 ? 'active show' : ''}" id="${tab.id}">
            <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>${tab.heading}</h3>
                    <p class="fst-italic">${tab.description}</p>
                    ${Object.entries(tab.lists).map(([title, items]) => `
                        <p class="fw-bold">${title}</p>
                        <ul>
                            ${items.map(item => `
                                <li><i class="bi bi-check2-all"></i><span>${item}</span></li>
                            `).join('')}
                        </ul>
                    `).join('')}
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                    <img src="${tab.image}" alt="" class="img-fluid">
                </div>
            </div>
        </div>
    `).join('');

    // Load Portfolio Section
    document.querySelector('#portfolio .section-title h2').textContent = siteConfig.portfolio.title;
    document.querySelector('#portfolio .section-title p').textContent = siteConfig.portfolio.subtitle;

    const portfolioFilters = document.querySelector('.portfolio-filters');
    portfolioFilters.innerHTML = siteConfig.portfolio.filters.map((filter, index) => `
        <li data-filter="${index === 0 ? '*' : '.filter-' + filter.toLowerCase().replace(' ', '-')}" ${index === 0 ? 'class="filter-active"' : ''}>${filter}</li>
    `).join('');

    const portfolioContainer = document.querySelector('.portfolio .isotope-container');
    portfolioContainer.innerHTML = siteConfig.portfolio.items.map(item => `
        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-${item.category}">
            <div class="portfolio-content h-100">
                <img src="${item.image}" class="img-fluid" alt="">
                <div class="portfolio-info">
                    <h4>${item.title}</h4>
                    <p>${item.location}</p>
                    <a href="${item.image}" title="${item.description}" data-gallery="portfolio-gallery-app" class="glightbox preview-link">
                        <i class="bi bi-zoom-in"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');

    document.querySelector('.portfolio-link a').href = siteConfig.portfolio.driveLink;

    // Load Team Section
    document.querySelector('#team .section-title h2').textContent = siteConfig.team.title;
    document.querySelector('#team .section-title p').textContent = siteConfig.team.subtitle;

    const teamContainer = document.querySelector('#team .row');
    teamContainer.innerHTML = siteConfig.team.members.map(member => `
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            ${member.profileLink ? `<a href="${member.profileLink}" target="_blank">` : ''}
            <div class="member">
                <div class="pic">
                    <img src="${member.image}" class="img-fluid" alt="">
                </div>
                <div class="member-info">
                    <h4>${member.name}</h4>
                    <span>${member.position}</span>
                    ${member.license ? `<div class="social">${member.license}</div>` : ''}
                </div>
            </div>
            ${member.profileLink ? '</a>' : ''}
        </div>
    `).join('');

    // Load Contact Section
    document.querySelector('#contact .section-title h2').textContent = siteConfig.contact.title;
    document.querySelector('#contact .section-title p').textContent = siteConfig.contact.subtitle;

    // Schedule
    const scheduleSection = document.querySelector('#contact .info-item:first-child');
    scheduleSection.querySelector('h3').textContent = siteConfig.contact.schedule.title;
    scheduleSection.querySelector('p').textContent = siteConfig.contact.schedule.hours;
    scheduleSection.querySelector('a').href = siteConfig.contact.schedule.buttonLink;
    scheduleSection.querySelector('a').textContent = siteConfig.contact.schedule.buttonText;

    // Phone
    document.querySelector('#contact .bi-telephone').parentElement.querySelector('a').href = `tel:${siteConfig.contact.phone.number}`;
    document.querySelector('#contact .bi-telephone').parentElement.querySelector('a').textContent = siteConfig.contact.phone.number;

    // Email
    document.querySelector('#contact .bi-envelope').parentElement.querySelector('a').href = `mailto:${siteConfig.contact.email.address}`;
    document.querySelector('#contact .bi-envelope').parentElement.querySelector('a').textContent = siteConfig.contact.email.address;

    // Map
    document.querySelector('#contact iframe').src = siteConfig.contact.address.mapEmbed;

    // Load Footer
    document.querySelector('footer .logo img').src = siteConfig.footer.logo;
    
    // Footer Contact
    const footerContact = document.querySelector('footer .footer-contact');
    footerContact.innerHTML = `
        <p>${siteConfig.footer.contact.address.split('\n').join('</p><p>')}</p>
        <p class="mt-3"><strong>Phone:</strong> <span>${siteConfig.footer.contact.phone}</span></p>
        <p><strong>Email:</strong> <span>${siteConfig.footer.contact.email}</span></p>
    `;

    // Footer Newsletter
    const footerNewsletter = document.querySelector('footer .footer-newsletter');
    if (footerNewsletter) {
        footerNewsletter.querySelector('h4').textContent = siteConfig.footer.newsletter.title;
        footerNewsletter.querySelector('p').textContent = siteConfig.footer.newsletter.description;
        footerNewsletter.querySelector('input[type="submit"]').value = siteConfig.footer.newsletter.buttonText;
        footerNewsletter.querySelector('.loading').textContent = siteConfig.footer.newsletter.loadingMessage;
        footerNewsletter.querySelector('.error-message').textContent = siteConfig.footer.newsletter.errorMessage;
        footerNewsletter.querySelector('.sent-message').textContent = siteConfig.footer.newsletter.successMessage;
    }

    // Footer Social Links
    const socialLinks = document.querySelector('footer .social-links');
    if (socialLinks) {
        socialLinks.innerHTML = Object.entries(siteConfig.footer.social).map(([platform, link]) => 
            link ? `<a href="${link}"><i class="bi bi-${platform}"></i></a>` : ''
        ).join('');
    }

    // Copyright
    document.querySelector('footer .copyright .sitename').textContent = siteConfig.footer.copyright.sitename;
    document.querySelector('footer .copyright p').innerHTML = `
        <strong class="px-1 sitename">${siteConfig.footer.copyright.sitename}</strong>${siteConfig.footer.copyright.year}<span> © </span>
        <span>All Rights Reserved</span>
    `;
    const designerLink = document.querySelector('footer .credits a');
    designerLink.href = siteConfig.footer.copyright.designer.url;
    designerLink.textContent = siteConfig.footer.copyright.designer.name;
}); 