import { useLocation } from 'react-router'
import { Breadcrumbs as BC, BreadcrumbItem as BCI } from "@heroui/react";
import { capitalizeFirstLetter, parseSegment } from '../lib/utils';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  if (location.pathname === '/') {
    return null;
  }

  if (pathnames[0] === 'meal') {
    const res = parseSegment(pathnames[1]);
    pathnames[1] = res?.name || pathnames[1];
  }

  return (
    <BC>
      <BCI href="/">Home</BCI>
      {pathnames.map((segment: string, index: number) => {
        const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
        return (
          <BCI key={routeTo} href={routeTo}>{capitalizeFirstLetter(decodeURIComponent(segment))}</BCI>
        )
      })}
    </BC>
  )
}
