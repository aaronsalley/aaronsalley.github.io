import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

import placeholder from '@/assets/images/aaron-salley-office-poster.jpg';
import diversity from '@/assets/images/Firefly_Diverse people working on product strategy and research to create clear, intentional  388919.jpg';
import roadmap from "@/assets/images/Firefly_Black person's hand working with a product roadmap. 864901.jpg";
import wireframes from '@/assets/images/Firefly_Black person developing a website using VS Code from a Figma mockup. 388919.jpg';
import flow from '@/assets/images/kelly-sikkema-wdnpaTNwOEQ-unsplash.jpg';
import plants from '@/assets/images/malte-michels-s4wGZw3UuLk-unsplash.jpg';

export const metadata: Metadata = {
  title: 'Digital Product Services | Aaron Salley',
  description: `Partner with Aaron Salley for intentional digital product services. From strategic clarity and integrated design to holistic lifecycle management and compelling content, we transform your vision into exceptional digital experiences for sustained growth.`,
};

export default function Services() {
  return (
    <>
      <section className='will-stick flex flex-col justify-center items-center min-h-screen bg-[url("../assets/images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg")] bg-cover bg-center text-salley-white'>
        <h1 className='text-[11vi]/[11vi] lg:text-8xl uppercase text-center'>
          <pre className='font-[Oswald] font-semibold'>Digital Product</pre>{' '}
          Services
        </h1>
        <p
          className={[
            'max-w-2xs mt-5 mb-8 font-sans text-center',
            'md:max-w-md',
          ].join(' ')}
        >
          Illuminate your potential with our expert consulting services. We
          specialize in design, development, launch, and lifecycle management of
          intentional digital products. Drive growth and optimize performance
          with our integrated approach.
        </p>
      </section>
      <ValueProposition />
      <Offerings />
      <SocialProof />
      <Process />
      <FAQs />
      <CTA />
    </>
  );
}

