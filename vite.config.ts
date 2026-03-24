import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'corex-landing',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main:                     resolve(__dirname, 'corex-landing/index.html'),
        assessment:               resolve(__dirname, 'corex-landing/assessment/index.html'),
        careers:                  resolve(__dirname, 'corex-landing/careers/index.html'),
        contact:                  resolve(__dirname, 'corex-landing/contact/index.html'),
        'how-we-work':            resolve(__dirname, 'corex-landing/how-we-work/index.html'),
        'how-we-work-ai':         resolve(__dirname, 'corex-landing/how-we-work/ai-in-operations/index.html'),
        insights:                 resolve(__dirname, 'corex-landing/insights/index.html'),
        partnerships:             resolve(__dirname, 'corex-landing/partnerships/index.html'),
        privacy:                  resolve(__dirname, 'corex-landing/privacy/index.html'),
        terms:                    resolve(__dirname, 'corex-landing/terms/index.html'),
        'what-we-fix':            resolve(__dirname, 'corex-landing/what-we-fix/index.html'),
        'industries-agencies':    resolve(__dirname, 'corex-landing/industries/agencies/index.html'),
        'industries-construction':resolve(__dirname, 'corex-landing/industries/construction/index.html'),
        'industries-finance':     resolve(__dirname, 'corex-landing/industries/lending-finance/index.html'),
        'industries-professional':resolve(__dirname, 'corex-landing/industries/professional-services/index.html'),
        'industries-property':    resolve(__dirname, 'corex-landing/industries/property/index.html'),
        'industries-recruitment': resolve(__dirname, 'corex-landing/industries/recruitment/index.html'),
      },
    },
  },
})
