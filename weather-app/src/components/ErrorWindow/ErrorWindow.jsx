import errorIcon from '@/assets/icons/icon-error.svg'
import retryIcon from '@/assets/icons/icon-retry.svg'
import Logo from '@/assets/logo/logo.svg'

function ErrorWindow({retry}) {
    return (
        <div className="max-w-full min-h-screen border-box grid justify-center place-content-baseline py-8 bg-Neutral-900 text-Neutral-0">
            <div className="px-5 pb-6">
                <img src={Logo} alt="logo" className="w-50" />
            </div>
            <div className="text-center p-2">
                <img src={errorIcon} alt="error-icon" className="w-10 pb-2 m-auto"/>
                <p className="font-medium text-3xl pb-2">Something went wrong</p>
                <p className="text-md text-Neutral-200 pb-4">We couldn't connect to the server (API error). Please try again in a few moments.</p>
                <button onClick={retry} className="bg-Neutral-800 cursor-pointer py-2 px-3 rounded-md font-medium m-auto flex gap-1"><img src={retryIcon} alt="retry-icon" /> Retry</button>
            </div>
        </div>
    )
}

export default ErrorWindow