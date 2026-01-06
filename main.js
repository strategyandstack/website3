import { salesArchitectureData as data } from './data.js';
import { 
    createValuePropCard, 
    createBlueprintModule, 
    createPricingCard, 
    createStatItem, 
    createLsfFormula 
} from './components.js';

document.addEventListener('DOMContentLoaded', () => {
    if (!data) return;
    initLayout();
    initAnimations();
    initStatsCounter();
    lucide.createIcons();
});

function initLayout() {

    document.title = data.meta.name + " | " + data.meta.tagline;


    const vpContainer = document.getElementById('value-props');
    if (vpContainer) {
        vpContainer.innerHTML = 
            createValuePropCard('Battle Tested', data.value_proposition.supporting, 'layers') +
            createValuePropCard('Full Ownership', 'We build on your infrastructure. Accounts, data, and content stay with you forever.', 'key') +
            createValuePropCard('The Outcome', data.value_proposition.outcome, 'rocket');
    }


    const gList = document.getElementById('guarantees-list');
    if (gList) {
        data.guarantee.what_we_guarantee.forEach(item => {
            const li = document.createElement('li');
            li.className = 'flex items-start gap-6 text-gray-400 group';
            li.innerHTML = `
                <div class="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-white group-hover:border-white transition-all">
                    <i data-lucide="check" class="w-4 h-4 text-white group-hover:text-black"></i>
                </div>
                <span class="text-xl font-medium leading-tight group-hover:text-white transition-colors">${item}</span>
            `;
            gList.appendChild(li);
        });
    }

    const mList = document.getElementById('market-depends-list');
    if (mList) {
        data.guarantee.what_depends_on_market.forEach(item => {
            const li = document.createElement('li');
            li.className = 'flex items-start gap-5 text-gray-500 font-bold text-sm uppercase tracking-wide';
            li.innerHTML = `<i data-lucide="minus" class="w-5 h-5 text-white/20 shrink-0"></i> <span>${item}</span>`;
            mList.appendChild(li);
        });
    }


    const statsGrid = document.getElementById('stats-grid');
    if (statsGrid) {
        data.social_proof.stats.forEach(stat => {
            statsGrid.innerHTML += createStatItem(stat);
        });
    }


    const blueprintContainer = document.getElementById('blueprints-container');
    if (blueprintContainer) {
        data.blueprints.forEach(bp => {
            blueprintContainer.innerHTML += createBlueprintModule(bp);
        });
    }


    if (data.linkedin_success_formula) {
        document.getElementById('lsf-description').textContent = data.linkedin_success_formula.description;
        const lsfGrid = document.getElementById('lsf-components');
        Object.keys(data.linkedin_success_formula.key_components).forEach(key => {
            lsfGrid.innerHTML += createLsfFormula(key, data.linkedin_success_formula.key_components[key]);
        });

        const validationList = document.getElementById('validation-checks');
        data.linkedin_success_formula.validation.checks.forEach(check => {
            validationList.innerHTML += `
                <div class="flex items-center gap-5 text-[10px] mono text-white/40 group hover:text-white cursor-default py-1.5 transition-colors">
                    <i data-lucide="code-2" class="w-4 h-4 text-white/10 group-hover:text-white transition-colors"></i>
                    <span class="tracking-[0.2em] font-black uppercase">EXEC::${check.toUpperCase().replace(/ /g, '_')} -> PASSED</span>
                </div>
            `;
        });
    }


    const pricingGrid = document.getElementById('pricing-grid');
    if (pricingGrid) {
        data.packages.forEach(pkg => {
            pricingGrid.innerHTML += createPricingCard(pkg);
        });
    }


    const roadmapContainer = document.getElementById('next-steps-container');
    if (roadmapContainer) {
        data.next_steps.forEach((step, idx) => {
            roadmapContainer.innerHTML += `
                <div class="flex md:items-center gap-12 group relative">
                    <div class="flex-shrink-0 w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center font-black text-white text-2xl z-10 group-hover:bg-white group-hover:text-black transition-all duration-700">
                        ${idx + 1}
                    </div>
                    <div class="flex-grow glass-card p-10 md:p-14 rounded-[3.5rem] border-white/5 group-hover:border-white/20 transition-all duration-700">
                        <p class="text-2xl font-black tracking-tight uppercase">${step}</p>
                    </div>
                </div>
            `;
        });
    }


    const faqContainer = document.getElementById('faq-container');
    if (faqContainer) {
        data.faq.forEach(item => {
            faqContainer.innerHTML += `
                <details class="faq-item glass-card rounded-[2.5rem] overflow-hidden border border-white/5">
                    <summary class="p-10 cursor-pointer font-black text-xs uppercase tracking-[0.3em] list-none flex justify-between items-center group transition-colors hover:text-white text-white/50">
                        <span>${item.question}</span>
                        <i data-lucide="chevron-down" class="w-5 h-5 transition-transform duration-500 group-open:rotate-180 text-white"></i>
                    </summary>
                    <div class="px-10 pb-10 text-gray-500 leading-relaxed text-lg font-medium border-t border-white/5 pt-10">
                        ${item.answer}
                    </div>
                </details>
            `;
        });
    }


    const primaryTitle = document.getElementById('cta-primary-title');
    if(primaryTitle) {
        primaryTitle.textContent = data.cta_sections.primary.headline;
        document.getElementById('cta-primary-sub').textContent = data.cta_sections.primary.subheadline;
        document.getElementById('cta-primary-btn').textContent = data.cta_sections.primary.button_text;
        document.getElementById('cta-primary-secondary').textContent = data.cta_sections.primary.secondary_text;

        document.getElementById('cta-secondary-title').textContent = data.cta_sections.secondary.headline;
        document.getElementById('cta-secondary-sub').textContent = data.cta_sections.secondary.subheadline;
        document.getElementById('cta-secondary-btn').textContent = data.cta_sections.secondary.button_text;

        document.getElementById('footer-tagline').textContent = data.footer.tagline || "";
        document.getElementById('footer-powered').textContent = "Architecture Managed by " + (data.footer.powered_by || "");
    }
}

function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-counter');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                gsap.to(entry.target, {
                    innerText: target,
                    duration: 2.5,
                    snap: { innerText: 1 },
                    ease: 'expo.out'
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
}

function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('#hero-headline', {
        opacity: 0,
        y: 80,
        duration: 2,
        ease: 'expo.out'
    });

    gsap.from('.hero-content p, .hero-content .flex', {
        opacity: 0,
        y: 40,
        duration: 1.8,
        stagger: 0.2,
        delay: 0.5,
        ease: 'power4.out'
    });
}
