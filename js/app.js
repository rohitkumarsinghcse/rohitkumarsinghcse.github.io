document.addEventListener("DOMContentLoaded", () => {

    /* ==============================
       PERSONAL INFORMATION
    ============================== */

    const p = portfolio.personal;

    document.title =
        `${p.name} | ${p.role}`;

    document.getElementById("heroDescription").textContent =
        p.description;

    document.getElementById("aboutText").textContent =
        p.about;

    document.getElementById("location").textContent =
        p.location;

    document.getElementById("resumeButton").href =
        p.resume;

    document.getElementById("emailText").textContent =
        p.email;

    document.getElementById("emailLink").href =
        `mailto:${p.email}`;

    document.getElementById("contactDescription").textContent =
        portfolio.contact.description;


    /* ==============================
       TYPING EFFECT
    ============================== */

    const typingElement =
        document.getElementById("typing");

    const titles = [
        "Full Stack Engineer",
        "Backend Architect",
        "Cloud Engineer",
        "System Designer",
        "Problem Solver"
    ];

    let titleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const current =
            titles[titleIndex];

        if (!deleting) {

            typingElement.textContent =
                current.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === current.length) {

                deleting = true;

                setTimeout(typeEffect, 1600);

                return;
            }

        } else {

            typingElement.textContent =
                current.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

                titleIndex =
                    (titleIndex + 1) % titles.length;

            }

        }

        setTimeout(
            typeEffect,
            deleting ? 45 : 80
        );
    }

    typeEffect();


    /* ==============================
       SOCIAL LINKS
    ============================== */

    const socialContainer =
        document.getElementById("socialLinks");

    const socialIcons = {

        github: "fa-brands fa-github",

        linkedin: "fa-brands fa-linkedin",

        twitter: "fa-brands fa-x-twitter",

        instagram: "fa-brands fa-instagram"

    };

    Object.entries(portfolio.social).forEach(
        ([name, url]) => {

            if (!url) return;

            socialContainer.innerHTML += `

                <a href="${url}"
                   target="_blank"
                   rel="noopener"
                   aria-label="${name}">

                    <i class="${socialIcons[name]}"></i>

                </a>

            `;
        }
    );


    /* ==============================
       STATS
    ============================== */

    const statsContainer =
        document.getElementById("stats");

    portfolio.stats.forEach(stat => {

        statsContainer.innerHTML += `

            <div class="stat-card">

                <span class="stat-number">
                    ${stat.number}
                </span>

                <span class="stat-label">
                    ${stat.label}
                </span>

                <div class="stat-line"></div>

            </div>

        `;
    });


    /* ==============================
       SKILLS
    ============================== */

    const skillsContainer =
        document.getElementById("skillsContainer");

    portfolio.skills.forEach(skill => {

        skillsContainer.innerHTML += `

            <article class="skill-card">

                <div class="skill-header">

                    <div class="skill-icon ${skill.color}">
                        <i class="${skill.icon}"></i>
                    </div>

                    <h3>
                        ${skill.category}
                    </h3>

                    <span class="skill-number">
                        ${String(
                            portfolio.skills.indexOf(skill) + 1
                        ).padStart(2, "0")}
                    </span>

                </div>

                <div class="skill-tags">

                    ${skill.technologies
                        .map(tech => `
                            <span>${tech}</span>
                        `)
                        .join("")
                    }

                </div>

            </article>

        `;
    });


    /* ==============================
       PROJECTS
    ============================== */

    const projectsContainer =
        document.getElementById("projectsContainer");

    portfolio.projects.forEach(project => {

        projectsContainer.innerHTML += `

            <article class="
                project-card
                ${project.featured ? "featured" : ""}
            ">

                <div class="project-top">

                    <span class="project-number">
                        ${project.number}
                    </span>

                    <div class="project-links">

                        <a href="${project.github}"
                           target="_blank"
                           rel="noopener">

                            <i class="fa-brands fa-github"></i>

                        </a>

                        <a href="${project.demo}"
                           target="_blank"
                           rel="noopener">

                            <i class="fa-solid fa-arrow-up-right-from-square"></i>

                        </a>

                    </div>

                </div>


                <div class="project-icon">

                    <i class="fa-solid fa-code"></i>

                </div>


                <h3>
                    ${project.title}
                </h3>


                <p>
                    ${project.description}
                </p>


                <div class="project-tech">

                    ${project.technologies
                        .map(tech => `
                            <span>${tech}</span>
                        `)
                        .join("")
                    }

                </div>


                <div class="project-line"></div>

            </article>

        `;
    });


    /* ==============================
       EXPERIENCE
    ============================== */

    const experienceContainer =
        document.getElementById("experienceContainer");

    portfolio.experience.forEach(
        (item, index) => {

            experienceContainer.innerHTML += `

                <div class="timeline-item">

                    <div class="timeline-marker">
                        ${String(index + 1).padStart(2, "0")}
                    </div>

                    <div class="timeline-content">

                        <span class="timeline-period">
                            ${item.period}
                        </span>

                        <h3>
                            ${item.role}
                        </h3>

                        <h4>
                            @ ${item.company}
                        </h4>

                        <p>
                            ${item.description}
                        </p>

                    </div>

                </div>

            `;
        }
    );


    /* ==============================
       MOBILE MENU
    ============================== */

    const menuBtn =
        document.getElementById("menuBtn");

    const navMenu =
        document.getElementById("navMenu");

    menuBtn.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle("active");

            menuBtn.innerHTML =
                navMenu.classList.contains("active")
                    ? '<i class="fa-solid fa-xmark"></i>'
                    : '<i class="fa-solid fa-bars"></i>';

        }
    );


    document.querySelectorAll(
        "#navMenu a"
    ).forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navMenu.classList.remove("active");

                menuBtn.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            }
        );

    });


    /* ==============================
       CURSOR GLOW
    ============================== */

    const glow =
        document.querySelector(".cursor-glow");

    document.addEventListener(
        "mousemove",
        event => {

            glow.style.left =
                `${event.clientX}px`;

            glow.style.top =
                `${event.clientY}px`;

        }
    );


    /* ==============================
       SCROLL REVEAL
    ============================== */

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    document.querySelectorAll(
        ".section, .skill-card, .project-card, .timeline-item"
    ).forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });


    /* ==============================
       BACK TO TOP
    ============================== */

    const backTop =
        document.getElementById("backTop");

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 500) {

                backTop.classList.add("show");

            } else {

                backTop.classList.remove("show");

            }

        }
    );


    backTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    /* ==============================
       CONTACT FORM
    ============================== */

    const form =
        document.getElementById("contactForm");

    const formMessage =
        document.getElementById("formMessage");

    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            const formData =
                new FormData(form);

            const name =
                formData.get("name");

            const email =
                formData.get("email");

            const message =
                formData.get("message");


            const subject =
                encodeURIComponent(
                    `Portfolio Contact from ${name}`
                );

            const body =
                encodeURIComponent(
                    `Name: ${name}\n\n` +
                    `Email: ${email}\n\n` +
                    `Message:\n${message}`
                );


            window.location.href =
                `mailto:${p.email}?subject=${subject}&body=${body}`;


            formMessage.textContent =
                "Opening your email client...";

        }
    );


    /* ==============================
       YEAR
    ============================== */

    document.getElementById("year")
        .textContent =
        new Date().getFullYear();

});