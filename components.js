export const createValuePropCard = (title, description, icon) => {
    return `
        <div class="glass-card p-10 rounded-[2.5rem] border-white/10 group hover:border-white/30 transition-all duration-500">
            <div class="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform">
                <i data-lucide="${icon}" class="w-7 h-7 text-white"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4 tracking-tight">${title}</h3>
            <p class="text-gray-400 leading-relaxed text-sm">${description}</p>
        </div>
    `;
};

export const createBlueprintModule = (bp) => {
    return `
        <div class="blueprint-module grid lg:grid-cols-2 gap-16 items-center">
            <div class="order-2 lg:order-1">
                <div class="flex items-center gap-6 mb-8">
                    <span class="text-6xl font-black text-white/5">${String(bp.number).padStart(2, '0')}</span>
                    <div>
                        <h3 class="text-3xl font-bold tracking-tight">${bp.name}</h3>
                        <p class="text-white/40 text-xs font-black uppercase tracking-widest">${bp.tagline}</p>
                    </div>
                </div>
                <p class="text-gray-400 text-lg mb-10 leading-relaxed">${bp.description}</p>
                <div class="grid grid-cols-2 gap-4 mb-10">
                    <div class="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                        <div class="text-[10px] text-gray-500 uppercase font-black mb-2 tracking-widest">Efficiency</div>
                        <div class="text-xl font-bold text-white">${bp.comparison.blueprint_hours} Blueprint Hrs</div>
                    </div>
                    <div class="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                        <div class="text-[10px] text-gray-500 uppercase font-black mb-2 tracking-widest">DIY Burden</div>
                        <div class="text-xl font-bold text-gray-500">${bp.comparison.manual_hours} Manual Hrs</div>
                    </div>
                </div>
                <ul class="space-y-4 mb-10">
                    ${bp.deliverables.map(d => `
                        <li class="flex items-center gap-3 text-sm text-gray-300">
                            <i data-lucide="shield-check" class="w-4 h-4 text-white/60"></i>
                            ${d}
                        </li>
                    `).join('')}
                </ul>
                <button class="btn-secondary px-8 py-4 text-sm" onclick="window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})">
                    Book Implementation Call
                </button>
            </div>
            <div class="order-1 lg:order-2">
                <div class="glass-card p-12 rounded-[3.5rem] relative overflow-hidden group">
                    <div class="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="relative z-10 flex flex-col items-center text-center">
                        <div class="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-8 border border-white/10">
                            <i data-lucide="layers" class="w-10 h-10 text-white/80"></i>
                        </div>
                        <h4 class="text-xl font-bold mb-4">Architecture Logic</h4>
                        <div class="w-full space-y-3">
                            <div class="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <div class="h-full bg-white/40 w-3/4"></div>
                            </div>
                            <div class="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <div class="h-full bg-white/40 w-1/2"></div>
                            </div>
                            <div class="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <div class="h-full bg-white/40 w-5/6"></div>
                            </div>
                        </div>
                        <p class="mt-8 text-xs text-gray-500 uppercase tracking-widest font-black">Blueprint ${bp.number} Active</p>
                    </div>
                </div>
            </div>
        </div>
    `;
};

export const createPricingCard = (pkg) => {
    const isPopular = pkg.popular;
    return `
        <div class="glass-card p-10 rounded-[3rem] flex flex-col h-full ${isPopular ? 'border-white/30 scale-105 z-10' : 'border-white/10'}">
            ${isPopular ? '<div class="bg-white text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase self-start mb-8 tracking-widest">Most Requested</div>' : ''}
            <h3 class="text-2xl font-bold mb-2 tracking-tight">${pkg.name}</h3>
            <p class="text-xs text-white/40 font-black uppercase tracking-wider mb-8">${pkg.tagline}</p>
            <p class="text-gray-400 text-sm mb-10">${pkg.description}</p>
            <ul class="space-y-4 mb-12 flex-grow">
                ${pkg.includes.map(inc => `
                    <li class="flex items-start gap-3 text-sm text-gray-300">
                        <i data-lucide="check" class="w-4 h-4 text-white shrink-0 mt-0.5"></i>
                        <span>${inc}</span>
                    </li>
                `).join('')}
            </ul>
            <button class="w-full py-5 rounded-2xl ${isPopular ? 'bg-white text-black' : 'bg-white/5 border border-white/10 hover:bg-white/10'} font-black text-xs uppercase tracking-widest transition-all" onclick="window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})">
                Book Scope Call
            </button>
        </div>
    `;
};

export const createStatItem = (stat) => {
    return `
        <div class="text-center">
            <div class="text-5xl font-black mb-3 tracking-tighter">
                ${stat.prefix || ''}<span class="stat-counter" data-target="${stat.value}">0</span>${stat.suffix || ''}
            </div>
            <div class="text-[9px] uppercase font-black tracking-[0.3em] text-white/40">${stat.metric}</div>
        </div>
    `;
};

export const createLsfFormula = (key, component) => {
    return `
        <div class="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all">
            <div class="flex justify-between items-center mb-6">
                <h4 class="font-bold text-lg tracking-tight">${component.name}</h4>
                <span class="text-[10px] mono bg-white/10 text-white px-2 py-1 rounded border border-white/10 uppercase font-black">${component.spec}</span>
            </div>
            <div class="p-5 rounded-2xl bg-black/40 border border-white/5 mono text-xs leading-relaxed text-gray-400 mb-2">
                ${component.formula}
            </div>
        </div>
    `;
};
