import {
  ActionIcon,
  Box,
  Button,
  FocusTrap,
  Stack,
  Text,
  TextInput
} from '@mantine/core'
import { useForm } from 'react-hook-form'
import { QIcon } from '../common/QIcon'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { SignUpRequest } from '@/types/authentication'
import { useAuthentication } from '@/hooks/useAuthentication'
import { AuthResponse } from '@supabase/supabase-js'
import { QToast } from '../common/QToast'

type SignUpType = {
  email: string
  password: string
  confirmation: string
}

export const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  const { signUp } = useAuthentication()

  const formMethods = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmation: ''
    }
  })

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError
  } = formMethods

  const onSubmit = (values: SignUpType) => {
    if (values.confirmation !== values.password) {
      setError('confirmation', {
        message: 'Password confirmation must be match with password'
      })
    } else {
      mutate({
        email: values.email,
        password: values.password
      })
    }
  }

  const { mutate } = useMutation({
    mutationFn: (req: SignUpRequest) => signUp(req),
    onSuccess: (data: AuthResponse) => {
      QToast.success({
        title: 'Sign up successfully!',
        message: 'Please check your email to verify!'
      })

      return data.data
    },
    onError: (error: AuthResponse) => {
      QToast.danger({
        title: 'Sign up failed!',
        message: error.error?.message
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
              Sign Up to <span className="text-blue-500">QuickForm</span>
            </Text>
            <TextInput
              w={350}
              {...register('email', {
                required: { value: true, message: 'Required' },
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
                required: { value: true, message: 'Password is required' },
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters'
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/,
                  message:
                    'Password must contain uppercase, lowercase, number, and special character'
                }
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
            <TextInput
              w={350}
              {...register('confirmation', {
                required: { value: true, message: 'Password is required' },
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters'
                }
              })}
              error={errors.password?.message}
              placeholder="Confirm your password..."
              leftSection={<QIcon name="Lock" />}
              label="Password confirmation"
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
              Sign up
            </Button>
          </Stack>
        </FocusTrap>
      </form>
    </Box>
  )
}
