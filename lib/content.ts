export const site = {
  name: "Dr. Maya Reynolds, PsyD",
  role: "Licensed Clinical Psychologist",
  address: ["123th Street 45 W", "Santa Monica, CA 90401"],
  serving: "In-person therapy in Santa Monica · Secure telehealth for clients located in California",
};

export const images = {
  heroA: "/images/sunset.svg",
  heroB: "/images/stones.svg",
  intro: "/images/dunes.svg",
  banner: "/images/banner.svg",
  maya: "/images/maya.jpg",
  specialties: "/images/waves.svg",
  office1: "/images/office-1.jpg",
  office2: "/images/office-2.jpg",
  scheduleA: "/images/horizon.svg",
  scheduleB: "/images/leaves.svg",
};

export const services = [
  {
    title: "Anxiety & Panic Therapy",
    img: "/images/waves.svg",
    alt: "Calm layered ocean waves in soft teal tones, representing relief from anxiety and panic",
    text: "If you’re always bracing for something to go wrong, we’ll work on the constant worry, tension in your body, and trouble sleeping. Using CBT, mindfulness-based practices, and body-oriented techniques, you’ll learn to understand both the emotional and physical sides of anxiety.",
  },
  {
    title: "Trauma Therapy & EMDR",
    img: "/images/horizon.svg",
    alt: "Sun rising over a calm sea, representing safety and healing after trauma",
    text: "For single-incident trauma or long-standing patterns rooted in childhood, relationships, or chronic stress. Work is paced carefully with an emphasis on safety and stabilization, so you feel more regulated in daily life, not just during sessions.",
  },
  {
    title: "Burnout & Perfectionism Counseling",
    img: "/images/leaves.svg",
    alt: "Teal leaves on a sand background, representing slowing down and reconnecting",
    text: "Made for entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through. Therapy becomes a space to slow down, ease high internal pressure, and build more sustainable ways of living and working.",
  },
];

export const expertise = [
  "Anxiety", "Panic", "Trauma", "Complex trauma", "Burnout", "Perfectionism",
  "Overthinking", "Chronic stress", "Difficulty sleeping", "Confidence & relationships",
];

export const approaches = [
  { title: "Cognitive-Behavioral Therapy (CBT)", text: "A structured, evidence-based approach that helps you notice the thought patterns behind overthinking and constant worry, and build practical tools to respond differently." },
  { title: "EMDR", text: "An evidence-based method used in trauma work, helping you process earlier life experiences that continue to affect your relationships, confidence, or sense of safety." },
  { title: "Mindfulness-Based Practices", text: "Gentle practices that help you slow down, reconnect with the present, and feel less on edge, one of the ways therapy becomes more sustainable beyond the session." },
  { title: "Body-Oriented Techniques", text: "Anxiety and stress live in the body too: tension, restless nights, always being on guard. These techniques address the physiological side of what you’re experiencing." },
];

export const faqs = [
  { q: "Do you offer in-person and online therapy?", a: "Yes. I offer in-person sessions at my private Santa Monica office and secure telehealth sessions for clients located in California." },
  { q: "What do you help with?", a: "I work with adults dealing with anxiety, panic, trauma, and professional burnout, as well as perfectionism and high internal pressure." },
  { q: "What therapy approaches do you use?", a: "I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques." },
  { q: "I look “fine” on the outside. Is therapy still for me?", a: "Very often, yes. Many of the people I work with are high-achieving and self-aware, yet feel exhausted, stuck in overthinking, or emotionally on edge. Feeling “functional” doesn’t mean you aren’t struggling." },
  { q: "Do you work with childhood or long-standing trauma?", a: "Yes. I support adults with single-incident trauma as well as more complex patterns that may stem from childhood, relationships, or chronic stress, paced carefully with an emphasis on safety and stabilization." },
  { q: "What can I expect from sessions?", a: "A warm, collaborative, and grounded approach. Sessions are structured enough to feel supportive, while leaving space for reflection and depth, and you’re actively involved in the process." },
];

export const nav = {
  services: services.map((s) => s.title),
  approach: ["CBT", "EMDR", "Mindfulness-Based Practices", "Body-Oriented Techniques"],
};
