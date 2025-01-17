import { useFormState } from "react-dom"

import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import Input from "@modules/common/components/input"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import { login } from "@lib/data/customer"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(login, null)

  return (
    <div className="max-w-sm w-full flex flex-col items-center" data-testid="login-page">
      <h1 className="text-large-semi uppercase mb-6">Bon retour</h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-8">
      Connectez-vous pour accéder à une expérience d&apos;achat personnalisée.
      </p>
      <form className="w-full" action={formAction}>
      <div className="flex flex-col w-full gap-y-4">
          <Input
  
            name="email"
            type="email"
            title="Entrez une adresse email valide."
            autoComplete="email"
            required
            data-testid="email-input"
            className="p-3 border border-[#f5d6c3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b1b00] bg-white text-[#3b1b00]" 
            label="Email"         />
          <Input

            name="password"
            type="password"
            autoComplete="current-password"
            required
            data-testid="password-input"
            className="p-3 border border-[#f5d6c3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b1b00] bg-white text-[#3b1b00]" 
            label="Mot de passe"        />
        </div>
        <ErrorMessage error={message} data-testid="login-error-message" />
        <SubmitButton data-testid="sign-in-button" className="w-full mt-6 bg-[#3b1b00] text-white py-3 rounded-full hover:bg-[#f5d6c3] hover:text-[#3b1b00] transition">Se connecter</SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        Pas encore membre?{" "}
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
           className="underline hover:text-[#3b1b00] transition"
          data-testid="register-button"
        >
          Rejoins nous
        </button>
        .
      </span>
    </div>
  )
}

export default Login
