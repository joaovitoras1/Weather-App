import errorIcon from '@/assets/icons/icon-error.svg'
import retryIcon from '@/assets/icons/icon-retry.svg'

function ErrorWindow({retry}) {
    return (
        <div>
            <img src={errorIcon} alt="error-icon" />
            <p>Something went wrong</p>
            <p>We couldn't connect to the server (API error). Please try again in a few moments.</p>
            <button onClick={retry}><img src={retryIcon} alt="retry-icon" /> Retry</button>
        </div>
    )
}

export default ErrorWindow