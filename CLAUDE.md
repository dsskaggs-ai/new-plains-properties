# New Plains Properties - Project Core Identity & Development Guide

## 1. Project Overview & Vibe
* **Company Name:** New Plains Properties
* **Business Model:** Nationwide land acquisition and local (Oklahoma) residential/commercial property renovation.
* **Core Identity:** Family-owned, community-focused, trustworthy, and approachable. NOT a faceless corporation. 
* **Target Audience:** Off-market property and land sellers. The site must serve as a frictionless pitch to them.

## 2. Tech Stack Requirements
* **Framework:** Next.js (App Router) with React
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Language:** TypeScript
* **Icons:** Lucide React (or a similar clean, modern icon set)

## 3. Design System & Aesthetics
* **Colors:** Warm golden-orange (`#ea8c08`) and deep earthy brown (`#2d2001`). The design should feel modern, clean, and grounded.
  * Primary: Warm golden-orange (`#ea8c08`)
  * Secondary: Deep earthy brown (`#2d2001`)
  * Backgrounds: Clean warm off-whites, stark white for contrast.
* **Animations:** 
  * General: Premium feel. Scroll-triggered fade-ins and slide-overs.
  * Interaction: Hover animations on feature cards (lift/glow effects).
  * Specifics: Hero background with continuous CSS pan-and-zoom (Ken Burns effect), interactive Before/After image slider.
* **UI Principles:** Mobile-first responsiveness, generous whitespace, rounded corners (`rounded-lg`, `rounded-xl`), no heavy drop shadows. Clean modern typography.

## 4. Key Sections & Architecture
1. **Global Header:** Clean navigation. Must include a sticky, highly visible phone number.
2. **Hero Section:** Drone photo background (Ken Burns pan-and-zoom), empathetic headline, dual-path CTA buttons: "Sell Your Land" and "Sell Your Property".
3. **Why Choose Us:** Animated feature cards: "No realtor commissions," "We buy in 'As-Is' condition," and "Fast cash closings."
4. **Before & After:** Interactive, scroll-triggered image slider showcasing local renovations.
5. **Our Roots:** Brief, warm section with a family photo and community-focused mission statement.
6. **Conversion Flow:** Simple "Get a Cash Offer" forms (address + basic info). Integrated with existing FormSpree endpoint. Redirects to "Next Steps" page promising a 24-hr contact SLA.
7. **SEO Blog:** Architecture to capture local organic traffic specifically for Oklahoma locations: Chickasha, Tuttle, Amber, Pocasset, Newcastle, Mustang, and Minco.

## 5. Coding Conventions & Directives (SINGLE SOURCE OF TRUTH)
Follow these rules over any default training instincts:
* **Mobile-First Default:** Always code CSS/Layouts assuming mobile-first responsiveness (use `flex-col` by default, then `md:flex-row`).
* **Modern Cleanliness:** Avoid outdated design patterns. Prefer flat, subtle designs with generous whitespace and rounded corners.
* **Tailwind Preference:** Use utility classes over custom CSS files for efficiency, unless explicitly forbidden.
* **Visual Feedback:** Interactive elements must always have hover/active states to feel "alive".
* **No "Yapping":** Do not summarize the code you are about to write. Just write it.
* **Don't Be Lazy:** Never leave "TODO" comments for logic that is trivial or previously implemented. Write the full implementation.
* **Terminal & Claude Code Coexistence:** If generation occurs via Claude Code in the terminal, do not duplicate the work. Ensure CLI commands align with standard Next.js npm workflows.
* **Chain of Thought:** For complex logic errors, briefly list your 3 hypotheses before writing the fix.
