import { motion } from "motion/react";

const sections = [
    {
        title: "1. Information We Collect",
        content: `We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This includes:

• **Personal identification data** — name, email address, phone number, and billing information.
• **Technical data** — IP address, browser type, device identifiers, and usage logs automatically collected when you access our services.
• **Communication data** — messages, support requests, and correspondence you send us.`,
    },
    {
        title: "2. How We Use Your Information",
        content: `OrbitLink uses collected data to operate, maintain, and improve our satellite connectivity services:

• Providing, personalising, and improving our services and infrastructure.
• Processing transactions and sending related administrative information.
• Responding to your comments, questions, and support requests.
• Sending technical notices, updates, security alerts, and promotional communications where permitted.
• Monitoring and analysing usage trends to enhance the user experience.`,
    },
    {
        title: "3. Data Sharing & Disclosure",
        content: `We do not sell your personal information. We may share data with:

• **Service providers** — third-party vendors who perform services on our behalf (hosting, analytics, payment processing) under strict confidentiality obligations.
• **Legal requirements** — when required by applicable law, court order, or governmental authority.
• **Business transfers** — in connection with a merger, acquisition, or sale of assets, with appropriate notice.`,
    },
    {
        title: "4. Data Retention",
        content: `We retain personal information for as long as necessary to fulfil the purposes described in this policy, to comply with legal obligations, resolve disputes, and enforce agreements. When data is no longer required, we securely delete or anonymise it.`,
    },
    {
        title: "5. Security",
        content: `We implement industry-standard technical and organisational measures to protect your data against unauthorised access, loss, or misuse — including TLS encryption in transit, AES-256 encryption at rest, and regular third-party security audits. No method of transmission over the internet is 100% secure; we cannot guarantee absolute security.`,
    },
    {
        title: "6. Your Rights",
        content: `Depending on your jurisdiction you may have the right to:

• Access, correct, or delete your personal data.
• Object to or restrict certain processing activities.
• Data portability — receive a copy of your data in a structured, machine-readable format.
• Withdraw consent at any time where processing is based on consent.

To exercise any right, contact us at privacy@orbitlink.io.`,
    },
    {
        title: "7. Cookies",
        content: `We use cookies and similar tracking technologies to improve your experience, analyse traffic, and personalise content. You can control cookie preferences through your browser settings. Disabling cookies may affect the functionality of certain features.`,
    },
    {
        title: "8. Third-Party Links",
        content: `Our services may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites and encourage you to review their privacy policies independently.`,
    },
    {
        title: "9. Changes to This Policy",
        content: `We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page and updating the "Last updated" date. Continued use of our services after changes constitutes acceptance of the revised policy.`,
    },
    {
        title: "10. Contact Us",
        content: `If you have any questions or concerns about this Privacy Policy, please contact us at:

**OrbitLink Satellite Solutions**
Cape Canaveral, FL, USA
privacy@orbitlink.io`,
    },
];

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">

            {/* Background glow orbs */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {/* Top-right large cyan orb */}
                <div className="absolute -top-32 right-[-15%] w-[600px] h-[500px] rounded-full blur-[150px]"
                    style={{ background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(37,99,235,0.10) 55%, transparent 100%)" }} />
                {/* Mid-left blue orb */}
                <div className="absolute top-[35%] -left-32 w-[450px] h-[400px] rounded-full blur-[130px]"
                    style={{ background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)" }} />
                {/* Bottom-right teal orb */}
                <div className="absolute bottom-[15%] right-[-10%] w-[400px] h-[350px] rounded-full blur-[120px]"
                    style={{ background: "radial-gradient(circle, rgba(14,165,233,0.10) 0%, transparent 70%)" }} />
                {/* Centre subtle glow */}
                <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full blur-[100px]"
                    style={{ background: "radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, transparent 70%)" }} />
                {/* Thin cyan horizontal line accent */}
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
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[10px] uppercase tracking-widest font-bold text-cyan-400 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        Legal
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
                        Privacy Policy
                    </h1>

                    {/* Cyan underline */}
                    <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 mb-6" />

                    <p className="text-white/40 text-sm">
                        Last updated: <span className="text-white/60">March 10, 2025</span>
                    </p>

                    <p className="text-white/50 text-base font-light leading-relaxed mt-4">
                        OrbitLink Satellite Solutions ("OrbitLink", "we", "us", or "our") is committed to protecting your privacy.
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our
                        satellite connectivity services and website.
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
