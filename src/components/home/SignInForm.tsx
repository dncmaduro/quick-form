import {
  ActionIcon,
  Box,
  Button,
  FocusTrap,
  Stack,
  Text,
  TextInput
} from '@mantine/core'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { QIcon } from '../common/QIcon'
import { useMutation } from '@tanstack/react-query'
import { SignInRequest } from '@/types/authentication'
import { useAuthentication } from '@/hooks/useAuthentication'
import { AuthError } from '@supabase/supabase-js'
import { QToast } from '../common/QToast'

type SignInType = {
  email: string
  password: string
}

export const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  const { signIn } = useAuthentication()

  const formMethods = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const {
    register,
    formState: { errors },
    handleSubmit
  } = formMethods

  const onSubmit = (values: SignInType) => {
    mutate({
      email: values.email,
      password: values.password
    })
  }

  const { mutate } = useMutation({
    mutationFn: (req: SignInRequest) => signIn(req),
    onSuccess: () => {
      QToast.success({
        title: 'Sign in successfully!'
      })
    },
    onError: (error: AuthError) => {
      QToast.danger({
        title: 'Sign up failed!',
        message: error.message
      })
    }
  })

  return (
    <Box
      w={400}
      px={16}
      py={20}
      className="rounded-lg border-[3px] border-blue-300 shadow-md"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FocusTrap active>
          <Stack align="center" gap="lg">
            <Text className="!text-2xl !font-bold">
              Sign In to <span className="text-blue-500">QuickForm</span>
            </Text>
            <TextInput
              w={350}
              {...register('email', {
                required: { value: true, message: 'Email is required' },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address'
                }
              })}
              error={errors.email?.message}
              placeholder="Enter your email..."
              leftSection={<QIcon name="Mail" />}
              label="Email"
              size="md"
              withAsterisk
            />
            <TextInput
              w={350}
              {...register('password', {
                required: { value: true, message: 'Password is required' }
              })}
              error={errors.password?.message}
              placeholder="Enter your password..."
              leftSection={<QIcon name="Lock" />}
              label="Password"
              withAsterisk
              size="md"
              type={showPassword ? 'text' : 'password'}
              rightSection={
                <ActionIcon
                  onClick={() => setShowPassword(!showPassword)}
                  variant="subtle"
                >
                  <QIcon
                    name={showPassword ? 'Eye' : 'EyeClosed'}
                    size="20"
                    color="gray"
                  />
                </ActionIcon>
              }
            />
            <Button size="md" type="submit" radius="sm">
              Sign in
            </Button>
          </Stack>
        </FocusTrap>
      </form>
    </Box>
  )
}
