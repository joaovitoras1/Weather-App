import iconCheckmark from '@/assets/icons/icon-checkmark.svg'

function UnitOption({text, selected, onClick}) {
    return (
        <button onClick={onClick} aria-pressed={selected} className="flex items-center justify-between gap-2 cursor-pointer rounded-md p-1 hover:bg-Neutral-600 aria-pressed:bg-Neutral-700 focus-visible:outline-1 focus-visible:-outline-offset">{text}{selected && <img src={iconCheckmark} alt="" />}</button>
    )
}

export default UnitOption