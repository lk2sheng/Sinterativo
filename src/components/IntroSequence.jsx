import { useEffect, useRef } from 'react';

function IntroSequence({ images }) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const captionFrameRef = useRef(null);
  const captionFileRef = useRef(null);
  const progressBarRef = useRef(null);
  const loadedImagesRef = useRef([]);
  const targetProgressRef = useRef(0);
  const smoothProgressRef = useRef(0);
  const renderedFrameRef = useRef(-1);
  const animationRef = useRef(null);

    const handleScrollClick = () => {
      const target = document.querySelector('.content-start');
      if (!target) return;

      // Use native smooth scrolling so the scroll starts immediately
      // and behaves like clicking an anchor link (no initial delay).
      try {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } catch (e) {
        // Fallback for older browsers: instant jump
        window.scrollTo(0, target.getBoundingClientRect().top + window.scrollY);
      }
    };

  useEffect(() => {
    const imageElement = imageRef.current;
    if (!imageElement || images.length === 0) return undefined;

    let cancelled = false;
    loadedImagesRef.current = images.map((image) => {
      const frame = new Image();
      frame.src = image.src;
      frame.decoding = 'async';
      frame.onload = () => {
        renderedFrameRef.current = -1;
      };
      return frame;
    });

    const updateTargetProgress = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(1, rect.height - window.innerHeight);
      targetProgressRef.current = Math.min(1, Math.max(0, -rect.top / scrollable));
    };

    const animate = () => {
      if (cancelled) return;

      const target = targetProgressRef.current;
      const current = smoothProgressRef.current;
      const next = current + (target - current) * 0.12;
      const settled = Math.abs(target - next) < 0.0008;
      smoothProgressRef.current = settled ? target : next;

      const progress = smoothProgressRef.current;
      const frameIndex = Math.min(
        images.length - 1,
        Math.max(0, Math.round(progress * (images.length - 1))),
      );

      sectionRef.current?.style.setProperty('--scroll-progress', progress);
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${progress})`;
      }

      if (frameIndex !== renderedFrameRef.current) {
        imageElement.src = images[frameIndex]?.src ?? images[0].src;
        imageElement.alt = images[frameIndex]?.label ?? 'Frame';
        renderedFrameRef.current = frameIndex;

        if (captionFrameRef.current) {
          captionFrameRef.current.textContent = String(frameIndex + 1).padStart(2, '0');
        }
        if (captionFileRef.current) {
          captionFileRef.current.textContent = images[frameIndex]?.file ?? '';
        }
      }

      animationRef.current = window.requestAnimationFrame(animate);
    };

    imageElement.src = images[0].src;
    imageElement.alt = images[0].label;
    updateTargetProgress();
    animate();

    window.addEventListener('scroll', updateTargetProgress, { passive: true });

    return () => {
      cancelled = true;
      window.removeEventListener('scroll', updateTargetProgress);
      if (animationRef.current) window.cancelAnimationFrame(animationRef.current);
    };
  }, [images]);

  return (
    <section
      className="intro-sequence"
      id="top"
      ref={sectionRef}
      style={{ '--scroll-progress': 0 }}
    >
      <div className="intro-sticky">
        <div className="intro-blackout" aria-hidden="true" />
        <div className="intro-grain" aria-hidden="true" />

        <div className="intro-image" aria-label="Sequencia visual controlada pelo scroll">
          <img ref={imageRef} src={images[0]?.src} alt={images[0]?.label ?? 'Frame'} />
        </div>

        <div className="intro-title">
          <p className="eyebrow">Sistema interativo</p>
          <h1>XEQUE-MATE</h1>
        </div>

        {/* <div className="intro-caption" aria-hidden="true">
          <span ref={captionFrameRef}>01</span>
          <span ref={captionFileRef}>{images[0]?.file}</span>
          <span>{String(images.length).padStart(2, '0')}</span>
        </div> */}

        <div className="intro-progress" aria-hidden="true">
          <span ref={progressBarRef} />
        </div>

        <button
          type="button"
          className="intro-scroll-hint"
          onClick={handleScrollClick}
          aria-label="Explorar - rolar para o conteudo"
        >
          <span className="intro-scroll-hint__arrow">↓</span>
          <span className="intro-scroll-hint__text">Explorar</span>
        </button>
      </div>
    </section>
  );
}

export default IntroSequence;
