import { useEffect, useRef } from "react";
import "./notFound.css";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
    const glitchRef = useRef(null);

    useEffect(() => {
        // Randomise glitch timing
        const el = glitchRef.current;
        if (!el) return;
        const interval = setInterval(() => {
            el.classList.add("glitch-active");
            setTimeout(() => el.classList.remove("glitch-active"), 400);
        }, 3200);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Helmet>
                <title>404 - Page Not Found | Adithyan S Kumar</title>
                <meta
                    name="description"
                    content="Sorry, the page you are looking for could not be found. Visit Adithyan S Kumar's portfolio to explore modern full stack web and mobile development projects."
                />

                <meta
                    name="keywords"
                    content="404, page not found, Adithyan S Kumar, MERN Developer, Full Stack Developer, React Developer"
                />

                <meta name="robots" content="noindex, nofollow" />

                <link
                    rel="canonical"
                    href="https://adithyanskumar.netlify.app/404"
                />

                {/* Open Graph */}
                <meta property="og:type" content="website" />

                <meta
                    property="og:title"
                    content="404 - Page Not Found | Adithyan S Kumar"
                />

                <meta
                    property="og:description"
                    content="The page you requested could not be found. Explore Adithyan S Kumar's portfolio, projects, and full stack development services."
                />

                <meta
                    property="og:url"
                    content="https://adithyanskumar.netlify.app/404"
                />

                <meta
                    property="og:image"
                    content="https://adithyanskumar.netlify.app/assets/img/Adithyan%20S%20Kumar%203.jpeg"
                />

                <meta
                    property="og:site_name"
                    content="Adithyan S Kumar Portfolio"
                />

                {/* Twitter */}
                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />

                <meta
                    name="twitter:title"
                    content="404 - Page Not Found | Adithyan S Kumar"
                />

                <meta
                    name="twitter:description"
                    content="The page you requested does not exist. Visit Adithyan S Kumar's portfolio to view projects and development work."
                />

                <meta
                    name="twitter:image"
                    content="https://adithyanskumar.netlify.app/assets/img/Adithyan%20S%20Kumar%203.jpeg"
                />
            </Helmet>
            <div className="nf-root">
                {/* Ambient blobs (mirrors hero) */}
                <div className="nf-ambient" />
                <div className="nf-ambient2" />

                {/* Floating grid particles */}
                <div className="nf-particles" aria-hidden="true">
                    {Array.from({ length: 18 }).map((_, i) => (
                        <span key={i} className="nf-particle" style={{ "--i": i }} />
                    ))}
                </div>

                <div className="nf-content">
                    {/* Code-style eyebrow */}
                    <div className="nf-eye">
                        <span className="nf-dot" />
                        404 / Not Found
                    </div>

                    {/* Giant 404 */}
                    <div className="nf-big" ref={glitchRef} data-text="404">
                        404
                    </div>

                    {/* Code card — mirrors hero card */}
                    <div className="nf-code-card">
                        <div className="nf-code-bar">
                            <div className="dot dot-r" />
                            <div className="dot dot-y" />
                            <div className="dot dot-g" />
                            <span className="nf-file-tag">error.json</span>
                        </div>
                        <div className="nf-code-body">
                            <span className="cp">{"{"}</span><br />
                            &nbsp;&nbsp;<span className="ck">"status"</span><span className="cp">:</span> <span className="co">404</span><span className="cp">,</span><br />
                            &nbsp;&nbsp;<span className="ck">"error"</span><span className="cp">:</span> <span className="cs">"Page not found"</span><span className="cp">,</span><br />
                            &nbsp;&nbsp;<span className="ck">"path"</span><span className="cp">:</span> <span className="cs">"{window.location.pathname}"</span><span className="cp">,</span><br />
                            &nbsp;&nbsp;<span className="ck">"suggestion"</span><span className="cp">:</span> <span className="cs">"Go back home"</span><br />
                            <span className="cp">{"}"}</span>
                        </div>
                    </div>

                    <p className="nf-desc">
                        Looks like this page got lost in the stack. Let's get you back to somewhere that actually exists.
                    </p>

                    <div className="nf-btns">
                        <a href="/" className="btn-primary">← Back to Home</a>
                        <a href="#contact" className="btn-outline" onClick={() => window.location.href = "/#contact"}>Get in Touch</a>
                    </div>

                    {/* Chips row */}
                    <div className="nf-chips">
                        {["MERN Stack", "React Native", "WordPress", "Kerala, India"].map((c) => (
                            <span className="chip" key={c}>{c}</span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}