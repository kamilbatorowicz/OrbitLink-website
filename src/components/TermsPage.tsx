import { motion } from "motion/react";

const sections = [
    {
        title: "1. Acceptance of Terms",
        content: `By accessing or using OrbitLink's satellite connectivity services, website, APIs, or any related software ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use our Services.

These Terms apply to all users, including individuals, businesses, and government entities. If you are using the Services on behalf of an organisation, you represent that you have the authority to bind that organisation to these Terms.`,
    },
    {
        title: "2. Description of Services",
        content: `OrbitLink provides low-earth orbit (LEO) satellite connectivity infrastructure, including:

• **Broadband internet access** via our satellite constellation.
• **Enterprise network solutions** including dedicated bandwidth, SLAs, and managed connectivity.
• **Developer APIs** for integration with third-party systems and IoT devices.
• **Ground station access** and related telemetry services.

We reserve the right to modify, suspend, or discontinue any part of the Services at any time with reasonable notice.`,
    },
    {
        title: "3. Account Registration",
        content: `To access certain features you must create an account. You agree to:

• Provide accurate, complete, and up-to-date information during registration.
• Maintain the security of your password and accept responsibility for all activity under your account.
• Notify us immediately at security@orbitlink.io if you suspect unauthorised access.

You must be at least 18 years old to create an account. We reserve the right to suspend or terminate accounts that violate these Terms.`,
    },
    {
        title: "4. Acceptable Use",
        content: `You agree not to use the Services to:

• Violate any applicable local, national, or international law or regulation.
• Transmit or store unlawful, harmful, threatening, or abusive content.
• Interfere with or disrupt the integrity or performance of the Services or third-party systems.
• Attempt to gain unauthorised access to any system, network, or data.
• Use the Services for high-risk activities where failure could cause serious harm (e.g. life-support systems), unless explicitly agreed in writing.
• Reverse engineer, decompile, or disassemble any part of the Services.`,
    },
    {
        title: "5. Subscription & Payment",
        content: `Access to paid Services requires a subscription. By subscribing you agree to:

• Pay all fees associated with your selected plan in advance on a monthly or annual basis.
• Provide valid payment information and authorise OrbitLink to charge your payment method.
• All fees are exclusive of applicable taxes (VAT, GST, etc.), which will be added where required.

**Refunds:** Fees are non-refundable except where required by applicable law or at our sole discretion. To cancel your subscription, contact billing@orbitlink.io at least 30 days before your next renewal date.`,
    },
    {
        title: "6. Intellectual Property",
        content: `All content, software, trademarks, logos, and intellectual property related to the Services are owned by or licensed to OrbitLink. You are granted a limited, non-exclusive, non-transferable licence to use the Services solely for your internal business purposes.

You may not copy, modify, distribute, sell, or lease any part of our Services or associated materials without our prior written consent.`,
    },
    {
        title: "7. Service Level Agreement (SLA)",
        content: `OrbitLink targets **99.9% monthly uptime** for its core connectivity services. In the event of downtime exceeding this threshold, eligible customers may receive service credits as outlined in their individual SLA agreements.

SLA credits do not apply to downtime caused by scheduled maintenance, force majeure events, customer equipment failures, or third-party service disruptions.`,
    },
    {
        title: "8. Limitation of Liability",
        content: `To the maximum extent permitted by law, OrbitLink shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Services — including loss of data, revenue, or profits.

Our total aggregate liability to you for any claim arising under these Terms shall not exceed the total amount paid by you to OrbitLink in the 12 months preceding the claim.`,
    },
    {
        title: "9. Disclaimer of Warranties",
        content: `The Services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.

We do not warrant that the Services will be uninterrupted, error-free, or free of viruses or other harmful components.`,
    },
    {
        title: "10. Governing Law & Disputes",
        content: `These Terms are governed by and construed in accordance with the laws of the State of Florida, United States, without regard to conflict of law principles.

Any dispute arising from these Terms or your use of the Services shall first be attempted to be resolved through good-faith negotiation. If unresolved, disputes shall be submitted to binding arbitration in Brevard County, Florida, in accordance with the rules of the American Arbitration Association.`,
    },
    {
        title: "11. Changes to These Terms",
        content: `We may revise these Terms from time to time. We will notify you of material changes by email or by posting a notice on our website at least 14 days before the changes take effect. Your continued use of the Services after the effective date constitutes acceptance of the revised Terms.`,
    },
    {
        title: "12. Contact Us",
        content: `If you have any questions regarding these Terms of Service, please contact us at:

**OrbitLink Satellite Solutions**
Cape Canaveral, FL, USA
legal@orbitlink.io`,
    },
];

export default function TermsPage() {
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
                        Terms of Service
                    </h1>

                    <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 mb-6" />

                    <p className="text-white/40 text-sm">
                        Last updated: <span className="text-white/60">March 10, 2025</span>
                    </p>

                    <p className="text-white/50 text-base font-light leading-relaxed mt-4">
                        Please read these Terms of Service carefully before using OrbitLink's satellite connectivity services.
                        These Terms constitute a legally binding agreement between you and OrbitLink Satellite Solutions.
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