const valueProps = [
  {
    title: 'Strategic Clarity & Intentionality',
    description:
      "Unlike studios that focus solely on execution, we begin with your 'why.' We don't just build; we strategically partner with you to define, refine, and intentionally craft every aspect of your digital product. This deep dive into your vision and market ensures that your product isn't just functional, but purpose-driven, poised for growth, and truly resonant with your audience from day one.",
    images: [roadmap, flow],
  },
  {
    title: 'Your Team, Elevated',
    description:
      'We bridge the gap between concept and delivery with an integrated approach that’s truly collaborative. We’re not just a vendor; we seamlessly become an extension of your team, working hand-in-hand to bring high-end design and robust engineering to life. This ensures not only flawless execution but also a process that’s transparent, efficient, and tailored to your unique needs, whether you need outsourced leadership or staff augmentation.',
    images: [wireframes],
  },
  {
    title: 'Holistic Lifecycle Partnership',
    description:
      "Many providers consider launch the finish line. For us, it's just the beginning. We partner with you through the entire product lifecycle, from initial strategy and development to sustained growth and optimization. Our commitment extends beyond the build, offering comprehensive support to ensure your digital product continues to adapt, innovate, and deliver lasting value in an ever-evolving market.",
    images: [placeholder],
  },
];
function ValueProposition() {
  const style = {
    listItems: [
      {
        container: 'md:flex-row-reverse',
        text: ['text-start', 'md:text-end'].join(' '),
        image: [
          'aspect-[3/2] md:h-full md:object-cover',
          'aspect-[3/2] absolute bottom-0 right-0 translate-y-1/2 max-w-1/3 md:max-w-2/3 md:translate-x-1/4',
        ],
      },
      {
        container: '',
        text: ['text-end', 'md:text-start'].join(' '),
        image: ['ml-auto md:h-full md:object-cover'],
      },
      {
        container: 'md:flex-row-reverse',
        text: ['text-end', ''].join(' '),
        image: ['mx-auto md:h-full md:object-cover'],
      },
    ],
  };

  return (
    <section
      className={[
        'mx-3 my-20 gap-10',
        'md:grid md:grid-cols-2 md:grid-rows-auto',
      ].join(' ')}
    >
      <h2
        className={[
          'font-[Oswald] text-4xl font-medium uppercase',
          'md:order-2 md:max-w-md',
        ].join(' ')}
      >
        Digital experiences so good they can&apos;t ignore you.
      </h2>
      <Image
        src={diversity}
        alt='Description of the image'
        width={500}
        height={300}
        className={[
          'm-auto w-full max-w-md my-10',
          'md:order-1 md:row-span-2 md:h-full md:object-cover md:mr-0 md:mt-0',
        ].join(' ')}
      />
      <p className={['font-sans mb-10', 'md:order-3 md:max-w-md'].join(' ')}>
        In today&apos;s dynamic digital landscape, bringing a product to life –
        or elevating an existing one – demands more than just execution. It
        requires a partner who understands your strategic intent, integrates
        seamlessly into your world, and illuminates the path to lasting success.
        While many offer digital product services, our approach is fundamentally
        different. That’s why we don&apos;t just build products; we forge
        partnerships that transform your ideas into exceptional digital
        experiences that truly resonate.
      </p>
      <ol
        className={[
          'flex flex-col clear-both',
          'md:gap-20 md:order-last md:col-span-full',
        ].join(' ')}
      >
        {valueProps.map(({ title, description, images }, index) => (
          <li
            key={index}
            className={[
              'flex flex-col my-4 gap-10',
              'md:flex-row md:gap-20 md:m-auto',
              style.listItems[index].container,
            ].join(' ')}
          >
            <div className='relative max-w-md'>
              {images.map((image, imgIndex) => (
                <Image
                  src={image}
                  key={imgIndex}
                  alt={`${title} image ${imgIndex + 1}`}
                  width={300}
                  height={200}
                  className={style.listItems[index].image[imgIndex]}
                />
              ))}
            </div>
            <div className='flex flex-col gap-3 max-w-md'>
              <span
                className={['text-6xl', style.listItems[index]?.text].join(' ')}
              >
                {'0' + (index + 1)}
              </span>
              <h3
                className={[
                  'font-[Oswald] text-2xl font-semibold uppercase',
                  style.listItems[index]?.text,
                ].join(' ')}
              >
                {title}
              </h3>
              <p
                className={['font-sans', style.listItems[index]?.text].join(
                  ' '
                )}
              >
                {description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

const offerings = [
  {
    title: 'Strategy Services',
    description: [
      'Intentional Product Strategy: From Mind to Market™ with Purpose',
      `Every great product begins with a clear "why." We dive deep into your vision, market, and audience to craft an intentional strategy that illuminates your potential and ensures every feature, every design choice, and every line of code serves a purpose. Whether you're a startup defining your first product or an enterprise refining a portfolio, we provide the strategic foresight to navigate complexities and achieve your business goals.`,
    ],
  },
  {
    title: 'Development Services',
    description: [
      'Integrated Design & Engineering: Flawless Execution, Seamless Collaboration',
      'A brilliant strategy deserves nothing less than flawless execution. Our integrated approach bridges the gap between concept and reality, bringing together high-end design and robust engineering. We work hand-in-hand with you, ensuring a collaborative process that delivers digital products that are not only functional and intuitive but also visually captivating and built to scale.',
    ],
  },
  {
    title: 'Content Services',
    description: [
      'Impactful Content Services: Engaging Narratives, Compelling Communication',
      `Beyond the structure and design, the heart of a compelling digital experience lies in its content. Our content services focus on crafting engaging narratives and impactful communication that resonates with your audience and drives desired actions. From website copy that converts to strategic messaging that builds brand loyalty, we ensure your story is told effectively across all digital touchpoints.`,
    ],
  },
  {
    title: 'Launch Services',
    description: [
      'Illuminated Growth & Lifecycle Management: Sustained Success Beyond Launch',
      `Launch is just the beginning of your product's journey. We partner with you through every phase of the lifecycle, offering comprehensive launch and growth services designed for sustained success. From optimizing performance to adapting to market shifts, we help you maintain momentum and continue to deliver lasting value, ensuring your digital experience consistently shines.`,
    ],
  },
];
function Offerings() {
  const style = [
    {
      bg: 'bg-salley-accent rounded-tr-2xl',
      tab: 'left-0',
      text: 'salley-black',
    },
    {
      bg: 'bg-salley-white rounded-t-2xl',
      tab: 'left-1/4',
      text: 'salley-black',
    },
    {
      bg: 'bg-green-950 rounded-t-2xl',
      tab: 'left-2/4',
      text: 'salley-white',
    },
    {
      bg: 'bg-slate-400 rounded-tl-2xl',
      tab: 'left-3/4',
      text: 'salley-white',
    },
  ];

  return (
    <main className='relative'>
      <Image
        src={plants}
        alt=''
        className='sticky top-0 w-screen h-screen object-cover'
      />
      <ol
        className={[
          'flex flex-col items-center justify-center gap-[50vb] p-3 pb-[25vb] max-h-1/2',
        ].join(' ')}
      >
        {offerings.map(({ title, description }, index) => (
          <li
            key={index}
            className={[
              `sticky top-1/2 -translate-y-1/2 px-12 pb-12 pt-6 ${style[index]?.bg} text-${style[index]?.text} rounded-b-2xl`,
              'flex flex-col justify-start items-start h-[70vb]',
              'md:flex-row md:flex-wrap md:max-w-3xl md:h-[50vb] md:content-start',
            ].join(' ')}
          >
            <span
              className={`absolute top-0 ${style[index]?.tab} w-1/4 -translate-y-1/1 rounded-t-2xl ${style[index]?.bg} px-6 pt-3 font-[Oswald] font-medium uppercase`}
            >
              {'0' + (index + 1)}
            </span>
            <h2
              className={[
                `font-[Oswald] text-2xl font-medium uppercase my-4 pb-4 border-b-1 border-${style[index]?.text}`,
                'w-full',
              ].join(' ')}
            >
              {title}
            </h2>
            {description.map((desc, i) => (
              <p
                key={i}
                className={[
                  'my-2 last-of-type:font-sans',
                  'md:first-of-type:w-1/3 md:last-of-type:w-2/3',
                ].join(' ')}
              >
                {desc}
              </p>
            ))}
            <span className='grow-1' />
            <Link href='/contact' className='btn'>
              Contact Us
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}

function SocialProof() {
  return <></>;
}

function Process() {
  return <></>;
}

function FAQs() {
  return <></>;
}

function CTA() {
  return (
    <div
      className={[
        'flex flex-col items-center gap-4 p-20 text-salley-white',
        'bg-[url("../assets/images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg")] bg-salley-black/70 bg-cover bg-blend-darken bg-center',
      ].join(' ')}
    >
      <p className='font-[Oswald] uppercase max-w-sm text-5xl font-semibold text-center'>
        Shall we begin?
      </p>
      <p className='text-center font-sans max-w-sm'>
        Contact us today to learn more about our product development services
        and how we can help you achieve your goals.
      </p>
      <Link href='/contact' className='btn filled'>
        Get Started
      </Link>
    </div>
  );
}
