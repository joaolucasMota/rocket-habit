interface ProgerssBarProps{
    progress: number
}

export function ProgressBar( props: ProgerssBarProps){
    return(
            <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
                <div
                role='progressbar'
                aria-label="progresso de habitos completados nesse dia"
                aria-valuenow={props.progress}
                className='h-3 rounded-xl bg-violet-600 w-3/4'
                style={{width: `${props.progress}%` }}
                ></div>
            </div>        
)
}