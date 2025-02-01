import { SignInRequest, SignUpRequest } from '@/types/authentication'
import { supabaseClient } from '@/utils/supabase'

export const useAuthentication = () => {
  const signUp = async (req: SignUpRequest) => {
    const response = await supabaseClient.auth.signUp(req)

    if (response.error) {
      throw response.error
    }

    return response.data
  }

  const signIn = async (req: SignInRequest) => {
    const response = await supabaseClient.auth.signInWithPassword(req)

    if (response.error) {
      throw response.error
    }

    return response.data
  }

  return { signUp, signIn }
}
