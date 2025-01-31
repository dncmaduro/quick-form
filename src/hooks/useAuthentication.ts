import { SignUpRequest } from '@/types/authentication'
import { supabaseClient } from '@/utils/supabase'

export const useAuthentication = () => {
  const signUp = async (req: SignUpRequest) => {
    const response = await supabaseClient.auth.signUp(req)

    return response
  }

  return { signUp }
}
