import Link from 'next/link';
import { AiFillGithub, AiFillMail } from 'react-icons/ai';

type Props = {
  className?: string
}

export default function SocialButtons({className}: Props) {
  
  const socialClassNames = 'text-3xl cursor-pointer text-White';
  return (
    <div className={className}>
      <Link href="https://github.com/Geradot" target="_blank">
        <AiFillGithub className={socialClassNames} />
      </Link>
      <Link href="mailto:anton.ryzhenko@tuta.io">
        <AiFillMail className={socialClassNames} />
      </Link>
    </div>
  );
}
