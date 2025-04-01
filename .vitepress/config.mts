import { defineConfigWithTheme } from 'vitepress'
import type { ThemeConfig } from 'vitepress-carbon'
import baseConfig from 'vitepress-carbon/config'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  title: "OpenTelemetry Certified Associate - Study Guide",
  description: "Notes on the OpenTelemetry Certified Associate (OTCA) exam, including key concepts, best practices, and sample questions to help you prepare for the certification.",
  srcDir: 'src',
  base: '/OTCA-study-guide/',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    search: {
      provider: 'local'
    },
    
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Curriculum', link: '/otca_curriculum' },
          { text: 'Fundamentals of Observability', link: '/fundamentals' },
          { text: 'The OpenTelemetry API and SDK', link: '/otel-api-sdk' },
          { text: 'The OpenTelemtry Collector', link: '/otel-collector' },
          { text: 'Maintaining and Debugging Observability Pipelines', link: '/pipeline' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rDunn28/OTCA-study-guide' }
    ]
  }
})
