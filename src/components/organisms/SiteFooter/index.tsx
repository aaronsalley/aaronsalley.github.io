import { site } from '@/src/lib/testdata';
import Link from 'next/link';
import styles from './index.module.scss';

interface SocialItem {
  uri: string;
  label: string;
  cssClasses: string[];
}
export interface SiteFooter {
  title: string;
  contact: any;
  social_items: SocialItem[];
}

export default function SiteFooter({
  title,
  contact,
  social_items,
}: SiteFooter) {
  const SocialMenu = ({ items }: { items: SocialItem[] }) => {
    if (!items) return null;

    let list;
    list = items.map(({ uri, label, cssClasses: icon }, i) => {
      return (
        <li key={i}>
          <Link href={uri} target='_blank'>
            <i className={icon.join(' ')}></i>
            <label>{label}</label>
          </Link>
        </li>
      );
    });

    return <nav>{list}</nav>;
  };

  return (
    <footer className={styles['container']}>
      <SocialMenu items={social_items} />
      <p>
        © {new Date().getFullYear()} {title}. Designed and developed by me with
        🖤 in {contact.city}.
      </p>
    </footer>
  );
}
