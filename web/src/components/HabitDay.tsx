import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';
import { ProgressBar } from './ProgressBar';

//interface HabitDayProps {
//    completed: number
//}

interface HabitDayProps{
    completed: number
    amount: number
}

export function HabitDay({completed, amount}: HabitDayProps){

    const completedPorcentage = Math.round(completed / amount) * 100

    return(
        <Popover.Root>
            <Popover.Trigger className={clsx("w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg", {
                'bg-zinc-900 border-zinc-800': completedPorcentage === 0,
                'bg-violet-900 border-violet-700': completedPorcentage >= 0 && completedPorcentage < 20,
                'bg-violet-800 border-violet-600': completedPorcentage >= 20 && completedPorcentage < 40,
                'bg-violet-700 border-violet-500': completedPorcentage >= 40 && completedPorcentage < 60,
                'bg-violet-600 border-violet-500': completedPorcentage >= 60 && completedPorcentage < 80,
                'bg-violet-500 border-violet-400': completedPorcentage >= 80,

            })}/>

            <Popover.Portal>
                <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
                    <span className="font-semibold text-zinc-400">segunda-feira</span>
                    <span className="mt-1 font-extrabold leading-tight text-3xl">17/01</span>
                    
                    <ProgressBar progress={completedPorcentage}/>

                    <Popover.Arrow className="fill-zinc-900" height={8} width={16}/>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}