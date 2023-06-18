import { component$ } from '@builder.io/qwik'
import { SiGithub, SiYoutube, SiLinkedin } from '@qwikest/icons/simpleicons'

export default component$(() => {
    return (
        <footer class='container my-12'>
            <ul class='flex gap-8 items-center justify-center text-xl'>
                <li>
                    <a href='https://github.com/frankalvarezdev'>
                        <SiGithub />
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/frankalvarezdev/'>
                        <SiLinkedin />
                    </a>
                </li>
                <li>
                    <a href='https://www.youtube.com/@frankalvarez'>
                        <SiYoutube />
                    </a>
                </li>
            </ul>
        </footer>
    )
})
