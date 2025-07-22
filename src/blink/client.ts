import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: 'ksb-executive-portal-auth-web-app-50n6rjtu',
  authRequired: true
})

export default blink