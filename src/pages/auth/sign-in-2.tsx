import { Card } from '@/components/ui/card'
import { UserAuthForm } from './components/user-auth-form'
import { APP_VERSION } from '@/lib/utils'

export default function SignIn2() {
  return (
    <div className='container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0'>
      <div className='mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8'>
        <div className='mb-4 flex items-center justify-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mr-2 h-6 w-6'
          >
            <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
          </svg>
          <h1 className='text-xl font-medium'>
            {/* Oujda Dashboard in french */}
            Météo Oujda <span className='text-xs'>{APP_VERSION}</span>
          </h1>
        </div>
        <Card className='p-6'>
          <div className='flex flex-col space-y-2 text-left'>
            <h1 className='text-2xl font-semibold tracking-tight'>Connexion</h1>
            <p className='text-sm text-muted-foreground'>
              Entrez votre email et votre mot de passe ci-dessous <br />
              pour vous connecter à votre compte
            </p>
          </div>
          <UserAuthForm />
        </Card>
      </div>
    </div>
  )
}
