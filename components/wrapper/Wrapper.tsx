import { WrapperProps } from '@/Types';
import SocialButtons from '@/components/social-buttons/SocialButtons';

export default function Wrapper({
  children,
  className,
}: WrapperProps) {
  return (
    <section className={className}>
      <div
        className="fixed w-[20rem] h-[20rem] 
      xs:w-[28rem] xs:h-[28rem] md:w-[50rem] 
      md:h-[50rem] md:-top-40 -z-10
      bg-Blur rounded-full blur-3xl"
      ></div>
      <>{children}</>
      <SocialButtons className="fixed bottom-12 hidden left-6 md:flex item-center flex-col gap-4 " />
    </section>
  );
}
