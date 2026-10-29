import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './horizontalScroll.css'

gsap.registerPlugin(ScrollTrigger)

// Scroll-driven pinning only on wide screens with a mouse; touch devices get a snap carousel.
const DESKTOP_QUERY = '(min-width: 768px) and (hover: hover) and (pointer: fine)'

function waitForImages(images) {
    return Promise.all(
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
}

function createPinnedScroll(demoImagesContainer, demoImages, images) {
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
        start: 'center center',
        end: () => `+=${Math.abs(getScrollAmount())}`,
        pin: true,
        animation: tween,
        scrub: 2,
        invalidateOnRefresh: true,
        markers: false,
    })

    return () => {
        trigger.kill(true)
        tween.kill()
        gsap.set(demoImages, { clearProps: 'transform' })
    }
}

function createCarousel(demoImagesContainer, images) {
    const dotsContainer = document.createElement('div')
    dotsContainer.className = 'demo-carousel-dots'

    const getImageLeft = (image) => image.getBoundingClientRect().left
        - demoImagesContainer.getBoundingClientRect().left
        + demoImagesContainer.scrollLeft

    const dots = images.map((image, index) => {
        const dot = document.createElement('button')
        dot.type = 'button'
        dot.setAttribute('aria-label', `Ir a la imagen ${index + 1}`)
        dot.addEventListener('click', () => {
            demoImagesContainer.scrollTo({ left: getImageLeft(image), behavior: 'smooth' })
        })
        dotsContainer.appendChild(dot)
        return dot
    })

    const updateActiveDot = () => {
        const activeIndex = Math.round(demoImagesContainer.scrollLeft / (demoImagesContainer.clientWidth || 1))
        const clampedIndex = Math.min(Math.max(activeIndex, 0), images.length - 1)

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === clampedIndex)
        })
    }

    demoImagesContainer.classList.add('is-carousel')
    demoImagesContainer.after(dotsContainer)
    demoImagesContainer.addEventListener('scroll', updateActiveDot, { passive: true })
    window.addEventListener('resize', updateActiveDot)
    updateActiveDot()

    return () => {
        demoImagesContainer.removeEventListener('scroll', updateActiveDot)
        window.removeEventListener('resize', updateActiveDot)
        demoImagesContainer.classList.remove('is-carousel')
        demoImagesContainer.scrollLeft = 0
        dotsContainer.remove()
    }
}

export async function createHorizontalScroll(container) {
    const demoImagesContainer = container.querySelector('.demo-images-container');
    const demoImages = container.querySelector('.demo-images');
    const images = [...container.querySelectorAll('.demo-images img')];

    if (!demoImages || !demoImagesContainer || !images.length) {
        return
    }

    await waitForImages(images)

    await new Promise((resolve) => {
        requestAnimationFrame(resolve)
    })

    // The component may have been unmounted while the images were loading.
    if (!demoImagesContainer.isConnected) {
        return
    }

    const mediaQuery = window.matchMedia(DESKTOP_QUERY)
    let destroyMode = null
    let killed = false

    const setupMode = () => {
        destroyMode?.()
        destroyMode = mediaQuery.matches
            ? createPinnedScroll(demoImagesContainer, demoImages, images)
            : createCarousel(demoImagesContainer, images)
    }

    const handleModeChange = () => {
        setupMode()
        ScrollTrigger.refresh()
    }

    setupMode()
    mediaQuery.addEventListener('change', handleModeChange)

    return {
        kill() {
            if (killed) {
                return
            }

            killed = true
            mediaQuery.removeEventListener('change', handleModeChange)
            destroyMode?.()
            destroyMode = null
        },
    }
}