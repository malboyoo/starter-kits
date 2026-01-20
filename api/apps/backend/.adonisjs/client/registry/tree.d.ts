/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  newAccount: {
    store: typeof routes['new_account.store']
  }
  session: {
    store: typeof routes['session.store']
    destroy: typeof routes['session.destroy']
  }
}
