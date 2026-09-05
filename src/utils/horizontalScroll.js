import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export async function createHorizontalScroll(container) {
    const demoImagesContainer = container.querySelector('.demo-images-container');
    const demoImages = container.querySelector('.demo-images');
    const images = [...container.querySelectorAll('.demo-images img')];

    if (!demoImages || !demoImagesContainer || !images.length) {
        return
    }

    await Promise.all(
        images.map((image) => {
            if (image.complete) {
                return image.decode?.().catch(() => { })
            }

            return new Promise((resolve) => {
                image.addEventListener('load', resolve, { once: true })
                image.addEventListener('error', resolve, { once: true })
            })
        })
    )

    await new Promise((resolve) => {
        requestAnimationFrame(resolve)
    })

    const getScrollAmount = () => {
        const lastImage = images[images.length - 1]

        const lastImageRect = lastImage.getBoundingClientRect()
        const lastImageCenter = lastImageRect.left + lastImageRect.width / 2
        const viewportCenter = window.innerWidth / 2

        return viewportCenter - lastImageCenter
    }

    const tween = gsap.to(demoImages, {
        x: getScrollAmount,
        duration: 3,
        ease: 'none',
    })

    const trigger = ScrollTrigger.create({
        trigger: demoImagesContainer,
        start: 'top 2%',
        end: () => `+=${Math.abs(getScrollAmount())}`,
        pin: true,
        animation: tween,
        scrub: 2,
        invalidateOnRefresh: true,
        markers: false,
    })

    return {
        tween,
        trigger,
    }
}