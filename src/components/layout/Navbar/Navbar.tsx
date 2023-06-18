import { component$ } from '@builder.io/qwik'
import { SiGithub } from '@qwikest/icons/simpleicons'
import s from './Navbar.module.css'

export default component$(() => {
    return (
        <>
            <div class='navbar'>
                <div class='navbar-start max-md:hidden'>
                    <a class='navbar-item font-semibold'>Frank Alvarez</a>
                </div>
                <div class='navbar-center font-semibold'>
                    <a class='navbar-item' href='#proyectos'>
                        PROYECTOS
                    </a>
                    <a class='navbar-item' href='#sobre-mi'>
                        SOBRE MI
                    </a>
                    <a class='navbar-item' href='https://dev.to/frankalvarez'>
                        BLOG
                    </a>
                </div>
                <div class='navbar-end max-md:hidden'>
                    <a
                        class='navbar-item'
                        href='https://github.com/frankalvarezdev'
                    >
                        <SiGithub />
                    </a>
                </div>
            </div>
            <div class={s.line}></div>
        </>
    )
})
