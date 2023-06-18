import { component$ } from '@builder.io/qwik'
import { skills } from './content'

export default component$(() => {
    return (
        <div>
            <div class='mb-4'>
                <h2 class='text-3xl font-bold'>Habilidades</h2>
                <div class='h-1 rounded-full w-12 bg-primary' />
            </div>

            <div class='grid grid-cols-3 md:grid-cols-5 gap-2'>
                {skills.map(({ icon: Icon, name }, i) => (
                    <div
                        key={i}
                        class={[
                            'p-4 rounded-xl',
                            {
                                'bg-gray-3': i % 2 === 0,
                                'col-span-3 md:col-span-1':
                                    i === skills.length - 1,
                            },
                        ]}
                    >
                        <div class='flex justify-center items-center'>
                            <Icon class='text-3xl' />
                        </div>
                        <div class='max-sm:text-xs text-center mt-3'>
                            {name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
})
