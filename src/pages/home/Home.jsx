import { useEffect } from "react";
import "./home.css";
// ── Scroll Reveal Hook ──
function useReveal() {
    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("on"); }),
            { threshold: 0.1 }
        );
        document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, []);
}

// ── Back To Top Hook ──
function useBackToTop() {
    useEffect(() => {
        const btt = document.getElementById("btt");
        const handler = () => btt?.classList.toggle("show", window.scrollY > 400);
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);
}

export default function Home() {
    useReveal();
    useBackToTop();

    return (
        <>
            {/* ── HERO ── */}
            <section id="hero">
                <div className="hero-ambient" />
                <div className="hero-ambient2" />

                <div>
                    <div className="hero-tag">
                        <span className="hero-tag-dot" />
                        Available for work
                    </div>

                    <h1 className="hero-h1">
                        <span className="line-name">Adithyan S Kumar</span>
                        Full Stack<br />
                        <em>Developer</em><br />
                        &amp; Builder
                    </h1>

                    <p className="hero-desc">
                        A <strong>MERN Stack developer</strong> building scalable web platforms, mobile applications,
                        and real-time systems. Based in Kerala, India.
                    </p>

                    <div className="hero-btns">
                        <a href="#portfolio" className="btn-primary">View Projects →</a>
                        <a href="#contact" className="btn-outline">Get in Touch</a>
                    </div>

                    <div className="hero-chips">
                        <span className="chip">MERN Stack</span>
                        <span className="chip">React Native</span>
                        <span className="chip">WordPress</span>
                        <span className="chip">Kerala, India</span>
                    </div>
                </div>

                {/* Hero Right */}
                <div className="hero-right">
                    <div className="code-card">
                        <div className="code-bar">
                            <div className="dot dot-r" />
                            <div className="dot dot-y" />
                            <div className="dot dot-g" />
                            <span className="file-tag">developer.json</span>
                        </div>
                        <div className="code-body">
                            <span className="cp">{"{"}</span><br />
                            &nbsp;&nbsp;<span className="ck">"name"</span><span className="cp">:</span> <span className="cs">"Adithyan S Kumar"</span><span className="cp">,</span><br />
                            &nbsp;&nbsp;<span className="ck">"role"</span><span className="cp">:</span> <span className="cs">"Full Stack Developer"</span><span className="cp">,</span><br />
                            &nbsp;&nbsp;<span className="ck">"stack"</span><span className="cp">:</span> <span className="cn">{"["}</span><span className="cs">"React"</span><span className="cp">,</span> <span className="cs">"Node"</span><span className="cp">,</span> <span className="cs">"MongoDB"</span><span className="cn">{"]"}</span><span className="cp">,</span><br />
                            &nbsp;&nbsp;<span className="ck">"mobile"</span><span className="cp">:</span> <span className="cs">"React Native"</span><span className="cp">,</span><br />
                            &nbsp;&nbsp;<span className="ck">"cms"</span><span className="cp">:</span> <span className="cs">"WordPress"</span><span className="cp">,</span><br />
                            &nbsp;&nbsp;<span className="ck">"location"</span><span className="cp">:</span> <span className="cs">"Kerala, India"</span><span className="cp">,</span><br />
                            &nbsp;&nbsp;<span className="ck">"available"</span><span className="cp">:</span> <span className="co">true</span><br />
                            <span className="cp">{"}"}</span>
                        </div>
                    </div>

                    <div className="stats-row">
                        <div className="stat-box">
                            <div className="stat-n">2+</div>
                            <div className="stat-l">Years Exp</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-n">6+</div>
                            <div className="stat-l">Projects</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-n">4</div>
                            <div className="stat-l">Companies</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ABOUT ── */}
            <section id="about">
                <div className="sec-eye">01 / About</div>
                <div className="about-grid">
                    <div className="about-img-wrap reveal">
                        <img
                            src="/assets/img/Adithyan S Kumar 3.jpeg"
                            alt="Adithyan S Kumar"
                            onError={(e) => {
                                e.target.style.display = "none";
                                e.target.nextElementSibling.style.display = "flex";
                            }}
                        />
                        <div className="img-placeholder" style={{ display: "none" }}>👤</div>
                    </div>

                    <div className="about-text reveal">
                        <div className="sec-eye">About Me</div>
                        <h2 className="sec-title" style={{ marginBottom: "20px" }}>
                            Web &amp; Mobile<br />Application Developer
                        </h2>
                        <p>
                            I'm a Full Stack Developer with hands-on experience building modern web platforms and mobile
                            applications, specializing in the <strong>MERN Stack</strong>, <strong>React Native</strong>,
                            and <strong>WordPress</strong>.
                        </p>
                        <p>
                            My work spans real-time taxi booking systems, streaming platforms, hotel booking apps, and
                            corporate websites. I focus on clean code, secure APIs, and products that perform at scale.
                        </p>
                        <p>
                            Currently a <strong>Web Developer at Apple Info Tech Pvt Ltd</strong>, building and optimizing
                            digital platforms for clients across industries.
                        </p>

                        <div className="info-grid">
                            {[
                                { label: "Location", val: "Kerala, India" },
                                { label: "Email", val: <a href="mailto:skumaradithyan2006@gmail.com">skumaradithyan2006@gmail.com</a> },
                                { label: "Phone", val: <a href="tel:+916238141438">+91 6238141438</a> },
                                { label: "GitHub", val: <a href="https://github.com/Appu1438" target="_blank" rel="noreferrer">github.com/Appu1438</a> },
                                { label: "LinkedIn", val: <a href="https://www.linkedin.com/in/adithyan-skumar-3794ba281" target="_blank" rel="noreferrer">View Profile →</a> },
                                { label: "Stack", val: "MERN · React Native · WP" },
                            ].map(({ label, val }) => (
                                <div className="info-card" key={label}>
                                    <div className="info-label">{label}</div>
                                    <div className="info-val">{val}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SKILLS ── */}
            <section id="skills">
                <div className="sec-eye">02 / Skills</div>
                <h2 className="sec-title">Technical Expertise</h2>
                <p className="sec-sub">Technologies I've used to build production-grade web and mobile applications.</p>

                <div className="skills-wrap">
                    {[
                        { name: "HTML5", desc: "Semantic, accessible, SEO-optimized" },
                        { name: "CSS / SCSS", desc: "Responsive modern UI design" },
                        { name: "JavaScript", desc: "Dynamic, interactive web apps" },
                        { name: "React.js", desc: "Scalable component-driven frontends" },
                        { name: "React Native", desc: "Cross-platform mobile apps" },
                        { name: "Node.js", desc: "Scalable backend services & APIs" },
                        { name: "Express.js", desc: "REST API development" },
                        { name: "MongoDB", desc: "NoSQL database design" },
                        { name: "WordPress", desc: "Custom themes, WooCommerce" },
                        { name: "Firebase", desc: "Auth, hosting, real-time DB" },
                        { name: "AWS", desc: "Cloud deployment & infrastructure" },
                        { name: "Bootstrap", desc: "Rapid responsive UI" },
                        { name: "Git", desc: "Version control & collaboration" },
                        { name: "SEO", desc: "Technical optimization & performance" },
                    ].map(({ name, desc }) => (
                        <div className="skill-card reveal" key={name}>
                            <h4>{name}</h4>
                            <p>{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── EXPERIENCE ── */}
            <section id="resume">
                <div className="sec-eye">03 / Experience</div>
                <h2 className="sec-title">Work History</h2>
                <p className="sec-sub">My professional journey — from intern to production developer.</p>

                <div className="exp-grid">
                    {/* Work Experience */}
                    <div className="reveal">
                        <div className="block-title">Work Experience</div>
                        <div className="tl">
                            {[
                                {
                                    role: "Web Developer",
                                    company: "Apple Info Tech Pvt Ltd",
                                    date: "Mar 2026 – Present",
                                    items: [
                                        "Business websites with HTML, CSS, JS, React, WordPress",
                                        "SEO optimization & client search visibility",
                                        "Contact forms & payment gateway integration",
                                        "Performance, responsiveness & UX improvements",
                                    ],
                                },
                                {
                                    role: "Freelance Full Stack Developer",
                                    company: "Self-Employed",
                                    date: "Aug 2025 – Mar 2026",
                                    items: [
                                        "Full-stack apps with MERN + React Native",
                                        "Real-time taxi booking & streaming systems",
                                        "JWT + RBAC secured backend APIs",
                                        "WebSocket real-time communication & tracking",
                                        "AWS deployment & cloud infrastructure",
                                    ],
                                },
                                {
                                    role: "Junior Software Developer",
                                    company: "Ibirix Digital India Pvt Ltd",
                                    date: "Apr 2025 – Aug 2025",
                                    items: [
                                        "Backend services with Node.js & Express.js",
                                        "RESTful APIs with MongoDB integration",
                                        "JWT & OAuth authentication systems",
                                        "API performance optimization",
                                    ],
                                },
                                {
                                    role: "Software Developer Intern",
                                    company: "Eduzell Technologies",
                                    date: "Nov 2023 – Apr 2025",
                                    items: [
                                        "Responsive sites with HTML, CSS, JS, Bootstrap",
                                        "MERN stack full-stack applications",
                                        "API integrations & debugging",
                                    ],
                                },
                            ].map(({ role, company, date, items }) => (
                                <div className="tl-item" key={role}>
                                    <div className="tl-role">{role}</div>
                                    <div className="tl-co">{company}</div>
                                    <div className="tl-date">{date}</div>
                                    <ul className="tl-list">
                                        {items.map((item) => <li key={item}>{item}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education + Achievements */}
                    <div className="reveal">
                        <div className="block-title">Education</div>
                        <div className="tl">
                            {[
                                {
                                    role: "Higher Secondary — Computer Science",
                                    company: "Kerala State Board",
                                    date: "Completed",
                                    items: ["Specialized in CS, foundations of programming & software dev"],
                                },
                                {
                                    role: "Secondary School Education",
                                    company: "Kerala State Board",
                                    date: "Completed",
                                    items: ["Successfully completed secondary education"],
                                },
                            ].map(({ role, company, date, items }) => (
                                <div className="tl-item" key={role}>
                                    <div className="tl-role">{role}</div>
                                    <div className="tl-co">{company}</div>
                                    <div className="tl-date">{date}</div>
                                    <ul className="tl-list">
                                        {items.map((item) => <li key={item}>{item}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="block-title" style={{ marginTop: "36px" }}>Key Achievements</div>
                        <div className="tl">
                            {[
                                {
                                    role: "Published on Google Play Store",
                                    date: "STARK Taxi — User App & Driver App",
                                    items: ["Shipped both apps to production on Google Play"],
                                },
                                {
                                    role: "Real-Time Platform Architecture",
                                    date: "WebSocket + GPS Live Tracking",
                                    items: ["Designed and deployed full ride-booking infrastructure"],
                                },
                            ].map(({ role, date, items }) => (
                                <div className="tl-item" key={role}>
                                    <div className="tl-role">{role}</div>
                                    <div className="tl-date">{date}</div>
                                    <ul className="tl-list">
                                        {items.map((item) => <li key={item}>{item}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PROJECTS ── */}
            <section id="portfolio">
                <div className="sec-eye">04 / Projects</div>
                <h2 className="sec-title">Selected Work</h2>
                <p className="sec-sub">Production-ready applications built with modern technologies.</p>

                <div className="proj-grid">
                    {[
                        {
                            img: "/assets/img/stark.png",
                            fallback: "🚗",
                            tag: "Real-Time · MERN · React Native",
                            title: "STARK – Taxi Booking System",
                            desc: "Real-time taxi platform with User App, Driver App, and Admin Dashboard. OTP auth, live GPS tracking, wallet management, and WebSocket ride updates. Live on Google Play.",
                            links: [
                                { label: "📱 User App", href: "https://play.google.com/store/apps/details?id=com.starkcabs.stark" },
                                { label: "🚕 Driver App", href: "https://play.google.com/store/apps/details?id=com.starkcabs.starkdriver" },
                            ],
                        },
                        {
                            img: "/assets/img/cineflix.webp",
                            fallback: "🎬",
                            tag: "MERN Stack",
                            title: "CineFlix",
                            desc: "Netflix-style streaming platform with JWT auth, admin dashboard, cloud media storage, and optimized video delivery pipeline.",
                            links: [
                                { label: "View Project →", href: "https://www.linkedin.com/posts/adithyan-s-kumar-3794ba281_cineflix-thrilled-to-introduce-cineflix-activity-7259436209695784960-lKTF" },
                            ],
                        },
                        {
                            img: "/assets/img/stayease.webp",
                            fallback: "🏨",
                            tag: "MERN · React Native",
                            title: "Stay Ease",
                            desc: "Full-stack hotel booking app with secure auth, booking management, location-based search, and payment integration across web and mobile.",
                            links: [
                                { label: "View Project →", href: "https://www.linkedin.com/posts/adithyan-s-kumar-3794ba281_internship-project-softwaredevelopment-activity-7205860482644144128-z4uC" },
                            ],
                        },
                        {
                            img: "/assets/img/claryon.png",
                            fallback: "🌐",
                            tag: "WordPress Development",
                            title: "Claryon Group",
                            desc: "Recruitment agency site with custom theme, SEO structure, performance optimization, and candidate inquiry management.",
                            links: [
                                { label: "View Project →", href: "https://www.linkedin.com/posts/adithyan-s-kumar-3794ba281_wordpress-webdevelopment-freelancedeveloper-activity-7426962111563571201-5zgI" },
                            ],
                        },
                        {
                            img: "/assets/img/logistics.webp",
                            fallback: "📦",
                            tag: "Front-End Development",
                            title: "United SR Logistics",
                            desc: "Corporate logistics platform with dynamic backend integration, optimized UI/UX, and custom mail API functionality.",
                            links: [
                                { label: "View Project →", href: "https://www.linkedin.com/posts/adithyan-s-kumar-3794ba281_nodejs-frontenddevelopment-logisticstech-activity-7296805808212754432-prcj" },
                            ],
                        },
                        {
                            img: "/assets/img/movie-explorer.webp",
                            fallback: "🎥",
                            tag: "JavaScript · External API",
                            title: "Movie Explorer API",
                            desc: "Interactive movie search app with external API integration, dynamic filtering, and a fully responsive UI.",
                            links: [
                                { label: "View Project →", href: "https://www.linkedin.com/posts/adithyan-s-kumar-3794ba281_during-my-internship-at-eduzell-technologies-activity-7192772487955243009-mwMg" },
                            ],
                        },
                    ].map(({ img, fallback, tag, title, desc, links }) => (
                        <div className="proj-card reveal" key={title}>
                            <div className="proj-img-wrap">
                                <img
                                    className="proj-img"
                                    src={img}
                                    alt={title}
                                    onError={(e) => {
                                        e.target.style.display = "none";
                                        e.target.nextElementSibling.style.display = "flex";
                                    }}
                                />
                                <div className="proj-placeholder" style={{ display: "none" }}>{fallback}</div>
                            </div>
                            <div className="proj-body">
                                <div className="proj-tag">{tag}</div>
                                <div className="proj-title">{title}</div>
                                <p className="proj-desc">{desc}</p>
                                <div className="proj-links">
                                    {links.map(({ label, href }) => (
                                        <a key={label} href={href} target="_blank" rel="noreferrer" className="proj-link">{label}</a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── SERVICES ── */}
            <section id="services">
                <div className="sec-eye">05 / Services</div>
                <div className="svc-layout">
                    <div className="svc-intro reveal">
                        <h2>From Idea to<br />Production-Ready</h2>
                        <p>I build complete, high-performance applications with secure authentication, real-time functionality, admin dashboards, and payment integration.</p>
                        <a href="#contact" className="btn-primary">Start a Project →</a>
                    </div>

                    <div className="svc-grid reveal">
                        {[
                            { icon: "📱", title: "Web & Mobile Development", desc: "Scalable web apps and cross-platform mobile apps with modern UI and optimized performance." },
                            { icon: "⚡", title: "Real-Time Systems", desc: "Live tracking, booking systems, WebSocket communication and push notifications." },
                            { icon: "🔐", title: "Auth & Security", desc: "JWT, role-based access, token refresh, OAuth, and fully protected API endpoints." },
                            { icon: "💳", title: "Payment Integration", desc: "Online payments, wallet systems, transaction management, and secure checkout." },
                            { icon: "📊", title: "Admin Dashboards", desc: "Custom panels for users, drivers, content, bookings, analytics, and operations." },
                            { icon: "☁️", title: "Deployment & Cloud", desc: "AWS setup, server deployment, DB optimization, and production configuration." },
                        ].map(({ icon, title, desc }) => (
                            <div className="svc-card" key={title}>
                                <div className="svc-icon">{icon}</div>
                                <h4>{title}</h4>
                                <p>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CONTACT ── */}
            <section id="contact">
                <div className="sec-eye">06 / Contact</div>
                <div className="contact-grid">
                    <div className="contact-left reveal">
                        <h2 className="sec-title">Let's Build<br />Something Great</h2>
                        <p>Whether you need a full-stack web app, mobile application, real-time system, or WordPress site — I'm ready to help turn your idea into reality.</p>

                        <div className="clinks">
                            {[
                                { href: "mailto:skumaradithyan2006@gmail.com", icon: "✉️", label: "Email", sub: "skumaradithyan2006@gmail.com" },
                                { href: "https://wa.me/916238141438", icon: "📞", label: "Phone / WhatsApp", sub: "+91 6238141438", external: true },
                                { href: "https://www.linkedin.com/in/adithyan-skumar-3794ba281", icon: "💼", label: "LinkedIn", sub: "adithyan-skumar-3794ba281", external: true },
                                { href: "https://github.com/Appu1438", icon: "🐙", label: "GitHub", sub: "github.com/Appu1438", external: true },
                            ].map(({ href, icon, label, sub, external }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="clink"
                                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                                >
                                    <div className="clink-ico">{icon}</div>
                                    <div><strong>{label}</strong><span>{sub}</span></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="avail-box reveal">
                        <div className="avail-badge"><span className="avail-dot" /> Currently Available</div>
                        <h3>Open for Projects &amp; Opportunities</h3>
                        <p>I'm taking on freelance projects and open to full-time roles. Let's discuss your idea and build something great together.</p>
                        <div className="tag-cloud">
                            {["MERN Stack", "React Native", "WordPress", "REST APIs", "Real-Time Apps", "AWS"].map((t) => (
                                <span className="tag" key={t}>{t}</span>
                            ))}
                        </div>
                        <a href="https://wa.me/916238141438" className="btn-primary" target="_blank" rel="noreferrer">
                            💬 Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* ── Back to Top ── */}
            <a href="#hero" id="btt">↑</a>
        </>
    );
}