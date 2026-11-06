import loadingIcon from '@/assets/icons/icon-loading.svg'

function MainWeatherSkeleton() {
    return (
        <div className="bg-Neutral-800 h-70 rounded-3xl flex flex-col gap-2 items-center justify-center">
            <img src={loadingIcon} alt="" className="size-10" />
            <p className="text-Neutral-0" role="status">Loading...</p>
        </div>
    )
}

export default MainWeatherSkeleton