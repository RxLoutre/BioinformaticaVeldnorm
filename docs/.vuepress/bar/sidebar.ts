import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarImport: SidebarConfig = {
  '/fieldnorm/': [
    {
      text: 'Fieldnorm',
      children: [
        '/fieldnorm/README.md',
        '/fieldnorm/control_of_documents.md',
        '/fieldnorm/software_life_cycle_processes.md',
        '/fieldnorm/verification_validation.md',
        '/fieldnorm/risk_management.md',
        '/fieldnorm/feedback.md',
        '/fieldnorm/configuration_management.md'
        '/fieldnorm/references.md'
      ],
    },
  ]
}
