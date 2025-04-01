import { ArrowRight, MagnifyingGlass } from '@phosphor-icons/react';
import type { HydrogenComponentSchema } from '@weaverse/hydrogen';
import { forwardRef } from 'react';
import Link from '~/components/link';
import type { SectionProps } from '~/components/section';
import { Section } from '~/components/section';

let StyleGuide = forwardRef<HTMLElement & SectionProps>((props, ref) => {
  return (
    <Section ref={ref} {...props}>
      <div className='flex flex-col gap-4 container mx-auto border border-dashed p-4'>
        <h1 className='text-2xl font-bold'>Style Guide</h1>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <div className='space-y-4'>
              <h2 className='text-lg font-bold'>Buttons</h2>
              <div className='grid grid-cols-2 gap-2'>
                <div className='flex gap-2 items-center'>
                  <Link variant='primary' to={'/'}>
                    Primary
                  </Link>
                  <Link variant='secondary' to={'/'}>
                    Secondary
                  </Link>
                  <Link variant='outline' to={'/'}>
                    Outline
                  </Link>
                </div>
                <div className='flex gap-2 items-center'>
                  <button className='items-center justify-center shadow rounded-full size-[46px] inline-flex'>
                    <ArrowRight />
                  </button>
                  <button className='items-center justify-center rounded-full border border-line-subtle size-[46px] inline-flex'>
                    <ArrowRight />
                  </button>
                </div>
              </div>
            </div>
            <div className='space-y-4'>
              <h2 className='text-lg font-bold'>Inputs</h2>
              <div className='w-80'>
                <div className='flex flex-col gap-2 items-center'>
                  <input
                    type='text'
                    className='border-2 p-3 rounded border-line-subtle w-full focus-within:border-line outline-none h-12'
                    placeholder='Please enter your email'
                  />
                  <div className='flex gap-2 items-center w-full border-2 p-3 rounded border-line-subtle focus-within:border-line h-12'>
                    <input
                      type='text'
                      className=' w-full grow focus:outline-none'
                      placeholder='Please enter your email'
                    />
                    <ArrowRight
                      className='w-5 h-5 shrink-0 cursor-pointer'
                      weight='bold'
                    />
                  </div>
                  <div className='flex gap-2 items-center w-full border-2 p-3 rounded border-line-subtle focus-within:border-line h-12'>
                    <input
                      type='text'
                      className=' w-full grow focus:outline-none'
                      placeholder='Please enter your email'
                    />
                    <MagnifyingGlass
                      className='w-5 h-5 shrink-0 cursor-pointer'
                      weight='bold'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </Section>
  );
});

export default StyleGuide;

export let schema: HydrogenComponentSchema = {
  type: 'style-guide',
  title: 'Style Guide',
  inspector: [
    {
      group: 'Style',
      inputs: [],
    },
  ],
};
