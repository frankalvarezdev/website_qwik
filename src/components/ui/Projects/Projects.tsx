import { component$ } from '@builder.io/qwik'
import { projects } from './content'

export default component$(() => {
    return (
        <div>
            <div class='mb-2'>
                <h2 class='text-3xl font-bold'>Proyectos</h2>
                <div class='h-1 rounded-full w-12 bg-primary' />
            </div>
            <p class='mb-4'>
                Estos son algunos de los proyectos en los que colaboré o trabajé
                en solitario.
            </p>

            <div class='grid md:grid-cols-2 gap-10'>
                {projects.map((project, i) => (
                    <div key={i} class='bg-gray-3 rounded-xl'>
                        <div>
                            <img
                                src={project.image}
                                alt={project.name}
                                class='w-full rounded-t-xl'
                                width='300'
                                height='300'
                            />
                        </div>
                        <div class='p-4'>
                            <h2 class='text-xl font-semibold'>
                                {project.name}
                            </h2>
                            <p class='opacity-60'>{project.description}</p>
                            <a
                                class='btn btn-primary mt-3'
                                href={project.url}
                                target='_blank'
                                rel='noreferrer'
                            >
                                Ver proyecto &nbsp;<span>&rarr;</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
})
