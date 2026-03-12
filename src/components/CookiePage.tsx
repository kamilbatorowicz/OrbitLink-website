import { motion } from "motion/react";

const sections = [
    {
        title: "1. What Are Cookies?",
        content: `Cookies are small text files placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and to provide information to the website owner.

Cookies can be **session cookies** (deleted when you close your browser) or **persistent cookies** (they remain on your device until they expire or you delete them).`,
    },
    {
        title: "2. How We Use Cookies",
        content: `OrbitLink uses cookies and similar technologies (such as web beacons and local storage) to:

• **Operate our services** — essential cookies keep the platform functional and secure.
• **Remember your preferences** — we store settings like language, region, and dashboard configuration.
• **Analyse performance** — analytics cookies help us understand how visitors interact with our website so we can improve it.
• **Personalise content** — we may tailor the content you see based on your previous interactions.
• **Marketing & advertising** — with your consent, we use cookies to deliver relevant promotions across third-party platforms.`,
    },
    {
        title: "3. Types of Cookies We Use",
        content: `**Strictly Necessary Cookies**
These cookies are essential for the website to function. Without them, features like login sessions or security cannot work. They cannot be disabled.

**Performance & Analytics Cookies**
These cookies collect anonymised information about how visitors use our site — pages visited, time spent, and errors encountered. We use this data strictly to improve our services.

**Functional Cookies**
These cookies remember your preferences and settings to provide a more personalised experience on return visits.

**Targeting & Advertising Cookies**
With your consent, these cookies track your browsing activity to show you relevant advertisements on other websites. They do not store personal information directly.`,
    },
    {
        title: "4. Third-Party Cookies",
        content: `Some cookies on our site are set by third-party services we use, including:

• **Google Analytics** — website traffic analysis.
• **Stripe** — secure payment processing.
• **Intercom** — customer support chat.
• **LinkedIn Insight Tag** — B2B analytics and advertising (with consent).

These third parties have their own privacy and cookie policies. We encourage you to review them independently.`,
    },
    {
        title: "5. Managing Your Cookie Preferences",
        content: `You can manage or withdraw your consent to non-essential cookies at any time:

• **Browser settings** — most browsers allow you to view, block, and delete cookies through their settings menu (e.g. Chrome → Settings → Privacy & Security → Cookies).
• **Our cookie banner** — click "Cookie Preferences" in the footer to update your choices at any time.
• **Opt-out tools** — for advertising cookies, visit the Network Advertising Initiative opt-out page or the Digital Advertising Alliance opt-out page.

Please note that blocking certain cookies may affect the functionality of our website and services.`,
    },
    {
        title: "6. Cookie Retention",
        content: `The retention period of cookies varies depending on their purpose:

• **Session cookies** — deleted automatically when you close your browser.
• **Persistent cookies** — remain for periods ranging from 30 days (analytics) to 2 years (preference and login cookies), unless you delete them earlier.

We regularly review and update the list of cookies we use to ensure they remain necessary and proportionate.`,
    },
    {
        title: "7. Do Not Track",
        content: `Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that you do not want your online activity tracked. OrbitLink currently does not alter its behaviour in response to DNT signals, as there is no universally accepted standard for honouring such signals. We continue to monitor developments in this area.`,
    },
    {
        title: "8. Changes to This Policy",
        content: `We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. We will notify you of material changes by displaying a notice on our website or updating the "Last updated" date below. Continued use of our services after changes constitutes acceptance of the revised policy.`,
    },
    {
        title: "9. Contact Us",
        content: `If you have any questions about our use of cookies, please contact us at:

**OrbitLink Satellite Solutions**
Cape Canaveral, FL, USA
privacy@orbitlink.io`,
    },
];

export default function CookiePage() {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">

            {/* Background glow orbs */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute -top-32 right-[-15%] w-[600px] h-[500px] rounded-full blur-[150px]"
                    style={{ background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(37,99,235,0.10) 55%, transparent 100%)" }} />
                <div className="absolute top-[35%] -left-32 w-[450px] h-[400px] rounded-full blur-[130px]"
                    style={{ background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)" }} />
                <div className="absolute bottom-[15%] right-[-10%] w-[400px] h-[350px] rounded-full blur-[120px]"
                    style={{ background: "radial-gradient(circle, rgba(14,165,233,0.10) 0%, transparent 70%)" }} />
                <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full blur-[100px]"
                    style={{ background: "radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, transparent 70%)" }} />
                <div className="absolute top-[30%] left-0 w-full h-[1px] opacity-15"
                    style={{ background: "linear-gradient(90deg, transparent 0%, #22d3ee 35%, #3b82f6 65%, transparent 100%)" }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-24">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[10px] uppercase tracking-widest font-bold text-cyan-400 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        Legal
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
                        Cookie Policy
                    </h1>

                    <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 mb-6" />

                    <p className="text-white/40 text-sm">
                        Last updated: <span className="text-white/60">March 10, 2025</span>
                    </p>

                    <p className="text-white/50 text-base font-light leading-relaxed mt-4">
                        This Cookie Policy explains how OrbitLink Satellite Solutions ("OrbitLink", "we", "us", or "our") uses cookies
                        and similar tracking technologies when you visit our website or use our services. It explains what these
                        technologies are, why we use them, and your rights to control their use.
                    </p>
                </motion.div>

                {/* Sections */}
                <div className="flex flex-col gap-10">
                    {sections.map((section, i) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.04 }}
                            className="border-t border-white/8 pt-8"
                        >
                            <h2 className="text-lg font-semibold text-white mb-3">
                                {section.title}
                            </h2>
                            <div className="text-white/50 text-sm font-light leading-relaxed whitespace-pre-line">
                                {section.content.split(/\*\*(.*?)\*\*/g).map((part, idx) =>
                                    idx % 2 === 1
                                        ? <strong key={idx} className="text-white/80 font-medium">{part}</strong>
                                        : <span key={idx}>{part}</span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
