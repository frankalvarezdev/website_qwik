import { component$ } from '@builder.io/qwik'
import s from './Hero.module.css'
import { SiLinkedin, SiGithub } from '@qwikest/icons/simpleicons'
export default component$(() => {
    return (
        <div class='grid md:grid-cols-2 py-10 gap-8'>
            <div class='flex items-center'>
                <div class='text-center w-full md:text-left'>
                    <h1 class='text-4xl md:text-6xl font-bold'>
                        Frank Alvarez
                    </h1>
                    <p class='text-xl'>Desarrollador Fullstack</p>
                    <div class='flex gap-4'>
                        <a
                            class='btn mt-4 inline-flex items-center gap-2'
                            href='https://www.linkedin.com/in/frankalvarezdev/'
                        >
                            <SiLinkedin />
                            Contáctame
                        </a>
                        <a
                            class='btn mt-4 inline-flex items-center gap-2'
                            href='https://github.com/frankalvarezdev'
                        >
                            <SiGithub />
                            Github
                        </a>
                    </div>
                </div>
            </div>

            <div class='flex justify-center md:justify-end'>
                <img
                    src='https://cdn.frankalvarez.dev/profile.jpg'
                    alt='Frank Alvarez'
                    width='300'
                    height='300'
                    class={s.avatar}
                />
            </div>
        </div>
    )
})
