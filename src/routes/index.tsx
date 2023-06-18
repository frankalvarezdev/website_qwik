import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { About } from '~/components/ui/About'
import { Hero } from '~/components/ui/Hero'
import { Projects } from '~/components/ui/Projects'
import { Skills } from '~/components/ui/Skills'

export default component$(() => {
    return (
        <div class='container'>
            <Hero />

            <div class='mb-8'>
                <About />
            </div>

            <div class='my-8'>
                <Skills />
            </div>

            <div class='my-8'>
                <Projects />
            </div>
        </div>
    )
})

export const head: DocumentHead = {
    title: 'Frank Alvarez (Desarrollador Fullstack)',
    meta: [
        {
            name: 'description',
            content: 'Desarrollador web | Arequipa',
        },
    ],
}
